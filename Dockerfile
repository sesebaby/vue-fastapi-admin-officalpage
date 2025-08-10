# 使用公开可访问的Node.js基础镜像
FROM node:18.12.0-alpine3.16 AS web-builder

WORKDIR /opt/vue-fastapi-admin/web

# 配置npm使用国内镜像源并设置超时
RUN npm config set registry https://registry.npmmirror.com && \
    npm config set timeout 60000 && \
    npm config set network-timeout 60000

# 复制package文件并安装依赖（利用Docker缓存）
COPY web/package*.json ./
RUN npm install

# 复制源码并构建
COPY web/ ./
RUN npm run build

# 使用公开可访问的Python基础镜像
FROM python:3.11-slim-bullseye

WORKDIR /opt/vue-fastapi-admin

# 系统配置和依赖安装
RUN --mount=type=cache,target=/var/cache/apt,sharing=locked,id=core-apt \
    --mount=type=cache,target=/var/lib/apt,sharing=locked,id=core-apt \
    # 替换为国内apt源
    sed -i "s@http://deb.debian.org@http://mirrors.ustc.edu.cn@g" /etc/apt/sources.list && \
    sed -i "s@http://security.debian.org@http://mirrors.ustc.edu.cn@g" /etc/apt/sources.list && \
    rm -f /etc/apt/apt.conf.d/docker-clean && \
    # 设置时区
    ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && \
    echo "Asia/Shanghai" > /etc/timezone && \
    # 更新并安装系统依赖
    apt-get update && \
    apt-get install -y --no-install-recommends \
        gcc python3-dev bash nginx vim curl procps net-tools && \
    # 清理apt缓存
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# 配置pip使用国内源
RUN pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple && \
    pip config set global.trusted-host pypi.tuna.tsinghua.edu.cn

# 复制并安装Python依赖
COPY requirements.txt ./
RUN --mount=type=cache,target=/root/.cache/pip \
    pip install --no-cache-dir -r requirements.txt

# 复制应用代码（按优先级复制，提高缓存效率）
COPY app/ ./app/
COPY run.py ./
COPY pyproject.toml ./
COPY deploy/ ./deploy/

# 复制前端构建文件
COPY --from=web-builder /opt/vue-fastapi-admin/web/dist ./web/dist

# 配置Nginx
COPY deploy/web.conf /etc/nginx/sites-available/web.conf
RUN rm -f /etc/nginx/sites-enabled/default && \
    ln -s /etc/nginx/sites-available/web.conf /etc/nginx/sites-enabled/ && \
    # 设置entrypoint权限
    chmod +x deploy/entrypoint.sh

# 环境变量
ENV LANG=zh_CN.UTF-8
ENV TZ=Asia/Shanghai

# 健康检查
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost/ || exit 1

# 暴露端口
EXPOSE 80

# 启动脚本
ENTRYPOINT ["sh", "deploy/entrypoint.sh"]
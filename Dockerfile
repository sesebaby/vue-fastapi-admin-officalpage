# 第一阶段：构建前端
FROM node:18-alpine AS web-builder

# 安装pnpm
RUN npm install -g pnpm@8

WORKDIR /app/web
# 只复制package相关文件，利用Docker缓存
COPY web/package.json web/pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --registry=https://registry.npmmirror.com

# 复制源代码并构建
COPY web/ ./
RUN pnpm build

# 第二阶段：Python运行环境
FROM python:3.11-slim-bullseye

WORKDIR /app

# 设置环境变量
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    LANG=zh_CN.UTF-8 \
    TZ=Asia/Shanghai

# 安装系统依赖
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        gcc \
        python3-dev \
        nginx \
        supervisor \
        curl \
        && rm -rf /var/lib/apt/lists/* \
    && ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
    && echo "Asia/Shanghai" > /etc/timezone

# 安装Python依赖
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple

# 复制后端代码
COPY app/ ./app/
COPY run.py .
COPY pyproject.toml .

# 复制前端构建产物
COPY --from=web-builder /app/web/dist /app/web/dist

# 复制配置文件
COPY deploy/nginx.conf /etc/nginx/sites-available/default
COPY deploy/entrypoint.sh /app/entrypoint.sh
COPY deploy/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# 创建日志目录
RUN mkdir -p /var/log/supervisor /app/logs

# 赋予执行权限
RUN chmod +x /app/entrypoint.sh

EXPOSE 80

# 使用entrypoint
ENTRYPOINT ["/app/entrypoint.sh"]
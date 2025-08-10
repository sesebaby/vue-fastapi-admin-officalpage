#!/bin/bash

# 原生部署脚本 - 不使用Docker容器
# 直接在服务器上部署Vue FastAPI Admin

set -e

echo "🚀 Vue FastAPI Admin - 原生部署"
echo "================================"

# 检查系统
if [ ! -f /etc/os-release ]; then
    echo "❌ 无法检测操作系统"
    exit 1
fi

source /etc/os-release
echo "操作系统: $PRETTY_NAME"

# 更新系统包
echo "📦 更新系统包..."
sudo apt update

# 安装Python 3.11
echo "🐍 安装Python 3.11..."
sudo apt install -y software-properties-common
sudo add-apt-repository ppa:deadsnakes/ppa -y
sudo apt update
sudo apt install -y python3.11 python3.11-venv python3.11-dev python3-pip

# 安装Node.js 18
echo "📦 安装Node.js 18..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# 安装Nginx
echo "🌐 安装Nginx..."
sudo apt install -y nginx

# 创建应用目录
APP_DIR="/opt/vue-fastapi-admin"
echo "📁 创建应用目录: $APP_DIR"
sudo mkdir -p $APP_DIR
sudo chown $USER:$USER $APP_DIR

# 复制应用文件
echo "📋 复制应用文件..."
cp -r . $APP_DIR/
cd $APP_DIR

# 配置Python虚拟环境
echo "🐍 配置Python虚拟环境..."
python3.11 -m venv venv
source venv/bin/activate

# 配置pip使用国内源
echo "⚙️ 配置pip国内源..."
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
pip config set global.trusted-host pypi.tuna.tsinghua.edu.cn

# 安装Python依赖
echo "📦 安装Python依赖..."
pip install --upgrade pip
pip install -r requirements.txt

# 配置npm使用国内源
echo "⚙️ 配置npm国内源..."
npm config set registry https://registry.npmmirror.com

# 构建前端
echo "🔨 构建前端..."
cd web
npm install
npm run build
cd ..

# 配置Nginx
echo "🌐 配置Nginx..."
sudo tee /etc/nginx/sites-available/vue-fastapi-admin <<EOF
server {
    listen 80;
    server_name localhost;
    
    # 前端静态文件
    location / {
        root $APP_DIR/web/dist;
        index index.html index.htm;
        try_files \$uri \$uri/ /index.html;
    }
    
    # API代理
    location /api/ {
        proxy_pass http://127.0.0.1:9999;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
}
EOF

# 启用站点
sudo ln -sf /etc/nginx/sites-available/vue-fastapi-admin /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# 测试Nginx配置
sudo nginx -t

# 重启Nginx
sudo systemctl restart nginx
sudo systemctl enable nginx

# 创建systemd服务
echo "⚙️ 创建systemd服务..."
sudo tee /etc/systemd/system/vue-fastapi-admin.service <<EOF
[Unit]
Description=Vue FastAPI Admin
After=network.target

[Service]
Type=simple
User=$USER
WorkingDirectory=$APP_DIR
Environment=PATH=$APP_DIR/venv/bin
ExecStart=$APP_DIR/venv/bin/python run.py
Restart=always
RestartSec=3

[Install]
WantedBy=multi-user.target
EOF

# 重新加载systemd
sudo systemctl daemon-reload

# 启动服务
echo "🚀 启动服务..."
sudo systemctl start vue-fastapi-admin
sudo systemctl enable vue-fastapi-admin

# 检查服务状态
echo "📊 检查服务状态..."
sudo systemctl status vue-fastapi-admin --no-pager

echo ""
echo "🎉 原生部署完成！"
echo ""
echo "📋 访问信息:"
echo "应用地址: http://$(curl -s ifconfig.me 2>/dev/null || echo 'localhost')/"
echo "管理后台: http://$(curl -s ifconfig.me 2>/dev/null || echo 'localhost')/admin"
echo "API文档: http://$(curl -s ifconfig.me 2>/dev/null || echo 'localhost')/api/docs"
echo ""
echo "🔧 管理命令:"
echo "查看状态: sudo systemctl status vue-fastapi-admin"
echo "查看日志: sudo journalctl -u vue-fastapi-admin -f"
echo "重启服务: sudo systemctl restart vue-fastapi-admin"
echo "停止服务: sudo systemctl stop vue-fastapi-admin"
echo ""
echo "📁 应用目录: $APP_DIR"
echo "📝 配置文件: /etc/nginx/sites-available/vue-fastapi-admin"
echo "⚙️ 服务文件: /etc/systemd/system/vue-fastapi-admin.service"

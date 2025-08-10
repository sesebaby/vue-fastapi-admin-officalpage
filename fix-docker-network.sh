#!/bin/bash

# Docker网络问题一键修复脚本
# 解决中国服务器环境下Docker Hub访问超时问题

set -e

echo "🔧 Docker网络问题修复脚本"
echo "================================"

# 检查是否为root用户
if [ "$EUID" -ne 0 ]; then
    echo "❌ 请使用sudo运行此脚本"
    exit 1
fi

echo "📋 当前Docker信息:"
docker --version
systemctl status docker --no-pager -l

echo ""
echo "🌐 测试Docker Hub连接..."
if timeout 10 docker pull hello-world > /dev/null 2>&1; then
    echo "✅ Docker Hub连接正常，无需修复"
    exit 0
else
    echo "❌ Docker Hub连接超时，开始修复..."
fi

echo ""
echo "🔧 步骤1: 配置Docker镜像加速器..."

# 备份原配置
if [ -f /etc/docker/daemon.json ]; then
    cp /etc/docker/daemon.json /etc/docker/daemon.json.backup.$(date +%Y%m%d_%H%M%S)
    echo "✅ 已备份原配置文件"
fi

# 创建新的daemon.json配置
mkdir -p /etc/docker
tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": [
    "https://hub-mirror.c.163.com",
    "https://docker.mirrors.ustc.edu.cn",
    "https://mirror.baidubce.com",
    "https://dockerproxy.com",
    "https://ccr.ccs.tencentyun.com"
  ],
  "max-concurrent-downloads": 10,
  "max-concurrent-uploads": 5,
  "storage-driver": "overlay2",
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "100m",
    "max-file": "3"
  }
}
EOF

echo "✅ 已配置Docker镜像加速器"

echo ""
echo "🔄 步骤2: 重启Docker服务..."
systemctl daemon-reload
systemctl restart docker

# 等待Docker服务启动
sleep 5

echo "✅ Docker服务已重启"

echo ""
echo "🧪 步骤3: 测试镜像加速器..."
if docker info | grep -A 10 "Registry Mirrors"; then
    echo "✅ 镜像加速器配置已生效"
else
    echo "⚠️  镜像加速器配置可能未生效"
fi

echo ""
echo "📦 步骤4: 测试镜像拉取..."

# 测试拉取小镜像
if timeout 30 docker pull hello-world > /dev/null 2>&1; then
    echo "✅ 基础镜像拉取成功"
else
    echo "❌ 基础镜像拉取失败，尝试手动拉取..."
    
    # 手动从镜像源拉取
    MIRRORS=(
        "hub-mirror.c.163.com"
        "docker.mirrors.ustc.edu.cn"
        "mirror.baidubce.com"
    )
    
    for mirror in "${MIRRORS[@]}"; do
        echo "尝试从 $mirror 拉取镜像..."
        if timeout 30 docker pull $mirror/library/hello-world > /dev/null 2>&1; then
            docker tag $mirror/library/hello-world hello-world
            echo "✅ 从 $mirror 拉取成功"
            break
        fi
    done
fi

echo ""
echo "🎯 步骤5: 预拉取项目所需镜像..."

# 预拉取Node.js镜像
echo "拉取Node.js镜像..."
if ! timeout 60 docker pull node:18.12.0-alpine3.16 > /dev/null 2>&1; then
    echo "从官方源拉取失败，尝试镜像源..."
    for mirror in hub-mirror.c.163.com docker.mirrors.ustc.edu.cn; do
        if timeout 60 docker pull $mirror/library/node:18.12.0-alpine > /dev/null 2>&1; then
            docker tag $mirror/library/node:18.12.0-alpine node:18.12.0-alpine3.16
            echo "✅ Node.js镜像拉取成功"
            break
        fi
    done
fi

# 预拉取Python镜像
echo "拉取Python镜像..."
if ! timeout 60 docker pull python:3.11-slim-bullseye > /dev/null 2>&1; then
    echo "从官方源拉取失败，尝试镜像源..."
    for mirror in hub-mirror.c.163.com docker.mirrors.ustc.edu.cn; do
        if timeout 60 docker pull $mirror/library/python:3.11-slim > /dev/null 2>&1; then
            docker tag $mirror/library/python:3.11-slim python:3.11-slim-bullseye
            echo "✅ Python镜像拉取成功"
            break
        fi
    done
fi

echo ""
echo "🎉 修复完成！"
echo ""
echo "📋 修复总结:"
echo "✅ 已配置Docker镜像加速器"
echo "✅ 已重启Docker服务"
echo "✅ 已预拉取项目所需镜像"
echo ""
echo "🚀 现在可以尝试构建项目:"
echo "   cd /root/vue-fastapi-admin-officalpage"
echo "   sudo docker build -t vue-fastapi-admin ."
echo ""
echo "或使用智能构建脚本:"
echo "   ./build.sh"
echo ""
echo "📊 查看当前Docker配置:"
echo "   sudo docker info | grep -A 10 'Registry Mirrors'"

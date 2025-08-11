#!/bin/bash

# Docker构建脚本 - 自动尝试不同镜像源
# 使用方法: ./build.sh

set -e

IMAGE_NAME="vue-fastapi-admin"
BUILD_SUCCESS=false

echo "🚀 开始构建 Vue FastAPI Admin Docker镜像..."

# 方法1: 尝试使用官方镜像源
echo "📦 方法1: 尝试使用官方Docker Hub镜像源..."
if docker build -t ${IMAGE_NAME} . --progress=plain; then
    echo "✅ 使用官方镜像源构建成功！"
    BUILD_SUCCESS=true
else
    echo "❌ 官方镜像源构建失败，尝试备用方案..."
fi

# 方法2: 如果官方镜像失败，尝试使用网易云镜像
if [ "$BUILD_SUCCESS" = false ]; then
    echo "📦 方法2: 尝试使用网易云镜像源..."
    if docker build -f Dockerfile.mirror -t ${IMAGE_NAME} . --progress=plain; then
        echo "✅ 使用网易云镜像源构建成功！"
        BUILD_SUCCESS=true
    else
        echo "❌ 网易云镜像源构建失败..."
    fi
fi

# 方法3: 手动拉取镜像后构建
if [ "$BUILD_SUCCESS" = false ]; then
    echo "📦 方法3: 尝试手动拉取镜像..."

    # 定义多个镜像源
    MIRRORS=(
        "hub-mirror.c.163.com"
        "docker.mirrors.ustc.edu.cn"
        "mirror.baidubce.com"
        "dockerproxy.com"
    )

    NODE_SUCCESS=false
    PYTHON_SUCCESS=false

    # 尝试从不同源拉取Node.js镜像
    echo "拉取Node.js镜像..."
    for mirror in "${MIRRORS[@]}"; do
        echo "尝试镜像源: $mirror"
        if docker pull $mirror/library/node:18.12.0-alpine; then
            docker tag $mirror/library/node:18.12.0-alpine node:18.12.0-alpine3.16
            echo "✅ Node.js镜像从 $mirror 拉取成功"
            NODE_SUCCESS=true
            break
        else
            echo "❌ 从 $mirror 拉取Node.js镜像失败，尝试下一个..."
        fi
    done

    # 尝试从不同源拉取Python镜像
    echo "拉取Python镜像..."
    for mirror in "${MIRRORS[@]}"; do
        echo "尝试镜像源: $mirror"
        if docker pull $mirror/library/python:3.11-slim; then
            docker tag $mirror/library/python:3.11-slim python:3.11-slim-bullseye
            echo "✅ Python镜像从 $mirror 拉取成功"
            PYTHON_SUCCESS=true
            break
        else
            echo "❌ 从 $mirror 拉取Python镜像失败，尝试下一个..."
        fi
    done

    # 检查是否都拉取成功
    if [ "$NODE_SUCCESS" = false ] || [ "$PYTHON_SUCCESS" = false ]; then
        echo "❌ 无法从任何镜像源拉取所需镜像"
        exit 1
    fi
    
    # 重新尝试构建
    echo "重新尝试构建..."
    if docker build -t ${IMAGE_NAME} . --progress=plain; then
        echo "✅ 手动拉取镜像后构建成功！"
        BUILD_SUCCESS=true
    else
        echo "❌ 所有方法都失败了"
        exit 1
    fi
fi

if [ "$BUILD_SUCCESS" = true ]; then
    echo ""
    echo "🎉 Docker镜像构建成功！"
    echo "镜像名称: ${IMAGE_NAME}"
    echo ""
    echo "📋 接下来可以运行以下命令启动容器:"
    echo "sudo docker run -d --name vue-fastapi-admin -p 80:80 --restart unless-stopped ${IMAGE_NAME}"
    echo ""
    echo "🌐 启动后访问地址:"
    echo "http://localhost/"
    echo "http://$(curl -s ifconfig.me 2>/dev/null || echo 'your-server-ip')/"
else
    echo "❌ 构建失败，请检查网络连接或Docker配置"
    exit 1
fi

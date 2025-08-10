#!/bin/bash

# Docker Compose部署脚本
# 解决网络问题并提供多种部署选项

set -e

echo "🚀 Vue FastAPI Admin - Docker Compose部署"
echo "========================================"

# 检查Docker Compose是否安装
if ! command -v docker-compose &> /dev/null && ! docker compose version &> /dev/null; then
    echo "❌ Docker Compose未安装，正在安装..."
    
    # 安装Docker Compose
    sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
    
    # 验证安装
    if docker-compose --version; then
        echo "✅ Docker Compose安装成功"
    else
        echo "❌ Docker Compose安装失败"
        exit 1
    fi
fi

# 检查当前目录
if [ ! -f "docker-compose.yml" ]; then
    echo "❌ 请在项目根目录运行此脚本"
    exit 1
fi

# 创建环境文件
if [ ! -f ".env" ]; then
    echo "📝 创建环境配置文件..."
    cp .env.docker .env
    echo "✅ 已创建.env文件，请根据需要修改配置"
fi

# 显示部署选项
echo ""
echo "📋 部署选项:"
echo "1. 基础部署 (仅主应用)"
echo "2. 完整部署 (包含Redis和PostgreSQL)"
echo "3. 开发环境 (包含所有服务)"
echo "4. 仅构建镜像"
echo "5. 停止所有服务"
echo "6. 查看服务状态"
echo ""

read -p "请选择部署选项 (1-6): " choice

case $choice in
    1)
        echo "🚀 开始基础部署..."
        
        # 先尝试修复Docker网络问题
        if [ -f "fix-docker-network.sh" ]; then
            echo "🔧 修复Docker网络问题..."
            sudo ./fix-docker-network.sh
        fi
        
        # 停止现有服务
        docker-compose down
        
        # 构建并启动主应用
        docker-compose up -d vue-fastapi-admin
        
        echo "✅ 基础部署完成"
        ;;
        
    2)
        echo "🚀 开始完整部署..."
        
        # 修复网络问题
        if [ -f "fix-docker-network.sh" ]; then
            sudo ./fix-docker-network.sh
        fi
        
        # 停止现有服务
        docker-compose down
        
        # 启动完整服务栈
        docker-compose --profile with-redis --profile with-postgres up -d
        
        echo "✅ 完整部署完成"
        ;;
        
    3)
        echo "🚀 开始开发环境部署..."
        
        # 修复网络问题
        if [ -f "fix-docker-network.sh" ]; then
            sudo ./fix-docker-network.sh
        fi
        
        # 停止现有服务
        docker-compose down
        
        # 启动所有服务
        docker-compose --profile with-redis --profile with-postgres --profile nginx-separate up -d
        
        echo "✅ 开发环境部署完成"
        ;;
        
    4)
        echo "🔨 开始构建镜像..."
        
        # 修复网络问题
        if [ -f "fix-docker-network.sh" ]; then
            sudo ./fix-docker-network.sh
        fi
        
        # 仅构建镜像
        docker-compose build vue-fastapi-admin
        
        echo "✅ 镜像构建完成"
        ;;
        
    5)
        echo "🛑 停止所有服务..."
        docker-compose down --remove-orphans
        echo "✅ 所有服务已停止"
        ;;
        
    6)
        echo "📊 服务状态:"
        docker-compose ps
        echo ""
        echo "📋 服务日志 (最近20行):"
        docker-compose logs --tail=20
        ;;
        
    *)
        echo "❌ 无效选项"
        exit 1
        ;;
esac

if [ "$choice" -le 3 ]; then
    echo ""
    echo "🎉 部署完成！"
    echo ""
    echo "📋 访问信息:"
    echo "主应用: http://$(curl -s ifconfig.me 2>/dev/null || echo 'localhost')/"
    echo "管理后台: http://$(curl -s ifconfig.me 2>/dev/null || echo 'localhost')/admin"
    echo "API文档: http://$(curl -s ifconfig.me 2>/dev/null || echo 'localhost')/api/docs"
    
    if [ "$choice" -eq 3 ]; then
        echo "Nginx代理: http://$(curl -s ifconfig.me 2>/dev/null || echo 'localhost'):8080/"
    fi
    
    echo ""
    echo "🔧 管理命令:"
    echo "查看状态: docker-compose ps"
    echo "查看日志: docker-compose logs -f"
    echo "重启服务: docker-compose restart"
    echo "停止服务: docker-compose down"
    echo ""
fi

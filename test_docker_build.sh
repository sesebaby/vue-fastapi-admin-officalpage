#!/bin/bash

echo "========================================"
echo "Docker Build Test Script"
echo "========================================"

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 检查Docker是否安装
echo -e "\n${YELLOW}检查Docker环境...${NC}"
if ! command -v docker &> /dev/null; then
    echo -e "${RED}错误: Docker未安装${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Docker已安装${NC}"

# 检查Docker服务是否运行
if ! docker info &> /dev/null; then
    echo -e "${RED}错误: Docker服务未运行${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Docker服务运行中${NC}"

# 检查必要文件
echo -e "\n${YELLOW}检查必要文件...${NC}"
files=("Dockerfile" ".dockerignore" "requirements.txt" "web/package.json" "web/pnpm-lock.yaml")
for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}✓ $file 存在${NC}"
    else
        echo -e "${RED}✗ $file 不存在${NC}"
        exit 1
    fi
done

# 构建Docker镜像
echo -e "\n${YELLOW}开始构建Docker镜像...${NC}"
docker build -t vue-fastapi-admin-test . --progress=plain

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Docker镜像构建成功${NC}"
else
    echo -e "${RED}✗ Docker镜像构建失败${NC}"
    exit 1
fi

# 测试运行容器
echo -e "\n${YELLOW}测试运行容器...${NC}"
docker run -d --name vue-fastapi-admin-test -p 8080:80 vue-fastapi-admin-test

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ 容器启动成功${NC}"
    
    # 等待服务启动
    echo -e "${YELLOW}等待服务启动...${NC}"
    sleep 10
    
    # 检查服务是否正常
    if curl -f http://localhost:8080/health &> /dev/null; then
        echo -e "${GREEN}✓ 服务健康检查通过${NC}"
    else
        echo -e "${YELLOW}⚠ 健康检查未通过，查看日志：${NC}"
        docker logs vue-fastapi-admin-test
    fi
    
    # 清理测试容器
    echo -e "\n${YELLOW}清理测试容器...${NC}"
    docker stop vue-fastapi-admin-test
    docker rm vue-fastapi-admin-test
    echo -e "${GREEN}✓ 清理完成${NC}"
else
    echo -e "${RED}✗ 容器启动失败${NC}"
    exit 1
fi

echo -e "\n${GREEN}========================================"
echo -e "Docker构建测试完成！"
echo -e "========================================${NC}"
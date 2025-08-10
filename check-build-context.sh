#!/bin/bash

# Docker构建上下文检查脚本
# 用于验证所有必需的文件和目录是否存在

echo "🔍 检查Docker构建上下文..."

# 检查当前目录
CURRENT_DIR=$(pwd)
echo "当前目录: $CURRENT_DIR"

# 必需的文件和目录列表
REQUIRED_FILES=(
    "Dockerfile"
    "requirements.txt"
    "run.py"
    "pyproject.toml"
    "web/package.json"
    "deploy/entrypoint.sh"
    "deploy/web.conf"
    "app"
)

MISSING_FILES=()
EXISTING_FILES=()

echo ""
echo "📋 检查必需文件..."

for file in "${REQUIRED_FILES[@]}"; do
    if [ -e "$file" ]; then
        echo "✅ $file"
        EXISTING_FILES+=("$file")
    else
        echo "❌ $file (缺失)"
        MISSING_FILES+=("$file")
    fi
done

echo ""
echo "📁 检查目录结构..."

# 检查web目录结构
if [ -d "web" ]; then
    echo "✅ web/ 目录存在"
    if [ -f "web/package.json" ]; then
        echo "  ✅ web/package.json"
    else
        echo "  ❌ web/package.json (缺失)"
    fi
    
    if [ -d "web/src" ]; then
        echo "  ✅ web/src/ 目录"
    else
        echo "  ❌ web/src/ 目录 (缺失)"
    fi
else
    echo "❌ web/ 目录不存在"
fi

# 检查app目录结构
if [ -d "app" ]; then
    echo "✅ app/ 目录存在"
    if [ -f "app/__init__.py" ]; then
        echo "  ✅ app/__init__.py"
    else
        echo "  ❌ app/__init__.py (缺失)"
    fi
else
    echo "❌ app/ 目录不存在"
fi

# 检查deploy目录
if [ -d "deploy" ]; then
    echo "✅ deploy/ 目录存在"
    if [ -f "deploy/entrypoint.sh" ]; then
        echo "  ✅ deploy/entrypoint.sh"
        # 检查执行权限
        if [ -x "deploy/entrypoint.sh" ]; then
            echo "    ✅ 有执行权限"
        else
            echo "    ⚠️  无执行权限 (Docker构建时会设置)"
        fi
    else
        echo "  ❌ deploy/entrypoint.sh (缺失)"
    fi
    
    if [ -f "deploy/web.conf" ]; then
        echo "  ✅ deploy/web.conf"
    else
        echo "  ❌ deploy/web.conf (缺失)"
    fi
else
    echo "❌ deploy/ 目录不存在"
fi

echo ""
echo "🐳 检查Docker相关文件..."

if [ -f "Dockerfile" ]; then
    echo "✅ Dockerfile"
else
    echo "❌ Dockerfile (缺失)"
fi

if [ -f ".dockerignore" ]; then
    echo "✅ .dockerignore"
else
    echo "⚠️  .dockerignore (建议添加)"
fi

echo ""
echo "📊 检查结果总结:"
echo "存在的文件: ${#EXISTING_FILES[@]}"
echo "缺失的文件: ${#MISSING_FILES[@]}"

if [ ${#MISSING_FILES[@]} -eq 0 ]; then
    echo ""
    echo "🎉 所有必需文件都存在！"
    echo ""
    echo "✅ 可以安全执行Docker构建:"
    echo "   cd $CURRENT_DIR"
    echo "   sudo docker build -t vue-fastapi-admin ."
    echo ""
    echo "🚀 或使用智能构建脚本:"
    echo "   ./build.sh"
else
    echo ""
    echo "❌ 发现缺失文件，请检查项目完整性"
    echo "缺失的文件:"
    for file in "${MISSING_FILES[@]}"; do
        echo "  - $file"
    done
    echo ""
    echo "请确保在正确的项目根目录中运行此脚本"
fi

echo ""
echo "📍 当前路径应该是项目根目录 (包含Dockerfile的目录)"
echo "如果路径不正确，请使用: cd /root/vue-fastapi-admin-officalpage"

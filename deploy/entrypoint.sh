#!/bin/bash
set -e

echo "Starting Vue FastAPI Admin..."

# 等待数据库就绪（如果使用外部数据库）
# while ! nc -z $DB_HOST $DB_PORT; do
#   echo "Waiting for database..."
#   sleep 1
# done

# 初始化数据库
echo "Initializing database..."
python -c "
import asyncio
from app.core.init_app import init_db

async def init():
    await init_db()

asyncio.run(init())
"

# 运行数据库迁移（如果使用Aerich）
if [ -d "migrations" ]; then
    echo "Running database migrations..."
    aerich upgrade || echo "No migrations to apply"
fi

# 启动nginx
echo "Starting nginx..."
nginx -g "daemon off;" &

# 启动FastAPI应用
echo "Starting FastAPI application..."
exec python run.py
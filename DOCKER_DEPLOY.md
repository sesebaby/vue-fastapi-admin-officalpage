# Docker 部署指南

## 快速部署

### 1. 使用 Docker Compose（推荐）

```bash
# 克隆项目
git clone https://github.com/your-repo/vue-fastapi-admin-officalpage.git
cd vue-fastapi-admin-officalpage

# 构建并启动容器
docker-compose up -d

# 查看日志
docker-compose logs -f

# 停止服务
docker-compose down
```

### 2. 使用 Docker 命令

```bash
# 构建镜像
docker build -t vue-fastapi-admin .

# 运行容器
docker run -d \
  --name vue-fastapi-admin \
  -p 80:80 \
  -v $(pwd)/data:/app/data \
  -v $(pwd)/logs:/app/logs \
  --restart unless-stopped \
  vue-fastapi-admin
```

## 环境配置

### 环境变量

创建 `.env` 文件（不要提交到git）：

```env
# 应用配置
DEBUG=False
SECRET_KEY=your-very-secret-key-change-this-in-production

# 数据库配置（选择一种）
# SQLite（默认）
DATABASE_URL=sqlite:///app/data/db.sqlite3

# MySQL
# DATABASE_URL=mysql://user:password@mysql:3306/dbname

# PostgreSQL
# DATABASE_URL=postgresql://user:password@postgres:5432/dbname
```

### 使用外部数据库

1. **MySQL**：
```yaml
# 在 docker-compose.yml 中取消 mysql 服务的注释
# 修改 DATABASE_URL 环境变量
```

2. **PostgreSQL**：
```yaml
# 在 docker-compose.yml 中取消 postgres 服务的注释
# 修改 DATABASE_URL 环境变量
```

## 生产环境部署

### 1. 安全配置

```bash
# 生成安全的密钥
python -c "import secrets; print(secrets.token_urlsafe(32))"
```

### 2. 使用 Nginx 反向代理

如果已有 Nginx 服务器，可以配置反向代理：

```nginx
server {
    listen 80;
    server_name your-domain.com;
    
    location / {
        proxy_pass http://localhost:8080;  # Docker容器端口
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### 3. HTTPS 配置

使用 Let's Encrypt 获取免费SSL证书：

```bash
# 安装 certbot
sudo apt-get install certbot python3-certbot-nginx

# 获取证书
sudo certbot --nginx -d your-domain.com
```

## 故障排查

### 常见问题

1. **端口被占用**
```bash
# 检查端口占用
netstat -tlnp | grep :80

# 修改 docker-compose.yml 中的端口映射
ports:
  - "8080:80"  # 改为其他端口
```

2. **构建失败**
```bash
# 清理Docker缓存
docker system prune -a

# 重新构建（不使用缓存）
docker-compose build --no-cache
```

3. **数据库连接失败**
```bash
# 检查数据库容器
docker-compose ps

# 查看数据库日志
docker-compose logs mysql
```

4. **权限问题**
```bash
# 修复文件权限
chmod +x deploy/entrypoint.sh
```

### 查看日志

```bash
# 查看所有日志
docker-compose logs

# 查看特定服务日志
docker-compose logs vue-fastapi-admin

# 进入容器调试
docker exec -it vue-fastapi-admin bash

# 查看应用日志
tail -f /app/logs/fastapi.log
tail -f /var/log/supervisor/fastapi.log
```

## 性能优化

### 1. 资源限制

在 `docker-compose.yml` 中添加：

```yaml
services:
  vue-fastapi-admin:
    # ...
    deploy:
      resources:
        limits:
          cpus: '2'
          memory: 2G
        reservations:
          cpus: '1'
          memory: 1G
```

### 2. 数据持久化

确保重要数据持久化：

```yaml
volumes:
  - ./data:/app/data          # 数据库文件
  - ./logs:/app/logs          # 日志文件
  - ./uploads:/app/uploads    # 上传文件
```

### 3. 自动重启

```yaml
restart: unless-stopped  # 自动重启（除非手动停止）
```

## 备份与恢复

### 备份

```bash
# 备份数据库
docker exec vue-fastapi-admin sqlite3 /app/data/db.sqlite3 .dump > backup.sql

# 备份整个数据目录
tar -czf backup-$(date +%Y%m%d).tar.gz data/
```

### 恢复

```bash
# 恢复数据库
docker exec -i vue-fastapi-admin sqlite3 /app/data/db.sqlite3 < backup.sql

# 恢复数据目录
tar -xzf backup-20240101.tar.gz
```

## 监控

### 健康检查

```bash
# 检查服务健康状态
curl http://localhost/health

# Docker健康检查
docker inspect vue-fastapi-admin | grep -A 5 Health
```

### 资源使用

```bash
# 查看容器资源使用
docker stats vue-fastapi-admin
```

## 更新部署

```bash
# 拉取最新代码
git pull

# 重新构建并部署
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

## 注意事项

1. **生产环境必须修改 SECRET_KEY**
2. **定期备份数据**
3. **及时更新依赖包**
4. **监控日志和资源使用**
5. **使用HTTPS加密传输**
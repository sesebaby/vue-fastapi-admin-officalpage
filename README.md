<p align="center">
  <a href="https://github.com/mizhexiaoxiao/vue-fastapi-admin">
    <img alt="Vue FastAPI Admin Logo" width="200" src="https://github.com/mizhexiaoxiao/vue-fastapi-admin/blob/main/deploy/sample-picture/logo.svg">
  </a>
</p>

<h1 align="center">Vue FastAPI Admin</h1>

<p align="center">
  <a href="https://github.com/mizhexiaoxiao/vue-fastapi-admin/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License">
  </a>
  <a href="https://www.python.org/">
    <img src="https://img.shields.io/badge/python-3.11+-blue.svg" alt="Python">
  </a>
  <a href="https://fastapi.tiangolo.com/">
    <img src="https://img.shields.io/badge/FastAPI-0.111.0-green.svg" alt="FastAPI">
  </a>
  <a href="https://vuejs.org/">
    <img src="https://img.shields.io/badge/Vue-3.3.4-green.svg" alt="Vue">
  </a>
  <a href="https://www.naiveui.com/">
    <img src="https://img.shields.io/badge/Naive%20UI-2.34.4-blue.svg" alt="Naive UI">
  </a>
</p>

[English](./README-en.md) | 简体中文

## 📖 项目简介

Vue FastAPI Admin 是一个基于 **FastAPI** + **Vue3** + **Naive UI** 的现代化前后端分离管理系统。该项目采用最新的技术栈，实现了完整的 RBAC 权限管理、动态路由、JWT 认证等核心功能，为中小型企业应用开发提供了一个高质量的基础框架，同时也是学习现代 Web 开发技术的优秀参考项目。

## ✨ 核心特性

### 🚀 技术特性
- **现代化技术栈**：采用 Python 3.11 + FastAPI 异步框架，Vue3 + Vite + TypeScript 前端技术栈
- **高性能架构**：异步 I/O 处理，支持高并发访问
- **代码质量保证**：集成 ESLint、Prettier、Black、Ruff 等代码规范工具
- **类型安全**：前端 TypeScript 支持，后端 Pydantic 数据验证

### 🔐 权限管理
- **RBAC 权限模型**：基于角色的访问控制，支持多角色分配
- **动态路由**：根据用户权限动态生成菜单和路由
- **细粒度权限**：支持页面、按钮、API 接口级别的权限控制
- **JWT 认证**：安全的身份验证和授权机制

### 🎨 用户体验
- **响应式设计**：支持多种设备和屏幕尺寸
- **主题切换**：支持明暗主题切换
- **国际化支持**：内置中英文语言切换
- **丰富组件**：基于 Naive UI 的高质量组件库

## 🌐 在线演示

| 环境 | 地址 | 用户名 | 密码 |
|------|------|--------|------|
| 演示环境 | [http://47.111.145.81:3000](http://47.111.145.81:3000) | admin | 123456 |

> 💡 **提示**：演示环境仅供体验，请勿进行破坏性操作

## 🛠️ 技术栈

### 后端技术栈
| 技术 | 版本 | 描述 |
|------|------|------|
| [Python](https://www.python.org/) | 3.11+ | 编程语言 |
| [FastAPI](https://fastapi.tiangolo.com/) | 0.111.0 | 高性能异步 Web 框架 |
| [Tortoise ORM](https://tortoise.github.io/) | 0.23.0 | 异步 ORM 框架 |
| [Pydantic](https://pydantic-docs.helpmanual.io/) | 2.10.5 | 数据验证和序列化 |
| [Uvicorn](https://www.uvicorn.org/) | 0.34.0 | ASGI 服务器 |
| [PyJWT](https://pyjwt.readthedocs.io/) | 2.10.1 | JWT 认证 |
| [Argon2](https://argon2-cffi.readthedocs.io/) | 23.1.0 | 密码哈希 |
| [Loguru](https://loguru.readthedocs.io/) | 0.7.3 | 日志管理 |

### 前端技术栈
| 技术 | 版本 | 描述 |
|------|------|------|
| [Vue.js](https://vuejs.org/) | 3.3.4 | 渐进式 JavaScript 框架 |
| [Vite](https://vitejs.dev/) | 4.4.6 | 前端构建工具 |
| [Naive UI](https://www.naiveui.com/) | 2.34.4 | Vue 3 组件库 |
| [Vue Router](https://router.vuejs.org/) | 4.2.4 | 官方路由管理器 |
| [Pinia](https://pinia.vuejs.org/) | 2.1.6 | 状态管理库 |
| [UnoCSS](https://unocss.dev/) | 0.55.0 | 原子化 CSS 引擎 |
| [Vue I18n](https://vue-i18n.intlify.dev/) | 9.x | 国际化插件 |
| [Axios](https://axios-http.com/) | 1.4.0 | HTTP 客户端 |

### 开发工具
| 工具 | 描述 |
|------|------|
| [TypeScript](https://www.typescriptlang.org/) | 类型安全的 JavaScript |
| [ESLint](https://eslint.org/) | JavaScript 代码检查工具 |
| [Prettier](https://prettier.io/) | 代码格式化工具 |
| [Black](https://black.readthedocs.io/) | Python 代码格式化工具 |
| [Ruff](https://docs.astral.sh/ruff/) | Python 代码检查工具 |
| [pnpm](https://pnpm.io/) | 高效的包管理器 |

## 📸 系统截图

### 登录页面
![登录页面](https://github.com/mizhexiaoxiao/vue-fastapi-admin/blob/main/deploy/sample-picture/login.jpg)

### 工作台
![工作台](https://github.com/mizhexiaoxiao/vue-fastapi-admin/blob/main/deploy/sample-picture/workbench.jpg)

### 用户管理
![用户管理](https://github.com/mizhexiaoxiao/vue-fastapi-admin/blob/main/deploy/sample-picture/user.jpg)

### 角色管理
![角色管理](https://github.com/mizhexiaoxiao/vue-fastapi-admin/blob/main/deploy/sample-picture/role.jpg)

### 菜单管理
![菜单管理](https://github.com/mizhexiaoxiao/vue-fastapi-admin/blob/main/deploy/sample-picture/menu.jpg)

### API管理
![API管理](https://github.com/mizhexiaoxiao/vue-fastapi-admin/blob/main/deploy/sample-picture/api.jpg)

## 🏗️ 系统架构

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   前端 (Vue3)    │    │   后端 (FastAPI) │    │   数据库 (SQLite) │
│                 │    │                 │    │                 │
│ • Vue 3.3.4     │    │ • Python 3.11   │    │ • SQLite 3      │
│ • Naive UI      │◄──►│ • FastAPI       │◄──►│ • 支持 MySQL    │
│ • Pinia         │    │ • Tortoise ORM  │    │ • 支持 PostgreSQL│
│ • Vue Router    │    │ • JWT 认证      │    │                 │
│ • UnoCSS        │    │ • RBAC 权限     │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### 核心功能模块

- **🔐 认证授权模块**：JWT Token 认证、用户登录登出、密码加密存储
- **👥 用户管理模块**：用户 CRUD、用户状态管理、用户角色分配
- **🎭 角色管理模块**：角色 CRUD、权限分配、角色层级管理
- **📋 菜单管理模块**：动态菜单、路由权限、菜单层级结构
- **🔌 API管理模块**：接口权限控制、API 分组管理
- **🏢 部门管理模块**：组织架构管理、部门层级关系
- **📊 审计日志模块**：操作日志记录、系统访问追踪
- **📈 工作台模块**：数据统计、系统监控面板

## 🚀 快速开始

### 方法一：Docker Hub 镜像部署（推荐）

```bash
# 拉取最新镜像
docker pull mizhexiaoxiao/vue-fastapi-admin:latest

# 启动容器
docker run -d \
  --restart=always \
  --name=vue-fastapi-admin \
  -p 9999:80 \
  mizhexiaoxiao/vue-fastapi-admin
```

### 方法二：Docker 构建部署

#### 1. 安装 Docker（版本 17.05+）

```bash
# CentOS/RHEL
yum install -y docker-ce
systemctl start docker
systemctl enable docker

# Ubuntu/Debian
apt-get update
apt-get install -y docker.io
systemctl start docker
systemctl enable docker
```

#### 2. 克隆项目并构建

```bash
# 克隆项目
git clone https://github.com/mizhexiaoxiao/vue-fastapi-admin.git
cd vue-fastapi-admin

# 构建镜像
docker build --no-cache . -t vue-fastapi-admin

# 启动容器
docker run -d \
  --restart=always \
  --name=vue-fastapi-admin \
  -p 9999:80 \
  vue-fastapi-admin
```

#### 3. 访问系统

- 🌐 **访问地址**：http://localhost:9999
- 👤 **默认账号**：admin
- 🔑 **默认密码**：123456

> ⚠️ **安全提示**：首次登录后请及时修改默认密码

## 💻 本地开发

### 环境要求

| 环境 | 版本要求 | 说明 |
|------|----------|------|
| Python | 3.11+ | 后端运行环境 |
| Node.js | 18.8.0+ | 前端运行环境 |
| pnpm | 最新版 | 推荐的包管理器 |

### 后端开发环境搭建

#### 方法一：使用 uv（推荐）

```bash
# 1. 安装 uv
pip install uv

# 2. 创建并激活虚拟环境
uv venv
# Linux/Mac
source .venv/bin/activate
# Windows
.\.venv\Scripts\activate

# 3. 安装依赖
uv sync

# 4. 启动后端服务
python run.py
```

#### 方法二：使用 pip

```bash
# 1. 创建虚拟环境
python3 -m venv venv

# 2. 激活虚拟环境
# Linux/Mac
source venv/bin/activate
# Windows
.\venv\Scripts\activate

# 3. 安装依赖
pip install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple

# 4. 启动后端服务
python run.py
```

#### 后端服务验证

- 🌐 **API 文档**：http://localhost:9999/docs
- 📊 **ReDoc 文档**：http://localhost:9999/redoc
- 🔍 **健康检查**：http://localhost:9999/api/v1/base/health

### 前端开发环境搭建

```bash
# 1. 进入前端目录
cd web

# 2. 安装 pnpm（如未安装）
npm install -g pnpm

# 3. 安装依赖
pnpm install

# 4. 启动开发服务器
pnpm dev
```

#### 前端服务验证

- 🌐 **开发服务器**：http://localhost:3000
- 🔧 **Vite 配置**：支持热重载和快速构建

### 开发工具配置

#### VS Code 推荐插件

```json
{
  "recommendations": [
    "ms-python.python",
    "ms-python.black-formatter",
    "charliermarsh.ruff",
    "vue.volar",
    "vue.typescript-vue-plugin",
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode"
  ]
}
```

#### 代码格式化配置

项目已配置自动代码格式化：
- **后端**：Black + Ruff
- **前端**：ESLint + Prettier

## 📁 项目结构

```
vue-fastapi-admin/
├── 📁 app/                     # 后端应用程序目录
│   ├── 📁 api/                 # API 接口目录
│   │   └── 📁 v1/              # API v1 版本
│   │       ├── 📁 apis/        # API 管理接口
│   │       ├── 📁 base/        # 基础功能接口
│   │       ├── 📁 menus/       # 菜单管理接口
│   │       ├── 📁 roles/       # 角色管理接口
│   │       └── 📁 users/       # 用户管理接口
│   ├── 📁 controllers/         # 业务控制器
│   ├── 📁 core/                # 核心功能模块
│   │   ├── 📄 dependency.py    # 依赖注入
│   │   ├── 📄 exceptions.py    # 异常处理
│   │   └── 📄 init_app.py      # 应用初始化
│   ├── 📁 models/              # 数据模型
│   │   └── 📄 admin.py         # 管理员相关模型
│   ├── 📁 schemas/             # 数据验证模式
│   ├── 📁 settings/            # 配置文件
│   │   └── 📄 config.py        # 主配置文件
│   └── 📁 utils/               # 工具函数
├── 📁 web/                     # 前端项目目录
│   ├── 📁 build/               # 构建配置
│   │   ├── 📁 config/          # 构建配置文件
│   │   ├── 📁 plugin/          # Vite 插件配置
│   │   └── 📁 script/          # 构建脚本
│   ├── 📁 public/              # 静态资源
│   ├── 📁 src/                 # 源代码目录
│   │   ├── 📁 api/             # API 接口封装
│   │   ├── 📁 assets/          # 静态资源
│   │   │   ├── 📁 images/      # 图片资源
│   │   │   ├── 📁 js/          # JavaScript 文件
│   │   │   └── 📁 svg/         # SVG 图标
│   │   ├── 📁 components/      # Vue 组件
│   │   │   ├── 📁 common/      # 通用组件
│   │   │   ├── 📁 icon/        # 图标组件
│   │   │   ├── 📁 page/        # 页面组件
│   │   │   ├── 📁 query-bar/   # 查询栏组件
│   │   │   └── 📁 table/       # 表格组件
│   │   ├── 📁 composables/     # 组合式 API
│   │   ├── 📁 directives/      # Vue 指令
│   │   ├── 📁 layout/          # 布局组件
│   │   ├── 📁 router/          # 路由配置
│   │   │   ├── 📁 guard/       # 路由守卫
│   │   │   └── 📁 routes/      # 路由定义
│   │   ├── 📁 store/           # Pinia 状态管理
│   │   │   └── 📁 modules/     # 状态模块
│   │   ├── 📁 styles/          # 样式文件
│   │   ├── 📁 utils/           # 工具函数
│   │   │   ├── 📁 auth/        # 认证工具
│   │   │   ├── 📁 common/      # 通用工具
│   │   │   ├── 📁 http/        # HTTP 请求封装
│   │   │   └── 📁 storage/     # 存储工具
│   │   └── 📁 views/           # 页面视图
│   │       ├── 📁 error-page/  # 错误页面
│   │       ├── 📁 login/       # 登录页面
│   │       ├── 📁 profile/     # 个人资料
│   │       ├── 📁 system/      # 系统管理
│   │       └── 📁 workbench/   # 工作台
│   ├── 📄 package.json         # 前端依赖配置
│   ├── 📄 vite.config.js       # Vite 配置
│   └── 📄 unocss.config.js     # UnoCSS 配置
├── 📁 deploy/                  # 部署相关文件
│   ├── 📄 entrypoint.sh        # Docker 入口脚本
│   ├── 📄 web.conf             # Nginx 配置
│   └── 📁 sample-picture/      # 示例图片
├── 📄 Dockerfile               # Docker 构建文件
├── 📄 pyproject.toml           # Python 项目配置
├── 📄 requirements.txt         # Python 依赖
├── 📄 run.py                   # 应用启动文件
└── 📄 README.md                # 项目说明文档
```

## ⚙️ 配置说明

### 后端配置

主要配置文件：`app/settings/config.py`

```python
class Settings(BaseSettings):
    # 应用基本信息
    APP_TITLE: str = "Vue FastAPI Admin"
    VERSION: str = "0.1.0"

    # 跨域配置
    CORS_ORIGINS: List = ["*"]
    CORS_ALLOW_CREDENTIALS: bool = True

    # JWT 配置
    SECRET_KEY: str = "your-secret-key"
    JWT_ALGORITHM: str = "HS256"
    JWT_ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 7  # 7天

    # 数据库配置
    TORTOISE_ORM: dict = {
        "connections": {
            "sqlite": {
                "engine": "tortoise.backends.sqlite",
                "credentials": {"file_path": "db.sqlite3"}
            }
        }
    }
```

### 前端配置

主要配置文件：`web/settings/`

- **环境变量**：`.env` 文件配置
- **构建配置**：`vite.config.js`
- **路由配置**：`src/router/`
- **状态管理**：`src/store/`

## 📚 API 文档

启动后端服务后，可以访问以下地址查看 API 文档：

- **Swagger UI**：http://localhost:9999/docs
- **ReDoc**：http://localhost:9999/redoc
- **OpenAPI JSON**：http://localhost:9999/openapi.json

### 主要 API 端点

| 模块 | 端点 | 描述 |
|------|------|------|
| 认证 | `/api/v1/base/access_token` | 用户登录获取 Token |
| 用户 | `/api/v1/user/` | 用户管理 CRUD |
| 角色 | `/api/v1/role/` | 角色管理 CRUD |
| 菜单 | `/api/v1/menu/` | 菜单管理 CRUD |
| API | `/api/v1/api/` | API 权限管理 |

## 🚀 部署指南

### 生产环境部署

#### 1. 环境变量配置

```bash
# 创建 .env 文件
cat > .env << EOF
APP_TITLE=Vue FastAPI Admin
DEBUG=False
SECRET_KEY=your-production-secret-key
DATABASE_URL=sqlite:///./production.db
EOF
```

#### 2. 使用 Docker Compose

```yaml
version: '3.8'
services:
  vue-fastapi-admin:
    image: mizhexiaoxiao/vue-fastapi-admin:latest
    ports:
      - "80:80"
    environment:
      - DEBUG=False
    volumes:
      - ./data:/opt/vue-fastapi-admin/data
    restart: unless-stopped
```

#### 3. 反向代理配置（Nginx）

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:9999;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## 🤝 贡献指南

我们欢迎所有形式的贡献！请遵循以下步骤：

### 开发流程

1. **Fork 项目**
   ```bash
   git clone https://github.com/your-username/vue-fastapi-admin.git
   cd vue-fastapi-admin
   ```

2. **创建功能分支**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **提交更改**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

4. **推送分支**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **创建 Pull Request**

### 代码规范

- **后端**：遵循 PEP 8 规范，使用 Black 和 Ruff 进行代码格式化
- **前端**：遵循 Vue 3 官方风格指南，使用 ESLint 和 Prettier
- **提交信息**：遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范

### 问题反馈

如果您发现 bug 或有功能建议，请：

1. 查看 [Issues](https://github.com/mizhexiaoxiao/vue-fastapi-admin/issues) 是否已存在相关问题
2. 如果没有，请创建新的 Issue 并详细描述问题
3. 提供复现步骤和环境信息

## 📄 许可证

本项目基于 [MIT License](./LICENSE) 开源协议，您可以自由使用、修改和分发。

```
MIT License

Copyright (c) 2023 mizhexiaoxiao

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```


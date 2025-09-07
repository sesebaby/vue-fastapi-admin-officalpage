# Vue FastAPI Admin - Web前端项目


<h1 align="center">苏州思普微电子科技有限公司企业官网</h1>

<p align="center">
  <a href="https://vuejs.org/">
    <img src="https://img.shields.io/badge/Vue-3.3.4-green.svg" alt="Vue">
  </a>
  <a href="https://vitejs.dev/">
    <img src="https://img.shields.io/badge/Vite-4.4.6-blue.svg" alt="Vite">
  </a>
  <a href="https://www.naiveui.com/">
    <img src="https://img.shields.io/badge/Naive%20UI-2.34.4-blue.svg" alt="Naive UI">
  </a>
  <a href="https://unocss.dev/">
    <img src="https://img.shields.io/badge/UnoCSS-0.55.0-yellow.svg" alt="UnoCSS">
  </a>
  <a href="https://pinia.vuejs.org/">
    <img src="https://img.shields.io/badge/Pinia-2.1.6-green.svg" alt="Pinia">
  </a>
</p>

## 📖 项目概述

本项目是 **Vue FastAPI Admin** 的前端部分，基于 **Vue 3** + **Vite** + **Naive UI** 构建的现代化前端应用。项目采用**双路由系统**设计，集成了**管理后台系统**和**企业官网**两套完整的前端应用，实现了前后端完全分离的架构模式。

### 🎯 核心特色


- **🔐 完善权限体系**：基于RBAC的权限管理，支持动态路由和细粒度权限控制
- **🌍 国际化支持**：内置中英文切换，支持本地存储持久化
- **📱 响应式设计**：PC/移动端完美适配，基于现代CSS技术
- **⚡ 高性能架构**：Vite构建工具，组件懒加载，资源优化
- **🎨 现代化UI**：基于Naive UI组件库，支持明暗主题切换

## 🛠️ 技术栈

### 核心框架
| 技术 | 版本 | 描述 |
|------|------|------|
| [Vue.js](https://vuejs.org/) | 3.3.4 | 渐进式JavaScript框架，采用Composition API |
| [Vite](https://vitejs.dev/) | 4.4.6 | 下一代前端构建工具，极速热重载 |
| [Vue Router](https://router.vuejs.org/) | 4.2.4 | 官方路由管理器，支持动态路由 |
| [Pinia](https://pinia.vuejs.org/) | 2.1.6 | Vue 3状态管理库，TypeScript友好 |

### UI与样式
| 技术 | 版本 | 描述 |
|------|------|------|
| [Naive UI](https://www.naiveui.com/) | 2.34.4 | Vue 3组件库，功能丰富且性能优异 |
| [UnoCSS](https://unocss.dev/) | 0.55.0 | 原子化CSS引擎，即时按需生成 |
| [Iconify](https://iconify.design/) | 4.1.1 | 统一图标框架，包含10万+图标 |
| [Sass](https://sass-lang.com/) | 1.65.1 | CSS预处理器，用于复杂样式编写 |

### 开发增强
| 技术 | 版本 | 描述 |
|------|------|------|
| [TypeScript](https://www.typescriptlang.org/) | 5.1.6 | 静态类型检查，提升代码质量 |
| [ESLint](https://eslint.org/) | 8.46.0 | JavaScript代码检查工具 |
| [Vue I18n](https://vue-i18n.intlify.dev/) | 9.x | 国际化插件，支持多语言 |
| [VueUse](https://vueuse.org/) | 10.3.0 | Vue组合式API工具集 |
| [Axios](https://axios-http.com/) | 1.4.0 | HTTP客户端，用于API请求 |

### 构建优化
| 插件 | 描述 |
|------|------|
| unplugin-auto-import | 自动导入API，无需手动import |
| unplugin-vue-components | 组件自动注册，按需加载 |
| vite-plugin-svg-icons | SVG图标优化和管理 |
| vite-plugin-compression | Gzip压缩，减少资源体积 |
| rollup-plugin-visualizer | 构建分析，优化打包结果 |

## 📁 目录结构

```
web/
├── 📁 build/                   # 构建配置目录
│   ├── 📁 config/              # 构建配置文件
│   │   ├── 📄 define.js        # 全局定义
│   │   └── 📄 index.js         # 配置入口
│   ├── 📁 plugin/              # Vite插件配置
│   │   ├── 📄 html.js          # HTML插件配置
│   │   ├── 📄 unplugin.js      # 自动导入插件
│   │   └── 📄 index.js         # 插件入口
│   ├── 📁 script/              # 构建脚本
│   ├── 📄 constant.js          # 构建常量
│   └── 📄 utils.js             # 构建工具函数
├── 📁 dist/                    # 构建输出目录
├── 📁 public/                  # 公共静态资源
│   ├── 📁 images/              # 公共图片资源
│   ├── 📁 resource/            # 加载资源
│   ├── 📄 favicon.ico          # 站点图标
│   └── 📄 site.webmanifest     # PWA配置文件
├── 📁 src/                     # 源代码目录
│   ├── 📁 api/                 # API接口封装
│   │   └── 📄 index.js         # API统一入口
│   ├── 📁 assets/              # 项目静态资源
│   │   ├── 📁 images/          # 图片资源
│   │   ├── 📁 js/              # JavaScript文件
│   │   └── 📁 svg/             # SVG图标
│   ├── 📁 components/          # Vue组件库
│   │   ├── 📁 common/          # 通用组件
│   │   │   ├── 📄 AppProvider.vue        # 应用提供者
│   │   │   ├── 📄 CompanyLogo.vue        # 公司Logo
│   │   │   ├── 📄 LanguageSwitcher.vue   # 语言切换器
│   │   │   ├── 📄 LoadingState.vue       # 加载状态
│   │   │   └── 📄 NavigationMenu.vue     # 导航菜单
│   │   ├── 📁 icon/            # 图标组件
│   │   │   ├── 📄 CustomIcon.vue         # 自定义图标
│   │   │   ├── 📄 IconPicker.vue         # 图标选择器
│   │   │   └── 📄 SvgIcon.vue            # SVG图标
│   │   ├── 📁 page/            # 页面组件
│   │   │   ├── 📄 AppPage.vue            # 应用页面
│   │   │   └── 📄 CommonPage.vue         # 通用页面
│   │   ├── 📁 sections/        # 页面区块组件
│   │   │   ├── 📄 HeroSection.vue        # 首页横幅
│   │   │   ├── 📄 AboutSection.vue       # 关于我们
│   │   │   ├── 📄 BusinessSection.vue    # 业务介绍
│   │   │   ├── 📄 CasesSection.vue       # 案例展示
│   │   │   ├── 📄 ContactSection.vue     # 联系我们
│   │   │   └── 📄 NewsSection.vue        # 新闻资讯
│   │   ├── 📁 query-bar/       # 查询栏组件
│   │   └── 📁 table/           # 表格组件
│   ├── 📁 composables/         # 组合式API
│   │   ├── 📄 index.js         # Composables入口
│   │   ├── 📄 useAsyncState.js # 异步状态管理
│   │   └── 📄 useCRUD.js       # CRUD操作封装
│   ├── 📁 directives/          # Vue指令
│   │   ├── 📄 index.js         # 指令入口
│   │   └── 📄 permission.js    # 权限指令
│   ├── 📁 layout/              # 布局组件
│   │   ├── 📁 components/      # 管理后台布局组件
│   │   │   ├── 📁 header/      # 顶部导航
│   │   │   ├── 📁 sidebar/     # 侧边栏
│   │   │   └── 📁 tags/        # 标签页
│   │   ├── 📁 website/         # 企业官网布局
│   │   │   └── 📄 index.vue    # 官网布局入口
│   │   └── 📄 index.vue        # 管理后台布局入口
│   ├── 📁 router/              # 路由配置
│   │   ├── 📁 guard/           # 路由守卫
│   │   │   ├── 📄 auth-guard.js        # 认证守卫
│   │   │   ├── 📄 page-loading-guard.js # 页面加载守卫
│   │   │   └── 📄 page-title-guard.js   # 页面标题守卫
│   │   ├── 📁 routes/          # 路由定义
│   │   │   └── 📄 index.js     # 路由配置
│   │   └── 📄 index.js         # 路由入口
│   ├── 📁 store/               # Pinia状态管理
│   │   ├── 📁 modules/         # 状态模块
│   │   │   ├── 📁 app/         # 应用状态
│   │   │   ├── 📁 permission/  # 权限状态
│   │   │   ├── 📁 tags/        # 标签状态
│   │   │   └── 📁 user/        # 用户状态
│   │   └── 📄 index.js         # 状态管理入口
│   ├── 📁 styles/              # 样式文件
│   │   ├── 📄 design-system.css # 设计系统
│   │   ├── 📄 global.scss      # 全局样式
│   │   └── 📄 reset.css        # 样式重置
│   ├── 📁 utils/               # 工具函数库
│   │   ├── 📁 auth/            # 认证相关工具
│   │   │   ├── 📄 auth.js      # 认证逻辑
│   │   │   └── 📄 token.js     # Token管理
│   │   ├── 📁 common/          # 通用工具
│   │   │   ├── 📄 common.js    # 通用函数
│   │   │   ├── 📄 icon.js      # 图标工具
│   │   │   └── 📄 naiveTools.js # Naive UI工具
│   │   ├── 📁 http/            # HTTP请求封装
│   │   │   ├── 📄 index.js     # HTTP入口
│   │   │   └── 📄 interceptors.js # 请求拦截器
│   │   └── 📁 storage/         # 存储工具
│   │       └── 📄 storage.js   # 本地存储封装
│   ├── 📁 views/               # 页面视图
│   │   ├── 📁 error-page/      # 错误页面
│   │   │   ├── 📄 401.vue      # 未授权
│   │   │   ├── 📄 403.vue      # 禁止访问
│   │   │   ├── 📄 404.vue      # 页面未找到
│   │   │   └── 📄 500.vue      # 服务器错误
│   │   ├── 📁 login/           # 登录页面
│   │   │   └── 📄 index.vue    # 登录入口
│   │   ├── 📁 system/          # 管理后台页面
│   │   │   ├── 📁 api/         # API管理
│   │   │   ├── 📁 auditlog/    # 审计日志
│   │   │   ├── 📁 contact/     # 联系信息管理
│   │   │   ├── 📁 dept/        # 部门管理
│   │   │   ├── 📁 menu/        # 菜单管理
│   │   │   ├── 📁 role/        # 角色管理
│   │   │   └── 📁 user/        # 用户管理
│   │   ├── 📁 website/         # 企业官网页面
│   │   │   ├── 📁 home/        # 首页
│   │   │   ├── 📁 cases/       # 案例展示
│   │   │   ├── 📁 news/        # 新闻资讯
│   │   │   └── 📁 _shared/     # 共享组件
│   │   ├── 📁 workbench/       # 工作台
│   │   └── 📁 profile/         # 个人资料
│   ├── 📄 App.vue              # 应用根组件
│   └── 📄 main.js              # 应用入口文件
├── 📁 i18n/                    # 国际化配置
│   ├── 📁 messages/            # 语言包
│   └── 📄 index.js             # 国际化入口
├── 📁 settings/                # 项目配置
│   ├── 📄 index.js             # 配置入口
│   └── 📄 theme.json           # 主题配置
├── 📄 package.json             # 项目依赖配置
├── 📄 vite.config.js           # Vite配置文件
├── 📄 unocss.config.js         # UnoCSS配置
├── 📄 jsconfig.json            # JavaScript配置
└── 📄 README.md                # 项目说明文档
```

## 🚀 核心功能模块

### 🏢 管理后台系统
管理后台基于RBAC权限模型，提供完整的系统管理功能：

#### 权限管理模块
- **👥 用户管理**：用户增删改查、状态管理、密码重置、角色分配
- **🎭 角色管理**：角色定义、权限分配、层级管理
- **📋 菜单管理**：动态菜单配置、路由权限、菜单层级结构
- **🔌 API管理**：接口权限控制、API分组管理、权限细粒度控制
- **🏢 部门管理**：组织架构管理、部门层级关系

#### 系统功能模块
- **📊 工作台**：数据统计面板、系统监控信息、快捷操作入口
- **📈 审计日志**：用户操作记录、系统访问日志、安全审计
- **📧 联系信息**：客户询盘管理、联系信息维护
- **👤 个人中心**：个人信息管理、密码修改、偏好设置

### 🌐 企业官网系统
企业官网面向公众用户，展示企业形象和业务信息：

#### 展示模块
- **🏠 首页横幅**：企业形象展示、核心价值主张、Call-to-Action
- **📖 关于我们**：公司介绍、发展历程、企业文化、团队展示
- **💼 业务介绍**：产品服务展示、技术能力、解决方案
- **📱 案例展示**：成功案例、项目展示、客户见证
- **📰 新闻资讯**：公司动态、行业资讯、技术分享

#### 交互模块
- **📞 联系我们**：联系方式、在线咨询、客户询盘表单
- **🌍 语言切换**：中英文切换、本地存储持久化
- **📱 响应式适配**：PC/移动端完美适配、触控友好

## 🔧 环境要求

| 环境 | 版本要求 | 说明 |
|------|----------|------|
| **Node.js** | ≥ 18.8.0 | JavaScript运行环境 |
| **pnpm** | 最新版 | 推荐的包管理器（比npm/yarn更快） |
| **现代浏览器** | ES2015+ | Chrome 61+, Firefox 60+, Safari 12+, Edge 79+ |

## 📦 安装方法

### 1. 解压缩
将项目压缩包解压到本地目录


### 2. 进入Web目录
```bash
cd web
```

### 3. 安装包管理器（推荐pnpm）
```bash
# 安装pnpm（如果未安装）
npm install -g pnpm

# 验证安装
pnpm --version
```

### 4. 安装项目依赖
```bash
# 使用pnpm安装（推荐）
pnpm install

# 或使用npm安装
npm install

# 或使用yarn安装
yarn install
```

### 5. 验证安装
```bash
# 检查依赖是否正确安装
pnpm list

# 查看可用脚本
pnpm run
```

## ⚡ 启动方法

### 开发环境启动

#### 方法一：标准启动
```bash
# 进入web目录
cd web

# 启动开发服务器
pnpm dev
```

#### 方法二：指定端口启动
```bash
# 自定义端口启动
pnpm dev --port 3000
```

#### 方法三：host模式启动
```bash
# 允许局域网访问
pnpm dev --host
```

### 访问地址
启动成功后，浏览器会自动打开应用：

- **🌐 企业官网**: http://localhost:3060
- **🏢 管理后台**: http://localhost:3060/admin

### 管理后台登录
> **注意**：访问管理后台需要先启动后端服务

- **用户名**: admin
- **密码**: 123456

### 开发服务器特性
- ⚡ **极速热重载**：代码修改即时反映，无需手动刷新
- 🔍 **错误提示**：友好的错误信息和堆栈跟踪
- 🌐 **局域网访问**：支持手机等设备通过局域网访问
- 📦 **自动依赖**：自动安装缺失的依赖包

### 其他启动命令
```bash
# 代码检查
pnpm lint

# 代码检查并自动修复
pnpm lint:fix

# 代码格式化
pnpm prettier

# 类型检查（如果项目包含TypeScript）
pnpm type-check
```

## 🏗️ 构建部署

### 生产环境构建

#### 1. 构建项目
```bash
# 进入web目录
cd web

# 执行构建
pnpm build
```

#### 2. 构建输出
构建完成后，会在 `dist/` 目录下生成优化后的静态文件：
```
dist/
├── 📁 assets/           # 静态资源（JS/CSS/图片）
├── 📁 images/           # 图片资源
├── 📄 index.html        # 应用入口页面
├── 📄 favicon.svg       # 站点图标
└── 📄 *.gz              # Gzip压缩文件
```

#### 3. 构建分析
```bash
# 分析构建结果
pnpm build --analyze

# 构建完成后会生成 stats.html 文件，可在浏览器中查看
```

### 预览构建结果
```bash
# 本地预览构建结果
pnpm preview

# 访问地址：http://localhost:4173
```

### 部署方式

#### 方式一：静态服务器部署
将 `dist/` 目录内容上传到任何静态服务器：

```bash
# 示例：使用Nginx部署
server {
    listen 80;
    server_name your-domain.com;
    
    root /path/to/your/dist;
    index index.html;
    
    # 支持Vue Router的History模式
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # 静态资源缓存
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

#### 方式二：CDN部署
1. 将 `dist/` 目录上传到CDN
2. 配置CDN的回源策略
3. 设置合适的缓存策略

#### 方式三：Docker部署
项目已包含完整的Docker部署方案：

```bash
# 在项目根目录执行
docker build -t vue-fastapi-admin .
docker run -d -p 80:80 vue-fastapi-admin
```

### 环境变量配置

#### 开发环境配置
创建 `.env.development` 文件：
```bash
# API基础地址
VITE_BASE_API=/api/v1

# 开发服务器端口
VITE_PORT=3060

# 是否启用代理
VITE_USE_PROXY=true

# 是否启用Hash路由
VITE_USE_HASH=false
```

#### 生产环境配置
创建 `.env.production` 文件：
```bash
# API基础地址
VITE_BASE_API=/api/v1

# 公共路径
VITE_PUBLIC_PATH=/

# 启用压缩
VITE_USE_COMPRESS=true

# 启用CDN
VITE_USE_CDN=false
```

### 性能优化

#### 构建优化配置
项目已内置多项性能优化：

- **📦 代码分割**：路由懒加载，按需分块
- **🗜️ 资源压缩**：Gzip压缩，减少传输体积
- **🚀 Tree Shaking**：移除未使用的代码
- **🎯 按需导入**：组件和API按需加载
- **🖼️ 图片优化**：支持WebP格式，自动压缩

#### 部署检查清单
- [ ] 确认API地址配置正确
- [ ] 检查路由模式（Hash/History）
- [ ] 验证静态资源路径
- [ ] 测试在目标环境的兼容性
- [ ] 确认CDN配置（如果使用）
- [ ] 设置合适的缓存策略

## 💻 开发规范

### 代码风格规范

#### 自动化代码格式化
项目已配置完整的代码规范工具：

```bash
# ESLint检查
pnpm lint

# ESLint自动修复
pnpm lint:fix

# Prettier格式化
pnpm prettier
```

#### 提交前检查
项目配置了Git hooks，会在提交前自动执行代码检查：
- 自动运行ESLint检查
- 自动执行Prettier格式化
- 检查提交信息格式

### Vue组件开发规范

#### 1. 组件命名规范
```javascript
// ✅ 好的命名（PascalCase）
components/
├── UserProfile.vue        // 用户资料组件
├── NavigationMenu.vue     // 导航菜单组件
└── ProductCard.vue        // 产品卡片组件

// ❌ 避免的命名
├── userprofile.vue        // 全小写
├── user-profile.vue       // kebab-case
└── USERPROFILE.vue        // 全大写
```

#### 2. 组件结构规范
```vue
<template>
  <!-- 模板内容 -->
</template>

<script>
// 使用Composition API
import { ref, computed, onMounted } from 'vue'

export default {
  name: 'ComponentName',
  props: {
    // props定义
  },
  emits: ['event-name'],
  setup(props, { emit }) {
    // 组件逻辑
    return {
      // 暴露的属性和方法
    }
  }
}
</script>

<style scoped>
/* 组件样式 */
</style>
```

#### 3. 组件分类规范
```
src/components/
├── 📁 common/              # 通用组件（项目通用）
│   ├── AppProvider.vue     # 应用提供者
│   ├── LoadingState.vue    # 加载状态
│   └── ErrorBoundary.vue   # 错误边界
├── 📁 sections/            # 页面区块组件（官网专用）
│   ├── HeroSection.vue     # 首页横幅
│   ├── AboutSection.vue    # 关于我们
│   └── ContactSection.vue  # 联系我们
├── 📁 table/               # 表格组件（管理后台专用）
└── 📁 icon/                # 图标组件
```

### 样式开发规范

#### 1. 优先级规范
```vue
<template>
  <!-- 1. 优先使用UnoCSS原子类 -->
  <div class="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
    <!-- 2. 使用Naive UI组件的内置样式 -->
    <n-button type="primary" size="large">按钮</n-button>
  </div>
</template>

<style scoped>
/* 3. 必要时编写自定义样式 */
.custom-component {
  /* 仅在UnoCSS无法满足需求时使用 */
}
</style>
```

#### 2. 响应式设计规范
```vue
<template>
  <!-- 使用UnoCSS响应式前缀 -->
  <div class="
    grid grid-cols-1 gap-4
    md:grid-cols-2 md:gap-6
    lg:grid-cols-3 lg:gap-8
    xl:grid-cols-4 xl:gap-10
  ">
    <!-- 内容 -->
  </div>
</template>
```

### API请求规范

#### 1. API封装规范
```javascript
// src/api/modules/user.js
import { request } from '@/utils/http'

export default {
  // 获取用户列表
  getUserList(params) {
    return request.get('/user', { params })
  },

  // 创建用户
  createUser(data) {
    return request.post('/user', data)
  },

  // 更新用户
  updateUser(id, data) {
    return request.put(`/user/${id}`, data)
  },

  // 删除用户
  deleteUser(id) {
    return request.delete(`/user/${id}`)
  }
}
```

#### 2. 错误处理规范
```javascript
// 在组件中使用API
import { useMessage } from 'naive-ui'
import userApi from '@/api/modules/user'

export default {
  setup() {
    const message = useMessage()

    const handleSubmit = async (formData) => {
      try {
        await userApi.createUser(formData)
        message.success('创建成功')
      } catch (error) {
        message.error(error.message || '创建失败')
      }
    }

    return { handleSubmit }
  }
}
```

### 状态管理规范

#### 1. Store模块组织
```javascript
// src/store/modules/user/index.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: null,
    token: null,
    permissions: []
  }),

  getters: {
    isLoggedIn: (state) => !!state.token,
    hasPermission: (state) => (permission) => {
      return state.permissions.includes(permission)
    }
  },

  actions: {
    async login(credentials) {
      // 登录逻辑
    },

    async logout() {
      // 登出逻辑
    }
  }
})
```

### 路由开发规范

#### 1. 路由定义规范
```javascript
// src/router/routes/website.js
export const websiteRoutes = [
  {
    path: '/',
    name: 'Website',
    component: () => import('@/layout/website/index.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/website/home/index.vue'),
        meta: { title: '首页' }
      },
      {
        path: 'cases',
        name: 'Cases',
        component: () => import('@/views/website/cases/index.vue'),
        meta: { title: '案例展示' }
      }
    ]
  }
]
```

#### 2. 路由守卫规范
```javascript
// src/router/guard/auth-guard.js
export function createAuthGuard(router) {
  router.beforeEach((to, from, next) => {
    // 权限检查逻辑
    const token = getToken()
    
    if (to.meta.requiresAuth && !token) {
      next('/login')
    } else {
      next()
    }
  })
}
```

### 文件修改限制

#### ⚠️ 官网开发限制
开发企业官网时，**仅允许修改**以下目录的文件：

```
web/src/
├── 📁 views/website/           # ✅ 官网页面（允许修改）
├── 📁 layout/website/          # ✅ 官网布局（允许修改）
├── 📁 components/sections/     # ✅ 页面区块组件（允许修改）
├── 📁 components/common/       # ✅ 通用组件（谨慎修改）
└── 📁 i18n/messages/          # ✅ 语言包（允许修改）
```

#### 🚫 禁止修改的目录
```
web/src/
├── 📁 views/system/           # ❌ 管理后台页面（禁止修改）
├── 📁 layout/components/      # ❌ 管理后台布局（禁止修改）
├── 📁 utils/                  # ❌ 核心工具函数（禁止修改）
├── 📁 store/                  # ❌ 状态管理（谨慎修改）
└── 📁 router/                 # ❌ 路由配置（谨慎修改）
```

## 🚨 常见问题

### 开发环境问题

#### Q: 启动时端口冲突怎么办？
```bash
# A: 指定其他端口启动
pnpm dev --port 3000

# 或修改package.json中的scripts
"dev": "vite --port 3000"
```

#### Q: 依赖安装失败怎么办？
```bash
# A1: 清除缓存重新安装
rm -rf node_modules
rm package-lock.json
pnpm install

# A2: 使用国内镜像源
npm config set registry https://registry.npmmirror.com
pnpm install

# A3: 使用yarn作为替代
yarn install
```

#### Q: 热重载不工作怎么办？
```bash
# A: 检查Vite配置，确保HMR开启
# vite.config.js
export default defineConfig({
  server: {
    hmr: true
  }
})
```

### API请求问题

#### Q: 跨域请求失败怎么办？
```javascript
// A: 检查代理配置
// build/constant.js
export const PROXY_CONFIG = {
  '/api/v1': {
    target: 'http://127.0.0.1:9999',
    changeOrigin: true,
  },
}
```

#### Q: API请求超时怎么办？
```javascript
// A: 调整请求超时时间
// src/utils/http/index.js
const request = axios.create({
  timeout: 30000, // 30秒超时
})
```

### 构建部署问题

#### Q: 构建后页面空白怎么办？
```javascript
// A: 检查公共路径配置
// vite.config.js
export default defineConfig({
  base: './', // 使用相对路径
})
```

#### Q: 路由404问题怎么办？
```nginx
# A: Nginx配置支持SPA路由
location / {
  try_files $uri $uri/ /index.html;
}
```

### 性能优化问题

#### Q: 首屏加载慢怎么办？
```javascript
// A1: 启用路由懒加载
const Home = () => import('@/views/website/home/index.vue')

// A2: 启用组件懒加载
const LazyComponent = defineAsyncComponent(() => 
  import('@/components/LazyComponent.vue')
)

// A3: 优化图片加载
<img loading="lazy" src="image.jpg" alt="description" />
```

#### Q: 打包体积过大怎么办？
```javascript
// A: 分析打包结果并优化
pnpm build --analyze

// 检查bundle分析报告，移除不必要的依赖
```

### 兼容性问题

#### Q: 低版本浏览器兼容性？
```javascript
// A: 配置Babel转译
// vite.config.js
export default defineConfig({
  build: {
    target: 'es2015', // 支持ES2015+
  }
})
```

## 📚 学习资源

### 官方文档
- [Vue 3 官方文档](https://cn.vuejs.org/)
- [Vite 官方文档](https://cn.vitejs.dev/)
- [Naive UI 组件库](https://www.naiveui.com/zh-CN/os-theme)
- [UnoCSS 官方文档](https://unocss.dev/)
- [Pinia 状态管理](https://pinia.vuejs.org/zh/)

### 技术指南
- [Vue 3 组合式API指南](https://cn.vuejs.org/guide/extras/composition-api-faq.html)
- [Vue Router 4 路由指南](https://router.vuejs.org/zh/guide/)
- [TypeScript 入门教程](https://ts.xcatliu.com/)
- [ES6+ 现代JavaScript教程](https://es6.ruanyifeng.com/)

### 开发工具
- [Vue DevTools](https://devtools.vuejs.org/) - Vue开发者工具
- [Vite DevTools](https://github.com/antfu/vite-plugin-vue-devtools) - Vite开发工具
- [UnoCSS 在线工具](https://uno.antfu.me/) - UnoCSS在线调试

## 🤝 贡献指南

### 开发流程
1. Fork项目到个人仓库
2. 创建功能分支: `git checkout -b feature/your-feature`
3. 提交更改: `git commit -m 'feat: add some feature'`
4. 推送分支: `git push origin feature/your-feature`
5. 创建Pull Request

### 提交规范
遵循 [Conventional Commits](https://www.conventionalcommits.org/zh-hans/) 规范：

```bash
# 功能增加
git commit -m "feat: 添加用户管理功能"

# 问题修复
git commit -m "fix: 修复登录页面显示问题"

# 文档更新
git commit -m "docs: 更新API文档"

# 样式调整
git commit -m "style: 调整按钮样式"

# 重构代码
git commit -m "refactor: 重构用户模块"

# 性能优化
git commit -m "perf: 优化首页加载性能"

# 测试相关
git commit -m "test: 添加用户组件测试"
```

## 📄 许可证

本项目基于 [MIT License](../LICENSE) 开源协议。

---

<p align="center">
  <sub>Built with ❤️ by Vue FastAPI Admin Team</sub>
</p>
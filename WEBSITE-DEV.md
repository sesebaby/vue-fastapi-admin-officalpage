# 🌐 官网开发指南

## 📋 快速开始

### 环境要求
- Node.js 18.8.0+
- pnpm（推荐）
- 已启动的前端开发服务器

### 启动官网开发

```bash
# 1. 进入前端目录
cd web

# 2. 安装依赖
pnpm install

# 3. 启动开发服务器
pnpm dev

# 4. 访问官网
# 浏览器打开：http://localhost:3060
```

### 验证功能
- ✅ 语言切换（中/英文）
- ✅ 响应式布局（PC/移动端）
- ✅ 导航跳转（锚点滚动）
- ✅ 管理员入口（跳转到 /admin）

## 🏗️ 架构概览

### 双系统架构
```
vue-fastapi-admin/
├── 🌐 企业官网 (/)              # 面向公众的展示网站
│   ├── 首页展示
│   ├── 语言切换
│   └── 管理员入口
└── 🔐 管理后台 (/admin)         # 基于RBAC的管理系统
    ├── 用户管理
    ├── 权限控制
    └── 系统配置
```

### 路由配置
```javascript
// 官网路由 - 根路径
{
  path: '/',
  name: 'Website',
  component: WebsiteLayout,
  children: [
    {
      path: '',
      component: () => import('@/views/website/home/index.vue'),
      name: 'Home'
    }
  ]
}

// 管理后台路由 - /admin 路径
{
  path: '/admin',
  redirect: '/admin/workbench'
}
```

## 📁 官网目录结构

### 核心目录
```
web/src/
├── 📁 views/website/           # 🎯 官网页面（可修改）
│   └── 📁 home/               # 首页
│       └── 📄 index.vue       # 首页主文件
├── 📁 layout/website/         # 🎯 官网布局（可修改）
│   └── 📄 index.vue           # 主布局组件
└── 📁 components/             # 🎯 组件库（部分可修改）
    ├── 📁 common/             # 通用组件
    │   ├── 📄 LanguageSwitcher.vue    # 语言切换器
    │   ├── 📄 CompanyLogo.vue         # 公司Logo
    │   ├── 📄 NavigationMenu.vue      # 导航菜单
    │   └── 📄 AdminLoginButton.vue    # 管理员入口按钮
    └── 📁 sections/           # 首页区块组件
        ├── 📄 HeroSection.vue         # 轮播横幅
        ├── 📄 AboutSection.vue        # 关于我们
        ├── 📄 BusinessSection.vue     # 核心业务
        ├── 📄 TechnologySection.vue   # 技术能力
        ├── 📄 CasesSection.vue        # 成功案例
        ├── 📄 TrustBuildingSection.vue # 信任建立
        ├── 📄 NewsSection.vue         # 新闻动态
        └── 📄 ContactSection.vue      # 联系我们
```

### 配置文件
```
web/
├── 📁 settings/               # 主题配置
│   ├── 📄 theme.json          # Naive UI 主题覆盖
│   └── 📄 index.js            # 主题导出
├── 📁 i18n/                   # 国际化配置
│   ├── 📄 index.js            # i18n 初始化
│   └── 📁 messages/           # 语言包
│       ├── 📄 cn.json         # 中文语言包
│       └── 📄 en.json         # 英文语言包
└── 📄 vite.config.js          # Vite 构建配置
```

## 🛠️ 技术栈详解

### 核心技术
| 技术 | 版本 | 用途 | 优先级 |
|------|------|------|--------|
| [Vue 3](https://vuejs.org/) | 3.3.4 | 前端框架 | 核心 |
| [Naive UI](https://www.naiveui.com/) | 2.34.4 | UI组件库 | **优先使用** |
| [UnoCSS](https://unocss.dev/) | 0.55.0 | 原子化CSS | 样式工具 |
| [Vue I18n](https://vue-i18n.intlify.dev/) | 9.x | 国际化 | 必需 |
| [@vueuse/core](https://vueuse.org/) | - | 响应式工具 | 推荐 |
| [Pinia](https://pinia.vuejs.org/) | 2.1.6 | 状态管理 | 全局状态 |
| [Vue Router](https://router.vuejs.org/) | 4.2.4 | 路由管理 | 导航 |

### Naive UI 组件使用示例
```vue
<!-- 栅格布局 -->
<n-grid :cols="24" :y-gap="0">
  <n-gi :span="4"><CompanyLogo /></n-gi>
  <n-gi :span="16"><NavigationMenu /></n-gi>
  <n-gi :span="4"><LanguageSwitcher /></n-gi>
</n-grid>

<!-- 抽屉菜单 -->
<n-drawer v-model:show="showMobileMenu" :width="280" placement="right">
  <n-drawer-content title="菜单" closable>
    <n-menu :options="menuOptions" @update:value="handleMenuSelect" />
  </n-drawer-content>
</n-drawer>

<!-- 回到顶部 -->
<n-back-top :right="30" :bottom="30" />

<!-- 固定定位 -->
<n-affix :trigger-top="200" :top="50">
  <n-button circle type="primary">☰</n-button>
</n-affix>
```

## 🎨 核心功能实现

### 1. 响应式设计
```javascript
// 使用 @vueuse/core 的断点管理
import { useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints({
  sm: 769,   // 小平板
  md: 900,   // 平板
  lg: 1024,  // 小桌面
  xl: 1200   // 大桌面
})

// 移动端检测
const isMobile = computed(() => !breakpoints.md.value)

// 响应式导航间距
const navSpacing = computed(() => {
  if (breakpoints.xl.value) return 40
  if (breakpoints.lg.value) return 28
  if (breakpoints.md.value) return 16
  return 12
})
```

### 2. 国际化系统
```javascript
// 语言切换组件
const { locale } = useI18n()
const currentLocale = computed(() => locale.value === 'cn' ? 'zh-CN' : 'en')

const handleLanguageSwitch = (lang) => {
  const targetLang = lang === 'zh-CN' ? 'cn' : 'en'
  locale.value = targetLang
  lStorage.set('locale', targetLang)
  emit('language-changed', targetLang)
}
```

### 3. 主题配置
```json
// web/settings/theme.json - websiteThemeOverrides
{
  "common": {
    "primaryColor": "#1e3a8a",
    "primaryColorHover": "#1e40af", 
    "primaryColorPressed": "#1e3a8a",
    "textColorBase": "#374151",
    "backgroundColor": "#ffffff",
    "borderRadius": "6px",
    "fontSize": "14px",
    "lineHeight": "1.6"
  }
}
```

## 🚨 开发规范

### 修改权限
| 目录/文件 | 权限 | 说明 |
|-----------|------|------|
| `web/src/views/website/` | ✅ 可修改 | 官网页面 |
| `web/src/layout/website/` | ✅ 可修改 | 官网布局 |
| `web/src/components/common/` | ✅ 可修改 | 官网通用组件 |
| `web/src/components/sections/` | ✅ 可修改 | 官网区块组件 |
| `web/settings/` | ✅ 可修改 | 主题配置 |
| `web/i18n/` | ✅ 可修改 | 国际化配置 |
| `web/src/views/!(website)` | ❌ 禁止修改 | 后台管理页面 |
| `web/src/layout/!(website)` | ❌ 禁止修改 | 后台管理布局 |

### 组件开发原则
1. **Naive UI 优先**：必须优先使用 Naive UI 原生组件
2. **完整实现**：严禁使用简化版本或占位符
3. **响应式设计**：确保 PC/移动端适配
4. **国际化支持**：所有文本必须支持中英文切换

### 代码质量要求
- ✅ 语法正确，无错误
- ✅ 功能完整，无缺失
- ✅ 样式一致，无破坏
- ✅ 性能优化，无冗余

## 🔧 常用开发命令

```bash
# 开发环境
pnpm dev              # 启动开发服务器
pnpm build            # 构建生产版本
pnpm preview          # 预览构建结果

# 代码质量
pnpm lint             # 代码检查
pnpm lint:fix         # 自动修复
pnpm prettier         # 代码格式化

# 项目信息
pnpm -v               # 查看 pnpm 版本
node -v               # 查看 Node.js 版本
```

## 📞 技术支持

如遇到问题，请检查：
1. Node.js 版本是否 >= 18.8.0
2. pnpm 是否正确安装
3. 依赖是否完整安装
4. 端口 3060 是否被占用
5. 浏览器控制台是否有错误信息

---

**重要提醒**：开发时请严格遵循修改权限和开发规范，确保不影响后台管理系统的正常运行。

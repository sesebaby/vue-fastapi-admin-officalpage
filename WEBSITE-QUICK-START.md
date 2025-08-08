# 🚀 官网开发快速启动

## 一键启动

```bash
# 1. 启动官网开发环境
cd web && pnpm install && pnpm dev

# 2. 打开浏览器访问
# http://localhost:3060
```

## 📁 官网文件位置

### 可修改的文件 ✅
```
web/src/
├── views/website/          # 官网页面
├── layout/website/         # 官网布局  
├── components/common/      # 通用组件（官网相关）
├── components/sections/    # 首页区块组件
web/settings/              # 主题配置
web/i18n/                  # 国际化配置
```

### 禁止修改的文件 ❌
```
web/src/
├── views/!(website)       # 后台管理页面
├── layout/!(website)      # 后台管理布局
└── components/!(common|sections)  # 后台管理组件
```

## 🛠️ 开发规范

### 必须遵循
1. **Naive UI 优先**：优先使用 Naive UI 原生组件
2. **完整实现**：不允许简化或占位符
3. **响应式设计**：确保 PC/移动端适配
4. **国际化支持**：所有文本支持中英文

### 技术要求
- Vue 3 + Composition API
- Naive UI 组件库
- UnoCSS 原子化样式
- @vueuse/core 响应式工具
- Vue I18n 国际化

## 📖 详细文档

- [完整开发指南](./WEBSITE-DEV.md)
- [项目总览](./README.md)

## 🔧 常用命令

```bash
pnpm dev         # 开发服务器
pnpm build       # 构建生产版本
pnpm lint        # 代码检查
pnpm lint:fix    # 自动修复
```

## 📞 问题排查

1. **端口被占用**：检查 3060 端口
2. **依赖问题**：删除 node_modules 重新安装
3. **语法错误**：运行 `pnpm lint` 检查
4. **样式问题**：检查 UnoCSS 配置

---
**重要**：开发时严格遵循修改权限，确保不影响后台管理系统！

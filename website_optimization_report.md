# 官网导航系统优化报告

本报告旨在对现有官网设计进行锦上添花的改进，提升用户体验、可访问性和代码可维护性。

---

### 1. 核心问题：导航状态不同步

*   **问题描述**: 页面滚动时，顶部主导航栏的高亮状态不会随之更新，与右侧的锚点导航状态不一致。
*   **根本原因**: 布局层级的 `currentNavKey` 状态与页面层级的 `currentSection` 状态相互独立。
*   **推荐方案**: **使用 Pinia 进行全局状态管理**。
    1.  **创建 Store**: 在 `web/src/store/modules/` 目录下新建 `app.js`，定义一个 `useAppStore`，包含一个 `activeSection` 状态和更新它的 `setActiveSection` action。
    2.  **更新页面 (`web/src/views/website/home/index.vue`)**:
        *   引入 `useAppStore`。
        *   在 `IntersectionObserver` 的回调函数 `updateCurrentSection` 中，当 `currentSection.value` 更新时，调用 `appStore.setActiveSection(sections.value[currentSection.value])`。
    3.  **更新布局 (`web/src/layout/website/index.vue`)**:
        *   移除本地的 `currentNavKey` ref。
        *   引入 `useAppStore`，并创建一个计算属性 `activeSection` 直接从 store 中获取值。
        *   将这个计算属性作为 `active-key` prop 传递给 `<NavigationMenu>` 组件。

*   **流程图**:
    ```mermaid
    graph TD
        A[用户滚动页面] --> B{IntersectionObserver};
        B --> C[home/index.vue 更新 currentSection];
        C --> D[调用 Pinia Store Action];
        D --> E[更新 Store 中的 activeSection];
        E --> F[layout/website/index.vue 响应式地获取 activeSection];
        F --> G[更新顶部导航栏 UI];
    ```

---

### 2. 可访问性 (A11y) 优化

*   **问题 1**: 侧边栏汉堡按钮 `☰` 缺少 ARIA 标签。
    *   **文件**: `web/src/views/website/home/index.vue`
    *   **建议**: 为 `<n-button>` 添加 `aria-label="打开导航菜单"`。

*   **问题 2**: 右侧锚点导航点击区域过小 (12x12px)。
    *   **文件**: `web/src/views/website/home/index.vue`
    *   **建议**: 保持内部圆点视觉大小不变，但通过增加 `padding` 或外层包裹 `div` 的方式，将每个按钮的**实际可点击区域**扩大到至少 `24px * 24px`，以符合 WCAG 触摸目标尺寸建议。

*   **问题 3**: 移动端菜单触发按钮缺少展开/折叠状态。
    *   **文件**: `web/src/layout/website/index.vue`
    *   **建议**: 为移动端的 `<n-button>` 动态绑定 `:aria-expanded="showMobileMenu"`。

---

### 3. 用户体验 (UX) 微调

*   **建议 1**: 在用户点击 CTA 按钮（如“获取方案”）后，页面跳转的同时，使用 `window.$message.success('已为您跳转到联系表单')` 给出明确的文本提示。
*   **建议 2**: 为网站主要文本内容添加 `transition: opacity 0.3s ease;`，在切换语言时实现平滑的淡入淡出效果。
*   **建议 3**: 为首次访问的用户，给右侧锚点导航增加一个微妙的引导动画（如延迟的、依次的跳动效果），以提示其可交互性。
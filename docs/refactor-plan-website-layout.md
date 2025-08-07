# Website Layout 重构计划 - Naive UI框架优先原则

## 重构目标
严格遵循"Naive UI框架优先原则"，移除所有可以用Naive UI原生组件属性替代的自定义CSS样式，确保代码质量和维护性。

## 违规CSS样式详细分析

### A. 布局基础样式违规项
1. **`.website-layout` (273-278行)**
   - 违规内容：`display: flex; flex-direction: column; min-height: 100vh;`
   - 替代方案：使用 `<n-layout>` 组件的 `style` 属性
   - 优先级：高

2. **`.website-header` (281-288行)**
   - 违规内容：`background, border-bottom, box-shadow, position, z-index`
   - 替代方案：使用 `n-layout-header` 的 `style` 属性
   - 优先级：高

3. **`.header-container` (291-296行)**
   - 违规内容：`max-width: 1200px; margin: 0 auto; padding: 0 24px; height: 90px;`
   - 替代方案：使用 `n-flex` 组件的布局属性
   - 优先级：高

4. **`.website-main` (346-348行)**
   - 违规内容：`flex: 1;`
   - 替代方案：使用 `n-layout-content` 组件
   - 优先级：中

5. **`.website-footer` (351-355行)**
   - 违规内容：`background, color, padding`
   - 替代方案：使用 `n-layout-footer` 的 `style` 属性
   - 优先级：高

### B. 移动端菜单样式违规项
6. **`.mobile-nav-menu` (322-324行)**
   - 违规内容：`margin-bottom: 20px;`
   - 替代方案：使用 `n-flex` 的 `size` 属性
   - 优先级：中

7. **`.mobile-nav-menu .n-menu-item-content` (326-329行)**
   - 违规内容：`padding: 12px 0 !important; font-weight: 500 !important;`
   - 替代方案：使用 `n-menu` 的 `theme-overrides` 属性
   - 优先级：高（包含!important）

8. **`.mobile-nav-menu .n-menu-item-content:hover` (331-333行)**
   - 违规内容：`color: #1e40af !important;`
   - 替代方案：使用 `n-menu` 的主题定制
   - 优先级：高（包含!important）

9. **`.mobile-actions` (335-339行)**
   - 违规内容：`margin-top: 20px; padding-top: 20px; border-top: 1px solid #f3f4f6;`
   - 替代方案：使用 `n-divider` 组件和 `n-flex` 的 `size` 属性
   - 优先级：中

10. **`.mobile-language-switch` (341-343行)**
    - 违规内容：`margin-bottom: 16px;`
    - 替代方案：使用 `n-flex` 的 `size` 属性
    - 优先级：低

### C. 页脚相关样式违规项
11. **`.footer-container` (357-361行)**
    - 违规内容：`max-width: 1200px; margin: 0 auto; padding: 0 30px;`
    - 替代方案：使用 `n-flex` 组件的布局属性
    - 优先级：高

12. **`.footer-content` (363-365行)**
    - 违规内容：`margin-bottom: 40px;`
    - 替代方案：使用 `n-flex` 的 `size` 属性
    - 优先级：中

13. **`.certifications` (395-399行)**
    - 违规内容：`display: flex; gap: 16px; margin-top: 20px;`
    - 替代方案：使用 `n-flex` 组件
    - 优先级：中

14. **`.cert-badge` (401-409行)**
    - 违规内容：`width, height, object-fit, background, padding, border-radius, transition`
    - 替代方案：使用 `n-image` 组件的属性
    - 优先级：中

### D. 强制覆盖样式违规项（!important）
15. **响应式网格强制覆盖** (515-517行)
    - 违规内容：`grid-template-columns: 1fr !important; gap: 24px !important;`
    - 替代方案：使用 `n-grid` 组件的响应式属性
    - 优先级：高

### E. 大量重复的响应式样式违规项
16. **多个媒体查询中的重复样式** (308-542行)
    - 违规内容：针对 `.nav-item`, `.header-container` 等的重复样式定义
    - 替代方案：使用 Naive UI 组件的响应式属性
    - 优先级：中

## 重构实施步骤

### 第一步：移除违规的布局样式
**目标**：删除基础布局相关的自定义CSS
**文件**：`web/src/layout/website/index.vue`

1.1 移除 `.website-layout` 样式，使用 `n-layout` 的 `style` 属性
1.2 移除 `.website-header` 样式，使用 `n-layout-header` 的 `style` 属性  
1.3 移除 `.header-container` 样式，使用 `n-flex` 组件布局
1.4 移除 `.website-main` 样式，使用 `n-layout-content` 组件
1.5 移除 `.website-footer` 样式，使用 `n-layout-footer` 的 `style` 属性

**验证标准**：页面基础布局保持不变，无CSS语法错误

### 第二步：使用Naive UI组件属性替代自定义CSS
**目标**：将自定义布局CSS转换为Naive UI组件属性

2.1 重构页脚布局，使用 `n-flex` 和 `n-grid` 组件
2.2 重构认证徽章，使用 `n-image` 组件
2.3 重构移动端菜单间距，使用 `n-flex` 的 `size` 属性

**验证标准**：所有布局效果保持一致，组件功能正常

### 第三步：移除强制覆盖样式
**目标**：删除所有 `!important` 声明，使用组件主题定制

3.1 移除移动端菜单的 `!important` 样式
3.2 使用 `n-menu` 的 `theme-overrides` 属性定制样式
3.3 移除响应式网格的强制覆盖样式

**验证标准**：移动端菜单样式保持不变，无强制覆盖样式

### 第四步：整合响应式设计
**目标**：删除重复的媒体查询，使用Naive UI响应式属性

4.1 分析并删除重复的媒体查询
4.2 使用 `n-grid` 的响应式属性替代网格布局媒体查询
4.3 使用 `n-flex` 的响应式属性替代间距媒体查询
4.4 保留必要的字体大小等样式媒体查询

**验证标准**：响应式布局功能完全正常，代码简洁

### 第五步：验证和测试
**目标**：确保重构后功能完整性

5.1 桌面端布局测试（1200px+）
5.2 平板端布局测试（768px-1199px）
5.3 移动端布局测试（<768px）
5.4 交互功能测试（菜单、按钮等）
5.5 主题切换测试

**验证标准**：所有功能正常，视觉效果与重构前一致

## 质量检查清单

### 代码质量
- [ ] 无CSS语法错误
- [ ] 无JavaScript控制台错误
- [ ] 严格遵循Naive UI框架优先原则
- [ ] 无不必要的自定义CSS
- [ ] 无 `!important` 强制覆盖

### 功能完整性
- [ ] 桌面端导航栏正常显示
- [ ] 移动端菜单正常工作
- [ ] 响应式布局正确切换
- [ ] 所有按钮和链接可点击
- [ ] 页面滚动和定位正常

### 视觉效果
- [ ] 布局与重构前一致
- [ ] 间距和对齐正确
- [ ] 颜色和字体正常
- [ ] 动画和过渡效果保持
- [ ] 图片和图标正常显示

## 提交规范

### 提交消息格式
```
重构官网布局: [步骤X.Y] 具体修改内容

- 删除: 列出删除的CSS样式
- 替代: 说明使用的Naive UI组件/属性
- 验证: 确认功能正常

遵循Naive UI框架优先原则，移除自定义CSS
```

### 提交频率
每完成一个小的重构任务（如移除一个CSS类）立即提交，确保可以随时回滚。

## 风险控制

### 回滚策略
如果发现重构后出现问题：
1. 立即使用 `git revert` 回滚最近的提交
2. 分析问题原因
3. 修正后重新提交

### 测试策略
每次提交前必须：
1. 检查浏览器开发者工具无错误
2. 测试桌面端和移动端布局
3. 验证所有交互功能正常

## 预期收益

### 代码质量提升
- 减少自定义CSS代码量约60%
- 提高代码可维护性
- 增强组件复用性
- 改善代码一致性

### 性能优化
- 减少CSS文件大小
- 提高渲染性能
- 优化响应式布局效率

### 开发效率
- 简化样式调试过程
- 提高新功能开发速度
- 降低样式冲突风险

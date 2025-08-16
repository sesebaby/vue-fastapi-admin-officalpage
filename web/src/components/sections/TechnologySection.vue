<template>
  <!-- 技术能力展示区域 - 使用Naive UI原生组件 -->
  <section id="technology" class="technology-section section-full">
    <div class="section-container">
      <!-- 标题区域 -->
      <n-space vertical align="center" :size="20" style="margin-bottom: 80px;">
        <h2 class="section-title">{{ $t('website.technology.title') }}</h2>
        <div class="title-underline"></div>
        <p class="section-subtitle">{{ $t('website.technology.subtitle') }}</p>
      </n-space>

      <!-- 技术内容区域 -->
      <n-space vertical :size="60" class="technology-content">
        <!-- KPI 数据带：展示关键技术指标 -->
        <n-grid cols="xs:2 s:2 m:4 l:4 xl:4" :x-gap="16" :y-gap="16" responsive="screen" class="technology-kpi-band">
          <!-- 交付项目数 -->
          <n-grid-item>
            <n-card size="small" class="kpi-card" hoverable>
              <n-statistic :tabular-nums="true">
                <template #label>
                  {{ $t('website.technology.kpi_projects_label') }}
                </template>
                <template #default>
                  120
                </template>
                <template #suffix>
                  +
                </template>
              </n-statistic>
            </n-card>
          </n-grid-item>
          <!-- 平均交付周期 -->
          <n-grid-item>
            <n-card size="small" class="kpi-card" hoverable>
              <n-statistic :tabular-nums="true">
                <template #label>
                  {{ $t('website.technology.kpi_lead_time_label') }}
                </template>
                <template #prefix>
                  ≤
                </template>
                <template #default>
                  4
                </template>
                <template #suffix>
                  {{ $t('website.technology.kpi_lead_time_unit') }}
                </template>
              </n-statistic>
            </n-card>
          </n-grid-item>
          <!-- 客户满意度 -->
          <n-grid-item>
            <n-card size="small" class="kpi-card" hoverable>
              <n-statistic :tabular-nums="true">
                <template #label>
                  {{ $t('website.technology.kpi_csat_label') }}
                </template>
                <template #default>
                  98
                </template>
                <template #suffix>
                  %
                </template>
              </n-statistic>
            </n-card>
          </n-grid-item>
          <!-- 专利/研发成果 -->
          <n-grid-item>
            <n-card size="small" class="kpi-card" hoverable>
              <n-statistic :tabular-nums="true">
                <template #label>
                  {{ $t('website.technology.kpi_patents_label') }}
                </template>
                <template #default>
                  30
                </template>
                <template #suffix>
                  +
                </template>
              </n-statistic>
            </n-card>
          </n-grid-item>
        </n-grid>

        <!-- 技术概览区域 - 使用Naive UI Grid布局 -->
        <n-grid
          :cols="'xs:1 s:1 m:2 l:2 xl:2'"
          :x-gap="'xs:20 s:30 m:40 l:60 xl:60'"
          :y-gap="'xs:30 s:30 m:40 l:40 xl:40'"
          responsive="screen"
          align-items="center"
        >
          <!-- 左侧图片 -->
          <n-grid-item>
            <n-image
              :src="getImagePath('technology', 'lab_equipment')"
              :fallback-src="PLACEHOLDER_IMAGES.technology"
              alt="商务办公场景"
              object-fit="cover"
              width="100%"
              class="tech-overview-image"
            />
          </n-grid-item>

          <!-- 右侧技术描述 -->
          <n-grid-item>
            <n-space vertical :size="25" class="tech-overview-content">
              <n-space vertical :size="14">
                <h3 class="tech-overview-title">{{ $t('website.technology.overview_title') }}</h3>
                <p class="tech-overview-desc">{{ $t('website.technology.overview_description') }}</p>
              </n-space>

              <!-- 技术亮点 - 使用Naive UI Space和Avatar -->
              <n-space vertical :size="18" class="tech-highlights">
                <n-space align="flex-start" :size="14" class="highlight-item">
                  <n-avatar
                    :size="36"
                    color="#f0f9ff"
                    style="background: #f0f9ff; color: #1e3a8a;"
                    class="highlight-avatar"
                  >
                    🔬
                  </n-avatar>
                  <n-space vertical :size="3">
                    <h4 class="highlight-title">{{ $t('website.technology.highlight_1_title') }}</h4>
                    <p class="highlight-desc">{{ $t('website.technology.highlight_1_desc') }}</p>
                  </n-space>
                </n-space>

                <n-space align="flex-start" :size="14" class="highlight-item">
                  <n-avatar
                    :size="36"
                    color="#f0f9ff"
                    style="background: #f0f9ff; color: #1e3a8a;"
                    class="highlight-avatar"
                  >
                    ⚡
                  </n-avatar>
                  <n-space vertical :size="3">
                    <h4 class="highlight-title">{{ $t('website.technology.highlight_2_title') }}</h4>
                    <p class="highlight-desc">{{ $t('website.technology.highlight_2_desc') }}</p>
                  </n-space>
                </n-space>

                <n-space align="flex-start" :size="14" class="highlight-item">
                  <n-avatar
                    :size="36"
                    color="#f0f9ff"
                    style="background: #f0f9ff; color: #1e3a8a;"
                    class="highlight-avatar"
                  >
                    🎯
                  </n-avatar>
                  <n-space vertical :size="3">
                    <h4 class="highlight-title">{{ $t('website.technology.highlight_3_title') }}</h4>
                    <p class="highlight-desc">{{ $t('website.technology.highlight_3_desc') }}</p>
                  </n-space>
                </n-space>
              </n-space>
            </n-space>
          </n-grid-item>
        </n-grid>

        <!-- 方法论 / 研发流程（横向步骤） - 自定义实现 -->
        <div class="technology-steps">
          <div class="custom-steps">
            <!-- 步骤1：需求洞察 -->
            <div class="step-item">
              <div class="step-indicator">
                <div class="step-icon"></div>
              </div>
              <div class="step-content">
                <div class="step-title">{{ $t('website.technology.step_discover_title') }}</div>
                <div class="step-description">{{ $t('website.technology.step_discover_desc') }}</div>
              </div>
              <div class="step-connector"></div>
            </div>

            <!-- 步骤2：方案设计 -->
            <div class="step-item">
              <div class="step-indicator">
                <div class="step-icon"></div>
              </div>
              <div class="step-content">
                <div class="step-title">{{ $t('website.technology.step_design_title') }}</div>
                <div class="step-description">{{ $t('website.technology.step_design_desc') }}</div>
              </div>
              <div class="step-connector"></div>
            </div>

            <!-- 步骤3：测试验证 -->
            <div class="step-item">
              <div class="step-indicator">
                <div class="step-icon"></div>
              </div>
              <div class="step-content">
                <div class="step-title">{{ $t('website.technology.step_validate_title') }}</div>
                <div class="step-description">{{ $t('website.technology.step_validate_desc') }}</div>
              </div>
              <div class="step-connector"></div>
            </div>

            <!-- 步骤4：量产交付 -->
            <div class="step-item">
              <div class="step-indicator">
                <div class="step-icon"></div>
              </div>
              <div class="step-content">
                <div class="step-title">{{ $t('website.technology.step_delivery_title') }}</div>
                <div class="step-description">{{ $t('website.technology.step_delivery_desc') }}</div>
              </div>
              <!-- 最后一个步骤不需要连接线 -->
            </div>
          </div>
        </div>

        <!-- 技术能力卡片区域 - 使用Naive UI Grid -->
        <n-grid
          cols="xs:2 s:2 m:2 l:4 xl:4"
          x-gap="xs:12 s:16 m:20 l:30 xl:30"
          y-gap="xs:12 s:16 m:20 l:30 xl:30"
          responsive="screen"
        >
          <!-- 先进封装技术卡片 -->
          <n-grid-item>
            <n-card hoverable class="capability-card">
              <n-space vertical align="center" :size="20">
                <n-image
                  :src="getImagePath('technology', 'pcb_design')"
                  :fallback-src="PLACEHOLDER_IMAGES.technology"
                  :alt="$t('website.technology.capability_1_title')"
                  width="80"
                  height="80"
                  object-fit="cover"
                  style="border-radius: 8px;"
                  class="capability-icon"
                />
                <n-space vertical align="center" :size="12">
                  <n-text class="capability-title">
                    {{ $t('website.technology.capability_1_title') }}
                  </n-text>
                  <n-text class="capability-desc">
                    {{ $t('website.technology.capability_1_desc') }}
                  </n-text>
                </n-space>
              </n-space>
            </n-card>
          </n-grid-item>

          <!-- 硬件设计能力卡片 -->
          <n-grid-item>
            <n-card hoverable class="capability-card">
              <n-space vertical align="center" :size="20">
                <n-image
                  :src="getImagePath('technology', 'testing_facility')"
                  :fallback-src="PLACEHOLDER_IMAGES.technology"
                  :alt="$t('website.technology.capability_2_title')"
                  width="80"
                  height="80"
                  object-fit="cover"
                  style="border-radius: 8px;"
                  class="capability-icon"
                />
                <n-space vertical align="center" :size="12">
                  <n-text class="capability-title">
                    {{ $t('website.technology.capability_2_title') }}
                  </n-text>
                  <n-text class="capability-desc">
                    {{ $t('website.technology.capability_2_desc') }}
                  </n-text>
                </n-space>
              </n-space>
            </n-card>
          </n-grid-item>

          <!-- 测试验证服务卡片 -->
          <n-grid-item>
            <n-card hoverable class="capability-card">
              <n-space vertical align="center" :size="20">
                <n-image
                  src="/images/icon_ic_testing.jpg"
                  :alt="$t('website.technology.capability_3_title')"
                  width="80"
                  height="80"
                  object-fit="cover"
                  style="border-radius: 8px;"
                  class="capability-icon"
                />
                <n-space vertical align="center" :size="12">
                  <n-text class="capability-title">
                    {{ $t('website.technology.capability_3_title') }}
                  </n-text>
                  <n-text class="capability-desc">
                    {{ $t('website.technology.capability_3_desc') }}
                  </n-text>
                </n-space>
              </n-space>
            </n-card>
          </n-grid-item>

          <!-- 技术咨询服务卡片 -->
          <n-grid-item>
            <n-card hoverable class="capability-card">
              <n-space vertical align="center" :size="20">
                <n-image
                  src="/images/technical_chart_circuit.jpg"
                  :alt="$t('website.technology.capability_4_title')"
                  width="80"
                  height="80"
                  object-fit="cover"
                  style="border-radius: 8px;"
                  class="capability-icon"
                />
                <n-space vertical align="center" :size="12">
                  <n-text class="capability-title">
                    {{ $t('website.technology.capability_4_title') }}
                  </n-text>
                  <n-text class="capability-desc">
                    {{ $t('website.technology.capability_4_desc') }}
                  </n-text>
                </n-space>
              </n-space>
            </n-card>
          </n-grid-item>
        </n-grid>
      </n-space>
    </div>
  </section>
</template>

<script setup>
import { getImagePath, PLACEHOLDER_IMAGES } from '@/utils/imageUtils'
</script>

<style scoped>
/*
 * TechnologySection样式 - 使用Naive UI原生组件
 * 大部分样式已由n-card、n-grid、n-avatar、n-image等组件自动处理
 */

/* 技术能力展示区域 */
.technology-section {
  /* 恢复浅色背景以与其他 section 保持一致 */
  background: var(--sipumtech-bg-white);
  padding: var(--sipumtech-section-padding-desktop);
}

/* KPI 卡片样式（浅色背景下） */
.technology-kpi-band .kpi-card {
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.06);
  box-shadow: 0 4px 10px rgba(15, 23, 42, 0.04);
  min-height: 120px; /* 卡片等高，避免不齐 */
  display: flex;
  align-items: center;
}

/* 自定义步骤组件样式 */
.technology-steps {
  padding: 20px 0;
}

.custom-steps {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  max-width: 100%;
}

.step-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  flex: 1;
  text-align: center;
}

/* 步骤指示器 */
.step-indicator {
  position: relative;
  z-index: 2;
  margin-bottom: 16px;
}

.step-icon {
  width: 40px;
  height: 40px;
  background-color: var(--sipumtech-primary-blue);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  box-shadow: 0 2px 8px rgba(30, 58, 138, 0.2);
}

.step-icon svg {
  width: 20px;
  height: 20px;
}

/* 步骤内容 */
.step-content {
  max-width: 200px;
}

.step-title {
  font-size: var(--sipumtech-font-size-h6);
  font-weight: var(--sipumtech-font-weight-semibold);
  color: var(--sipumtech-text-primary);
  margin-bottom: 8px;
  line-height: var(--sipumtech-line-height-tight);
}

.step-description {
  font-size: var(--sipumtech-font-size-small);
  color: var(--sipumtech-text-secondary);
  line-height: var(--sipumtech-line-height-normal);
}

/* 连接线 */
.step-connector {
  position: absolute;
  top: 20px;
  left: calc(50% + 20px);
  right: calc(-50% + 20px);
  height: 2px;
  background-color: var(--sipumtech-primary-blue);
  z-index: 1;
}

/* 最后一个步骤不显示连接线 */
.step-item:last-child .step-connector {
  display: none;
}

.section-container {
  max-width: var(--sipumtech-container-max-width);
  margin: 0 auto;
  padding: 0 var(--sipumtech-container-padding-desktop);
}

/* 响应式容器padding - 修复移动端内容区域过窄问题 */
@media (max-width: 1024px) and (min-width: 769px) {
  .section-container {
    padding: 0 var(--sipumtech-container-padding-tablet);
  }
}

@media (max-width: 768px) {
  .section-container {
    padding: 0 var(--sipumtech-container-padding-mobile);
  }
}

/* 保留必要的品牌样式 */
.section-title {
  font-size: var(--sipumtech-font-size-h1);
  font-weight: var(--sipumtech-font-weight-bold);
  color: var(--sipumtech-primary-blue);
  margin: 0;
  line-height: var(--sipumtech-line-height-tight);
}

.title-underline {
  width: 80px;
  height: 4px;
  background: linear-gradient(45deg, var(--sipumtech-accent-orange), #d97706);
  border-radius: var(--sipumtech-radius-sm);
}

.section-subtitle {
  font-size: 18px;
  color: var(--sipumtech-text-secondary);
  margin: 0;
  line-height: var(--sipumtech-line-height-relaxed);
}

/* 技术概览内容样式 */
.tech-overview-title {
  font-size: var(--sipumtech-font-size-h3);
  font-weight: var(--sipumtech-font-weight-bold);
  color: var(--sipumtech-primary-blue);
  margin: 0;
}

.tech-overview-desc {
  font-size: var(--sipumtech-font-size-body);
  color: var(--sipumtech-text-secondary);
  line-height: var(--sipumtech-line-height-loose);
  margin: 0;
}

/* 技术亮点样式 */
.highlight-title {
  font-size: 18px;
  font-weight: var(--sipumtech-font-weight-bold);
  color: var(--sipumtech-text-primary);
  margin: 0;
}

.highlight-desc {
  font-size: var(--sipumtech-font-size-small);
  color: var(--sipumtech-text-secondary);
  margin: 0;
  line-height: var(--sipumtech-line-height-normal);
}

/* 技术能力卡片样式 - 确保高度一致 */
.capability-card {
  min-height: 280px; /* 以"先进封装技术"卡片为基准设置统一高度 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.06);
  box-shadow: 0 4px 10px rgba(15, 23, 42, 0.04);
  transition: all 0.3s ease;
}

.capability-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.12);
}

/* 确保卡片内容垂直居中 */
.capability-card :deep(.n-card__content) {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/*
 * 技术概览和能力卡片样式已移除 - 现在使用Naive UI组件
 * n-grid组件处理布局，n-card组件处理卡片样式
 * n-image组件处理图片显示，n-avatar组件处理图标
 */

/* 技术概览图片样式 - 使用 Naive UI 兼容的方式 */
.tech-overview-image {
  aspect-ratio: 4/3;
  border-radius: 12px;
}

/* 技术概览标题和描述样式 */
.tech-overview-title {
  font-size: var(--sipumtech-font-size-h3);
  font-weight: var(--sipumtech-font-weight-bold);
  color: var(--sipumtech-primary-blue);
  margin: 0;
  line-height: var(--sipumtech-line-height-tight);
}

.tech-overview-desc {
  font-size: var(--sipumtech-font-size-body);
  color: var(--sipumtech-text-secondary);
  line-height: var(--sipumtech-line-height-normal);
  margin: 0;
}

/* 技术亮点样式 */
.highlight-title {
  font-size: var(--sipumtech-font-size-h5);
  font-weight: var(--sipumtech-font-weight-semibold);
  color: var(--sipumtech-text-primary);
  margin: 0;
}

.highlight-desc {
  font-size: var(--sipumtech-font-size-small);
  color: var(--sipumtech-text-secondary);
  line-height: var(--sipumtech-line-height-normal);
  margin: 0;
}

/* 技术能力卡片内容样式 */
.capability-title {
  font-size: 18px !important;
  font-weight: var(--sipumtech-font-weight-bold) !important;
  color: var(--sipumtech-primary-blue) !important;
  text-align: center !important;
}

.capability-desc {
  font-size: var(--sipumtech-font-size-small) !important;
  color: var(--sipumtech-text-secondary) !important;
  line-height: var(--sipumtech-line-height-normal) !important;
  text-align: center !important;
}

.capability-icon {
  flex-shrink: 0;
}

/* 技术亮点样式 */
.highlight-avatar {
  flex-shrink: 0;
}

.highlight-item {
  align-items: flex-start;
}

.tech-overview-content {
  width: 100%;
}

.tech-highlights {
  width: 100%;
}

/* 响应式设计 - 技术能力卡片高度适配 */
@media (max-width: 1024px) {
  /* 平板端：调整卡片高度和字体 */
  .capability-card {
    min-height: 240px;
  }

  .tech-overview-title {
    font-size: var(--sipumtech-font-size-h4);
  }
}

@media (max-width: 768px) {
  /* 移动端：单列布局时调整卡片高度 */
  .capability-card {
    min-height: 180px;
  }

  /* 移动端优化：调整内容间距 */
  .capability-card :deep(.n-space) {
    gap: 16px !important;
  }

  /* 移动端字体优化 */
  .tech-overview-title {
    font-size: var(--sipumtech-font-size-h4);
    text-align: center;
  }

  .tech-overview-desc {
    font-size: var(--sipumtech-font-size-body);
    text-align: center;
  }

  .capability-title {
    font-size: 16px !important;
  }

  .capability-desc {
    font-size: 13px !important;
  }

  /* 移动端图标尺寸调整 */
  .capability-icon {
    width: 56px !important;
    height: 56px !important;
  }

  /* 技术概览区域移动端优化 */
  .tech-overview-image {
    aspect-ratio: 16/9;
    max-height: 200px;
  }

  /* 技术亮点移动端优化 */
  .highlight-avatar :deep(.n-avatar) {
    font-size: 16px !important;
  }

  /* 技术概览内容移动端居中 */
  .tech-overview-content {
    text-align: center;
  }

  .tech-highlights {
    text-align: left;
  }
}

@media (max-width: 480px) {
  /* 小屏幕：进一步优化 */
  .capability-card {
    min-height: 160px;
  }

  .technology-section {
    padding: var(--sipumtech-section-padding-mobile);
  }

  .capability-title {
    font-size: 15px !important;
  }

  .capability-desc {
    font-size: 12px !important;
  }

  .capability-icon {
    width: 50px !important;
    height: 50px !important;
  }

  /* 技术亮点移动端优化 */
  .highlight-title {
    font-size: var(--sipumtech-font-size-body);
  }

  .highlight-desc {
    font-size: var(--sipumtech-font-size-xs);
  }

  /* KPI卡片移动端优化 */
  .technology-kpi-band .kpi-card {
    min-height: 100px;
  }

  /* 自定义步骤移动端优化 */
  .technology-steps {
    padding: 16px 0;
  }

  .custom-steps {
    flex-direction: column;
    align-items: stretch;
    gap: 24px;
  }

  .step-item {
    flex-direction: row;
    text-align: left;
    align-items: flex-start;
  }

  .step-indicator {
    margin-bottom: 0;
    margin-right: 16px;
    flex-shrink: 0;
  }

  .step-icon {
    width: 36px;
    height: 36px;
  }

  .step-icon svg {
    width: 18px;
    height: 18px;
  }

  .step-content {
    max-width: none;
    flex: 1;
  }

  .step-title {
    font-size: var(--sipumtech-font-size-body);
    margin-bottom: 6px;
  }

  .step-description {
    font-size: var(--sipumtech-font-size-xs);
  }

  /* 移动端连接线改为垂直 */
  .step-connector {
    position: absolute;
    top: calc(100% - 12px);
    left: 18px;
    right: auto;
    width: 2px;
    height: 24px;
    background-color: var(--sipumtech-primary-blue);
  }

  /* 最后一个步骤不显示连接线 */
  .step-item:last-child .step-connector {
    display: none;
  }

  /* 整体内容区域移动端优化 */
  .technology-content {
    width: 100%;
  }

  /* 自定义步骤小屏幕优化 */
  .step-icon {
    width: 32px;
    height: 32px;
  }

  .step-icon svg {
    width: 16px;
    height: 16px;
  }

  .step-title {
    font-size: var(--sipumtech-font-size-small);
  }

  .step-description {
    font-size: var(--sipumtech-font-size-xs);
    line-height: 1.4;
  }

  .step-connector {
    left: 16px;
  }
}

/* 超小屏幕优化 (≤375px) */
@media (max-width: 375px) {
  .capability-card {
    min-height: 160px;
  }

  .capability-title {
    font-size: 14px !important;
  }

  .capability-desc {
    font-size: 11px !important;
    line-height: 1.4 !important;
  }

  .capability-icon {
    width: 45px !important;
    height: 45px !important;
  }

  .tech-overview-title {
    font-size: var(--sipumtech-font-size-h5);
  }

  .tech-overview-desc {
    font-size: var(--sipumtech-font-size-small);
  }

  .highlight-avatar :deep(.n-avatar) {
    font-size: 14px !important;
  }
}

/*
 * 响应式布局由 Naive UI 组件和自定义样式结合处理：
 * - n-grid 的 collapsed 属性自动处理小屏幕单列布局
 * - .capability-card 样式确保不同屏幕下的高度一致性
 * - 使用 min-height 而非固定 height，保持内容适应性
 * - 严格遵循 Naive UI 优先原则，仅添加必要的高度控制
 */
</style>

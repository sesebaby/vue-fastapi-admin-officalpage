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
      <n-space vertical :size="80">
        <!-- KPI 数据带：展示关键技术指标 -->
        <n-grid :cols="'xs:1 s:2 m:4 l:4 xl:4'" :x-gap="24" :y-gap="24" responsive="screen" class="technology-kpi-band">
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
          :cols="2"
          :collapsed="true"
          :collapsed-rows="1"
          :x-gap="60"
          :y-gap="40"
          responsive="screen"
          align-items="center"
        >
          <!-- 左侧图片 -->
          <n-grid-item>
            <n-image
              :src="getImagePath('technology', 'lab_equipment')"
              :fallback-src="PLACEHOLDER_IMAGES.technology"
              alt="业务范围"
              object-fit="cover"
              width="100%"
              class="tech-overview-image"
            />
          </n-grid-item>

          <!-- 右侧技术描述 -->
          <n-grid-item>
            <n-space vertical :size="30">
              <n-space vertical :size="16">
                <h3 class="tech-overview-title">{{ $t('website.technology.overview_title') }}</h3>
                <p class="tech-overview-desc">{{ $t('website.technology.overview_description') }}</p>
              </n-space>

              <!-- 技术亮点 - 使用Naive UI Space和Avatar -->
              <n-space vertical :size="20">
                <n-space align="flex-start" :size="16">
                  <n-avatar
                    :size="40"
                    color="#f0f9ff"
                    style="background: #f0f9ff; color: #1e3a8a; font-size: 20px;"
                  >
                    🔬
                  </n-avatar>
                  <n-space vertical :size="4">
                    <h4 class="highlight-title">{{ $t('website.technology.highlight_1_title') }}</h4>
                    <p class="highlight-desc">{{ $t('website.technology.highlight_1_desc') }}</p>
                  </n-space>
                </n-space>

                <n-space align="flex-start" :size="16">
                  <n-avatar
                    :size="40"
                    color="#f0f9ff"
                    style="background: #f0f9ff; color: #1e3a8a; font-size: 20px;"
                  >
                    ⚡
                  </n-avatar>
                  <n-space vertical :size="4">
                    <h4 class="highlight-title">{{ $t('website.technology.highlight_2_title') }}</h4>
                    <p class="highlight-desc">{{ $t('website.technology.highlight_2_desc') }}</p>
                  </n-space>
                </n-space>

                <n-space align="flex-start" :size="16">
                  <n-avatar
                    :size="40"
                    color="#f0f9ff"
                    style="background: #f0f9ff; color: #1e3a8a; font-size: 20px;"
                  >
                    🎯
                  </n-avatar>
                  <n-space vertical :size="4">
                    <h4 class="highlight-title">{{ $t('website.technology.highlight_3_title') }}</h4>
                    <p class="highlight-desc">{{ $t('website.technology.highlight_3_desc') }}</p>
                  </n-space>
                </n-space>
              </n-space>
            </n-space>
          </n-grid-item>
        </n-grid>

        <!-- 方法论 / 研发流程（横向步骤） -->
        <div class="technology-steps">
          <n-steps :current="2" size="medium">
            <n-step :title="$t('website.technology.step_discover_title')" :description="$t('website.technology.step_discover_desc')" />
            <n-step :title="$t('website.technology.step_design_title')" :description="$t('website.technology.step_design_desc')" />
            <n-step :title="$t('website.technology.step_validate_title')" :description="$t('website.technology.step_validate_desc')" />
            <n-step :title="$t('website.technology.step_delivery_title')" :description="$t('website.technology.step_delivery_desc')" />
          </n-steps>
        </div>

        <!-- 技术能力卡片区域 - 使用Naive UI Grid -->
        <n-grid
          :cols="4"
          :collapsed="true"
          :collapsed-rows="2"
          :x-gap="30"
          :y-gap="30"
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
                />
                <n-space vertical align="center" :size="12">
                  <n-text
                    :style="{
                      fontSize: '18px',
                      fontWeight: 'var(--sipumtech-font-weight-bold)',
                      color: 'var(--sipumtech-primary-blue)'
                    }"
                  >
                    {{ $t('website.technology.capability_1_title') }}
                  </n-text>
                  <n-text
                    :style="{
                      fontSize: 'var(--sipumtech-font-size-small)',
                      color: 'var(--sipumtech-text-secondary)',
                      lineHeight: 'var(--sipumtech-line-height-normal)',
                      textAlign: 'center'
                    }"
                  >
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
                />
                <n-space vertical align="center" :size="12">
                  <n-text
                    :style="{
                      fontSize: '18px',
                      fontWeight: 'var(--sipumtech-font-weight-bold)',
                      color: 'var(--sipumtech-primary-blue)'
                    }"
                  >
                    {{ $t('website.technology.capability_2_title') }}
                  </n-text>
                  <n-text
                    :style="{
                      fontSize: 'var(--sipumtech-font-size-small)',
                      color: 'var(--sipumtech-text-secondary)',
                      lineHeight: 'var(--sipumtech-line-height-normal)',
                      textAlign: 'center'
                    }"
                  >
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
                />
                <n-space vertical align="center" :size="12">
                  <n-text
                    :style="{
                      fontSize: '18px',
                      fontWeight: 'var(--sipumtech-font-weight-bold)',
                      color: 'var(--sipumtech-primary-blue)'
                    }"
                  >
                    {{ $t('website.technology.capability_3_title') }}
                  </n-text>
                  <n-text
                    :style="{
                      fontSize: 'var(--sipumtech-font-size-small)',
                      color: 'var(--sipumtech-text-secondary)',
                      lineHeight: 'var(--sipumtech-line-height-normal)',
                      textAlign: 'center'
                    }"
                  >
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
                />
                <n-space vertical align="center" :size="12">
                  <n-text
                    :style="{
                      fontSize: '18px',
                      fontWeight: 'var(--sipumtech-font-weight-bold)',
                      color: 'var(--sipumtech-primary-blue)'
                    }"
                  >
                    {{ $t('website.technology.capability_4_title') }}
                  </n-text>
                  <n-text
                    :style="{
                      fontSize: 'var(--sipumtech-font-size-small)',
                      color: 'var(--sipumtech-text-secondary)',
                      lineHeight: 'var(--sipumtech-line-height-normal)',
                      textAlign: 'center'
                    }"
                  >
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

/* 步骤区域基础留白 */
.technology-steps {
  padding: 8px 4px;
}

/* 当前步骤高亮色保持品牌蓝 */
.technology-steps :deep(.n-step-status-process .n-step-indicator) {
  background-color: #4DA3FF;
}

.section-container {
  max-width: var(--sipumtech-container-max-width);
  margin: 0 auto;
  padding: 0 var(--sipumtech-container-padding-desktop);
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

/*
 * 技术能力卡片样式已完全迁移到 Naive UI 组件
 * - 使用 n-text 组件的 style 属性替代 .capability-title 和 .capability-desc
 * - 使用 n-space align="center" 替代 text-align: center
 * - 移除所有自定义 CSS 类，完全依赖 Naive UI 组件属性
 */

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

/*
 * 响应式布局完全由 Naive UI 组件处理：
 * - n-grid 的 collapsed 属性自动处理小屏幕单列布局
 * - n-grid 的 align-items 属性处理垂直对齐
 * - 移除所有自定义媒体查询和 !important 覆盖
 * - 严格遵循 Naive UI 优先原则
 */
</style>

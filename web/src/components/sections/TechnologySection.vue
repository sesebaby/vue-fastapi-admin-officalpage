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
                  <h4 class="capability-title">{{ $t('website.technology.capability_1_title') }}</h4>
                  <p class="capability-desc">{{ $t('website.technology.capability_1_desc') }}</p>
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
                  <h4 class="capability-title">{{ $t('website.technology.capability_2_title') }}</h4>
                  <p class="capability-desc">{{ $t('website.technology.capability_2_desc') }}</p>
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
                  <h4 class="capability-title">{{ $t('website.technology.capability_3_title') }}</h4>
                  <p class="capability-desc">{{ $t('website.technology.capability_3_desc') }}</p>
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
                  <h4 class="capability-title">{{ $t('website.technology.capability_4_title') }}</h4>
                  <p class="capability-desc">{{ $t('website.technology.capability_4_desc') }}</p>
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
  background: var(--sipumtech-bg-gray);
  padding: var(--sipumtech-section-padding-desktop);
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

/* 技术能力卡片内容样式 */
.capability-title {
  font-size: 18px;
  font-weight: var(--sipumtech-font-weight-bold);
  color: var(--sipumtech-primary-blue);
  margin: 0;
  text-align: center;
}

.capability-desc {
  font-size: var(--sipumtech-font-size-small);
  color: var(--sipumtech-text-secondary);
  margin: 0;
  line-height: var(--sipumtech-line-height-normal);
  text-align: center;
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

/*
 * 响应式布局完全由 Naive UI 组件处理：
 * - n-grid 的 collapsed 属性自动处理小屏幕单列布局
 * - n-grid 的 align-items 属性处理垂直对齐
 * - 移除所有自定义媒体查询和 !important 覆盖
 * - 严格遵循 Naive UI 优先原则
 */
</style>

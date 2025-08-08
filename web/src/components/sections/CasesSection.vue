<template>
  <!-- 成功案例展示区域 - 使用Naive UI原生组件 -->
  <section id="cases" class="cases-section section-half">
    <div class="section-container">
      <!-- 标题区域 -->
      <n-space vertical align="center" :size="20" style="margin-bottom: 80px;">
        <h2 class="section-title">{{ $t('website.cases.title') }}</h2>
        <div class="title-underline"></div>
        <p class="section-subtitle">{{ $t('website.cases.subtitle') }}</p>
      </n-space>

      <!-- 案例内容区域 -->
      <n-space vertical :size="80">
        <!-- 服务概览区域 - 使用Naive UI Grid布局 -->
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
              :src="getImagePath('cases', 'automotive')"
              :fallback-src="PLACEHOLDER_IMAGES.case"
              alt="服务覆盖"
              object-fit="cover"
              width="100%"
              class="overview-image"
            />
          </n-grid-item>

          <!-- 右侧描述 -->
          <n-grid-item>
            <n-space vertical :size="20">
              <h3 class="overview-title">{{ $t('website.cases.overview_title') }}</h3>
              <p class="overview-desc">{{ $t('website.cases.overview_description') }}</p>
            </n-space>
          </n-grid-item>
        </n-grid>

        <!-- 行业领域卡片 - 使用Naive UI Grid -->
        <n-grid
          :cols="5"
          :collapsed="true"
          :collapsed-rows="3"
          :x-gap="24"
          :y-gap="24"
          responsive="screen"
        >
          <!-- 通信设备 -->
          <n-grid-item>
            <n-card hoverable class="sector-card">
              <n-space vertical align="center" :size="16">
                <n-avatar
                  :size="50"
                  color="#f0f9ff"
                  style="background: #f0f9ff; color: #1e3a8a; font-size: 24px;"
                >
                  📡
                </n-avatar>
                <n-space vertical align="center" :size="8">
                  <n-text
                    :style="{
                      fontSize: 'var(--sipumtech-font-size-body)',
                      fontWeight: 'var(--sipumtech-font-weight-bold)',
                      color: 'var(--sipumtech-primary-blue)'
                    }"
                  >
                    {{ $t('website.cases.sector_1_title') }}
                  </n-text>
                  <n-text
                    :style="{
                      fontSize: 'var(--sipumtech-font-size-small)',
                      color: 'var(--sipumtech-text-secondary)',
                      lineHeight: 'var(--sipumtech-line-height-normal)',
                      textAlign: 'center'
                    }"
                  >
                    {{ $t('website.cases.sector_1_desc') }}
                  </n-text>
                </n-space>
              </n-space>
            </n-card>
          </n-grid-item>

          <!-- 消费电子 -->
          <n-grid-item>
            <n-card hoverable class="sector-card">
              <n-space vertical align="center" :size="16">
                <n-avatar
                  :size="50"
                  color="#f0f9ff"
                  style="background: #f0f9ff; color: #1e3a8a; font-size: 24px;"
                >
                  🏫
                </n-avatar>
                <n-space vertical align="center" :size="8">
                  <n-text
                    :style="{
                      fontSize: 'var(--sipumtech-font-size-body)',
                      fontWeight: 'var(--sipumtech-font-weight-bold)',
                      color: 'var(--sipumtech-primary-blue)'
                    }"
                  >
                    {{ $t('website.cases.sector_2_title') }}
                  </n-text>
                  <n-text
                    :style="{
                      fontSize: 'var(--sipumtech-font-size-small)',
                      color: 'var(--sipumtech-text-secondary)',
                      lineHeight: 'var(--sipumtech-line-height-normal)',
                      textAlign: 'center'
                    }"
                  >
                    {{ $t('website.cases.sector_2_desc') }}
                  </n-text>
                </n-space>
              </n-space>
            </n-card>
          </n-grid-item>

          <!-- 工业控制 -->
          <n-grid-item>
            <n-card hoverable class="sector-card">
              <n-space vertical align="center" :size="16">
                <n-avatar
                  :size="50"
                  color="#f0f9ff"
                  style="background: #f0f9ff; color: #1e3a8a; font-size: 24px;"
                >
                  🏭
                </n-avatar>
                <n-space vertical align="center" :size="8">
                  <n-text
                    :style="{
                      fontSize: 'var(--sipumtech-font-size-body)',
                      fontWeight: 'var(--sipumtech-font-weight-bold)',
                      color: 'var(--sipumtech-primary-blue)'
                    }"
                  >
                    {{ $t('website.cases.sector_3_title') }}
                  </n-text>
                  <n-text
                    :style="{
                      fontSize: 'var(--sipumtech-font-size-small)',
                      color: 'var(--sipumtech-text-secondary)',
                      lineHeight: 'var(--sipumtech-line-height-normal)',
                      textAlign: 'center'
                    }"
                  >
                    {{ $t('website.cases.sector_3_desc') }}
                  </n-text>
                </n-space>
              </n-space>
            </n-card>
          </n-grid-item>

          <!-- 医疗设备 -->
          <n-grid-item>
            <n-card hoverable class="sector-card">
              <n-space vertical align="center" :size="16">
                <n-avatar
                  :size="50"
                  color="#f0f9ff"
                  style="background: #f0f9ff; color: #1e3a8a; font-size: 24px;"
                >
                  🏥
                </n-avatar>
                <n-space vertical align="center" :size="8">
                  <n-text
                    :style="{
                      fontSize: 'var(--sipumtech-font-size-body)',
                      fontWeight: 'var(--sipumtech-font-weight-bold)',
                      color: 'var(--sipumtech-primary-blue)'
                    }"
                  >
                    {{ $t('website.cases.sector_4_title') }}
                  </n-text>
                  <n-text
                    :style="{
                      fontSize: 'var(--sipumtech-font-size-small)',
                      color: 'var(--sipumtech-text-secondary)',
                      lineHeight: 'var(--sipumtech-line-height-normal)',
                      textAlign: 'center'
                    }"
                  >
                    {{ $t('website.cases.sector_4_desc') }}
                  </n-text>
                </n-space>
              </n-space>
            </n-card>
          </n-grid-item>

          <!-- 汽车电子 -->
          <n-grid-item>
            <n-card hoverable class="sector-card">
              <n-space vertical align="center" :size="16">
                <n-avatar
                  :size="50"
                  color="#f0f9ff"
                  style="background: #f0f9ff; color: #1e3a8a; font-size: 24px;"
                >
                  🎓
                </n-avatar>
                <n-space vertical align="center" :size="8">
                  <n-text
                    :style="{
                      fontSize: 'var(--sipumtech-font-size-body)',
                      fontWeight: 'var(--sipumtech-font-weight-bold)',
                      color: 'var(--sipumtech-primary-blue)'
                    }"
                  >
                    {{ $t('website.cases.sector_5_title') }}
                  </n-text>
                  <n-text
                    :style="{
                      fontSize: 'var(--sipumtech-font-size-small)',
                      color: 'var(--sipumtech-text-secondary)',
                      lineHeight: 'var(--sipumtech-line-height-normal)',
                      textAlign: 'center'
                    }"
                  >
                    {{ $t('website.cases.sector_5_desc') }}
                  </n-text>
                </n-space>
              </n-space>
            </n-card>
          </n-grid-item>
        </n-grid>

        <!-- 服务流程区域 -->
        <n-space vertical align="center" :size="30">
          <h3 class="process-title">{{ $t('website.cases.process_title') }}</h3>
          <n-image
            :src="getImagePath('cases', 'industrial')"
            :fallback-src="PLACEHOLDER_IMAGES.case"
            :alt="$t('website.cases.process_title')"
            object-fit="contain"
            style="width: 100%; max-width: 800px; height: auto; border-radius: 12px;"
          />
        </n-space>
      </n-space>
    </div>
  </section>
</template>

<script setup>
import { getImagePath, PLACEHOLDER_IMAGES } from '@/utils/imageUtils'
</script>

<style scoped>
/*
 * CasesSection样式 - 使用Naive UI原生组件
 * 大部分样式已由n-card、n-grid、n-avatar、n-image等组件自动处理
 */

/* 成功案例区域 */
.cases-section {
  background: var(--sipumtech-bg-white);
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

/* 服务概览内容样式 */
.overview-title {
  font-size: var(--sipumtech-font-size-h3);
  font-weight: var(--sipumtech-font-weight-bold);
  color: var(--sipumtech-primary-blue);
  margin: 0;
}

.overview-desc {
  font-size: var(--sipumtech-font-size-body);
  color: var(--sipumtech-text-secondary);
  line-height: var(--sipumtech-line-height-loose);
  margin: 0;
}

/* 服务概览图片样式 - 使用 Naive UI 兼容的方式 */
.overview-image {
  aspect-ratio: 4/3;
  border-radius: 12px;
}

/*
 * 行业领域卡片样式已完全迁移到 Naive UI 组件
 * - 使用 n-text 组件的 style 属性替代 .sector-title 和 .sector-desc
 * - 使用 n-space align="center" 替代 text-align: center
 * - 移除所有自定义 CSS 类，完全依赖 Naive UI 组件属性
 */

/* 服务流程标题样式 */
.process-title {
  font-size: var(--sipumtech-font-size-h4);
  font-weight: var(--sipumtech-font-weight-bold);
  color: var(--sipumtech-primary-blue);
}

/*
 * 响应式布局完全由 Naive UI 组件处理：
 * - n-grid 的 collapsed 属性自动处理小屏幕单列布局
 * - n-grid 的 align-items 属性处理垂直对齐
 * - 移除所有自定义媒体查询和 !important 覆盖
 * - 严格遵循 Naive UI 优先原则
 */
</style>

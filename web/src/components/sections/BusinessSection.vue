<template>
  <div>
    <!-- 核心业务展示 - 使用Naive UI原生组件 -->
    <section id="business" class="main-services-section section-full">
      <div class="section-container">
        <!-- 标题区域 -->
        <n-space vertical align="center" :size="20" style="margin-bottom: 60px;">
          <n-text
            :style="{
              fontSize: 'var(--sipumtech-font-size-h1)',
              fontWeight: 'var(--sipumtech-font-weight-bold)',
              color: 'var(--sipumtech-primary-blue)',
              lineHeight: 'var(--sipumtech-line-height-tight)'
            }"
          >
            {{ $t('website.business.title') }}
          </n-text>
          <div class="title-underline"></div>
          <n-text
            :style="{
              fontSize: '18px',
              color: 'var(--sipumtech-text-secondary)',
              lineHeight: 'var(--sipumtech-line-height-relaxed)'
            }"
          >
            {{ $t('website.business.subtitle') }}
          </n-text>
        </n-space>

        <!-- 服务卡片网格 - 使用Naive UI Grid -->
        <n-grid
          :cols="2"
          :x-gap="40"
          :y-gap="40"
          item-responsive
          responsive="screen"
        >
          <!-- 先进封装服务卡片 -->
          <n-grid-item>
            <n-card
              hoverable
              class="service-card"
              @mouseenter="$emit('start-hover')"
              @mouseleave="$emit('end-hover')"
            >
              <n-space vertical :size="20">
                <!-- 服务图标 -->
                <n-space justify="center">
                  <n-image
                    :src="getImagePath('business', 'advanced_packaging')"
                    :fallback-src="PLACEHOLDER_IMAGES.technology"
                    alt="先进封装"
                    width="80"
                    height="80"
                    object-fit="cover"
                    style="border-radius: 8px;"
                  />
                </n-space>

                <!-- 服务信息 -->
                <n-space vertical align="center" :size="12">
                  <n-text
                    :style="{
                      fontSize: 'var(--sipumtech-font-size-small)',
                      fontWeight: 'var(--sipumtech-font-weight-semibold)',
                      color: 'var(--sipumtech-accent-orange)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }"
                  >
                    {{ $t('website.business.advanced_packaging.brand') }}
                  </n-text>
                  <n-text
                    :style="{
                      fontSize: 'var(--sipumtech-font-size-body)',
                      fontWeight: 'var(--sipumtech-font-weight-semibold)',
                      color: 'var(--sipumtech-text-secondary)'
                    }"
                  >
                    {{ $t('website.business.advanced_packaging.subtitle') }}
                  </n-text>
                  <n-text
                    :style="{
                      fontSize: 'var(--sipumtech-font-size-h4)',
                      fontWeight: 'var(--sipumtech-font-weight-bold)',
                      color: 'var(--sipumtech-primary-blue)',
                      lineHeight: '1.3'
                    }"
                  >
                    {{ $t('website.business.advanced_packaging.title') }}
                  </n-text>
                  <n-text
                    :style="{
                      fontSize: 'var(--sipumtech-font-size-body)',
                      color: 'var(--sipumtech-text-secondary)',
                      lineHeight: 'var(--sipumtech-line-height-relaxed)',
                      textAlign: 'center'
                    }"
                  >
                    {{ $t('website.business.advanced_packaging.description') }}
                  </n-text>
                </n-space>

                <!-- 服务特性列表 -->
                <n-list>
                  <n-list-item>
                    <n-thing>
                      <template #description>
                        ✓ {{ $t('website.business.advanced_packaging.feature_1') }}
                      </template>
                    </n-thing>
                  </n-list-item>
                  <n-list-item>
                    <n-thing>
                      <template #description>
                        ✓ {{ $t('website.business.advanced_packaging.feature_2') }}
                      </template>
                    </n-thing>
                  </n-list-item>
                  <n-list-item>
                    <n-thing>
                      <template #description>
                        ✓ {{ $t('website.business.advanced_packaging.feature_3') }}
                      </template>
                    </n-thing>
                  </n-list-item>
                </n-list>

                <!-- CTA按钮 -->
                <n-space justify="center" :size="16">
                  <n-button
                    type="primary"
                    @click="$emit('get-solution', 'advanced-packaging')"
                  >
                    {{ $t('website.cta.get_solution') }}
                  </n-button>
                  <n-button
                    type="default"
                    @click="$emit('tech-consultation', 'advanced-packaging')"
                  >
                    {{ $t('website.cta.tech_consultation') }}
                  </n-button>
                </n-space>
              </n-space>
            </n-card>
          </n-grid-item>

          <!-- 硬件方案服务卡片 -->
          <n-grid-item>
            <n-card
              hoverable
              class="service-card"
              @mouseenter="$emit('start-hover')"
              @mouseleave="$emit('end-hover')"
            >
              <n-space vertical :size="20">
                <!-- 服务图标 -->
                <n-space justify="center">
                  <n-image
                    :src="getImagePath('business', 'hardware_solution')"
                    :fallback-src="PLACEHOLDER_IMAGES.technology"
                    alt="硬件方案"
                    width="80"
                    height="80"
                    object-fit="cover"
                    style="border-radius: 8px;"
                  />
                </n-space>

                <!-- 服务信息 -->
                <n-space vertical align="center" :size="12">
                  <n-text
                    :style="{
                      fontSize: 'var(--sipumtech-font-size-small)',
                      fontWeight: 'var(--sipumtech-font-weight-semibold)',
                      color: 'var(--sipumtech-accent-orange)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }"
                  >
                    {{ $t('website.business.hardware_solution.brand') }}
                  </n-text>
                  <n-text
                    :style="{
                      fontSize: 'var(--sipumtech-font-size-body)',
                      fontWeight: 'var(--sipumtech-font-weight-semibold)',
                      color: 'var(--sipumtech-text-secondary)'
                    }"
                  >
                    {{ $t('website.business.hardware_solution.subtitle') }}
                  </n-text>
                  <n-text
                    :style="{
                      fontSize: 'var(--sipumtech-font-size-h4)',
                      fontWeight: 'var(--sipumtech-font-weight-bold)',
                      color: 'var(--sipumtech-primary-blue)',
                      lineHeight: '1.3'
                    }"
                  >
                    {{ $t('website.business.hardware_solution.title') }}
                  </n-text>
                  <n-text
                    :style="{
                      fontSize: 'var(--sipumtech-font-size-body)',
                      color: 'var(--sipumtech-text-secondary)',
                      lineHeight: 'var(--sipumtech-line-height-relaxed)',
                      textAlign: 'center'
                    }"
                  >
                    {{ $t('website.business.hardware_solution.description') }}
                  </n-text>
                </n-space>

                <!-- 服务特性列表 -->
                <n-list>
                  <n-list-item>
                    <n-thing>
                      <template #description>
                        ✓ {{ $t('website.business.hardware_solution.feature_1') }}
                      </template>
                    </n-thing>
                  </n-list-item>
                  <n-list-item>
                    <n-thing>
                      <template #description>
                        ✓ {{ $t('website.business.hardware_solution.feature_2') }}
                      </template>
                    </n-thing>
                  </n-list-item>
                  <n-list-item>
                    <n-thing>
                      <template #description>
                        ✓ {{ $t('website.business.hardware_solution.feature_3') }}
                      </template>
                    </n-thing>
                  </n-list-item>
                </n-list>

                <!-- CTA按钮 -->
                <n-space justify="center" :size="16">
                  <n-button
                    type="primary"
                    @click="$emit('get-solution', 'hardware-solution')"
                  >
                    {{ $t('website.cta.get_solution') }}
                  </n-button>
                  <n-button
                    type="default"
                    @click="$emit('tech-consultation', 'hardware-solution')"
                  >
                    {{ $t('website.cta.tech_consultation') }}
                  </n-button>
                </n-space>
              </n-space>
            </n-card>
          </n-grid-item>
        </n-grid>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { getImagePath, PLACEHOLDER_IMAGES } from '@/utils/imageUtils'

const { t } = useI18n()

// 定义事件
const emit = defineEmits(['start-hover', 'end-hover', 'get-solution', 'tech-consultation'])
</script>

<style scoped>
/*
 * BusinessSection样式 - 使用Naive UI原生组件
 * 大部分样式已由n-card、n-grid、n-button等组件自动处理
 */

/* 容器样式保留 */
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

/* 响应式字体大小优化 - 应用TrustBuildingSection最佳实践 */
/* 平板端字体优化 (768px-1024px) */
@media (max-width: 1024px) and (min-width: 769px) {
  /* 主标题适度缩小 */
  .main-services-section h2 {
    font-size: var(--sipumtech-font-size-h2) !important;
  }

  /* 服务卡片标题 */
  .main-services-section h3 {
    font-size: var(--sipumtech-font-size-h4) !important;
  }
}

/* 移动端字体优化 (≤768px) */
@media (max-width: 768px) {
  /* 主标题进一步缩小 */
  .main-services-section h2 {
    font-size: var(--sipumtech-font-size-h3) !important;
  }

  /* 服务卡片标题 */
  .main-services-section h3 {
    font-size: var(--sipumtech-font-size-h5) !important;
  }

  /* 描述文字 */
  .main-services-section p {
    font-size: var(--sipumtech-font-size-small) !important;
  }

  /* 按钮文字 */
  .main-services-section button {
    font-size: var(--sipumtech-font-size-small) !important;
  }
}

/* 核心业务展示区域 */
.main-services-section {
  padding: var(--sipumtech-section-padding-desktop);
  background: var(--sipumtech-bg-tech);
}

/* 保留必要的品牌装饰样式 */
.title-underline {
  width: 80px;
  height: 4px;
  background: linear-gradient(45deg, var(--sipumtech-accent-orange), #d97706);
  border-radius: var(--sipumtech-radius-sm);
  margin: 0 auto;
}

/* 服务卡片样式 - 确保高度一致 */
.service-card {
  min-height: 600px; /* 设置统一的最小高度，确保两个卡片高度一致 */
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.06);
  box-shadow: 0 4px 10px rgba(15, 23, 42, 0.04);
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.12);
}

/* 确保卡片内容垂直分布 */
.service-card :deep(.n-card__content) {
  height: 100%;
  display: flex;
  flex-direction: column;
}

/* 确保卡片内的 n-space 填满整个高度并合理分布内容 */
.service-card :deep(.n-space) {
  height: 100%;
  justify-content: space-between;
}

/*
 * 服务卡片内容样式已完全迁移到 Naive UI 组件
 * - 使用 n-text 组件的 style 属性替代所有 HTML 标签样式
 * - 使用 n-space align="center" 替代 text-align: center
 * - 移除所有自定义 CSS 类和 margin: 0 重置
 * - 完全依赖 Naive UI 组件属性管理样式
 */

/* 响应式设计 - 服务卡片高度适配 */
@media (max-width: 1024px) {
  /* 平板端：调整卡片高度 */
  .service-card {
    min-height: 550px;
  }
}

@media (max-width: 768px) {
  /* 移动端：单列布局时调整卡片高度 */
  .service-card {
    min-height: 500px;
  }

  /* 移动端优化：调整内容间距 */
  .service-card :deep(.n-space) {
    gap: 16px !important;
  }
}

@media (max-width: 480px) {
  /* 小屏幕：进一步优化高度 */
  .service-card {
    min-height: 450px;
  }
}

/*
 * 响应式布局完全由 Naive UI 组件处理：
 * - n-grid 的 item-responsive 和 responsive="screen" 自动处理响应式布局
 * - n-space 的 align="center" 处理内容对齐
 * - n-text 组件的 style 属性管理所有文本样式
 * - 保留必要的卡片高度控制以确保视觉一致性
 */
</style>

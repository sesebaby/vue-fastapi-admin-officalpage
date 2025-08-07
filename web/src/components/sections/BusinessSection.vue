<template>
  <div>
    <!-- 服务导航区域 - 使用Naive UI原生组件 -->
    <section class="service-nav-section">
      <div class="section-container">
        <n-space vertical align="center" :size="30">
          <h3 class="service-nav-title">
            {{ $t('website.service_nav.title') }}
          </h3>

          <n-space :size="40" justify="center">
            <n-button
              text
              tag="a"
              href="#advanced-packaging"
              size="large"
              class="service-nav-button"
            >
              {{ $t('website.service_nav.advanced_packaging') }}
            </n-button>
            <n-button
              text
              tag="a"
              href="#hardware-solution"
              size="large"
              class="service-nav-button"
            >
              {{ $t('website.service_nav.hardware_solution') }}
            </n-button>
            <n-button
              text
              tag="a"
              href="#testing-service"
              size="large"
              class="service-nav-button"
            >
              {{ $t('website.service_nav.testing_service') }}
            </n-button>
          </n-space>
        </n-space>
      </div>
    </section>

    <!-- 核心业务展示 - 使用Naive UI原生组件 -->
    <section id="business" class="main-services-section section-full">
      <div class="section-container">
        <!-- 标题区域 -->
        <n-space vertical align="center" :size="20" style="margin-bottom: 60px;">
          <h2 class="section-title">{{ $t('website.business.title') }}</h2>
          <div class="title-underline"></div>
          <p class="section-subtitle">{{ $t('website.business.subtitle') }}</p>
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
                  <h4 class="service-brand">{{ $t('website.business.advanced_packaging.brand') }}</h4>
                  <h4 class="service-subtitle">{{ $t('website.business.advanced_packaging.subtitle') }}</h4>
                  <h5 class="service-title">{{ $t('website.business.advanced_packaging.title') }}</h5>
                  <p class="service-description">
                    {{ $t('website.business.advanced_packaging.description') }}
                  </p>
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
                  <h4 class="service-brand">{{ $t('website.business.hardware_solution.brand') }}</h4>
                  <h4 class="service-subtitle">{{ $t('website.business.hardware_solution.subtitle') }}</h4>
                  <h5 class="service-title">{{ $t('website.business.hardware_solution.title') }}</h5>
                  <p class="service-description">
                    {{ $t('website.business.hardware_solution.description') }}
                  </p>
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

/* 服务导航区域 - 简化样式 */
.service-nav-section {
  padding: 60px 0;
  background: white;
  border-bottom: 1px solid #e5e7eb;
}

.section-container {
  max-width: var(--sipumtech-container-max-width);
  margin: 0 auto;
  padding: 0 var(--sipumtech-container-padding-desktop);
}

/* 保留必要的品牌样式 */
.service-nav-title {
  font-size: var(--sipumtech-font-size-h3);
  font-weight: var(--sipumtech-font-weight-bold);
  color: var(--sipumtech-primary-blue);
  margin: 0;
}

/* 服务导航按钮样式 */
.service-nav-button {
  font-size: var(--sipumtech-font-size-body) !important;
  font-weight: var(--sipumtech-font-weight-semibold) !important;
  color: var(--sipumtech-primary-blue) !important;
}

.service-nav-button:hover {
  color: var(--sipumtech-secondary-blue) !important;
}

/* 核心业务展示区域 */
.main-services-section {
  padding: var(--sipumtech-section-padding-desktop);
  background: var(--sipumtech-bg-gradient-1);
}

/* 保留必要的标题样式 */
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
  margin: 0 auto;
}

.section-subtitle {
  font-size: 18px;
  color: var(--sipumtech-text-secondary);
  margin: 0;
  line-height: var(--sipumtech-line-height-relaxed);
}

/*
 * 服务卡片样式已移除 - 现在使用Naive UI的n-card组件
 * 只保留必要的内容样式
 */

/* 保留的服务内容样式 */
.service-brand {
  font-size: var(--sipumtech-font-size-small);
  font-weight: var(--sipumtech-font-weight-semibold);
  color: var(--sipumtech-accent-orange);
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* 保留的服务内容样式 */
.service-subtitle {
  font-size: var(--sipumtech-font-size-body);
  font-weight: var(--sipumtech-font-weight-semibold);
  color: var(--sipumtech-text-secondary);
  margin: 0;
}

.service-title {
  font-size: var(--sipumtech-font-size-h4);
  font-weight: var(--sipumtech-font-weight-bold);
  color: var(--sipumtech-primary-blue);
  margin: 0;
  line-height: 1.3;
}

.service-description {
  font-size: var(--sipumtech-font-size-body);
  color: var(--sipumtech-text-secondary);
  line-height: var(--sipumtech-line-height-relaxed);
  margin: 0;
  text-align: center;
}

/*
 * 服务特性列表和CTA按钮样式已移除 - 现在使用Naive UI组件
 * n-list组件处理特性列表，n-button组件处理按钮样式
 */

/* 响应式设计 - 简化版，主要依赖Naive UI的响应式能力 */
@media (max-width: 768px) {
  .main-services-section {
    padding: 80px 0;
  }

  .section-container {
    padding: 0 20px;
  }

  .section-title {
    font-size: 32px;
  }
}

@media (max-width: 480px) {
  .service-nav-section {
    padding: 40px 0;
  }

  .main-services-section {
    padding: 60px 0;
  }

  .section-container {
    padding: 0 16px;
  }

  .section-title {
    font-size: 28px;
  }

  .service-title {
    font-size: 20px;
  }
}
</style>

<template>
  <!-- 信任建立区域 - 整合客户证言和企业实力 -->
  <section class="trust-building-section">
    <div class="section-container">
      <!-- 标题区域 -->
      <n-space vertical align="center" :size="20" style="margin-bottom: 80px;">
        <n-text
          :style="{
            fontSize: 'var(--sipumtech-font-size-h1)',
            fontWeight: 'var(--sipumtech-font-weight-bold)',
            color: 'var(--sipumtech-primary-blue)',
            lineHeight: 'var(--sipumtech-line-height-tight)'
          }"
        >
          {{ $t('website.trust.title') }}
        </n-text>
        <div class="title-underline"></div>
        <n-text
          :style="{
            fontSize: '18px',
            color: 'var(--sipumtech-text-secondary)',
            lineHeight: 'var(--sipumtech-line-height-relaxed)'
          }"
        >
          {{ $t('website.trust.subtitle') }}
        </n-text>
      </n-space>

      <n-space vertical :size="80">
        <!-- 企业实力数据展示 -->
        <CompanyStats />

        <!-- 客户证言区域 -->
        <n-space vertical :size="40">
          <n-space vertical align="center" :size="16">
            <h3 class="testimonials-title">{{ $t('website.trust.testimonials_title') }}</h3>
            <p class="testimonials-subtitle">{{ $t('website.trust.testimonials_subtitle') }}</p>
          </n-space>

          <!-- 客户证言轮播 -->
          <n-carousel
            :autoplay="true"
            :interval="6000"
            :show-dots="true"
            :show-arrow="false"
            style="height: auto;"
          >
            <!-- 第一组证言 -->
            <div class="testimonials-slide">
              <n-grid :cols="testimonialCols" :x-gap="30" :y-gap="30">
                <n-grid-item>
                  <CustomerTestimonial
                    :quote="$t('website.trust.testimonial_1_quote')"
                    :customer-name="$t('website.trust.testimonial_1_name')"
                    :customer-title="$t('website.trust.testimonial_1_title')"
                    :company-name="$t('website.trust.testimonial_1_company')"
                    :avatar="getImagePath('customers', 'avatar_1')"
                    :project-tags="[
                      $t('website.project_tags.advanced_packaging'),
                      $t('website.project_tags.pcb_design')
                    ]"
                    :rating="5"
                  />
                </n-grid-item>
                <n-grid-item>
                  <CustomerTestimonial
                    :quote="$t('website.trust.testimonial_2_quote')"
                    :customer-name="$t('website.trust.testimonial_2_name')"
                    :customer-title="$t('website.trust.testimonial_2_title')"
                    :company-name="$t('website.trust.testimonial_2_company')"
                    :avatar="getImagePath('customers', 'avatar_2')"
                    :project-tags="[
                      $t('website.project_tags.hardware_solution'),
                      $t('website.project_tags.system_testing')
                    ]"
                    :rating="5"
                  />
                </n-grid-item>
              </n-grid>
            </div>

            <!-- 第二组证言 -->
            <div class="testimonials-slide">
              <n-grid :cols="testimonialCols" :x-gap="30" :y-gap="30">
                <n-grid-item>
                  <CustomerTestimonial
                    :quote="$t('website.trust.testimonial_3_quote')"
                    :customer-name="$t('website.trust.testimonial_3_name')"
                    :customer-title="$t('website.trust.testimonial_3_title')"
                    :company-name="$t('website.trust.testimonial_3_company')"
                    :avatar="getImagePath('customers', 'avatar_3')"
                    :project-tags="[
                      $t('website.project_tags.tech_consultation'),
                      $t('website.project_tags.solution_optimization')
                    ]"
                    :rating="5"
                  />
                </n-grid-item>
                <n-grid-item>
                  <CustomerTestimonial
                    :quote="$t('website.trust.testimonial_4_quote')"
                    :customer-name="$t('website.trust.testimonial_4_name')"
                    :customer-title="$t('website.trust.testimonial_4_title')"
                    :company-name="$t('website.trust.testimonial_4_company')"
                    :avatar="getImagePath('customers', 'avatar_4')"
                    :project-tags="[
                      $t('website.project_tags.one_stop_service'),
                      $t('website.project_tags.quality_assurance')
                    ]"
                    :rating="5"
                  />
                </n-grid-item>
              </n-grid>
            </div>
          </n-carousel>
        </n-space>

        <!-- 合作伙伴logo墙 -->
        <n-space vertical :size="30">
          <n-space vertical align="center" :size="12">
            <h3 class="partners-title">{{ $t('website.trust.partners_title') }}</h3>
            <p class="partners-subtitle">{{ $t('website.trust.partners_subtitle') }}</p>
          </n-space>

          <!-- 合作伙伴加载状态和错误处理 -->
          <ErrorBoundary @retry="retryPartners">
            <!-- 加载状态 -->
            <LoadingState
              v-if="partnersLoading"
              type="skeleton"
              variant="grid"
              :grid-items="6"
              message="正在加载合作伙伴..."
            />

            <!-- 错误状态 -->
            <n-result
              v-else-if="partnersError"
              status="error"
              title="合作伙伴加载失败"
              description="无法加载合作伙伴信息"
            >
              <template #footer>
                <n-button type="primary" @click="retryPartners">
                  {{ $t('common.retry') }}
                </n-button>
              </template>
            </n-result>

            <!-- 合作伙伴内容 - 瀑布流布局 -->
            <div
              v-else-if="partners && partners.length"
              class="partners-masonry"
              :class="`partners-cols-${partnerCols}`"
            >
              <div
                v-for="(partner, index) in partners"
                :key="partner.name"
                class="partner-card"
                :class="`partner-card-${(index % 3) + 1}`"
                :style="{ animationDelay: `${index * 0.1}s` }"
              >
                <div class="partner-card-inner">
                  <n-image
                    :src="partner.logo"
                    :alt="partner.name"
                    :width="partnerImageSize.width"
                    :height="partnerImageSize.height"
                    object-fit="contain"
                    class="partner-logo"
                    :fallback-src="PLACEHOLDER_IMAGES.logo"
                  />
                  <div class="partner-overlay">
                    <n-text class="partner-name">{{ partner.name }}</n-text>
                  </div>
                </div>
              </div>
            </div>
          </ErrorBoundary>
        </n-space>
      </n-space>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useBreakpoints } from '@vueuse/core'
import { getImagePath, PLACEHOLDER_IMAGES } from '@/utils/imageUtils'
import { useAsyncState } from '@/composables/useAsyncState'
import CustomerTestimonial from '@/components/common/CustomerTestimonial.vue'
import CompanyStats from '@/components/common/CompanyStats.vue'
import LoadingState from '@/components/common/LoadingState.vue'
import ErrorBoundary from '@/components/common/ErrorBoundary.vue'

const { t } = useI18n()

// 响应式设计
const breakpoints = useBreakpoints({
  sm: 768,
  md: 1024,
  lg: 1200
})

const testimonialCols = computed(() => {
  if (breakpoints.md.value) return 2  // 桌面端：2列
  return 1  // 移动端：1列
})

const partnerCols = computed(() => {
  if (breakpoints.lg.value) return 4  // 大屏幕：4列
  if (breakpoints.md.value) return 3  // 中等屏幕：3列
  if (breakpoints.sm.value) return 2  // 平板：2列
  return 1  // 移动端：1列
})

// 合作伙伴图片尺寸（响应式）
const partnerImageSize = computed(() => {
  if (breakpoints.lg.value) return { width: 160, height: 80 }  // 桌面端：160x80
  if (breakpoints.md.value) return { width: 140, height: 70 }  // 平板：140x70
  return { width: 120, height: 60 }  // 移动端：120x60
})

// 模拟异步加载合作伙伴数据
const fetchPartnersData = async () => {
  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 800))

  return [
    { name: '华为', logo: getImagePath('partners', 'huawei') },
    { name: '中兴', logo: getImagePath('partners', 'zte') },
    { name: '小米', logo: getImagePath('partners', 'xiaomi') },
    { name: '联想', logo: getImagePath('partners', 'lenovo') },
    { name: '海康威视', logo: getImagePath('partners', 'hikvision') },
    { name: '大疆', logo: getImagePath('partners', 'dji') }
  ]
}

// 使用异步状态管理
const {
  data: partners,
  isLoading: partnersLoading,
  hasError: partnersError,
  execute: loadPartners,
  retry: retryPartners
} = useAsyncState(fetchPartnersData, {
  immediate: false
})

// 组件挂载时加载数据
onMounted(() => {
  loadPartners()
})
</script>

<style scoped>
/*
 * 信任建立区域样式 - 使用设计系统变量
 */

.trust-building-section {
  background: var(--sipumtech-bg-tech);
  padding: var(--sipumtech-section-padding-desktop);
}

.section-container {
  max-width: var(--sipumtech-container-max-width);
  margin: 0 auto;
  padding: 0 var(--sipumtech-container-padding-desktop);
}

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
  background: var(--sipumtech-accent-green);
  border-radius: var(--sipumtech-radius-sm);
}

.section-subtitle {
  font-size: 18px;
  color: var(--sipumtech-text-secondary);
  margin: 0;
  line-height: var(--sipumtech-line-height-relaxed);
  text-align: center;
}

.testimonials-title,
.partners-title {
  font-size: var(--sipumtech-font-size-h3);
  font-weight: var(--sipumtech-font-weight-bold);
  color: var(--sipumtech-primary-blue);
  margin: 0;
  text-align: center;
}

.testimonials-subtitle,
.partners-subtitle {
  font-size: var(--sipumtech-font-size-body);
  color: var(--sipumtech-text-secondary);
  margin: 0;
  text-align: center;
}

.testimonials-slide {
  padding: var(--sipumtech-space-lg);
}

/* 瀑布流布局样式 */
.partners-masonry {
  display: grid;
  gap: 24px;
  width: 100%;
}

.partners-cols-4 {
  grid-template-columns: repeat(4, 1fr);
}

.partners-cols-3 {
  grid-template-columns: repeat(3, 1fr);
}

.partners-cols-2 {
  grid-template-columns: repeat(2, 1fr);
}

.partners-cols-1 {
  grid-template-columns: 1fr;
}

.partner-card {
  position: relative;
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

.partner-card-inner {
  position: relative;
  padding: 20px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 2px solid rgba(0, 212, 170, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
}

.partner-card-inner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg,
    rgba(0, 212, 170, 0.02) 0%,
    rgba(30, 58, 138, 0.02) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 0;
}

.partner-card-inner:hover::before {
  opacity: 1;
}

.partner-card-inner:hover {
  transform: translateY(-8px);
  border-color: rgba(0, 212, 170, 0.3);
  box-shadow:
    0 12px 32px rgba(0, 0, 0, 0.12),
    0 6px 16px rgba(0, 212, 170, 0.15);
}

/* 不同高度的卡片 */
.partner-card-1 .partner-card-inner {
  min-height: 120px;
}

.partner-card-2 .partner-card-inner {
  min-height: 140px;
}

.partner-card-3 .partner-card-inner {
  min-height: 100px;
}

.partner-logo {
  position: relative;
  z-index: 1;
  opacity: 0.9;
  transition: all 0.4s ease;
  border-radius: 8px;
}

.partner-card-inner:hover .partner-logo {
  opacity: 1;
  transform: scale(1.05);
}

.partner-overlay {
  position: absolute;
  bottom: 8px;
  left: 8px;
  right: 8px;
  padding: 8px 12px;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 8px;
  z-index: 2;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
}

.partner-card-inner:hover .partner-overlay {
  opacity: 1;
  transform: translateY(0);
}

.partner-name {
  color: white;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  display: block;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .trust-building-section {
    padding: var(--sipumtech-section-padding-tablet);
  }

  .section-container {
    padding: 0 var(--sipumtech-container-padding-tablet);
  }

  .section-title {
    font-size: var(--sipumtech-font-size-h2);
  }

  .testimonials-title,
  .partners-title {
    font-size: var(--sipumtech-font-size-h4);
  }

  .partners-masonry {
    gap: 16px;
  }

  .partner-card-inner {
    padding: 16px;
    border-radius: 12px;
  }

  .partner-card-1 .partner-card-inner,
  .partner-card-2 .partner-card-inner,
  .partner-card-3 .partner-card-inner {
    min-height: 100px;
  }

  .partner-name {
    font-size: 12px;
  }
}
</style>

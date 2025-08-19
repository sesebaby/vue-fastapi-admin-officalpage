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

            <!-- 合作伙伴内容 - 2行预览网格布局 -->
            <div v-else-if="partners && partners.length" class="partners-container">
              <n-grid
                :cols="partnerCols"
                :x-gap="10"
                :y-gap="10"
                class="partners-grid"
              >
                <n-grid-item
                  v-for="(partner, index) in displayedPartners"
                  :key="partner.name"
                  class="partner-grid-item"
                  :style="{ animationDelay: `${index * 0.05}s` }"
                >
                  <div class="partner-card">
                    <div class="partner-card-inner">
                      <div class="partner-logo-text-container">
                        <!-- Logo图片 -->
                        <div class="partner-logo-wrapper">
                          <n-image
                            :src="getImagePath('partnerLogos', getPartnerKey(partner.name))"
                            :alt="partner.name"
                            :width="partnerLogoSize.width"
                            :height="partnerLogoSize.height"
                            object-fit="contain"
                            class="partner-logo-image"
                            :fallback-src="PLACEHOLDER_IMAGES.logo"
                          />
                        </div>
                        <!-- 机构名称文字 -->
                        <div class="partner-name-text">
                          {{ partner.name }}
                        </div>
                      </div>
                    </div>
                  </div>
                </n-grid-item>
              </n-grid>

              <!-- 显示更多提示 -->
              <div v-if="partners.length > displayedPartners.length" class="more-partners-hint">
                <n-text class="more-text">
                  {{ morePartnersText }}
                </n-text>
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
  if (breakpoints.lg.value) return 4  // 大屏幕：4列（2行显示8个）
  if (breakpoints.md.value) return 4  // 中等屏幕：4列（2行显示8个）
  if (breakpoints.sm.value) return 2  // 平板：2列（4行显示8个）
  return 2  // 移动端：2列（4行显示8个）
})

// 合作伙伴logo尺寸（响应式）
const partnerLogoSize = computed(() => {
  if (breakpoints.lg.value) return { width: 60, height: 60 }    // 桌面端：60x60
  if (breakpoints.md.value) return { width: 50, height: 50 }    // 平板端：50x50
  return { width: 40, height: 40 }                              // 移动端：40x40
})

// 合作伙伴容器尺寸（统一尺寸）
const partnerContainerSize = computed(() => {
  if (breakpoints.lg.value) return { minHeight: '100px', fontSize: '14px' }  // 桌面端
  if (breakpoints.md.value) return { minHeight: '90px', fontSize: '13px' }   // 平板端
  return { minHeight: '80px', fontSize: '12px' }                             // 移动端
})

// 显示所有合作伙伴（8个合作伙伴，响应式布局）
const displayedPartners = computed(() => {
  if (!partners.value || !partners.value.length) return []

  // 显示所有合作伙伴，不限制数量
  return partners.value
})

// 更多合作伙伴提示文本（移动端优化）
const morePartnersText = computed(() => {
  const remainingCount = partners.value.length - displayedPartners.value.length

  // 移动端显示通用文本，桌面端显示具体数量
  if (breakpoints.sm.value) {
    // 桌面端和平板端：显示具体数量
    return `还有 ${remainingCount} 个合作伙伴...`
  } else {
    // 移动端：显示通用文本
    return '还有更多合作伙伴...'
  }
})

// 模拟异步加载合作伙伴数据
const fetchPartnersData = async () => {
  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 800))

  return [
    // 第一行合作伙伴 - 高等院校
    { name: '上海交通大学', category: 'university' },
    { name: '浙江大学', category: 'university' },
    { name: '福州大学', category: 'university' },
    { name: '西安电子科技大学', category: 'university' },

    // 第二行合作伙伴 - 科研院所和国有企业
    { name: '中国科学院高能物理研究所', category: 'research' },
    { name: '中国兵器工业集团', category: 'enterprise' },
    { name: '中国电子科技集团', category: 'enterprise' },
    { name: '中国航天科技集团', category: 'enterprise' }
  ]
}

// 获取合作伙伴的key（用于图片路径映射）
const getPartnerKey = (partnerName) => {
  const nameToKeyMap = {
    '上海交通大学': 'sjtu',
    '浙江大学': 'zju',
    '福州大学': 'fzu',
    '西安电子科技大学': 'xidian',
    '中国科学院高能物理研究所': 'ihep_cas',
    '中国兵器工业集团': 'norinco',
    '中国电子科技集团': 'cetc',
    '中国航天科技集团': 'casc'
  }

  return nameToKeyMap[partnerName] || 'sjtu' // 默认返回sjtu作为fallback
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

/* 2行预览网格布局样式 */
.partners-container {
  width: 100%;
}

.partners-grid {
  width: 100%;
}

.partner-grid-item {
  opacity: 0;
  animation: fadeInUp 0.4s ease-out forwards;
}

.partner-card {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.partner-card-inner {
  position: relative;
  padding: 12px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(0, 212, 170, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  width: 100%;
  height: 100%;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.partner-logo-text-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 16px;
  background: linear-gradient(135deg,
    rgba(255, 255, 255, 0.98) 0%,
    rgba(248, 250, 252, 0.98) 100%);
  border-radius: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  /* 确保logo+文字容器有足够的空间，响应式最小高度 */
  min-height: 100px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  gap: 8px; /* logo和文字之间的间距 */
}

.more-partners-hint {
  margin-top: 16px;
  text-align: center;
  padding: 8px 16px;
  background: rgba(0, 212, 170, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 212, 170, 0.2);
}

.more-text {
  font-size: 14px;
  color: var(--sipumtech-accent-green);
  font-weight: 500;
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
  transform: translateY(-4px);
  border-color: rgba(0, 212, 170, 0.3);
  box-shadow:
    0 8px 20px rgba(0, 0, 0, 0.1),
    0 4px 12px rgba(0, 212, 170, 0.12);
}

/* Logo包装器样式 */
.partner-logo-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

/* Logo图片样式 */
.partner-logo-image {
  border-radius: 8px;
  transition: all 0.4s ease;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  /* 确保logo清晰显示 */
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
}

/* 机构名称文字样式 */
.partner-name-text {
  color: #1e40af;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  line-height: 1.3;
  transition: all 0.3s ease;
  opacity: 0.9;
  /* 确保文字不会换行过多 */
  word-break: keep-all;
  overflow-wrap: break-word;
}

/* Hover效果 */
.partner-card-inner:hover .partner-logo-image {
  transform: scale(1.05);
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15));
}

.partner-card-inner:hover .partner-name-text {
  color: #1d4ed8;
  opacity: 1;
  text-shadow: 0 1px 3px rgba(29, 78, 216, 0.2);
}

/* 移除旧的文字样式类，已整合到新的logo+文字布局中 */

/* 移除partner-overlay和partner-name样式，因为文字模式不需要 */

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

  .partner-card-inner {
    padding: 8px;
    border-radius: 8px;
    min-height: 60px;
  }

  .partner-logo-text-container {
    padding: 12px;
    min-height: 80px;
    gap: 6px;
  }

  /* 移动端文字样式优化 */
  .partner-name-text {
    font-size: 12px;
    line-height: 1.2;
  }

  .partner-logo-wrapper {
    margin-bottom: 2px;
  }

  .more-partners-hint {
    margin-top: 12px;
    padding: 6px 12px;
  }

  .more-text {
    font-size: 12px;
  }
}
</style>

<template>
  <!-- 企业实力数据展示组件 - 现代化毛玻璃设计 -->
  <div class="stats-wrapper">
    <n-card class="stats-card">
      <n-space vertical :size="40">
        <!-- 标题区域 -->
        <n-space vertical align="center" :size="16">
          <h3 class="stats-title">{{ title || $t('website.stats.title') }}</h3>
          <div class="title-underline"></div>
        </n-space>

        <!-- 主要内容区域 -->
        <n-grid :cols="mainGridCols" :x-gap="40" :y-gap="40">
          <!-- 左侧：统计数据 -->
          <n-grid-item>
            <div class="stats-data-section">
              <n-grid :cols="statsGridCols" :x-gap="20" :y-gap="30">
                <!-- 成立年份 -->
                <n-grid-item>
                  <div class="stat-item">
                    <n-statistic
                      :label="$t('website.stats.founded_year')"
                      :value="2019"
                      :value-style="statisticStyle"
                    >
                      <template #suffix>
                        <span class="stat-suffix">{{ $t('website.stats.year') }}</span>
                      </template>
                    </n-statistic>
                  </div>
                </n-grid-item>

                <!-- 服务客户数 -->
                <n-grid-item>
                  <div class="stat-item">
                    <n-statistic
                      :label="$t('website.stats.clients_served')"
                      value="100+"
                      :value-style="statisticStyle"
                    />
                  </div>
                </n-grid-item>

                <!-- 完成项目数 -->
                <n-grid-item>
                  <div class="stat-item">
                    <n-statistic
                      :label="$t('website.stats.projects_completed')"
                      value="200+"
                      :value-style="statisticStyle"
                    />
                  </div>
                </n-grid-item>

                <!-- 团队规模 -->
                <n-grid-item>
                  <div class="stat-item">
                    <n-statistic
                      :label="$t('website.stats.team_size')"
                      value="15+"
                      :value-style="statisticStyle"
                    >
                      <template #suffix>
                        <span class="stat-suffix">{{ $t('website.stats.people') }}</span>
                      </template>
                    </n-statistic>
                  </div>
                </n-grid-item>

                <!-- 技术专利 -->
                <n-grid-item>
                  <div class="stat-item">
                    <n-statistic
                      :label="$t('website.stats.patents')"
                      value="5+"
                      :value-style="statisticStyle"
                    >
                      <template #suffix>
                        <span class="stat-suffix">{{ $t('website.stats.items') }}</span>
                      </template>
                    </n-statistic>
                  </div>
                </n-grid-item>

                <!-- 行业经验 -->
                <n-grid-item>
                  <div class="stat-item">
                    <n-statistic
                      :label="$t('website.stats.industry_experience')"
                      value="5+"
                      :value-style="statisticStyle"
                    >
                      <template #suffix>
                        <span class="stat-suffix">{{ $t('website.stats.years') }}</span>
                      </template>
                    </n-statistic>
                  </div>
                </n-grid-item>
              </n-grid>
            </div>
          </n-grid-item>

          <!-- 右侧：认证展示 -->
          <n-grid-item>
            <div class="certifications-section">
              <n-space :size="30" justify="center" align="center">
                <!-- ISO9001认证 -->
                <div class="cert-container">
                  <n-tooltip trigger="hover" placement="top">
                    <template #trigger>
                      <div
                        class="cert-card"
                        @mouseenter="showHoverImage('iso9001', $t('website.stats.iso_certification'), $event)"
                        @mouseleave="hideHoverImage"
                      >
                        <n-image
                          :src="getImagePath('certificates', 'iso9001')"
                          :fallback-src="PLACEHOLDER_IMAGES.certificate"
                          alt="ISO9001认证"
                          :width="certImageSize.width"
                          :height="certImageSize.height"
                          object-fit="contain"
                          class="cert-image"
                        />
                        <div class="cert-overlay">
                          <n-text class="cert-name">ISO9001</n-text>
                        </div>
                      </div>
                    </template>
                    {{ $t('website.stats.iso_certification') }}
                  </n-tooltip>
                </div>

                <!-- 军工认证 -->
                <div class="cert-container">
                  <n-tooltip trigger="hover" placement="top">
                    <template #trigger>
                      <div
                        class="cert-card"
                        @mouseenter="showHoverImage('military', $t('website.stats.military_certification'), $event)"
                        @mouseleave="hideHoverImage"
                      >
                        <n-image
                          :src="getImagePath('certificates', 'military')"
                          :fallback-src="PLACEHOLDER_IMAGES.certificate"
                          alt="军工认证"
                          :width="certImageSize.width"
                          :height="certImageSize.height"
                          object-fit="contain"
                          class="cert-image"
                        />
                        <div class="cert-overlay">
                          <n-text class="cert-name">军工认证</n-text>
                        </div>
                      </div>
                    </template>
                    {{ $t('website.stats.military_certification') }}
                  </n-tooltip>
                </div>
              </n-space>
            </div>
          </n-grid-item>
        </n-grid>
      </n-space>
    </n-card>

    <!-- 悬停大图显示 -->
    <div
      v-if="showHoverImageState"
      class="hover-image-overlay"
      :style="hoverImagePosition"
      @mouseenter="keepHoverImage"
      @mouseleave="hideHoverImage"
    >
      <div class="hover-image-container">
        <div class="hover-image-header">
          <n-text strong class="hover-image-title">{{ currentImageTitle }}</n-text>
        </div>
        <n-image
          :src="currentImageSrc"
          :fallback-src="PLACEHOLDER_IMAGES.certificate"
          :alt="currentImageTitle"
          object-fit="contain"
          class="hover-cert-image"
          :width="hoverImageSize.width"
          :height="hoverImageSize.height"
          :img-props="{
            style: 'image-rendering: -webkit-optimize-contrast; image-rendering: crisp-edges;'
          }"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useBreakpoints } from '@vueuse/core'
import { getImagePath, PLACEHOLDER_IMAGES } from '@/utils/imageUtils'

const props = defineProps({
  title: {
    type: String,
    default: ''
  }
})

const { t } = useI18n()

// 响应式设计
const breakpoints = useBreakpoints({
  sm: 768,
  md: 1024,
  lg: 1200
})

// 主要布局网格列数（左右分栏）
const mainGridCols = computed(() => {
  if (breakpoints.md.value) return 2  // 桌面端：左右分栏
  return 1  // 移动端：上下排列
})

// 统计数据网格列数
const statsGridCols = computed(() => {
  if (breakpoints.lg.value) return 3  // 大屏幕：3列
  if (breakpoints.md.value) return 2  // 中等屏幕：2列
  if (breakpoints.sm.value) return 2  // 平板：2列
  return 2  // 移动端：2列
})

// 认证图片尺寸（响应式）
const certImageSize = computed(() => {
  if (breakpoints.lg.value) return { width: 150, height: 150 }  // 桌面端：150x150
  if (breakpoints.md.value) return { width: 130, height: 130 }  // 平板：130x130
  return { width: 110, height: 110 }  // 移动端：110x110
})

// hover大图尺寸（响应式，增强放大效果）
const hoverImageSize = computed(() => {
  if (breakpoints.lg.value) return { width: 450, height: 450 }  // 桌面端：450x450 (3倍放大)
  if (breakpoints.md.value) return { width: 380, height: 380 }  // 平板：380x380 (约3倍放大)
  return { width: 320, height: 320 }  // 移动端：320x320 (约3倍放大)
})

// 统计数字样式
const statisticStyle = computed(() => ({
  fontSize: '36px',
  fontWeight: 'bold',
  color: 'var(--sipumtech-primary-blue)',
  textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
}))

// 悬停大图状态
const showHoverImageState = ref(false)
const currentImageSrc = ref('')
const currentImageTitle = ref('')
const hoverImagePosition = ref({})
let hoverTimer = null

// 显示悬停大图
const showHoverImage = (imageKey, title, event) => {
  // 清除之前的定时器
  if (hoverTimer) {
    clearTimeout(hoverTimer)
  }

  currentImageSrc.value = getImagePath('certificates', imageKey)
  currentImageTitle.value = title

  // 计算大图显示位置
  const rect = event.currentTarget.getBoundingClientRect()
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight

  // 大图尺寸（使用响应式尺寸）
  const imageWidth = hoverImageSize.value.width + 40  // 加上容器padding
  const imageHeight = hoverImageSize.value.height + 80  // 加上标题和padding

  // 计算最佳位置（优先显示在右侧，如果空间不够则显示在左侧）
  let left = rect.right + 20
  let top = rect.top + (rect.height - imageHeight) / 2

  // 如果右侧空间不够，显示在左侧
  if (left + imageWidth > viewportWidth - 20) {
    left = rect.left - imageWidth - 20
  }

  // 确保不超出视口顶部和底部
  if (top < 20) {
    top = 20
  } else if (top + imageHeight > viewportHeight - 20) {
    top = viewportHeight - imageHeight - 20
  }

  hoverImagePosition.value = {
    position: 'fixed',
    left: `${left}px`,
    top: `${top}px`,
    zIndex: 9999
  }

  showHoverImageState.value = true
}

// 隐藏悬停大图
const hideHoverImage = () => {
  hoverTimer = setTimeout(() => {
    showHoverImageState.value = false
    currentImageSrc.value = ''
    currentImageTitle.value = ''
  }, 50) // 减少延迟到50ms，提升响应速度
}

// 保持悬停大图显示（当鼠标移到大图上时）
const keepHoverImage = () => {
  if (hoverTimer) {
    clearTimeout(hoverTimer)
    hoverTimer = null
  }
}
</script>

<style scoped>
/*
 * 企业实力数据展示组件样式 - 现代化毛玻璃设计
 */

.stats-wrapper {
  position: relative;
  padding: 4px;
  border-radius: 24px;
  background: linear-gradient(135deg,
    rgba(0, 212, 170, 0.1) 0%,
    rgba(30, 58, 138, 0.1) 50%,
    rgba(245, 158, 11, 0.1) 100%
  );
}

.stats-card {
  position: relative;
  border: none;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow:
    0 12px 40px rgba(0, 0, 0, 0.1),
    0 6px 20px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.stats-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg,
    rgba(0, 212, 170, 0.02) 0%,
    rgba(30, 58, 138, 0.02) 50%,
    rgba(245, 158, 11, 0.02) 100%
  );
  pointer-events: none;
  z-index: 0;
}

.stats-card > * {
  position: relative;
  z-index: 1;
}

.stats-title {
  font-size: var(--sipumtech-font-size-h3);
  font-weight: var(--sipumtech-font-weight-bold);
  color: var(--sipumtech-primary-blue);
  margin: 0;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title-underline {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg,
    var(--sipumtech-accent-green) 0%,
    var(--sipumtech-primary-blue) 100%
  );
  border-radius: var(--sipumtech-radius-sm);
  box-shadow: 0 2px 8px rgba(0, 212, 170, 0.3);
}

.stats-data-section {
  padding: 20px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.stat-item {
  text-align: center;
  padding: 16px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 212, 170, 0.1);
}

.stat-item:hover {
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.8);
  border-color: rgba(0, 212, 170, 0.3);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.stat-suffix {
  font-size: 18px;
  color: var(--sipumtech-text-secondary);
  margin-left: 6px;
  font-weight: 500;
}

.certifications-section {
  padding: 20px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
}

.cert-card {
  position: relative;
  padding: 24px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 2px solid rgba(0, 212, 170, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.cert-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg,
    rgba(0, 212, 170, 0.05) 0%,
    rgba(30, 58, 138, 0.05) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 0;
}

.cert-card:hover::before {
  opacity: 1;
}

.cert-card:hover {
  transform: translateY(-16px) scale(1.12);
  border-color: var(--sipumtech-accent-green);
  box-shadow:
    0 25px 50px rgba(0, 0, 0, 0.2),
    0 15px 25px rgba(0, 212, 170, 0.3),
    0 8px 16px rgba(30, 58, 138, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
}

.cert-image {
  position: relative;
  z-index: 1;
  border-radius: 8px;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
}

.cert-overlay {
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

.cert-card:hover .cert-overlay {
  opacity: 1;
  transform: translateY(0);
}

.cert-name {
  color: white;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  display: block;
}

/* 悬停大图样式 */
.cert-container {
  position: relative;
}

.hover-image-overlay {
  position: fixed;
  pointer-events: auto;
  z-index: 9999;
  animation: fadeInScale 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.25));
}

.hover-image-container {
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  border-radius: 20px;
  padding: 24px;
  box-shadow:
    0 25px 60px rgba(0, 0, 0, 0.2),
    0 12px 30px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(0, 212, 170, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  border: 3px solid rgba(0, 212, 170, 0.4);
  max-width: none; /* 移除最大宽度限制，让图片完整显示 */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-image-header {
  text-align: center;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 2px solid rgba(0, 212, 170, 0.2);
}

.hover-image-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--sipumtech-primary-blue);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.hover-cert-image {
  border-radius: 16px;
  box-shadow:
    0 12px 32px rgba(0, 0, 0, 0.2),
    0 6px 16px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100% !important;
  height: auto !important;
  max-width: none; /* 移除最大宽度限制 */
  /* 提升图片清晰度 */
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  image-rendering: high-quality;
  -ms-interpolation-mode: bicubic;
}

.hover-cert-image:hover {
  transform: scale(1.03);
  box-shadow:
    0 16px 40px rgba(0, 0, 0, 0.25),
    0 8px 20px rgba(0, 0, 0, 0.15);
}

@keyframes fadeInScale {
  0% {
    opacity: 0;
    transform: scale(0.8) translateY(20px);
    filter: blur(4px);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.02) translateY(-2px);
    filter: blur(1px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
    filter: blur(0px);
  }
}

/* 暗色模式适配 */
@media (prefers-color-scheme: dark) {
  .stats-card {
    background: rgba(30, 30, 30, 0.9);
    box-shadow:
      0 12px 40px rgba(0, 0, 0, 0.3),
      0 6px 20px rgba(0, 0, 0, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }

  .stats-data-section,
  .certifications-section {
    background: rgba(40, 40, 40, 0.5);
    border-color: rgba(255, 255, 255, 0.1);
  }

  .stat-item {
    background: rgba(50, 50, 50, 0.6);
    border-color: rgba(0, 212, 170, 0.2);
  }

  .cert-card {
    background: rgba(50, 50, 50, 0.8);
    border-color: rgba(0, 212, 170, 0.3);
  }
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .stats-data-section,
  .certifications-section {
    padding: 16px;
  }

  .cert-card {
    padding: 20px;
  }
}

@media (max-width: 768px) {
  .stats-wrapper {
    padding: 2px;
    border-radius: 20px;
  }

  .stats-card {
    border-radius: 16px;
  }

  .stats-title {
    font-size: var(--sipumtech-font-size-h4);
  }

  .stats-data-section,
  .certifications-section {
    padding: 12px;
    border-radius: 12px;
  }

  .stat-item {
    padding: 12px;
    border-radius: 8px;
  }

  .cert-card {
    padding: 16px;
    border-radius: 16px;
  }

  .cert-name {
    font-size: 12px;
  }

  .hover-image-container {
    padding: 20px;
    max-width: 90vw; /* 移动端使用视口宽度 */
    border-radius: 16px;
  }

  .hover-cert-image {
    max-width: 100%; /* 移动端图片自适应容器 */
    border-radius: 12px;
  }

  .hover-image-title {
    font-size: 14px;
  }
}

/* 动画效果 */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}

.cert-card:hover .cert-image {
  animation: pulse 2s ease-in-out infinite;
}

/* 数据项进入动画 */
.stat-item {
  animation: fadeInUp 0.6s ease-out;
}

.stat-item:nth-child(1) { animation-delay: 0.1s; }
.stat-item:nth-child(2) { animation-delay: 0.2s; }
.stat-item:nth-child(3) { animation-delay: 0.3s; }
.stat-item:nth-child(4) { animation-delay: 0.4s; }
.stat-item:nth-child(5) { animation-delay: 0.5s; }
.stat-item:nth-child(6) { animation-delay: 0.6s; }

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

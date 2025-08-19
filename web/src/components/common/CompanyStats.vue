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
        <n-space vertical :size="50">
          <!-- 上半部分：数据统计卡片区域 -->
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

          <!-- 下半部分：认证证书展示区域 -->
          <div class="certifications-section">
            <div class="certifications-header">
              <n-text class="section-title">资质认证</n-text>
              <n-text class="section-subtitle">权威认证，品质保障</n-text>
            </div>
            <div class="certificates-container">
              <!-- ISO9001认证 -->
              <div class="cert-container">
                <div class="cert-display-card">
                  <div class="cert-header">
                    <n-text class="cert-title">ISO9001质量管理体系认证</n-text>
                  </div>
                  <div class="cert-image-wrapper">
                    <n-image
                      :src="getImagePath('certificates', 'iso9001')"
                      :fallback-src="PLACEHOLDER_IMAGES.certificate"
                      alt="ISO9001认证"
                      width="280"
                      height="280"
                      object-fit="contain"
                      class="cert-display-image"
                      preview-disabled
                    />
                  </div>
                  <div class="cert-description">
                    <n-text class="cert-desc-text">{{ $t('website.stats.iso_certification') }}</n-text>
                  </div>
                </div>
              </div>

              <!-- 军工认证 -->
              <div class="cert-container">
                <div class="cert-display-card">
                  <div class="cert-header">
                    <n-text class="cert-title">武器装备质量管理体系认证</n-text>
                  </div>
                  <div class="cert-image-wrapper">
                    <n-image
                      :src="getImagePath('certificates', 'military')"
                      :fallback-src="PLACEHOLDER_IMAGES.certificate"
                      alt="军工认证"
                      width="280"
                      height="280"
                      object-fit="contain"
                      class="cert-display-image"
                      preview-disabled
                    />
                  </div>
                  <div class="cert-description">
                    <n-text class="cert-desc-text">{{ $t('website.stats.military_certification') }}</n-text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </n-space>
      </n-space>
    </n-card>


  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
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



// 统计数字样式
const statisticStyle = computed(() => ({
  fontSize: '36px',
  fontWeight: 'bold',
  color: 'var(--sipumtech-primary-blue)',
  textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
}))
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

/* 认证证书展示区域 */
.certifications-section {
  padding: 40px 30px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

/* 认证区域标题 */
.certifications-header {
  margin-bottom: 40px;
  text-align: center;
}

.section-title {
  font-size: 24px;
  font-weight: 700;
  color: var(--sipumtech-primary-blue);
  display: block;
  margin-bottom: 8px;
}

.section-subtitle {
  font-size: 16px;
  color: var(--sipumtech-text-secondary);
  opacity: 0.8;
}

/* 证书容器 */
.certificates-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  flex-wrap: wrap;
}

/* 证书直接展示卡片样式 */
.cert-display-card {
  position: relative;
  padding: 24px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 2px solid rgba(0, 212, 170, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  text-align: center;
  width: 100%;
  max-width: 380px;
  margin: 0 auto;
}

.cert-display-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
  border-color: rgba(0, 212, 170, 0.4);
}

/* 证书标题样式 */
.cert-header {
  margin-bottom: 20px;
}

.cert-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--sipumtech-primary-blue);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

/* 证书图片容器样式 - 遵循Naive UI设计原则 */
.cert-image-wrapper {
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.3);
  padding: 12px;
  border: 1px solid rgba(0, 212, 170, 0.1);
}

.cert-display-image {
  width: 100%;
  height: auto;
  max-width: 280px;
  object-fit: contain;
  border-radius: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.cert-display-image:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* 证书描述样式 */
.cert-description {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid rgba(0, 212, 170, 0.2);
}

.cert-desc-text {
  font-size: 14px;
  color: var(--sipumtech-text-secondary);
  line-height: 1.5;
}

/* 证书容器样式 */
.cert-container {
  position: relative;
  flex: 1;
  max-width: 450px;
}



/* 响应式设计 - 遵循Naive UI断点规范 */
@media (max-width: 768px) {
  .certifications-section {
    padding: 24px 20px;
  }

  .certificates-container {
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }

  .cert-display-card {
    max-width: 100%;
    padding: 20px;
  }

  .cert-title {
    font-size: 16px;
  }

  .cert-display-image {
    max-width: 260px;
  }

  .section-title {
    font-size: 20px;
  }

  .section-subtitle {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .certifications-section {
    padding: 20px 16px;
  }

  .certificates-container {
    gap: 24px;
  }

  .cert-display-card {
    padding: 16px;
  }

  .cert-title {
    font-size: 14px;
  }

  .cert-display-image {
    max-width: 220px;
  }

  .cert-desc-text {
    font-size: 12px;
  }

  .section-title {
    font-size: 18px;
  }

  .section-subtitle {
    font-size: 13px;
  }

  .certifications-header {
    margin-bottom: 30px;
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
/* 大屏桌面端优化 (1920x1080+) */
@media (min-width: 1920px) {
  .hover-image-container {
    padding: 16px;
    border-radius: 14px;
    max-width: 70vw;
    max-height: 70vh;
  }

  .hover-image-title {
    font-size: 18px;
  }
}

/* 标准桌面端 (1366x768 - 1919x1080) */
@media (min-width: 1366px) and (max-width: 1919px) {
  .hover-image-container {
    padding: 14px;
    border-radius: 12px;
    max-width: 72vw;
    max-height: 72vh;
  }
}

/* 平板端优化 */
@media (max-width: 1024px) and (min-width: 769px) {
  .stats-data-section,
  .certifications-section {
    padding: 16px;
  }

  .cert-card {
    padding: 20px;
  }

  /* 平板横屏优化 */
  @media (orientation: landscape) {
    .hover-image-container {
      max-width: 75vw;
      max-height: 75vh;
      padding: 12px;
    }
  }

  /* 平板竖屏优化 */
  @media (orientation: portrait) {
    .hover-image-container {
      max-width: 80vw;
      max-height: 70vh;
      padding: 12px;
    }
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
    /* 移动端触摸优化 */
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
  }

  .cert-name {
    font-size: 12px;
  }

  .hover-image-container {
    padding: 12px;
    max-width: 85vw; /* 移动端使用视口宽度，留出更多边距 */
    max-height: 80vh; /* 限制最大高度，避免超出屏幕 */
    border-radius: 12px;
    /* 移动端优化 */
    overflow: hidden;
    position: relative;
  }

  .hover-cert-image {
    max-width: 100%; /* 移动端图片自适应容器 */
    max-height: calc(90vh - 120px); /* 减去标题和padding的高度 */
    border-radius: 12px;
    object-fit: contain; /* 确保图片完整显示 */
  }

  .hover-image-title {
    font-size: 14px;
    line-height: 1.4;
  }

  .hover-image-header {
    margin-bottom: 16px;
    padding: 6px 0 12px 0;
    min-height: 36px;
  }
}

/* iPhone XR/11 (414x896) 优化 */
@media (max-width: 414px) and (min-width: 376px) {
  .hover-image-container {
    max-width: 82vw;
    max-height: 75vh;
    padding: 10px;
  }

  .hover-cert-image {
    max-height: calc(85vh - 100px);
  }
}

/* iPhone 6/7/8 (375x667) 优化 */
@media (max-width: 375px) and (min-width: 361px) {
  .hover-image-container {
    max-width: 80vw;
    max-height: 72vh;
    padding: 8px;
    border-radius: 10px;
  }

  .hover-cert-image {
    max-height: calc(80vh - 90px);
    border-radius: 10px;
  }

  .hover-image-title {
    font-size: 13px;
  }
}

/* 小屏Android (360x640) 优化 */
@media (max-width: 360px) {
  .hover-image-container {
    max-width: 78vw;
    max-height: 70vh;
    padding: 8px;
    border-radius: 8px;
  }

  .hover-cert-image {
    max-height: calc(75vh - 80px);
    border-radius: 8px;
  }

  .hover-image-title {
    font-size: 12px;
  }

  .hover-image-header {
    margin-bottom: 12px;
    padding: 4px 0 8px 0;
    min-height: 32px;
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

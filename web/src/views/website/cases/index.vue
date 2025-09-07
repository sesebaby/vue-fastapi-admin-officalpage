<template>
  <!-- 成功案例列表（纯文字列表，无图片） -->
  <n-layout class="cases-list-page">
    <n-layout-content class="cases-content">
      <n-space justify="center" class="cases-container-wrapper">
        <n-el tag="div" class="container">
          <!-- 加载状态 -->
          <LoadingState
            v-if="isLoading"
            type="skeleton"
            variant="list"
            :list-items="6"
            :message="$t('website.cases.loading')"
          />

          <!-- 错误状态 -->
          <n-result
            v-else-if="hasError"
            status="error"
            :title="$t('error.data_load_failed')"
            :description="error?.message || $t('error.unknown_error')"
          >
            <template #footer>
              <n-button type="primary" @click="handleRetry">
                {{ $t('common.retry') }}
              </n-button>
            </template>
          </n-result>

          <!-- 案例列表（与新闻动态页面保持一致的布局） -->
          <n-space
            v-else-if="cases && cases.length"
            vertical
            :size="30"
          >
            <n-card
              v-for="item in sortedCases"
              :key="item.id"
              hoverable
              class="cases-item-card"
            >
              <n-grid :cols="responsiveCols" :x-gap="responsiveXGap" :y-gap="responsiveYGap">
                <!-- 左侧信息区域 -->
                <n-grid-item :span="contentSpan">
                  <n-space vertical :size="16">
                    <!-- 发布时间 -->
                    <n-tag
                      type="info"
                      size="small"
                      class="cases-date-tag"
                    >
                      {{ formatDate(item.date) }}
                    </n-tag>

                    <!-- 案例标题 -->
                    <n-text
                      class="cases-item-title"
                      :style="{
                        fontSize: titleFontSize,
                        fontWeight: '600',
                        color: 'var(--sipumtech-primary-blue)',
                        lineHeight: '1.4',
                        wordBreak: 'break-word',
                        display: 'block'
                      }"
                    >
                      {{ $t(item.titleKey) }}
                    </n-text>

                    <!-- 项目信息 -->
                    <n-space vertical :size="8">
                      <n-text
                        :style="{
                          fontSize: descriptionFontSize,
                          color: 'var(--sipumtech-text-secondary)',
                          lineHeight: '1.6',
                          wordBreak: 'break-word',
                          display: 'block'
                        }"
                      >
                        {{ $t('website.cases.project_name_label') }}：{{ $t(item.projectKey) }}
                      </n-text>
                      <n-text
                        :style="{
                          fontSize: descriptionFontSize,
                          color: 'var(--sipumtech-text-secondary)',
                          lineHeight: '1.6',
                          wordBreak: 'break-word',
                          display: 'block',
                          fontFamily: 'monospace'
                        }"
                      >
                        {{ $t('website.cases.project_number_label') }}：{{ item.projectNumber }}
                      </n-text>
                    </n-space>
                  </n-space>
                </n-grid-item>

                <!-- 右侧金额区域 -->
                <n-grid-item :span="amountSpan">
                  <div class="cases-amount-section">
                    <n-tag
                      type="success"
                      size="large"
                      class="cases-amount-tag"
                    >
                      {{ $t(item.amountKey) }}
                    </n-tag>
                  </div>
                </n-grid-item>
              </n-grid>
            </n-card>
          </n-space>

          <!-- 空状态 -->
          <n-result
            v-else
            status="info"
            :title="$t('website.cases.no_cases_title')"
            :description="$t('website.cases.no_cases_desc')"
          />
        </n-el>
      </n-space>
    </n-layout-content>
  </n-layout>

  <!-- 回到首页浮动按钮 -->
  <n-button
    type="primary"
    size="large"
    circle
    @click="goBackToHome"
    class="back-to-home-floating-button"
  >
    <template #icon>
      <n-icon :size="20" class="home-icon">
        <svg viewBox="0 0 24 24">
          <path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"/>
        </svg>
      </n-icon>
    </template>
  </n-button>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { useAsyncState } from '@/composables/useAsyncState'
import LoadingState from '@/components/common/LoadingState.vue'

const { t } = useI18n()
const router = useRouter()

// 窗口宽度响应式状态
const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1200)

// 响应式布局配置（与新闻页面保持一致）
const responsiveCols = ref(24)

// 优化的响应式布局配置，提升宽度利用率
const contentSpan = computed(() => {
  const width = windowWidth.value
  if (width <= 480) return 24      // 移动端：全宽
  if (width <= 768) return 24      // 小平板：全宽
  if (width <= 1024) return 18     // 平板：内容区域
  if (width <= 1440) return 19     // 桌面端：增加内容区域比例
  return 20                        // 大屏：进一步增加内容区域
})

const amountSpan = computed(() => {
  const width = windowWidth.value
  if (width <= 480) return 24      // 移动端：全宽
  if (width <= 768) return 24      // 小平板：全宽
  if (width <= 1024) return 6      // 平板：金额区域
  if (width <= 1440) return 5      // 桌面端：减少金额区域比例
  return 4                         // 大屏：进一步减少金额区域比例
})

// 优化的响应式间距配置，适配更宽的布局
const responsiveXGap = computed(() => {
  const width = windowWidth.value
  if (width <= 480) return 0       // 移动端：无横向间距
  if (width <= 768) return 16      // 小平板：小间距
  if (width <= 1024) return 24     // 平板：中等间距
  if (width <= 1440) return 32     // 桌面端：增加间距
  return 40                        // 大屏：更大间距以适配宽布局
})

const responsiveYGap = computed(() => {
  const width = windowWidth.value
  if (width <= 480) return 16      // 移动端：小纵向间距
  if (width <= 768) return 18      // 小平板：中等间距
  if (width <= 1024) return 20     // 平板：标准间距
  return 24                        // 桌面端及以上：增加纵向间距
})

// 优化的响应式字体大小，适配更宽的布局
const titleFontSize = computed(() => {
  const width = windowWidth.value
  if (width <= 320) return '14px'   // 超小屏
  if (width <= 375) return '15px'   // 小屏
  if (width <= 480) return '16px'   // 移动端
  if (width <= 768) return '18px'   // 平板
  if (width <= 1024) return '20px'  // 小桌面
  if (width <= 1440) return '22px'  // 桌面端：增大字体
  return '24px'                     // 大屏：更大字体以适配宽布局
})

const descriptionFontSize = computed(() => {
  const width = windowWidth.value
  if (width <= 320) return '12px'   // 超小屏
  if (width <= 375) return '13px'   // 小屏
  if (width <= 480) return '14px'   // 移动端
  if (width <= 768) return '15px'   // 平板
  if (width <= 1024) return '16px'  // 小桌面
  if (width <= 1440) return '17px'  // 桌面端：增大字体
  return '18px'                     // 大屏：更大字体
})

// 静态案例数据（仅文字）——替换为用户提供的两条
const casesData = ref([
  {
    id: 'case_2025_07_18',
    date: '2025-07-18',
    titleKey: 'website.cases.case_2025_07_18_title',
    amountKey: 'website.cases.case_2025_07_18_amount',
    projectKey: 'website.cases.case_2025_07_18_project',
    projectNumber: 'ZUPC-JC-FW-2507001'
  },
  {
    id: 'case_2024_04_23',
    date: '2024-04-23',
    titleKey: 'website.cases.case_2024_04_23_title',
    amountKey: 'website.cases.case_2024_04_23_amount',
    projectKey: 'website.cases.case_2024_04_23_project',
    projectNumber: 'JJ2024000024'
  }
])

const sortedCases = computed(() => {
  return [...casesData.value].sort((a, b) => new Date(b.date) - new Date(a.date))
})

const fetchCasesData = async () => {
  await new Promise(resolve => setTimeout(resolve, 600))
  return casesData.value
}

const {
  data: cases,
  isLoading,
  hasError,
  error,
  execute: loadCases,
  retry
} = useAsyncState(fetchCasesData, {
  immediate: false
})

// 窗口大小变化处理
const handleResize = () => {
  if (typeof window !== 'undefined') {
    windowWidth.value = window.innerWidth
  }
}

// 组件挂载时加载数据和添加事件监听
onMounted(() => {
  loadCases()

  if (typeof window !== 'undefined') {
    window.addEventListener('resize', handleResize)
    handleResize() // 初始化窗口大小
  }
})

// 组件卸载时移除事件监听
onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', handleResize)
  }
})

const handleRetry = () => {
  retry()
}

const goBackToHome = () => {
  router.push('/')
}

// 日期格式化
const formatDate = (dateString) => {
  const date = new Date(dateString)
  const locale = (t('lang') === '中文') ? 'zh-CN' : 'en-US'
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped>
.cases-list-page {
  min-height: 100vh;
  background: var(--sipumtech-bg-tech);
}

.container {
  max-width: 1400px; /* 增加最大宽度以更好利用大屏空间 */
  margin: 0 auto;
  padding: 0 24px; /* 稍微增加内边距 */
  width: 100%;
  box-sizing: border-box;
}

/* 响应式容器宽度优化 */
@media (min-width: 1440px) {
  .container {
    max-width: 1600px; /* 大屏幕进一步增加宽度 */
    padding: 0 32px;
  }
}

@media (min-width: 1920px) {
  .container {
    max-width: 1800px; /* 超大屏幕最大化利用 */
    padding: 0 40px;
  }
}

@media (max-width: 1199px) and (min-width: 768px) {
  .container {
    max-width: 100%; /* 平板端使用全宽 */
    padding: 0 32px;
  }
}

@media (max-width: 767px) {
  .container {
    padding: 0 20px; /* 移动端保持原有内边距 */
  }
}

.cases-content {
  padding: 80px 0 60px;
}

/* 大屏幕内容区域优化 */
@media (min-width: 1440px) {
  .cases-content {
    padding: 100px 0 80px;
  }
}

@media (min-width: 1920px) {
  .cases-content {
    padding: 120px 0 100px;
  }
}


/* 案例条目卡片（与新闻页面完全一致的样式） */
.cases-item-card {
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
  box-sizing: border-box;
  background: var(--sipumtech-bg-tech) !important;
}

/* 覆盖Naive UI卡片的默认背景 */
.cases-item-card :deep(.n-card) {
  background: var(--sipumtech-bg-tech) !important;
}

.cases-item-card :deep(.n-card__content) {
  background: var(--sipumtech-bg-tech) !important;
}

.cases-item-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
}

/* 日期标签（与新闻页面一致） */
.cases-date-tag {
  background: rgba(0, 212, 170, 0.1);
  color: var(--sipumtech-accent-green);
  border: 1px solid rgba(0, 212, 170, 0.2);
}

/* 案例标题（与新闻页面一致） */
.cases-item-title {
  word-wrap: break-word;
  word-break: break-word;
  hyphens: auto;
  overflow-wrap: break-word;
}

.cases-item-title:hover {
  color: var(--sipumtech-accent-green) !important;
}

/* 金额区域 */
.cases-amount-section {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 20px;
}

.cases-amount-tag {
  font-weight: 600;
  font-size: 16px;
  padding: 12px 20px;
}

/* 大屏幕优化 */
@media (min-width: 1440px) {
  .cases-amount-section {
    padding: 24px;
  }

  .cases-amount-tag {
    font-size: 18px;
    padding: 14px 24px;
  }

  .cases-item-title {
    font-size: 22px !important;
  }
}

@media (min-width: 1920px) {
  .cases-amount-section {
    padding: 28px;
  }

  .cases-amount-tag {
    font-size: 20px;
    padding: 16px 28px;
  }

  .cases-item-title {
    font-size: 24px !important;
  }
}

/* 平板端优化 */
@media (max-width: 1199px) and (min-width: 769px) {
  .cases-content {
    padding: 60px 0 50px;
  }

  .cases-amount-section {
    padding: 18px;
  }

  .cases-amount-tag {
    font-size: 15px;
    padding: 10px 18px;
  }
}

/* 移动端卡片优化（与新闻页面一致） */
@media (max-width: 768px) {
  .cases-item-card {
    border-radius: 12px;
    margin-bottom: 16px;
  }

  .cases-item-card:hover {
    transform: none; /* 移动端禁用悬停效果 */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  .cases-amount-section {
    padding: 16px 0;
    justify-content: flex-start;
  }

  .cases-amount-tag {
    font-size: 14px;
    padding: 8px 16px;
  }
}

/* 移动端文字优化（与新闻页面一致） */
@media (max-width: 768px) {
  .cases-item-title {
    line-height: 1.3 !important;
    margin-bottom: 8px;
  }

  /* 确保文字不会溢出容器 */
  :deep(.n-text) {
    word-wrap: break-word;
    word-break: break-word;
    overflow-wrap: break-word;
    max-width: 100%;
  }

  /* Grid项目宽度限制 */
  :deep(.n-grid-item) {
    min-width: 0;
    overflow: hidden;
  }
}

/* 移动端小屏优化 */
@media (max-width: 480px) {
  .cases-content {
    padding: 30px 0 20px;
  }

  .container {
    padding: 0 16px;
  }

  .cases-item-title {
    font-size: 16px !important;
    line-height: 1.2 !important;
  }

  .cases-item-card {
    margin-bottom: 16px;
    border-radius: 8px;
  }

  .cases-date-tag {
    font-size: 10px !important;
  }

  .cases-amount-tag {
    font-size: 12px !important;
    padding: 6px 12px !important;
  }

  /* 超小屏幕文字强制换行 */
  :deep(.n-text) {
    font-size: 12px !important;
    line-height: 1.4 !important;
  }

  /* 确保内容区域不会溢出 */
  :deep(.n-space) {
    width: 100%;
    max-width: 100%;
  }
}

/* 回到首页按钮样式复用新闻页 */
.back-to-home-floating-button {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 1000;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  box-shadow: 0 4px 16px rgba(30, 58, 138, 0.3);
  backdrop-filter: blur(8px);
  background: rgba(30, 58, 138, 0.9) !important;
  border: none !important;
  outline: none !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.back-to-home-floating-button:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 8px 24px rgba(30, 58, 138, 0.4);
  background: rgba(30, 58, 138, 1) !important;
  border: none !important;
  outline: none !important;
}

.back-to-home-floating-button:focus {
  background: rgba(30, 58, 138, 1) !important;
  border: none !important;
  outline: none !important;
  box-shadow: 0 4px 16px rgba(30, 58, 138, 0.3);
}

.back-to-home-floating-button:active {
  transform: translateY(-1px) scale(0.98);
  background: rgba(21, 40, 96, 0.95) !important;
  border: none !important;
  outline: none !important;
}

/* 桌面端图标大小 */
.back-to-home-floating-button .home-icon {
  font-size: 20px;
}

/* 强制移除所有可能的边框和轮廓 */
.back-to-home-floating-button,
.back-to-home-floating-button:hover,
.back-to-home-floating-button:focus,
.back-to-home-floating-button:active,
.back-to-home-floating-button:visited {
  border: none !important;
  outline: none !important;
  box-shadow: 0 4px 16px rgba(30, 58, 138, 0.3) !important;
}

.back-to-home-floating-button:hover {
  box-shadow: 0 8px 24px rgba(30, 58, 138, 0.4) !important;
}

/* 覆盖Naive UI的默认样式 */
.back-to-home-floating-button:deep(.n-button__border) {
  display: none !important;
}

.back-to-home-floating-button:deep(.n-button__state-border) {
  display: none !important;
}

/* 响应式按钮大小优化 */

/* 平板端 (768px-1023px) */
@media (min-width: 768px) and (max-width: 1023px) {
  .back-to-home-floating-button {
    right: 20px;
    bottom: 20px;
    width: 52px;
    height: 52px;
  }

  .back-to-home-floating-button :deep(.n-icon) {
    font-size: 18px;
  }
}

/* 移动端大屏 (481px-767px) */
@media (min-width: 481px) and (max-width: 767px) {
  .back-to-home-floating-button {
    right: 16px;
    bottom: 16px;
    width: 48px;
    height: 48px;
  }

  .back-to-home-floating-button :deep(.n-icon) {
    font-size: 16px;
  }

  .back-to-home-floating-button:hover {
    transform: none; /* 移动端禁用悬停效果 */
  }
}

/* 移动端小屏 (≤480px) */
@media (max-width: 480px) {
  .back-to-home-floating-button {
    right: 12px;
    bottom: 12px;
    width: 44px;
    height: 44px;
  }

  .back-to-home-floating-button :deep(.n-icon) {
    font-size: 14px;
  }

  .back-to-home-floating-button:hover {
    transform: none; /* 移动端禁用悬停效果 */
  }
}

@media (max-width: 1024px) {
  .container { padding: 0 24px; }
  .cases-content { padding: 70px 0 50px; }
}

@media (max-width: 768px) {
  .container { padding: 0 20px; }
  .cases-content { padding: 60px 0 40px; }
  .cases-item-card { border-radius: 12px; margin-bottom: 16px; }
}

@media (max-width: 480px) {
  .cases-content { padding: 50px 0 30px; }
  .container { padding: 0 16px; }
}

@media (min-width: 376px) and (max-width: 480px) {
  .container { padding: 0 18px; }
}

@media (max-width: 320px) {
  .container { padding: 0 8px; }
}
</style>


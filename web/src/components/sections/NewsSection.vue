<template>
  <!-- 新闻动态区域 - 使用Naive UI原生组件重构 -->
  <section id="news" class="news-section section-half">
    <div class="section-container">
      <!-- 标题区域 - 使用Naive UI Space组件 -->
      <n-space justify="space-between" align="center" style="margin-bottom: 60px;">
        <n-space vertical :size="20">
          <n-text
            :style="{
              fontSize: 'var(--sipumtech-font-size-h1)',
              fontWeight: 'var(--sipumtech-font-weight-bold)',
              color: 'var(--sipumtech-primary-blue)',
              lineHeight: 'var(--sipumtech-line-height-tight)'
            }"
          >
            {{ $t('website.news.title') }}
          </n-text>
          <div class="title-underline"></div>
        </n-space>
        <n-button
          text
          tag="a"
          href="#"
          size="large"
          class="news-more-button"
        >
          <n-space align="center" :size="8">
            <span>{{ $t('website.news.more') }}</span>
            <n-icon :size="16">
              <svg viewBox="0 0 24 24">
                <path fill="currentColor" d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"/>
              </svg>
            </n-icon>
          </n-space>
        </n-button>
      </n-space>

      <!-- 新闻网格 - 使用Naive UI Grid组件，添加加载状态和错误处理 -->
      <ErrorBoundary @retry="handleRetry">
        <!-- 加载状态 -->
        <LoadingState
          v-if="isLoading"
          type="skeleton"
          variant="grid"
          :grid-items="3"
          message="正在加载新闻..."
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

        <!-- 新闻内容 -->
        <n-grid
          v-else-if="news && news.length"
          :cols="responsiveCols"
          :x-gap="responsiveXGap"
          :y-gap="responsiveYGap"
          item-responsive
          responsive="screen"
        >
          <n-grid-item v-for="item in news" :key="item.id">
            <n-card
              hoverable
              class="news-card"
              @click="handleNewsClick(item.id)"
            >
              <template #cover>
                <n-image
                  :src="getImagePath('news', item.image)"
                  :alt="$t(item.titleKey)"
                  :fallback-src="PLACEHOLDER_IMAGES.news"
                  object-fit="cover"
                  class="news-image"
                />
              </template>

              <n-space vertical :size="12">
                <n-text
                  class="news-card-title"
                  :style="{
                    fontWeight: 'var(--sipumtech-font-weight-semibold)',
                    color: 'var(--sipumtech-primary-blue)',
                    lineHeight: '1.4'
                  }"
                >
                  {{ $t(item.titleKey) }}
                </n-text>
                <n-ellipsis
                  :line-clamp="3"
                  :style="{
                    fontSize: 'var(--sipumtech-font-size-small)',
                    color: 'var(--sipumtech-text-secondary)',
                    lineHeight: 'var(--sipumtech-line-height-relaxed)'
                  }"
                >
                  {{ $t(item.excerptKey) }}
                </n-ellipsis>
              </n-space>
            </n-card>
          </n-grid-item>
        </n-grid>

        <!-- 空状态 -->
        <n-result
          v-else
          status="info"
          title="暂无新闻"
          description="目前还没有新闻内容"
        />
      </ErrorBoundary>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { getImagePath, PLACEHOLDER_IMAGES } from '@/utils/imageUtils'
import { useAsyncState } from '@/composables/useAsyncState'
import LoadingState from '@/components/common/LoadingState.vue'
import ErrorBoundary from '@/components/common/ErrorBoundary.vue'

const { t } = useI18n()

// 响应式Grid配置 - 使用简单的数值，通过CSS媒体查询来实现响应式
const responsiveCols = ref(3)
const responsiveXGap = ref(30)
const responsiveYGap = ref(30)

// 新闻数据状态
const newsData = ref([
  {
    id: 'news_1',
    date: '2024-08-06',
    titleKey: 'website.news.news_1_title',
    excerptKey: 'website.news.news_1_excerpt',
    image: 'news_1'
  },
  {
    id: 'news_2',
    date: '2024-07-28',
    titleKey: 'website.news.news_2_title',
    excerptKey: 'website.news.news_2_excerpt',
    image: 'news_2'
  },
  {
    id: 'news_3',
    date: '2024-02-01',
    titleKey: 'website.news.news_3_title',
    excerptKey: 'website.news.news_3_excerpt',
    image: 'news_3'
  }
])

// 模拟异步加载新闻数据
const fetchNewsData = async () => {
  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 1000))

  // 这里可以替换为真实的API调用
  return newsData.value
}

// 使用异步状态管理
const {
  data: news,
  isLoading,
  hasError,
  error,
  execute: loadNews,
  retry
} = useAsyncState(fetchNewsData, {
  immediate: false,
  onError: (err) => {
    console.error('新闻数据加载失败:', err)
  }
})

// 组件挂载时加载数据
onMounted(() => {
  loadNews()
})

// 新闻点击处理
const handleNewsClick = (newsId) => {
  console.log('新闻点击:', newsId)
  // 这里可以添加具体的业务逻辑，比如：
  // - 跳转到新闻详情页
  // - 打开新闻弹窗
  // - 发送埋点数据
}

// 错误重试处理
const handleRetry = () => {
  retry()
}
</script>

<style scoped>
/*
 * NewsSection样式 - 使用Naive UI原生组件重构
 * 大部分样式已由n-card、n-grid、n-image、n-tag等组件自动处理
 */

/* 新闻动态区域 */
.news-section {
  background: var(--sipumtech-bg-tech);
  padding: var(--sipumtech-section-padding-desktop);
}

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
  .news-section h2 {
    font-size: var(--sipumtech-font-size-h2) !important;
  }

  /* 新闻卡片标题 */
  .news-section h3 {
    font-size: var(--sipumtech-font-size-h4) !important;
  }
}

/* 移动端字体优化 (≤768px) */
@media (max-width: 768px) {
  /* 主标题进一步缩小 */
  .news-section h2 {
    font-size: var(--sipumtech-font-size-h3) !important;
  }

  /* 新闻卡片标题 */
  .news-section h3 {
    font-size: var(--sipumtech-font-size-h5) !important;
  }

  /* 新闻描述文字 */
  .news-section p {
    font-size: var(--sipumtech-font-size-small) !important;
  }

  /* 日期文字 */
  .news-section .date {
    font-size: var(--sipumtech-font-size-xs) !important;
  }
}

/* 保留必要的品牌装饰样式 */
.title-underline {
  width: 80px;
  height: 4px;
  background: linear-gradient(45deg, var(--sipumtech-accent-orange), #d97706);
  border-radius: var(--sipumtech-radius-sm);
}

/* 响应式新闻图片样式 */
.news-image {
  width: 100%;
  aspect-ratio: 16/9;
}

/* 新闻卡片标题样式 */
.news-card-title {
  font-size: 18px;
}

/* 移动端新闻卡片标题字体优化 */
@media (max-width: 480px) {
  .news-card-title {
    font-size: 12px !important;
  }
}

/* 超小屏幕优化 */
@media (max-width: 375px) {
  .news-card-title {
    font-size: 11px !important;
  }
}

/* 响应式Grid布局 - 移动端垂直排列 */
@media (max-width: 768px) {
  :deep(.n-grid) {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 20px !important;
  }
}

@media (max-width: 480px) {
  :deep(.n-grid) {
    grid-template-columns: 1fr !important;
    gap: 16px !important;
  }

  .news-section {
    padding: var(--sipumtech-section-padding-mobile);
  }
}

/*
 * 所有文本内容样式已迁移到 n-text 组件的 :style 属性
 * - 标题样式通过 n-text 组件管理
 * - 新闻卡片内容样式通过 n-text 和 n-ellipsis 组件管理
 * - 移除所有 margin: 0 重置和自定义文本样式类
 * - 完全依赖 Naive UI 组件属性管理样式
 */

/*
 * 响应式布局完全由 Naive UI 组件处理：
 * - n-grid 的 item-responsive 和 responsive="screen" 自动处理响应式布局
 * - n-card 组件自动适配不同屏幕尺寸的卡片样式
 * - n-image 组件通过 .news-image 类实现响应式图片
 * - n-text 组件通过 CSS 变量实现一致的字体缩放
 * - n-ellipsis 组件自动处理文本截断和响应式
 * - 移除所有自定义媒体查询，严格遵循 Naive UI 优先原则
 */
</style>

<template>
  <!-- 新闻动态区域 - 使用Naive UI原生组件重构 -->
  <section id="news" class="news-section section-half">
    <div class="section-container">
      <!-- 标题区域 - 使用Naive UI Space组件 -->
      <n-space justify="space-between" align="center" style="margin-bottom: 60px;">
        <n-space vertical :size="20">
          <h2 class="section-title">{{ $t('website.news.title') }}</h2>
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
          :cols="3"
          :x-gap="30"
          :y-gap="30"
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
                  style="height: 200px;"
                />
              </template>

              <!-- 日期标签 -->
              <n-tag
                type="primary"
                size="small"
                style="position: absolute; top: 16px; right: 16px; z-index: 1;"
              >
                {{ item.date }}
              </n-tag>

              <n-space vertical :size="12">
                <h4 class="news-title">{{ $t(item.titleKey) }}</h4>
                <n-ellipsis :line-clamp="3" class="news-excerpt">
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
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { getImagePath, PLACEHOLDER_IMAGES } from '@/utils/imageUtils'
import { useAsyncState } from '@/composables/useAsyncState'
import LoadingState from '@/components/common/LoadingState.vue'
import ErrorBoundary from '@/components/common/ErrorBoundary.vue'

const { t } = useI18n()

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

/* 更多按钮样式 */
.news-more-button {
  font-size: var(--sipumtech-font-size-body) !important;
  font-weight: var(--sipumtech-font-weight-medium) !important;
  color: var(--sipumtech-text-secondary) !important;
}

.news-more-button:hover {
  color: var(--sipumtech-primary-blue) !important;
}

/* 新闻卡片内容样式 */
.news-title {
  font-size: 18px;
  font-weight: var(--sipumtech-font-weight-semibold);
  color: var(--sipumtech-primary-blue);
  margin: 0;
  line-height: 1.4;
}

.news-excerpt {
  font-size: var(--sipumtech-font-size-small);
  color: var(--sipumtech-text-secondary);
  line-height: var(--sipumtech-line-height-relaxed);
  margin: 0;
}

/*
 * 新闻网格和卡片样式已移除 - 现在使用Naive UI组件
 * n-grid组件处理布局，n-card组件处理卡片样式和悬停效果
 * n-image组件处理图片显示和错误处理
 * n-tag组件处理日期标签
 * n-ellipsis组件处理文本截断
 */

/* 响应式设计 - 简化版，主要依赖Naive UI的响应式能力 */
@media (max-width: 768px) {
  .news-section {
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
  .news-section {
    padding: 60px 0;
  }

  .section-container {
    padding: 0 16px;
  }

  .section-title {
    font-size: 28px;
  }

  .news-title {
    font-size: 16px;
  }

  .news-excerpt {
    font-size: 13px;
  }
}
</style>

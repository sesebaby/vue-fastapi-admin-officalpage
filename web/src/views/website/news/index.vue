<template>
  <!-- 新闻列表页面 -->
  <n-layout class="news-list-page">
    <!-- 新闻列表内容 -->
    <n-layout-content class="news-content">
      <n-space justify="center">
        <div class="container">
        <!-- 加载状态 -->
        <LoadingState
          v-if="isLoading"
          type="skeleton"
          variant="list"
          :list-items="4"
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

        <!-- 新闻列表 -->
        <n-space
          v-else-if="sortedNews && sortedNews.length"
          vertical
          :size="30"
        >
          <n-card
            v-for="item in sortedNews"
            :key="item.id"
            hoverable
            class="news-item-card"
            @click="handleNewsClick(item.id)"
          >
            <n-grid :cols="responsiveCols" :x-gap="30" :y-gap="20">
              <!-- 新闻图片 -->
              <n-grid-item :span="imageSpan">
                <n-card embedded class="news-image-wrapper">
                  <n-image
                    :src="getImagePath('news', item.image)"
                    :alt="$t(item.titleKey)"
                    :fallback-src="PLACEHOLDER_IMAGES.news"
                    object-fit="cover"
                    class="news-item-image"
                    :height="200"
                  />
                </n-card>
              </n-grid-item>

              <!-- 新闻内容 -->
              <n-grid-item :span="contentSpan">
                <n-space vertical :size="16">
                  <!-- 发布时间 -->
                  <n-tag
                    type="info"
                    size="small"
                    class="news-date-tag"
                  >
                    {{ formatDate(item.date) }}
                  </n-tag>

                  <!-- 新闻标题 -->
                  <n-text
                    class="news-item-title"
                    :style="{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: 'var(--sipumtech-primary-blue)',
                      lineHeight: '1.4',
                      cursor: 'pointer'
                    }"
                  >
                    {{ $t(item.titleKey) }}
                  </n-text>

                  <!-- 新闻描述 -->
                  <n-text
                    :style="{
                      fontSize: '14px',
                      color: 'var(--sipumtech-text-secondary)',
                      lineHeight: '1.6'
                    }"
                  >
                    {{ $t(item.excerptKey) }}
                  </n-text>
                </n-space>
              </n-grid-item>
            </n-grid>
          </n-card>
        </n-space>

        <!-- 空状态 -->
        <n-result
          v-else
          status="info"
          title="暂无新闻"
          description="目前还没有新闻内容"
        />
        </div>
      </n-space>
    </n-layout-content>
  </n-layout>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { getImagePath, PLACEHOLDER_IMAGES } from '@/utils/imageUtils'
import { useAsyncState } from '@/composables/useAsyncState'
import LoadingState from '@/components/common/LoadingState.vue'

const { t } = useI18n()

// 响应式布局配置
const responsiveCols = ref(24)

// 使用更精确的断点检测
const imageSpan = computed(() => {
  if (typeof window === 'undefined') return 6
  const width = window.innerWidth

  if (width <= 480) return 24      // 移动端：全宽
  if (width <= 768) return 24      // 小平板：全宽
  if (width <= 1024) return 8      // 平板：图片稍大
  return 6                         // 桌面端：标准比例
})

const contentSpan = computed(() => {
  if (typeof window === 'undefined') return 18
  const width = window.innerWidth

  if (width <= 480) return 24      // 移动端：全宽
  if (width <= 768) return 24      // 小平板：全宽
  if (width <= 1024) return 16     // 平板：内容稍小
  return 18                        // 桌面端：标准比例
})

// 新闻数据（与NewsSection保持一致）
const newsData = ref([
  {
    id: 'news_4',
    date: '2025-08-19',
    titleKey: 'website.news.news_4_title',
    excerptKey: 'website.news.news_4_excerpt',
    image: 'news_4'
  },
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

// 按时间排序的新闻列表（从新到旧）
const sortedNews = computed(() => {
  return [...newsData.value].sort((a, b) => new Date(b.date) - new Date(a.date))
})

// 模拟异步加载新闻数据
const fetchNewsData = async () => {
  await new Promise(resolve => setTimeout(resolve, 800))
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

// 窗口大小变化时更新响应式布局
const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1200)

const handleResize = () => {
  if (typeof window !== 'undefined') {
    windowWidth.value = window.innerWidth
  }
}

// 组件挂载时加载数据和添加事件监听
onMounted(() => {
  loadNews()

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

// 格式化日期
const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// 新闻点击处理
const handleNewsClick = (newsId) => {
  console.log('新闻点击:', newsId)
  // 这里可以跳转到新闻详情页
}

// 错误重试处理
const handleRetry = () => {
  retry()
}
</script>

<style scoped>
/* 新闻列表页面样式 */
.news-list-page {
  min-height: 100vh;
  background: var(--sipumtech-bg-tech);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 新闻内容区域 */
.news-content {
  padding: 80px 0 60px;
}

/* 新闻条目卡片 */
.news-item-card {
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.news-item-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
}

/* 新闻图片 */
.news-image-wrapper {
  border-radius: 12px;
  overflow: hidden;
  height: 200px;
}

.news-item-image {
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease;
}

.news-item-card:hover .news-item-image {
  transform: scale(1.05);
}

/* 不同分辨率下的图片高度优化 */
@media (min-width: 1920px) {
  .news-image-wrapper {
    height: 240px;
  }
}

@media (min-width: 1440px) and (max-width: 1919px) {
  .news-image-wrapper {
    height: 220px;
  }
}

@media (min-width: 1366px) and (max-width: 1439px) {
  .news-image-wrapper {
    height: 200px;
  }
}

/* 日期标签 */
.news-date-tag {
  background: rgba(0, 212, 170, 0.1);
  color: var(--sipumtech-accent-green);
  border: 1px solid rgba(0, 212, 170, 0.2);
}

/* 新闻标题 */
.news-item-title:hover {
  color: var(--sipumtech-accent-green) !important;
}

/* 响应式设计 - 优化多分辨率适配 */

/* 平板端横屏 (1024px) */
@media (min-width: 769px) and (max-width: 1024px) {
  .news-content {
    padding: 70px 0 50px;
  }

  .container {
    padding: 0 24px;
  }

  .news-image-wrapper {
    height: 180px;
  }

  .news-item-title {
    font-size: 19px !important;
  }
}

/* 平板端竖屏 (768px) */
@media (min-width: 481px) and (max-width: 768px) {
  .news-content {
    padding: 60px 0 40px;
  }

  .container {
    padding: 0 20px;
  }

  .news-image-wrapper {
    height: 160px;
    margin-bottom: 20px;
  }

  .news-item-title {
    font-size: 18px !important;
  }

  .news-item-card {
    margin-bottom: 24px;
  }
}

/* 移动端大屏 (414px) */
@media (min-width: 376px) and (max-width: 480px) {
  .news-content {
    padding: 50px 0 30px;
  }

  .container {
    padding: 0 18px;
  }

  .news-image-wrapper {
    height: 150px;
    margin-bottom: 16px;
  }

  .news-item-title {
    font-size: 17px !important;
  }

  .news-item-card {
    margin-bottom: 20px;
  }
}

/* 移动端中屏 (375px) */
@media (min-width: 321px) and (max-width: 375px) {
  .news-content {
    padding: 40px 0 30px;
  }

  .container {
    padding: 0 16px;
  }

  .news-image-wrapper {
    height: 140px;
    margin-bottom: 16px;
  }

  .news-item-title {
    font-size: 16px !important;
  }

  .news-item-card {
    margin-bottom: 18px;
  }
}

/* 移动端小屏 (320px) */
@media (max-width: 320px) {
  .news-content {
    padding: 30px 0 20px;
  }

  .container {
    padding: 0 12px;
  }

  .news-image-wrapper {
    height: 120px;
    margin-bottom: 12px;
  }

  .news-item-title {
    font-size: 15px !important;
  }

  .news-item-card {
    margin-bottom: 16px;
  }

  .news-date-tag {
    font-size: 11px !important;
  }
}
</style>

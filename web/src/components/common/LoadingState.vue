<template>
  <!-- 加载状态组件 - 使用Naive UI原生组件 -->
  <div class="loading-state">
    <!-- 骨架屏加载状态 -->
    <div v-if="type === 'skeleton'" class="skeleton-container">
      <!-- 卡片骨架屏 -->
      <div v-if="variant === 'card'" class="skeleton-card">
        <n-skeleton height="200px" style="margin-bottom: 16px;" />
        <n-skeleton text :repeat="3" />
        <n-skeleton text style="width: 60%; margin-top: 8px;" />
      </div>

      <!-- 列表骨架屏 -->
      <div v-else-if="variant === 'list'" class="skeleton-list">
        <div v-for="i in rows" :key="i" class="skeleton-list-item">
          <n-skeleton circle size="medium" style="margin-right: 16px;" />
          <div style="flex: 1;">
            <n-skeleton text style="width: 80%; margin-bottom: 8px;" />
            <n-skeleton text style="width: 60%;" />
          </div>
        </div>
      </div>

      <!-- 文章骨架屏 -->
      <div v-else-if="variant === 'article'" class="skeleton-article">
        <n-skeleton text style="width: 80%; height: 32px; margin-bottom: 16px;" />
        <n-skeleton text style="width: 60%; margin-bottom: 24px;" />
        <n-skeleton height="200px" style="margin-bottom: 16px;" />
        <n-skeleton text :repeat="4" />
      </div>

      <!-- 网格骨架屏 -->
      <div v-else-if="variant === 'grid'" class="skeleton-grid">
        <div v-for="i in gridItems" :key="i" class="skeleton-grid-item">
          <n-skeleton height="150px" style="margin-bottom: 12px;" />
          <n-skeleton text style="margin-bottom: 8px;" />
          <n-skeleton text style="width: 70%;" />
        </div>
      </div>

      <!-- 自定义骨架屏 -->
      <div v-else class="skeleton-custom">
        <slot name="skeleton">
          <n-skeleton text :repeat="3" />
        </slot>
      </div>
    </div>

    <!-- 旋转器加载状态 -->
    <div v-else-if="type === 'spinner'" class="spinner-container">
      <n-space vertical align="center" :size="20">
        <n-spin :size="spinnerSize" />
        <div v-if="message" class="loading-message">
          {{ message }}
        </div>
      </n-space>
    </div>

    <!-- 进度条加载状态 -->
    <div v-else-if="type === 'progress'" class="progress-container">
      <n-space vertical :size="16">
        <div v-if="message" class="loading-message">
          {{ message }}
        </div>
        <n-progress
          type="line"
          :percentage="percentage"
          :show-indicator="showPercentage"
          :status="progressStatus"
        />
      </n-space>
    </div>

    <!-- 自定义加载状态 -->
    <div v-else class="custom-container">
      <slot name="loading">
        <n-space vertical align="center" :size="20">
          <n-spin size="large" />
          <div class="loading-message">
            {{ message || $t('common.loading') }}
          </div>
        </n-space>
      </slot>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  // 加载状态类型
  type: {
    type: String,
    default: 'skeleton',
    validator: (value) => ['skeleton', 'spinner', 'progress', 'custom'].includes(value)
  },
  // 骨架屏变体
  variant: {
    type: String,
    default: 'card',
    validator: (value) => ['card', 'list', 'article', 'grid', 'custom'].includes(value)
  },
  // 加载消息
  message: {
    type: String,
    default: ''
  },
  // 旋转器大小
  spinnerSize: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  },
  // 进度百分比
  percentage: {
    type: Number,
    default: 0,
    validator: (value) => value >= 0 && value <= 100
  },
  // 是否显示百分比
  showPercentage: {
    type: Boolean,
    default: true
  },
  // 进度条状态
  progressStatus: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'success', 'error', 'warning'].includes(value)
  },
  // 列表行数
  rows: {
    type: Number,
    default: 3
  },
  // 网格项目数
  gridItems: {
    type: Number,
    default: 6
  },
  // 最小高度
  minHeight: {
    type: String,
    default: '200px'
  }
})

const { t } = useI18n()
</script>

<style scoped>
/*
 * 加载状态组件样式 - 使用设计系统变量
 */

.loading-state {
  width: 100%;
  min-height: v-bind(minHeight);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 骨架屏容器 */
.skeleton-container {
  width: 100%;
  padding: var(--sipumtech-space-lg);
}

.skeleton-card {
  max-width: 400px;
  margin: 0 auto;
}

.skeleton-list {
  max-width: 600px;
  margin: 0 auto;
}

.skeleton-list-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--sipumtech-space-lg);
}

.skeleton-article {
  max-width: 800px;
  margin: 0 auto;
}

.skeleton-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--sipumtech-space-lg);
  max-width: 1200px;
  margin: 0 auto;
}

.skeleton-grid-item {
  width: 100%;
}

.skeleton-custom {
  max-width: 600px;
  margin: 0 auto;
}

/* 旋转器容器 */
.spinner-container {
  padding: var(--sipumtech-space-2xl);
}

/* 进度条容器 */
.progress-container {
  width: 100%;
  max-width: 400px;
  padding: var(--sipumtech-space-xl);
}

/* 自定义容器 */
.custom-container {
  padding: var(--sipumtech-space-2xl);
}

/* 加载消息 */
.loading-message {
  font-size: var(--sipumtech-font-size-body);
  color: var(--sipumtech-text-secondary);
  text-align: center;
  line-height: var(--sipumtech-line-height-normal);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .skeleton-container {
    padding: var(--sipumtech-space-md);
  }

  .skeleton-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: var(--sipumtech-space-md);
  }

  .spinner-container,
  .progress-container,
  .custom-container {
    padding: var(--sipumtech-space-lg);
  }

  .loading-message {
    font-size: var(--sipumtech-font-size-small);
  }
}
</style>

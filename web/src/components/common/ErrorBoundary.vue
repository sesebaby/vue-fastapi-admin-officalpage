<template>
  <!-- 错误边界组件 - 使用Naive UI原生组件 -->
  <div class="error-boundary">
    <!-- 正常状态 - 显示子组件 -->
    <div v-if="!hasError" class="content-wrapper">
      <slot />
    </div>

    <!-- 错误状态 - 显示错误信息 -->
    <n-result
      v-else
      status="error"
      :title="errorTitle"
      :description="errorDescription"
      class="error-result"
    >
      <template #footer>
        <n-space :size="16">
          <n-button
            type="primary"
            @click="handleRetry"
          >
            {{ $t('common.retry') }}
          </n-button>
          <n-button
            type="default"
            @click="handleReload"
          >
            {{ $t('common.reload_page') }}
          </n-button>
        </n-space>
      </template>
    </n-result>
  </div>
</template>

<script setup>
import { ref, computed, onErrorCaptured } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  // 自定义错误标题
  title: {
    type: String,
    default: ''
  },
  // 自定义错误描述
  description: {
    type: String,
    default: ''
  },
  // 是否显示重试按钮
  showRetry: {
    type: Boolean,
    default: true
  },
  // 是否显示刷新页面按钮
  showReload: {
    type: Boolean,
    default: true
  },
  // 错误回调函数
  onError: {
    type: Function,
    default: null
  }
})

const emit = defineEmits(['error', 'retry'])

const { t } = useI18n()

// 错误状态
const hasError = ref(false)
const errorInfo = ref(null)

// 计算错误标题和描述
const errorTitle = computed(() => {
  if (props.title) return props.title
  return t('error.component_error_title')
})

const errorDescription = computed(() => {
  if (props.description) return props.description
  if (errorInfo.value?.message) {
    return `${t('error.component_error_description')}: ${errorInfo.value.message}`
  }
  return t('error.component_error_description')
})

// 捕获子组件错误
onErrorCaptured((error, instance, info) => {
  console.error('ErrorBoundary caught an error:', error, info)
  
  hasError.value = true
  errorInfo.value = {
    message: error.message,
    stack: error.stack,
    info
  }

  // 调用自定义错误处理函数
  if (props.onError) {
    props.onError(error, instance, info)
  }

  // 触发错误事件
  emit('error', { error, instance, info })

  // 阻止错误继续向上传播
  return false
})

// 重试处理
const handleRetry = () => {
  hasError.value = false
  errorInfo.value = null
  emit('retry')
}

// 刷新页面处理
const handleReload = () => {
  window.location.reload()
}

// 重置错误状态（供父组件调用）
const resetError = () => {
  hasError.value = false
  errorInfo.value = null
}

// 暴露方法给父组件
defineExpose({
  resetError,
  hasError: computed(() => hasError.value),
  errorInfo: computed(() => errorInfo.value)
})
</script>

<style scoped>
/*
 * 错误边界组件样式 - 使用设计系统变量
 */

.error-boundary {
  width: 100%;
  min-height: 200px;
}

.content-wrapper {
  width: 100%;
}

.error-result {
  padding: var(--sipumtech-space-2xl);
  background: var(--sipumtech-bg-white);
  border-radius: var(--sipumtech-radius-lg);
  border: 1px solid var(--sipumtech-border-color);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .error-result {
    padding: var(--sipumtech-space-lg);
  }
}
</style>

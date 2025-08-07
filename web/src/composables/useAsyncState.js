/**
 * 异步状态管理组合式函数
 * 提供加载状态、错误处理、重试机制等功能
 */

import { ref, computed } from 'vue'

/**
 * 异步状态管理
 * @param {Function} asyncFn - 异步函数
 * @param {Object} options - 配置选项
 * @returns {Object} 状态和方法
 */
export function useAsyncState(asyncFn, options = {}) {
  const {
    immediate = false,
    resetOnExecute = true,
    shallow = true,
    delay = 0,
    onError = null,
    onSuccess = null
  } = options

  // 状态管理
  const isLoading = ref(false)
  const isFinished = ref(false)
  const error = ref(null)
  const data = ref(null)

  // 计算属性
  const isReady = computed(() => isFinished.value && !error.value)
  const hasError = computed(() => !!error.value)

  // 执行异步函数
  const execute = async (...args) => {
    if (resetOnExecute) {
      data.value = null
      error.value = null
    }

    isLoading.value = true
    isFinished.value = false

    try {
      // 延迟执行（用于测试加载状态）
      if (delay > 0) {
        await new Promise(resolve => setTimeout(resolve, delay))
      }

      const result = await asyncFn(...args)
      data.value = shallow ? result : JSON.parse(JSON.stringify(result))
      
      // 成功回调
      if (onSuccess) {
        onSuccess(result)
      }

      return result
    } catch (err) {
      error.value = err
      
      // 错误回调
      if (onError) {
        onError(err)
      }

      throw err
    } finally {
      isLoading.value = false
      isFinished.value = true
    }
  }

  // 重试
  const retry = (...args) => {
    return execute(...args)
  }

  // 重置状态
  const reset = () => {
    isLoading.value = false
    isFinished.value = false
    error.value = null
    data.value = null
  }

  // 立即执行
  if (immediate) {
    execute()
  }

  return {
    // 状态
    isLoading,
    isFinished,
    isReady,
    hasError,
    error,
    data,
    
    // 方法
    execute,
    retry,
    reset
  }
}

/**
 * 图片加载状态管理
 * @param {string} src - 图片路径
 * @param {Object} options - 配置选项
 * @returns {Object} 状态和方法
 */
export function useImageLoad(src, options = {}) {
  const { fallbackSrc = '', onError = null } = options

  const isLoading = ref(true)
  const hasError = ref(false)
  const currentSrc = ref(src)

  const loadImage = (imageSrc) => {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.onload = () => resolve(imageSrc)
      img.onerror = () => reject(new Error(`Failed to load image: ${imageSrc}`))
      img.src = imageSrc
    })
  }

  const { execute: load, error } = useAsyncState(
    () => loadImage(currentSrc.value),
    {
      immediate: true,
      onError: (err) => {
        hasError.value = true
        if (fallbackSrc && currentSrc.value !== fallbackSrc) {
          currentSrc.value = fallbackSrc
          load()
        } else if (onError) {
          onError(err)
        }
      },
      onSuccess: () => {
        hasError.value = false
        isLoading.value = false
      }
    }
  )

  return {
    isLoading,
    hasError,
    currentSrc,
    error,
    reload: () => {
      currentSrc.value = src
      hasError.value = false
      isLoading.value = true
      load()
    }
  }
}

/**
 * 数据获取状态管理
 * @param {Function} fetchFn - 数据获取函数
 * @param {Object} options - 配置选项
 * @returns {Object} 状态和方法
 */
export function useFetch(fetchFn, options = {}) {
  const {
    immediate = true,
    refetch = true,
    timeout = 10000,
    retryCount = 3,
    retryDelay = 1000
  } = options

  let retryAttempts = 0

  const fetchWithRetry = async (...args) => {
    try {
      // 设置超时
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Request timeout')), timeout)
      })

      const result = await Promise.race([
        fetchFn(...args),
        timeoutPromise
      ])

      retryAttempts = 0
      return result
    } catch (error) {
      if (retryAttempts < retryCount) {
        retryAttempts++
        await new Promise(resolve => setTimeout(resolve, retryDelay))
        return fetchWithRetry(...args)
      }
      throw error
    }
  }

  const asyncState = useAsyncState(fetchWithRetry, {
    immediate,
    ...options
  })

  return {
    ...asyncState,
    refetch: asyncState.execute
  }
}

/**
 * 表单提交状态管理
 * @param {Function} submitFn - 提交函数
 * @param {Object} options - 配置选项
 * @returns {Object} 状态和方法
 */
export function useFormSubmit(submitFn, options = {}) {
  const {
    onSuccess = null,
    onError = null,
    resetOnSuccess = false
  } = options

  const isSubmitting = ref(false)
  const submitError = ref(null)
  const submitSuccess = ref(false)

  const submit = async (formData) => {
    isSubmitting.value = true
    submitError.value = null
    submitSuccess.value = false

    try {
      const result = await submitFn(formData)
      submitSuccess.value = true
      
      if (onSuccess) {
        onSuccess(result)
      }

      if (resetOnSuccess) {
        setTimeout(() => {
          submitSuccess.value = false
        }, 3000)
      }

      return result
    } catch (error) {
      submitError.value = error
      
      if (onError) {
        onError(error)
      }

      throw error
    } finally {
      isSubmitting.value = false
    }
  }

  const reset = () => {
    isSubmitting.value = false
    submitError.value = null
    submitSuccess.value = false
  }

  return {
    isSubmitting,
    submitError,
    submitSuccess,
    submit,
    reset
  }
}

/**
 * 分页数据管理
 * @param {Function} fetchFn - 数据获取函数
 * @param {Object} options - 配置选项
 * @returns {Object} 状态和方法
 */
export function usePagination(fetchFn, options = {}) {
  const {
    pageSize = 10,
    immediate = true
  } = options

  const currentPage = ref(1)
  const total = ref(0)
  const items = ref([])

  const { execute, isLoading, error } = useAsyncState(
    async (page = 1) => {
      const result = await fetchFn({
        page,
        pageSize: pageSize,
        offset: (page - 1) * pageSize
      })
      
      if (page === 1) {
        items.value = result.items || []
      } else {
        items.value.push(...(result.items || []))
      }
      
      total.value = result.total || 0
      currentPage.value = page
      
      return result
    },
    { immediate }
  )

  const hasMore = computed(() => {
    return items.value.length < total.value
  })

  const loadMore = () => {
    if (hasMore.value && !isLoading.value) {
      return execute(currentPage.value + 1)
    }
  }

  const refresh = () => {
    items.value = []
    return execute(1)
  }

  return {
    currentPage,
    total,
    items,
    isLoading,
    error,
    hasMore,
    loadMore,
    refresh,
    execute
  }
}

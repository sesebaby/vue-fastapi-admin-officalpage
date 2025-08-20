<template>
  <n-button
    text
    :size="size"
    class="admin-login"
    @click="handleLogin"
    :title="tooltip"
    :aria-label="tooltip"
    :loading="loading"
  >
    <template #icon>
      <svg class="login-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    </template>
  </n-button>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  tooltip: {
    type: String,
    default: ''
  },
  loginPath: {
    type: String,
    default: '/login'
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  }
})

const emit = defineEmits(['login-click'])

const router = useRouter()
const { t } = useI18n()
const loading = ref(false)

// 计算tooltip文本
const computedTooltip = computed(() => {
  return props.tooltip || t('navigation.admin_login_tooltip')
})

// 处理登录点击 - 跳转到外部OA系统
const handleLogin = async () => {
  try {
    loading.value = true
    
    // 触发父组件事件
    emit('login-click')
    
    // 直接跳转到外部OA系统
    window.open('http://oa.sipumtech.com', '_blank')
  } catch (error) {
    // 导航到OA系统失败
    // 可以在这里添加错误提示
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.admin-login {
  width: 40px !important;
  height: 40px !important;
  border-radius: 50% !important;
  background: var(--n-color-primary-suppl) !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  cursor: pointer !important;
  transition: all 0.3s ease !important;
  position: relative !important;
  min-width: 40px !important;
  padding: 0 !important;
  border: none !important;
}

.admin-login:hover {
  background: var(--n-color-pressed) !important;
  transform: scale(1.05) !important;
}

.admin-login:active {
  transform: scale(0.95) !important;
}

.login-icon {
  width: 20px;
  height: 20px;
  color: var(--n-color-primary);
  transition: color 0.3s ease;
}

.admin-login:hover .login-icon {
  color: var(--n-color-primary-hover);
}

/* 加载状态样式 */
.admin-login:loading {
  pointer-events: none;
  opacity: 0.7;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .admin-login {
    width: 36px !important;
    height: 36px !important;
  }
  
  .login-icon {
    width: 18px;
    height: 18px;
  }
}
</style>

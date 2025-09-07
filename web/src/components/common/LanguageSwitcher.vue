<template>
  <n-space :size="size === 'small' ? 6 : 8" align="center" :class="containerClass">
    <n-button
      :text="!mobile"
      :size="size"
      :type="currentLocale === 'zh-CN' ? 'primary' : 'default'"
      :class="['lang-item', { active: currentLocale === 'zh-CN' }]"
      @click="handleLanguageSwitch('zh-CN')"
    >
      中文
    </n-button>
    <span v-if="!mobile" class="lang-divider">|</span>
    <n-button
      :text="!mobile"
      :size="size"
      :type="currentLocale === 'en' ? 'primary' : 'default'"
      :class="['lang-item', { active: currentLocale === 'en' }]"
      @click="handleLanguageSwitch('en')"
    >
      English
    </n-button>
  </n-space>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { lStorage } from '@/utils'

const props = defineProps({
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  },
  mobile: {
    type: Boolean,
    default: false
  },
  containerClass: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['language-changed'])

const { locale } = useI18n()

// 当前语言状态
const currentLocale = computed(() => locale.value === 'cn' ? 'zh-CN' : 'en')

// 语言切换功能
const handleLanguageSwitch = (lang) => {
  const targetLang = lang === 'zh-CN' ? 'cn' : 'en'
  locale.value = targetLang
  lStorage.set('locale', targetLang)
  
  // 触发父组件事件，用于关闭移动端菜单等操作
  emit('language-changed', targetLang)
}
</script>

<style scoped>
/* 语言分隔符样式 */
.lang-divider {
  color: var(--n-border-color);
  font-weight: 300;
  opacity: 0.6;
}

/* 移动端特殊样式 - 为移动端按钮添加边框以增强视觉效果 */
:deep(.n-button.lang-item) {
  /* 移动端样式 */
  border: 1px solid transparent;
  transition: all 0.3s ease;
}

/* 移动端激活状态的边框样式 */
.mobile :deep(.n-button.lang-item.active) {
  border-color: var(--n-color-primary);
}

/* 移动端悬停状态的边框样式 */
.mobile :deep(.n-button.lang-item:hover) {
  border-color: var(--n-color-primary-hover);
}

/* 确保按钮文本在不同状态下的可读性 */
:deep(.n-button.lang-item .n-button__content) {
  font-weight: 500;
}

:deep(.n-button.lang-item.active .n-button__content) {
  font-weight: 600;
}
</style>

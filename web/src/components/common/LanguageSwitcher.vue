<template>
  <n-space :size="size === 'small' ? 6 : 8" align="center" :class="containerClass">
    <n-button
      :text="!mobile"
      :size="size"
      :type="currentLocale === 'zh-CN' ? 'primary' : 'default'"
      :class="['lang-item', { active: currentLocale === 'zh-CN' }]"
      @click="handleLanguageSwitch('zh-CN')"
    >
      {{ $t('lang') }}
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
.lang-item {
  background: none;
  border: none;
  color: var(--n-text-color-2);
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 6px 12px;
  border-radius: var(--n-border-radius);
  font-size: var(--n-font-size);
  font-weight: 500;
}

.lang-item.active {
  color: var(--n-color-primary);
  background: var(--n-color-primary-suppl);
  font-weight: 600;
}

.lang-item:hover {
  color: var(--n-color-primary-hover);
  background: var(--n-color-target);
}

.lang-divider {
  color: var(--n-border-color);
}

/* 移动端样式 */
.mobile .lang-item {
  border: 1px solid var(--n-border-color);
  flex: 1;
}

.mobile .lang-item.active {
  border-color: var(--n-color-primary);
}

.mobile .lang-item:hover {
  border-color: var(--n-color-primary-hover);
}
</style>

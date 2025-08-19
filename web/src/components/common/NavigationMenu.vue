<template>
  <!-- 使用Naive UI的n-flex组件替代n-space，实现更精确的布局控制 -->
  <n-flex
    :size="spacing"
    align="center"
    :justify="justify"
    :wrap="false"
  >
    <a
      v-for="item in menuItems"
      :key="item.key"
      :href="item.href"
      :class="['nav-item', { active: item.active }]"
      @click="handleNavClick(item, $event)"
    >
      {{ item.label }}
    </a>
  </n-flex>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from 'vue-router'

const props = defineProps({
  spacing: {
    type: [Number, String],
    default: 24
  },
  justify: {
    type: String,
    default: 'start', // 默认左对齐，符合华天公司官网布局
    validator: (value) => ['start', 'end', 'center', 'space-around', 'space-between', 'space-evenly'].includes(value)
  },
  activeKey: {
    type: String,
    default: 'home'
  }
})

const emit = defineEmits(['nav-click'])

const { t } = useI18n()
const router = useRouter()
const route = useRoute()

// 导航菜单项配置
const menuItems = computed(() => [
  {
    key: 'home',
    label: t('navigation.home'),
    href: '#home',
    active: props.activeKey === 'home'
  },
  {
    key: 'about',
    label: t('navigation.about'),
    href: '#about',
    active: props.activeKey === 'about'
  },
  {
    key: 'business',
    label: t('navigation.business'),
    href: '#business',
    active: props.activeKey === 'business'
  },
  {
    key: 'technology',
    label: t('navigation.technology'),
    href: '#technology',
    active: props.activeKey === 'technology'
  },
  {
    key: 'cases',
    label: t('navigation.cases'),
    href: '#cases',
    active: props.activeKey === 'cases'
  },
  {
    key: 'news',
    label: t('navigation.news'),
    href: '#news',
    active: props.activeKey === 'news'
  },
  {
    key: 'contact',
    label: t('navigation.contact'),
    href: '#contact',
    active: props.activeKey === 'contact'
  }
])

// 处理导航点击
const handleNavClick = (item, event) => {
  event.preventDefault() // 阻止默认的锚点跳转

  // 检查当前是否在主页
  if (route.path === '/') {
    // 在主页，直接滚动到对应区域
    const targetElement = document.querySelector(item.href)
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  } else {
    // 不在主页，先跳转到主页，然后滚动到对应区域
    router.push('/').then(() => {
      // 等待页面渲染完成后再滚动
      setTimeout(() => {
        const targetElement = document.querySelector(item.href)
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }, 100)
    })
  }

  emit('nav-click', item)
}
</script>

<style scoped>
.nav-item {
  color: var(--n-text-color-base);
  text-decoration: none;
  font-weight: 500;
  font-size: 15px;
  padding: 12px 8px;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
  position: relative;
  white-space: nowrap;
  min-width: fit-content;
}

.nav-item:hover,
.nav-item.active {
  color: var(--n-color-primary);
  border-bottom-color: var(--n-accent-color);
}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--n-accent-color);
  transition: width 0.3s ease;
}

.nav-item:hover::after,
.nav-item.active::after {
  width: 100%;
}

/* 响应式设计 */
@media (min-width: 1200px) {
  .nav-item {
    font-size: 16px;
    padding: 12px 12px;
  }
}

@media (max-width: 1199px) and (min-width: 1024px) {
  .nav-item {
    font-size: 15px;
    padding: 12px 6px;
  }
}

@media (max-width: 1023px) and (min-width: 769px) {
  .nav-item {
    font-size: 14px;
    padding: 8px 4px;
  }
}

@media (max-width: 900px) and (min-width: 769px) {
  .nav-item {
    font-size: 13px;
    padding: 8px 2px;
  }
}
</style>

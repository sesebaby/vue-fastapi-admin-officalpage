<template>
  <n-layout :style="{ minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: 'var(--n-font-family)' }">
    <!-- 顶部导航栏 - 使用Naive UI原生n-space组件 -->
    <n-layout-header :style="{
      background: 'var(--n-color-base)',
      borderBottom: '1px solid var(--n-border-color)',
      boxShadow: 'var(--n-box-shadow-1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }">
      <n-flex justify="center" style="width: 100%;">
        <n-flex
          justify="space-between"
          align="center"
          :size="0"
          style="max-width: 1200px; width: 100%; height: 90px; padding: 0 24px;"
        >
        <!-- 桌面端布局 - 扁平化n-flex布局，所有元素作为直接子元素 -->
        <n-flex
          v-if="!isMobile"
          justify="space-between"
          align="center"
          :size="0"
          style="width: 100%; height: 100%;"
        >
          <!-- Logo -->
          <CompanyLogo />

          <!-- 导航菜单 - 占据剩余空间并左对齐 -->
          <NavigationMenu
            :spacing="navSpacing"
            justify="start"
            :active-key="currentNavKey"
            @nav-click="handleNavClick"
            style="flex: 1; margin-left: 24px;"
          />

          <!-- 右侧操作区域 -->
          <n-flex align="center" :size="24" style="flex-shrink: 0;">
            <LanguageSwitcher @language-changed="handleLanguageChanged" />
            <AdminLoginButton @login-click="handleLoginClick" />
          </n-flex>
        </n-flex>

        <!-- 移动端布局 - 使用n-flex实现移动端布局 -->
        <n-flex
          v-else
          justify="space-between"
          align="center"
          style="width: 100%; height: 100%;"
        >
          <!-- 移动端Logo -->
          <CompanyLogo />

          <!-- 移动端右侧操作 -->
          <n-flex align="center" :size="16">
            <LanguageSwitcher @language-changed="handleLanguageChanged" />
            <n-button
              text
              @click="toggleMobileMenu"
              :aria-label="$t('navigation.mobile_menu_toggle')"
            >
              ☰
            </n-button>
          </n-flex>
        </n-flex>
        </n-flex>
      </n-flex>
    </n-layout-header>

      <!-- 移动端抽屉菜单 -->
      <n-drawer v-model:show="showMobileMenu" :width="280" placement="right">
        <n-drawer-content :title="t('navigation.menu')" closable>
          <n-flex vertical :size="20">
            <n-menu
              :options="mobileMenuOptions"
              @update:value="handleMobileMenuSelect"
              :theme-overrides="{
                itemContentPadding: '12px 0',
                itemFontWeight: '500'
              }"
            />
            <n-divider />
            <n-flex vertical :size="16">
              <LanguageSwitcher
                size="small"
                mobile
                @language-changed="handleLanguageChanged"
              />
              <n-button type="primary" block @click="handleLogin">{{ t('navigation.admin_login') }}</n-button>
            </n-flex>
          </n-flex>
        </n-drawer-content>
      </n-drawer>

    <!-- 主要内容区域 -->
    <n-layout-content :style="{ flex: 1 }">
      <router-view />
    </n-layout-content>

    <!-- 页脚 -->
    <n-layout-footer :style="{
      background: 'var(--n-color-primary)',
      color: 'var(--n-color-base)',
      padding: '50px 0 30px'
    }">
      <n-flex justify="center" style="width: 100%;">
        <n-flex
          vertical
          align="center"
          :size="6"
          style="max-width: 1200px; width: 100%; padding: 0 30px; border-top: 1px solid #3b82f6; padding-top: 25px; text-align: center; color: #cbd5e1;"
        >
          <p style="margin: 6px 0; font-size: 14px;">&copy; 2019-2025 {{ currentLocale === 'zh-CN' ? '苏州思普微电子科技有限公司 版权所有' : 'Suzhou SIPUMTECH Electronic Technology Co., Ltd. All Rights Reserved' }}</p>
          <p style="margin: 6px 0; font-size: 14px;">{{ currentLocale === 'zh-CN' ? '专业技术 · 快速响应 · 质量保证' : 'Professional Technology · Rapid Response · Quality Assurance' }}</p>
        </n-flex>
      </n-flex>
    </n-layout-footer>
  </n-layout>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useBreakpoints } from '@vueuse/core'
import LanguageSwitcher from '@/components/common/LanguageSwitcher.vue'
import CompanyLogo from '@/components/common/CompanyLogo.vue'
import NavigationMenu from '@/components/common/NavigationMenu.vue'
import AdminLoginButton from '@/components/common/AdminLoginButton.vue'

const { locale, t } = useI18n()

const showMobileMenu = ref(false)
const currentNavKey = ref('home') // 当前激活的导航项

// 当前语言状态
const currentLocale = computed(() => locale.value === 'cn' ? 'zh-CN' : 'en')

// 使用 VueUse 的 breakpoints 进行响应式设计
const breakpoints = useBreakpoints({
  sm: 769,
  md: 900,
  lg: 1024,
  xl: 1200,
})

// 优化的响应式导航间距 - 使用 breakpoints 减少重新计算
const navSpacing = computed(() => {
  if (breakpoints.xl.value) return 40      // 大屏幕 (>=1200px)
  if (breakpoints.lg.value) return 28      // 中等屏幕 (>=1024px)
  if (breakpoints.md.value) return 16      // 平板端 (>=900px)
  if (breakpoints.sm.value) return 12      // 小平板端 (>=769px)
  return 32                                // 默认值 (<769px)
})

// 使用Naive UI原生响应式能力 - 移动端检测
const isMobile = computed(() => {
  // 使用breakpoints判断是否为移动端
  return !breakpoints.md.value  // 小于900px视为移动端
})

// 移动端菜单选项
const mobileMenuOptions = computed(() => [
  {
    label: t('navigation.home'),
    key: 'home',
    href: '#home'
  },
  {
    label: t('navigation.about'),
    key: 'about',
    href: '#about'
  },
  {
    label: t('navigation.business'),
    key: 'business',
    href: '#business'
  },
  {
    label: t('navigation.technology'),
    key: 'technology',
    href: '#technology'
  },
  {
    label: t('navigation.cases'),
    key: 'cases',
    href: '#cases'
  },
  {
    label: t('navigation.news'),
    key: 'news',
    href: '#news'
  },
  {
    label: t('navigation.contact'),
    key: 'contact',
    href: '#contact'
  }
])

// 处理导航点击
const handleNavClick = (navItem) => {
  currentNavKey.value = navItem.key
  // 可以在这里添加页面滚动逻辑或其他导航处理
}

// 处理管理员登录点击
const handleLoginClick = () => {
  // 可以在这里添加登录前的逻辑，如埋点统计等
  console.log('Admin login clicked')
}

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

// 处理移动端菜单项点击
const handleMobileMenuSelect = (key, item) => {
  try {
    // 导航到对应的锚点 - 添加window对象安全检查
    if (item.href && typeof window !== 'undefined') {
      // 更新当前导航状态
      currentNavKey.value = key

      // 平滑滚动到目标位置
      const targetElement = document.querySelector(item.href)
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      } else {
        // 降级处理：直接跳转
        window.location.href = item.href
      }
    }
  } catch (error) {
    console.warn('Navigation failed:', error)
    // 降级处理：使用传统跳转方式
    if (item.href && typeof window !== 'undefined') {
      window.location.href = item.href
    }
  } finally {
    // 关闭移动端菜单
    showMobileMenu.value = false
  }
}

// 处理语言切换事件
const handleLanguageChanged = (targetLang) => {
  try {
    // 关闭移动端菜单
    showMobileMenu.value = false

    // 可以在这里添加语言切换的埋点统计
    console.log('Language changed to:', targetLang)
  } catch (error) {
    console.warn('Language change handling failed:', error)
  }
}

// 性能监控和错误处理
onMounted(() => {
  try {
    // 记录组件挂载时间
    console.log('Website layout mounted at:', new Date().toISOString())

    // 可以在这里添加性能监控代码
    if (typeof window !== 'undefined' && window.performance) {
      const navigationTiming = window.performance.getEntriesByType('navigation')[0]
      if (navigationTiming) {
        console.log('Page load performance:', {
          domContentLoaded: navigationTiming.domContentLoadedEventEnd - navigationTiming.domContentLoadedEventStart,
          loadComplete: navigationTiming.loadEventEnd - navigationTiming.loadEventStart
        })
      }
    }
  } catch (error) {
    console.warn('Performance monitoring failed:', error)
  }
})

onUnmounted(() => {
  try {
    console.log('Website layout unmounted at:', new Date().toISOString())
  } catch (error) {
    console.warn('Cleanup failed:', error)
  }
})

// 全局错误处理已移除 - 如需要可在应用级别配置

// n-drawer 组件自带点击外部关闭功能，不需要手动处理
</script>

<style scoped>
/* 企业官网布局样式 - 遵循Naive UI框架优先原则 */

/* 顶部导航栏样式已移至n-layout-header的style属性 - 遵循Naive UI框架优先原则 */

/* header-container样式已移至n-flex组件的style属性 - 遵循Naive UI框架优先原则 */

/* Logo样式由CompanyLogo组件管理 */

/* 导航菜单样式由NavigationMenu组件管理 - 遵循Naive UI框架优先原则 */

/*
 * 语言切换和管理员登录样式已移至对应组件
 * 原因：组件样式应该封装在组件内部，符合组件化设计原则
 */

/* 响应式设计 - header-container已移至n-flex组件，无需媒体查询 */

/* 移动端抽屉菜单样式已移至n-flex和n-menu的theme-overrides - 遵循Naive UI框架优先原则 */

/* website-main样式已移至n-layout-content的style属性 - 遵循Naive UI框架优先原则 */

/* website-footer样式已移至n-layout-footer的style属性 - 遵循Naive UI框架优先原则 */

/* footer-container和footer-content样式已移至n-flex组件 - 遵循Naive UI框架优先原则 */

/* 页脚相关样式已移除 - 当前页脚使用简化版本，复杂页脚样式应在具体页面中使用Naive UI组件实现 */

/* footer-bottom样式已移至n-flex组件的style属性 - 遵循Naive UI框架优先原则 */

/* 响应式设计 - 导航项样式已移至NavigationMenu组件，其他样式已移至对应组件 */

/* 移动端适配 - 所有样式已移至对应组件，使用Naive UI的响应式能力和JavaScript breakpoints */
</style>

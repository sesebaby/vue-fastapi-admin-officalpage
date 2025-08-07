<template>
  <n-layout class="website-layout">
    <!-- 顶部导航栏 - 使用Naive UI原生n-space组件 -->
    <n-layout-header class="website-header">
      <div class="header-container">
        <!-- 桌面端布局 - 使用n-space实现space-between布局 -->
        <n-space
          v-if="!isMobile"
          justify="space-between"
          align="center"
          :size="20"
          style="width: 100%; height: 100%;"
        >
          <!-- 左侧Logo -->
          <CompanyLogo />

          <!-- 中间导航菜单 -->
          <NavigationMenu
            :spacing="navSpacing"
            justify="center"
            :active-key="currentNavKey"
            @nav-click="handleNavClick"
          />

          <!-- 右侧操作区域 -->
          <n-space align="center" :size="24">
            <LanguageSwitcher @language-changed="handleLanguageChanged" />
            <AdminLoginButton @login-click="handleLoginClick" />
          </n-space>
        </n-space>

        <!-- 移动端布局 - 使用n-space实现移动端布局 -->
        <n-space
          v-else
          justify="space-between"
          align="center"
          style="width: 100%; height: 100%;"
        >
          <!-- 移动端Logo -->
          <CompanyLogo />

          <!-- 移动端右侧操作 -->
          <n-space align="center" :size="16">
            <LanguageSwitcher @language-changed="handleLanguageChanged" />
            <n-button
              text
              @click="toggleMobileMenu"
              :aria-label="$t('navigation.mobile_menu_toggle')"
            >
              ☰
            </n-button>
          </n-space>
        </n-space>
      </div>
    </n-layout-header>

      <!-- 移动端抽屉菜单 -->
      <n-drawer v-model:show="showMobileMenu" :width="280" placement="right">
        <n-drawer-content :title="t('navigation.menu')" closable>
          <n-menu
            :options="mobileMenuOptions"
            @update:value="handleMobileMenuSelect"
            class="mobile-nav-menu"
          />
          <div class="mobile-actions">
            <div class="mobile-language-switch">
              <LanguageSwitcher
                size="small"
                mobile
                container-class="mobile-language-switch"
                @language-changed="handleLanguageChanged"
              />
            </div>
            <n-button type="primary" block @click="handleLogin">{{ t('navigation.admin_login') }}</n-button>
          </div>
        </n-drawer-content>
      </n-drawer>

    <!-- 主要内容区域 -->
    <n-layout-content class="website-main">
      <router-view />
    </n-layout-content>

    <!-- 页脚 -->
    <n-layout-footer class="website-footer">
      <div class="footer-container">
        <n-grid :cols="3" :x-gap="50" class="footer-content">
          <n-grid-item class="footer-section">
            <h3>{{ currentLocale === 'zh-CN' ? '苏州思普微电子科技有限公司' : 'Suzhou SIPUMTECH Electronic Technology Co., Ltd.' }}</h3>
            <p>{{ currentLocale === 'zh-CN' ? '专业的先进系统级封装设计软硬件开发一站式服务供应商' : 'Professional advanced system-level packaging design and hardware/software development one-stop service provider' }}</p>
            <div class="certifications">
              <img src="/images/ISO9001质量管理体系认证证书.png" alt="ISO9001认证" class="cert-badge">
              <img src="/images/武器装备质量管理体系证书.png" alt="军工认证" class="cert-badge">
            </div>
          </n-grid-item>

          <n-grid-item class="footer-section">
            <h4>{{ $t('website.contact.title') }}</h4>
            <p><span>📍</span> {{ $t('website.contact.address') }}</p>
            <p><span>📞</span> {{ $t('website.contact.phone') }}</p>
            <p><span>📧</span> wenqiang.chang@sipumtech.com</p>
          </n-grid-item>

          <n-grid-item class="footer-section">
            <h4>{{ $t('navigation.business') }}</h4>
            <p>• {{ $t('website.service_nav.advanced_packaging') }}</p>
            <p>• {{ $t('website.service_nav.hardware_solution') }}</p>
            <p>• {{ currentLocale === 'zh-CN' ? 'PCB设计与仿真' : 'PCB Design & Simulation' }}</p>
            <p>• {{ currentLocale === 'zh-CN' ? '系统级测试服务' : 'System-level Testing Services' }}</p>
          </n-grid-item>
        </n-grid>

        <div class="footer-bottom">
          <p>&copy; 2019-2025 {{ currentLocale === 'zh-CN' ? '苏州思普微电子科技有限公司 版权所有' : 'Suzhou SIPUMTECH Electronic Technology Co., Ltd. All Rights Reserved' }}</p>
          <p>{{ currentLocale === 'zh-CN' ? '专业技术 · 快速响应 · 质量保证' : 'Professional Technology · Rapid Response · Quality Assurance' }}</p>
        </div>
      </div>
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
/* 企业官网布局样式 - 华天科技风格 */
.website-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: var(--n-font-family);
}

/* 顶部导航栏 - 华天科技风格 */
.website-header {
  background: var(--n-color-base);
  border-bottom: 1px solid var(--n-border-color);
  box-shadow: var(--n-box-shadow-1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

/* 最小化自定义样式 - 主要依赖Naive UI原生组件 */
.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
  height: 90px;
}

/* Logo样式由CompanyLogo组件管理 */

/* 导航菜单样式由NavigationMenu组件管理 */
.header-nav {
  flex-wrap: nowrap !important;
  width: 100%;
}

/*
 * 语言切换和管理员登录样式已移至对应组件
 * 原因：组件样式应该封装在组件内部，符合组件化设计原则
 */

/* 响应式设计 - 最小化自定义CSS */
@media (max-width: 1200px) {
  .header-container {
    padding: 0 20px;
  }
}

@media (max-width: 768px) {
  .header-container {
    padding: 0 15px;
    height: 70px;
  }
}

/* 移动端抽屉菜单样式 */
.mobile-nav-menu {
  margin-bottom: 20px;
}

.mobile-nav-menu .n-menu-item-content {
  padding: 12px 0 !important;
  font-weight: 500 !important;
}

.mobile-nav-menu .n-menu-item-content:hover {
  color: #1e40af !important;
}

.mobile-actions {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #f3f4f6;
}

.mobile-language-switch {
  margin-bottom: 16px;
}

/* 主要内容区域 */
.website-main {
  flex: 1;
}

/* 页脚 - 华天科技风格 */
.website-footer {
  background: var(--n-color-primary);
  color: var(--n-color-base);
  padding: 50px 0 30px;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
}

.footer-content {
  margin-bottom: 40px;
}

.footer-section h3 {
  color: var(--n-color-base);
  margin-bottom: 20px;
  font-size: 22px;
  font-weight: bold;
}

.footer-section h4 {
  color: var(--n-accent-color);
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: 600;
}

.footer-section p {
  color: var(--n-text-color-3);
  line-height: 1.7;
  margin-bottom: 10px;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 14px;
}

.footer-section p span {
  margin-top: 2px;
}

.certifications {
  display: flex;
  gap: 16px;
  margin-top: 20px;
}

.cert-badge {
  width: 70px;
  height: 70px;
  object-fit: contain;
  background: #ffffff;
  padding: 6px;
  border-radius: 6px;
  transition: transform 0.3s ease;
}

.cert-badge:hover {
  transform: scale(1.05);
}

.footer-bottom {
  border-top: 1px solid #3b82f6;
  padding-top: 25px;
  text-align: center;
  color: #cbd5e1;
}

.footer-bottom p {
  margin: 6px 0;
  font-size: 14px;
  justify-content: center;
}

/* 响应式设计 */
/* 大屏幕优化 (1200px+) */
@media (min-width: 1200px) {
  .nav-item {
    font-size: 16px;
    padding: 12px 12px;
  }
}

/* 中等屏幕适配 (1024px - 1199px) */
@media (max-width: 1199px) and (min-width: 1024px) {
  .header-container {
    padding: 0 24px;
  }

  .nav-item {
    font-size: 15px;
    padding: 12px 6px;
  }

  .language-switch {
    margin-right: 16px;
  }
}

/* 平板端适配 (768px - 1023px) */
@media (max-width: 1023px) and (min-width: 769px) {
  .header-container {
    padding: 0 20px;
    height: 75px;
  }

  .nav-item {
    font-size: 14px;
    padding: 8px 4px;
  }

  .language-switch {
    margin-right: 12px;
  }

  .lang-item {
    padding: 4px 8px;
    font-size: 13px;
  }

  .admin-login-btn {
    padding: 8px 16px;
    font-size: 13px;
  }
}

/* 小平板端适配 (900px以下时进一步压缩) */
@media (max-width: 900px) and (min-width: 769px) {
  .nav-item {
    font-size: 13px;
    padding: 8px 2px;
  }
}

/* 移动端适配 (768px及以下) */
@media (max-width: 768px) {
  .header-container {
    padding: 0 16px;
    height: 70px;
  }

  .company-name {
    font-size: 18px;
  }

  .company-subtitle {
    font-size: 10px;
  }

  .header-nav-container {
    display: none;
  }

  .header-right {
    display: none;
  }

  .mobile-menu-btn {
    display: block;
  }

  .footer-content :deep(.n-grid) {
    grid-template-columns: 1fr !important;
    gap: 24px !important;
  }

  .certifications {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .company-logo {
    gap: 8px;
  }

  .logo-img {
    width: 40px;
    height: 40px;
  }

  .company-name {
    font-size: 16px;
  }

  .company-subtitle {
    display: none;
  }
}
</style>

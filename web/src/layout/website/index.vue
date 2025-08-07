<template>
  <div class="website-layout">
    <!-- 顶部导航栏 -->
    <header class="website-header">
      <div class="header-container">
        <!-- 左侧Logo和公司名称 -->
        <div class="header-left">
          <div class="company-logo">
            <img src="/images/company_logo_watermark.jpg" alt="SIPUMTECH" class="logo-img">
            <div class="company-info">
              <h1 class="company-name">SIPUMTECH</h1>
              <p class="company-subtitle">苏州思普微电子科技有限公司</p>
            </div>
          </div>
        </div>

        <!-- 中间导航菜单 -->
        <n-space :size="navSpacing" align="center" class="header-nav">
          <a href="#home" class="nav-item active">{{ $t('navigation.home') }}</a>
          <a href="#about" class="nav-item">{{ $t('navigation.about') }}</a>
          <a href="#business" class="nav-item">{{ $t('navigation.business') }}</a>
          <a href="#technology" class="nav-item">{{ $t('navigation.technology') }}</a>
          <a href="#cases" class="nav-item">{{ $t('navigation.cases') }}</a>
          <a href="#news" class="nav-item">{{ $t('navigation.news') }}</a>
          <a href="#contact" class="nav-item">{{ $t('navigation.contact') }}</a>
        </n-space>

        <!-- 右侧语言切换和登录入口 -->
        <div class="header-right">
          <n-space :size="8" align="center" class="language-switch">
            <n-button
              text
              :type="currentLocale === 'zh-CN' ? 'primary' : 'default'"
              :class="['lang-item', { active: currentLocale === 'zh-CN' }]"
              @click="switchLanguage('zh-CN')"
            >
              中文
            </n-button>
            <span class="lang-divider">|</span>
            <n-button
              text
              :type="currentLocale === 'en' ? 'primary' : 'default'"
              :class="['lang-item', { active: currentLocale === 'en' }]"
              @click="switchLanguage('en')"
            >
              English
            </n-button>
          </n-space>

          <!-- 管理员登录图标按钮 -->
          <n-button
            text
            class="admin-login"
            @click="handleLogin"
            :title="$t('navigation.admin_login_tooltip')"
            :aria-label="$t('navigation.admin_login_tooltip')"
          >
            <svg class="login-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </n-button>
        </div>

        <!-- 移动端菜单按钮 -->
        <n-button
          text
          class="mobile-menu-btn"
          @click="toggleMobileMenu"
          :aria-label="$t('navigation.mobile_menu_toggle')"
        >
          ☰
        </n-button>
      </div>

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
              <n-button
                :type="currentLocale === 'zh-CN' ? 'primary' : 'default'"
                :class="['mobile-lang-item', { active: currentLocale === 'zh-CN' }]"
                @click="switchLanguage('zh-CN')"
                size="small"
              >
                中文
              </n-button>
              <n-button
                :type="currentLocale === 'en' ? 'primary' : 'default'"
                :class="['mobile-lang-item', { active: currentLocale === 'en' }]"
                @click="switchLanguage('en')"
                size="small"
              >
                English
              </n-button>
            </div>
            <n-button type="primary" block @click="handleLogin">{{ t('navigation.admin_login') }}</n-button>
          </div>
        </n-drawer-content>
      </n-drawer>
    </header>

    <!-- 主要内容区域 -->
    <main class="website-main">
      <router-view />
    </main>

    <!-- 页脚 -->
    <footer class="website-footer">
      <div class="footer-container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>{{ currentLocale === 'zh-CN' ? '苏州思普微电子科技有限公司' : 'Suzhou SIPUMTECH Electronic Technology Co., Ltd.' }}</h3>
            <p>{{ currentLocale === 'zh-CN' ? '专业的先进系统级封装设计软硬件开发一站式服务供应商' : 'Professional advanced system-level packaging design and hardware/software development one-stop service provider' }}</p>
            <div class="certifications">
              <img src="/images/ISO9001质量管理体系认证证书.png" alt="ISO9001认证" class="cert-badge">
              <img src="/images/武器装备质量管理体系证书.png" alt="军工认证" class="cert-badge">
            </div>
          </div>

          <div class="footer-section">
            <h4>{{ $t('website.contact.title') }}</h4>
            <p><span>📍</span> {{ $t('website.contact.address') }}</p>
            <p><span>📞</span> {{ $t('website.contact.phone') }}</p>
            <p><span>📧</span> {{ $t('website.contact.email') }}</p>
          </div>

          <div class="footer-section">
            <h4>{{ $t('navigation.business') }}</h4>
            <p>• {{ $t('website.service_nav.advanced_packaging') }}</p>
            <p>• {{ $t('website.service_nav.hardware_solution') }}</p>
            <p>• {{ currentLocale === 'zh-CN' ? 'PCB设计与仿真' : 'PCB Design & Simulation' }}</p>
            <p>• {{ currentLocale === 'zh-CN' ? '系统级测试服务' : 'System-level Testing Services' }}</p>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2019-2025 {{ currentLocale === 'zh-CN' ? '苏州思普微电子科技有限公司 版权所有' : 'Suzhou SIPUMTECH Electronic Technology Co., Ltd. All Rights Reserved' }}</p>
          <p>{{ currentLocale === 'zh-CN' ? '专业技术 · 快速响应 · 质量保证' : 'Professional Technology · Rapid Response · Quality Assurance' }}</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { lStorage } from '@/utils'
import { websiteThemeOverrides } from '~/settings'

const router = useRouter()
const { locale, t } = useI18n()

// 网站主题配置
const websiteTheme = websiteThemeOverrides

const showMobileMenu = ref(false)

// 当前语言状态
const currentLocale = computed(() => locale.value === 'cn' ? 'zh-CN' : 'en')

// 响应式导航间距
const navSpacing = computed(() => {
  if (typeof window === 'undefined') return 32

  const width = window.innerWidth
  if (width >= 1200) return 40      // 大屏幕
  if (width >= 1024) return 28      // 中等屏幕
  if (width >= 900) return 16       // 平板端
  if (width >= 769) return 12       // 小平板端
  return 32                         // 默认值
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

const handleLogin = () => {
  router.push('/login')
}

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

// 处理移动端菜单项点击
const handleMobileMenuSelect = (key, item) => {
  // 导航到对应的锚点
  if (item.href) {
    window.location.href = item.href
  }
  // 关闭移动端菜单
  showMobileMenu.value = false
}

// 语言切换功能
const switchLanguage = (lang) => {
  const targetLang = lang === 'zh-CN' ? 'cn' : 'en'
  locale.value = targetLang
  lStorage.set('locale', targetLang)

  // 关闭移动端菜单
  showMobileMenu.value = false
}

// n-drawer 组件自带点击外部关闭功能，不需要手动处理
</script>

<style scoped>
/* 企业官网布局样式 - 华天科技风格 */
.website-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: "Microsoft YaHei", "PingFang SC", "Helvetica Neue", Arial, sans-serif;
}

/* 顶部导航栏 - 华天科技风格 */
.website-header {
  background: #ffffff;
  border-bottom: 1px solid #e0e6ed;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90px;
}

/* 左侧Logo区域 - 华天科技风格 */
.header-left {
  display: flex;
  align-items: center;
}

.company-logo {
  display: flex;
  align-items: center;
  gap: 16px;
}

.logo-img {
  width: 60px;
  height: 60px;
  object-fit: contain;
}

.company-info {
  display: flex;
  flex-direction: column;
}

.company-name {
  font-size: 28px;
  font-weight: bold;
  color: #1e3a8a;
  margin: 0;
  line-height: 1.2;
  letter-spacing: 1px;
}

.company-subtitle {
  font-size: 13px;
  color: #6b7280;
  margin: 0;
  line-height: 1.2;
  font-weight: 400;
}

/* 中间导航菜单 - 华天科技风格 */
.header-nav {
  flex-wrap: nowrap !important;
}

.nav-item {
  color: #374151;
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
  color: #1e3a8a;
  border-bottom-color: #f59e0b;
}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: #f59e0b;
  transition: width 0.3s ease;
}

.nav-item:hover::after,
.nav-item.active::after {
  width: 100%;
}

/* 右侧操作区域 - 华天科技风格 */
.header-right {
  display: flex;
  align-items: center;
  gap: 24px;
}

.language-switch {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  margin-right: 20px;
}

.lang-item {
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
}

.lang-item.active {
  color: #1e3a8a;
  background: #f0f9ff;
  font-weight: 600;
}

.lang-item:hover {
  color: #1e40af;
  background: #f8fafc;
}

.lang-divider {
  color: #d1d5db;
}

/* 管理员登录图标 */
.admin-login {
  width: 40px !important;
  height: 40px !important;
  border-radius: 50% !important;
  background: rgba(30, 58, 138, 0.08) !important;
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
  background: rgba(30, 58, 138, 0.15) !important;
  transform: scale(1.05) !important;
}

.login-icon {
  width: 20px;
  height: 20px;
  color: #1e3a8a;
  transition: color 0.3s ease;
}

.admin-login:hover .login-icon {
  color: #1e40af;
}

.login-btn {
  background: #1e3a8a;
  border: 1px solid #1e3a8a;
  color: #ffffff;
  padding: 10px 24px;
  font-weight: 500;
  font-size: 14px;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.login-btn:hover {
  background: #1e40af;
  border-color: #1e40af;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(30, 58, 138, 0.3);
}

/* 移动端菜单 */
.mobile-menu-btn {
  display: none;
  color: #374151 !important;
  z-index: 1000;
  position: relative;
  padding: 8px !important;
  font-size: 20px !important;
  min-width: auto !important;
  height: auto !important;
  background: transparent !important;
  border: none !important;
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
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  justify-content: center;
}

.mobile-lang-item {
  flex: 1;
}

.mobile-lang-item {
  background: none;
  border: 1px solid #e5e7eb;
  color: #6b7280;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  flex: 1;
}

.mobile-lang-item.active {
  color: #1e3a8a;
  background: #f0f9ff;
  border-color: #1e3a8a;
  font-weight: 600;
}

.mobile-lang-item:hover {
  color: #1e40af;
  background: #f8fafc;
  border-color: #1e40af;
}

/* 主要内容区域 */
.website-main {
  flex: 1;
}

/* 页脚 - 华天科技风格 */
.website-footer {
  background: #1e3a8a;
  color: #ffffff;
  padding: 50px 0 30px;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 50px;
  margin-bottom: 40px;
}

.footer-section h3 {
  color: #ffffff;
  margin-bottom: 20px;
  font-size: 22px;
  font-weight: bold;
}

.footer-section h4 {
  color: #f59e0b;
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: 600;
}

.footer-section p {
  color: #cbd5e1;
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

  .header-nav {
    display: none;
  }

  .header-right {
    display: none;
  }

  .mobile-menu-btn {
    display: block;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 24px;
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

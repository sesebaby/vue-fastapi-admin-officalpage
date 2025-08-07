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
        <nav class="header-nav">
          <a href="#home" class="nav-item active">首页</a>
          <a href="#about" class="nav-item">关于我们</a>
          <a href="#business" class="nav-item">业务中心</a>
          <a href="#technology" class="nav-item">技术能力</a>
          <a href="#cases" class="nav-item">案例展示</a>
          <a href="#contact" class="nav-item">联系我们</a>
        </nav>

        <!-- 右侧登录入口和语言切换 -->
        <div class="header-right">
          <div class="language-switch">
            <span class="lang-item active">中文</span>
            <span class="lang-divider">|</span>
            <span class="lang-item">English</span>
          </div>
          <n-button 
            type="primary" 
            class="login-btn"
            @click="handleLogin"
          >
            管理员登录
          </n-button>
        </div>

        <!-- 移动端菜单按钮 -->
        <div class="mobile-menu-btn" @click="toggleMobileMenu">
          <span>☰</span>
        </div>
      </div>

      <!-- 移动端菜单 -->
      <div v-show="showMobileMenu" class="mobile-menu">
        <a href="#home" class="mobile-nav-item">首页</a>
        <a href="#about" class="mobile-nav-item">关于我们</a>
        <a href="#business" class="mobile-nav-item">业务中心</a>
        <a href="#technology" class="mobile-nav-item">技术能力</a>
        <a href="#cases" class="mobile-nav-item">案例展示</a>
        <a href="#contact" class="mobile-nav-item">联系我们</a>
        <div class="mobile-actions">
          <n-button type="primary" block @click="handleLogin">管理员登录</n-button>
        </div>
      </div>
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
            <h3>苏州思普微电子科技有限公司</h3>
            <p>专业的先进系统级封装设计软硬件开发一站式服务供应商</p>
            <div class="certifications">
              <img src="/images/ISO9001质量管理体系认证证书.png" alt="ISO9001认证" class="cert-badge">
              <img src="/images/武器装备质量管理体系证书.png" alt="军工认证" class="cert-badge">
            </div>
          </div>
          
          <div class="footer-section">
            <h4>联系信息</h4>
            <p><span>📍</span> 苏州市吴江区东太湖生态旅游度假区体育路508号</p>
            <p><span>📞</span> 15318923490</p>
            <p><span>📧</span> wenqiang.chang@sipumtech.com</p>
          </div>
          
          <div class="footer-section">
            <h4>核心业务</h4>
            <p>• 先进封装设计与制造</p>
            <p>• 硬件方案开发</p>
            <p>• PCB设计与仿真</p>
            <p>• 系统级测试服务</p>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2019-2025 苏州思普微电子科技有限公司 版权所有</p>
          <p>专业技术 · 快速响应 · 质量保证</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const showMobileMenu = ref(false)

const handleLogin = () => {
  router.push('/login')
}

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}
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
  display: flex;
  gap: 40px;
}

.nav-item {
  color: #374151;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  padding: 12px 0;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
  position: relative;
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
}

.lang-item {
  color: #6b7280;
  cursor: pointer;
  transition: color 0.3s ease;
  padding: 4px 8px;
  border-radius: 4px;
}

.lang-item.active,
.lang-item:hover {
  color: #1e3a8a;
  background: #f0f9ff;
}

.lang-divider {
  color: #d1d5db;
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
  cursor: pointer;
  color: #374151;
}

.mobile-menu {
  display: none;
  background: #ffffff;
  border-top: 1px solid #e5e7eb;
  padding: 20px;
}

.mobile-nav-item {
  display: block;
  color: #374151;
  text-decoration: none;
  padding: 12px 0;
  border-bottom: 1px solid #f3f4f6;
  font-weight: 500;
}

.mobile-actions {
  margin-top: 20px;
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

  .mobile-menu {
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

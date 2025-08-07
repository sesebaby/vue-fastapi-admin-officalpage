<template>
  <div class="home-page">
    <!-- Hero Banner 轮播区域 - 华天科技风格 -->
    <section id="home" class="hero-banner">
      <div class="hero-slider">
        <!-- 第一张轮播 -->
        <div class="slide active">
          <div class="slide-background">
            <img src="/images/商务科技概念图.png" alt="商务科技" class="bg-image">
            <div class="bg-overlay"></div>
          </div>
          <div class="slide-content">
            <div class="slide-container">
              <h1 class="slide-title">
                <span class="company-name animated-text">
                  <span class="char">S</span>
                  <span class="char">I</span>
                  <span class="char">P</span>
                  <span class="char">U</span>
                  <span class="char">M</span>
                  <span class="char">T</span>
                  <span class="char">E</span>
                  <span class="char">C</span>
                  <span class="char">H</span>
                </span>
              </h1>
              <h2 class="slide-subtitle animated-text">
                <span class="char">先</span>
                <span class="char">进</span>
                <span class="char">封</span>
                <span class="char">装</span>
                <span class="char">·</span>
                <span class="char">一</span>
                <span class="char">站</span>
                <span class="char">式</span>
                <span class="char">服</span>
                <span class="char">务</span>
                <span class="char">、</span>
                <span class="char">晶</span>
                <span class="char">圆</span>
                <span class="char">级</span>
                <span class="char">技</span>
                <span class="char">术</span>
                <span class="char">能</span>
                <span class="char">力</span>
                <span class="char">、</span>
                <span class="char">系</span>
                <span class="char">统</span>
                <span class="char">级</span>
                <span class="char">质</span>
                <span class="char">量</span>
                <span class="char">把</span>
                <span class="char">控</span>
              </h2>
            </div>
          </div>
        </div>

        <!-- 第二张轮播 -->
        <div class="slide">
          <div class="slide-background">
            <img src="/images/科技电路背景图.png" alt="科技背景" class="bg-image">
            <div class="bg-overlay"></div>
          </div>
          <div class="slide-content">
            <div class="slide-container">
              <h1 class="slide-title">
                <span class="company-name">专业技术</span>
              </h1>
              <h2 class="slide-subtitle">
                快速响应 · 质量保证 · 一站式解决方案
              </h2>
            </div>
          </div>
        </div>

        <!-- 轮播控制按钮 -->
        <div class="slider-controls">
          <button class="prev-btn" @click="prevSlide">‹</button>
          <button class="next-btn" @click="nextSlide">›</button>
        </div>

        <!-- 轮播指示器 -->
        <div class="slider-indicators">
          <button
            v-for="(slide, index) in slides"
            :key="index"
            :class="['indicator', { active: currentSlide === index }]"
            @click="goToSlide(index)"
          ></button>
        </div>
      </div>
    </section>

    <!-- 服务导航区域 - 华天科技风格 -->
    <section class="service-nav-section">
      <div class="section-container">
        <div class="service-nav-header">
          <h3 class="service-nav-title">
            <span class="title-highlight">封测服务</span>
          </h3>
        </div>
        <div class="service-nav-list">
          <a href="#advanced-packaging" class="service-nav-item">
            <h5>先进封装</h5>
          </a>
          <a href="#hardware-solution" class="service-nav-item">
            <h5>硬件方案</h5>
          </a>
          <a href="#testing-service" class="service-nav-item">
            <h5>测试服务</h5>
          </a>
        </div>
      </div>
    </section>

    <!-- 主要服务展示 - 华天科技风格 -->
    <section class="main-services-section">
      <div class="section-container">
        <div class="services-grid">
          <div class="service-card large-card" @mouseenter="startHover" @mouseleave="endHover">
            <div class="service-content">
              <h4 class="service-brand">SIPUMTECH</h4>
              <h4 class="service-subtitle">OSAT Turnkey Service</h4>
              <h5 class="service-title">先进封装一站式服务</h5>
              <p class="service-description">
                封装设计、封装仿真、引线框封装、基板封装、晶圆级封装、晶圆测试及功能测试、物流配送等一站式服务。
              </p>
              <div class="service-more">
                <img src="/images/icon_advanced_packaging.jpg" alt="更多" class="more-icon">
              </div>
            </div>
          </div>

          <div class="service-card large-card" @mouseenter="startHover" @mouseleave="endHover">
            <div class="service-content">
              <h4 class="service-brand">SIPUMTECH</h4>
              <h4 class="service-subtitle">OSAT Turnkey Service</h4>
              <h5 class="service-title">先进测试服务</h5>
              <p class="service-description">
                思普微科技提供从程序开发、CP、FT到SLT的全流程封装产品测试。
              </p>
              <div class="service-more">
                <img src="/images/icon_ic_testing.jpg" alt="更多" class="more-icon">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 产品技术展示 - 华天科技风格 -->
    <section class="products-section">
      <div class="section-container">
        <div class="products-grid">
          <div class="product-card">
            <div class="product-image">
              <img src="/images/icon_advanced_packaging.jpg" alt="先进封装">
            </div>
            <div class="product-content">
              <h5 class="product-title">先进封装</h5>
              <p class="product-description">
                先进封装（Advanced Packaging）是将多种功能芯片，包括处理器、存储器等功能芯片集成在一个封装内，从而实现一个基本完整的功能。其封装效率高、系统成本低、尺寸小、应用广泛。
              </p>
            </div>
          </div>

          <div class="product-card">
            <div class="product-image">
              <img src="/images/icon_hardware_design.jpg" alt="硬件方案">
            </div>
            <div class="product-content">
              <h5 class="product-title">硬件方案</h5>
              <p class="product-description">
                思普微科技拥有完全自主知识产权的硬件方案开发解决方案，可以为客户提供原理图设计、PCB设计、系统级仿真等服务。
              </p>
            </div>
          </div>

          <div class="product-card">
            <div class="product-image">
              <img src="/images/icon_wafer_packaging.jpg" alt="晶圆级封装">
            </div>
            <div class="product-content">
              <h5 class="product-title">晶圆级封装</h5>
              <p class="product-description">
                思普微科技晶圆级封装包含WLCSP，TSV，RDL等封装，产品线涵盖各种先进封装技术，满足客户高密度高速度封装需求。
              </p>
            </div>
          </div>

          <div class="product-card">
            <div class="product-image">
              <img src="/images/technical_chart_circuit.jpg" alt="测试服务">
            </div>
            <div class="product-content">
              <h5 class="product-title">测试服务</h5>
              <p class="product-description">
                测试服务产品具有体积小、重量轻、功耗低、灵敏度高、价格低、易批量生产等优点。测试产品种类繁多，封装形式多样，产品应用范围广。
              </p>
            </div>
          </div>

          <div class="product-card">
            <div class="product-image">
              <img src="/images/technical_chart_performance.jpg" alt="系统仿真">
            </div>
            <div class="product-content">
              <h5 class="product-title">系统仿真</h5>
              <p class="product-description">
                系统仿真是一种理想的芯片互连分析技术，通过仿真分析提供最优的电路设计，具有较高的电性能和热性能。思普微科技提供基于产品特性的完整的仿真解决方案。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 新闻动态 - 华天科技风格 -->
    <section class="news-section">
      <div class="section-container">
        <div class="news-header">
          <h3 class="news-title">新闻动态</h3>
          <a href="#" class="news-more">
            <img src="/images/title_tech_creates_value.jpg" alt="查看更多" class="more-icon">
            <span>查看更多</span>
          </a>
        </div>

        <div class="news-grid">
          <div class="news-item">
            <a href="#" class="news-link">
              <img src="/images/business_office_scene.jpg" alt="思普微科技荣获高新技术企业认证" class="news-image">
              <div class="news-date">2024-08-06</div>
              <h5 class="news-item-title">思普微科技荣获高新技术企业认证</h5>
              <p class="news-excerpt">思普微科技荣获高新技术企业认证，这标志着公司在技术创新和研发实力方面得到了权威认可...</p>
            </a>
          </div>

          <div class="news-item">
            <a href="#" class="news-link">
              <img src="/images/modern_buildings_night_scene.jpg" alt="思普微科技：技术创新推动行业发展" class="news-image">
              <div class="news-date">2024-07-28</div>
              <h5 class="news-item-title">思普微科技：技术创新推动行业发展</h5>
              <p class="news-excerpt">思普微科技：技术创新推动行业发展，公司持续加大研发投入，推动先进封装技术的产业化应用...</p>
            </a>
          </div>

          <div class="news-item">
            <a href="#" class="news-link">
              <img src="/images/product_development_cycle_chart.jpg" alt="新春送祝福 温情暖人心" class="news-image">
              <div class="news-date">2024-02-01</div>
              <h5 class="news-item-title">新春送祝福 温情暖人心</h5>
              <p class="news-excerpt">"大家过年好！"思普微科技董事长微笑着向春节在岗员工招手问候，"董事长过年好..."</p>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系我们 - 简化版 -->
    <section id="contact" class="contact-section">
      <div class="section-container">
        <div class="contact-simple">
          <h3 class="contact-title">联系方式</h3>
          <p class="contact-address">
            公司地址：苏州市吴江区东太湖生态旅游度假区体育路508号金鹰商业中心2,3幢3幢1911
          </p>
          <p class="contact-phone">联系电话：15318923490</p>
          <p class="contact-email">邮箱：wenqiang.chang@sipumtech.com</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'

// 轮播功能
const currentSlide = ref(0)
const slides = ref([
  { id: 1, title: 'SIPUMTECH', subtitle: '先进封装·一站式服务、晶圆级技术能力、系统级质量把控' },
  { id: 2, title: '专业技术', subtitle: '快速响应·质量保证·一站式解决方案' }
])

let slideInterval = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length
  updateSlideDisplay()
}

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? slides.value.length - 1 : currentSlide.value - 1
  updateSlideDisplay()
}

const goToSlide = (index) => {
  currentSlide.value = index
  updateSlideDisplay()
}

const updateSlideDisplay = () => {
  const slideElements = document.querySelectorAll('.slide')
  slideElements.forEach((slide, index) => {
    slide.classList.toggle('active', index === currentSlide.value)
  })
}

const startAutoSlide = () => {
  slideInterval = setInterval(nextSlide, 5000) // 5秒自动切换
}

const stopAutoSlide = () => {
  if (slideInterval) {
    clearInterval(slideInterval)
    slideInterval = null
  }
}

onMounted(() => {
  startAutoSlide()
  // 添加文字动画
  setTimeout(() => {
    const chars = document.querySelectorAll('.animated-text .char')
    chars.forEach((char, index) => {
      setTimeout(() => {
        char.style.opacity = '1'
        char.style.transform = 'translateY(0)'
      }, index * 100)
    })
  }, 500)
})

onUnmounted(() => {
  stopAutoSlide()
})

// 卡片悬停效果
const startHover = (event) => {
  stopAutoSlide()
}

const endHover = (event) => {
  startAutoSlide()
}

// 联系表单
const formRef = ref(null)
const contactForm = reactive({
  name: '',
  phone: '',
  email: '',
  message: ''
})

const formRules = {
  name: {
    required: true,
    message: '请输入您的姓名',
    trigger: 'blur'
  },
  phone: {
    required: true,
    message: '请输入您的联系电话',
    trigger: 'blur'
  },
  email: {
    required: true,
    message: '请输入您的邮箱地址',
    trigger: 'blur'
  },
  message: {
    required: true,
    message: '请描述您的需求或问题',
    trigger: 'blur'
  }
}

const submitForm = () => {
  formRef.value?.validate((errors) => {
    if (!errors) {
      // 这里可以调用API提交表单
      console.log('提交表单:', contactForm)
      // 显示成功消息
      window.$message?.success('咨询信息已提交，我们会尽快与您联系！')
      // 重置表单
      Object.keys(contactForm).forEach(key => {
        contactForm[key] = ''
      })
    }
  })
}
</script>

<style scoped>
/* 首页样式 - 华天科技风格 */
.home-page {
  width: 100%;
  font-family: "Microsoft YaHei", "PingFang SC", "Helvetica Neue", Arial, sans-serif;
}

/* Hero Banner 轮播样式 - 华天科技风格 */
.hero-banner {
  position: relative;
  height: 600px;
  overflow: hidden;
  background: #f8f9fa;
}

.hero-slider {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.slide.active {
  opacity: 1;
}

.slide-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.bg-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(30, 58, 138, 0.8) 0%, rgba(59, 130, 246, 0.6) 100%);
}

.slide-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
  text-align: center;
  color: #ffffff;
}

.company-name {
  font-size: 80px;
  font-weight: bold;
  margin-bottom: 30px;
  letter-spacing: 3px;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.4);
}

.slide-title {
  margin: 0;
  line-height: 1.1;
}

.slide-subtitle {
  font-size: 28px;
  font-weight: 500;
  margin: 0;
  opacity: 0.95;
  line-height: 1.4;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

/* 文字动画效果 - 华天科技风格 */
.animated-text .char {
  display: inline-block;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
  animation: fadeInUp 0.8s ease forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slider-controls {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
  width: 100%;
}

.prev-btn,
.next-btn {
  position: absolute;
  background: rgba(255, 255, 255, 0.15);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: #ffffff;
  font-size: 28px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
}

.prev-btn {
  left: 40px;
}

.next-btn {
  right: 40px;
}

.prev-btn:hover,
.next-btn:hover {
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.5);
  transform: scale(1.1);
}

/* 轮播指示器 */
.slider-indicators {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 3;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.5);
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: #ffffff;
  border-color: #ffffff;
}

.indicator:hover {
  border-color: #ffffff;
  background: rgba(255, 255, 255, 0.7);
}

/* 服务导航区域 - 华天科技风格 */
.service-nav-section {
  background: #ffffff;
  padding: 40px 0;
  border-bottom: 1px solid #e0e6ed;
}

.service-nav-header {
  text-align: center;
  margin-bottom: 30px;
}

.service-nav-title {
  font-size: 28px;
  font-weight: bold;
  color: #1e3a8a;
  margin: 0;
}

.title-highlight {
  position: relative;
  padding-bottom: 8px;
}

.title-highlight::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: #f59e0b;
}

.service-nav-list {
  display: flex;
  justify-content: center;
  gap: 60px;
}

.service-nav-item {
  text-decoration: none;
  color: #374151;
  padding: 12px 24px;
  border-radius: 6px;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.service-nav-item:hover {
  background: #f0f9ff;
  border-color: #3b82f6;
  color: #1e3a8a;
}

.service-nav-item h5 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}

/* 通用区域样式 - 华天科技风格 */
.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 30px;
}

/* 主要服务展示 - 华天科技风格 */
.main-services-section {
  background: #ffffff;
  padding: 80px 0;
}

.services-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.service-card {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  min-height: 280px;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(30, 58, 138, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.service-card:hover::before {
  opacity: 1;
}

.service-card:hover {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transform: translateY(-8px);
  border-color: #3b82f6;
}

.service-content {
  padding: 50px 40px;
  position: relative;
  z-index: 2;
}

.service-brand {
  font-size: 20px;
  font-weight: bold;
  color: #1e3a8a;
  margin: 0 0 8px 0;
  letter-spacing: 0.5px;
}

.service-subtitle {
  font-size: 16px;
  color: #6b7280;
  margin: 0 0 20px 0;
  font-weight: 400;
  font-style: italic;
}

.service-title {
  font-size: 24px;
  font-weight: bold;
  color: #1f2937;
  margin: 0 0 20px 0;
  line-height: 1.3;
}

.service-description {
  font-size: 15px;
  color: #6b7280;
  line-height: 1.7;
  margin: 0 0 30px 0;
}

.service-more {
  text-align: right;
  position: absolute;
  bottom: 30px;
  right: 30px;
}

.more-icon {
  width: 32px;
  height: 32px;
  opacity: 0.5;
  transition: all 0.4s ease;
  border-radius: 6px;
}

.service-card:hover .more-icon {
  opacity: 1;
  transform: scale(1.1);
}

/* 产品技术展示 - 华天科技风格 */
.products-section {
  background: #f8f9fa;
  padding: 80px 0;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
}

.product-card {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  height: 320px;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  transform: translateY(-6px);
  border-color: #3b82f6;
}

.product-image {
  width: 100%;
  height: 140px;
  overflow: hidden;
  position: relative;
}

.product-image::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(30, 58, 138, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.product-card:hover .product-image::after {
  opacity: 1;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.product-card:hover .product-image img {
  transform: scale(1.05);
}

.product-content {
  padding: 24px 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.product-title {
  font-size: 18px;
  font-weight: bold;
  color: #1f2937;
  margin: 0 0 16px 0;
  line-height: 1.3;
}

.product-description {
  font-size: 13px;
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

/* 新闻动态样式 - 华天科技风格 */
.news-section {
  background: #ffffff;
  padding: 80px 0;
}

.news-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
}

.news-title {
  font-size: 32px;
  font-weight: bold;
  color: #1e3a8a;
  margin: 0;
  position: relative;
}

.news-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 60px;
  height: 3px;
  background: #f59e0b;
}

.news-more {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: #6b7280;
  font-size: 15px;
  transition: all 0.3s ease;
  padding: 8px 16px;
  border-radius: 6px;
}

.news-more:hover {
  color: #1e3a8a;
  background: #f0f9ff;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;
}

.news-item {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  height: 380px;
  display: flex;
  flex-direction: column;
}

.news-item:hover {
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  transform: translateY(-6px);
  border-color: #3b82f6;
}

.news-link {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
  color: inherit;
}

.news-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.news-item:hover .news-image {
  transform: scale(1.05);
}

.news-date {
  padding: 20px 24px 0;
  font-size: 13px;
  color: #9ca3af;
  font-weight: 500;
}

.news-item-title {
  padding: 12px 24px 0;
  font-size: 18px;
  font-weight: bold;
  color: #1f2937;
  margin: 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.news-excerpt {
  padding: 12px 24px 24px;
  font-size: 14px;
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 联系我们样式 - 华天科技风格 */
.contact-section {
  background: #f8f9fa;
  padding: 80px 0;
  border-top: 1px solid #e5e7eb;
}

.contact-simple {
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  background: #ffffff;
  padding: 60px 50px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.contact-title {
  font-size: 32px;
  font-weight: bold;
  color: #1e3a8a;
  margin: 0 0 40px 0;
  position: relative;
}

.contact-title::after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: #f59e0b;
}

.contact-address,
.contact-phone,
.contact-email {
  font-size: 17px;
  color: #374151;
  margin: 0 0 20px 0;
  line-height: 1.7;
  font-weight: 500;
}

.contact-address {
  margin-bottom: 30px;
  font-size: 16px;
  color: #6b7280;
}

/* 响应式设计 - 华天科技风格 */
@media (max-width: 1024px) {
  .services-grid {
    grid-template-columns: 1fr;
  }

  .products-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .service-nav-list {
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .section-container {
    padding: 40px 20px;
  }

  .company-name {
    font-size: 48px;
  }

  .slide-subtitle {
    font-size: 18px;
  }

  .service-nav-list {
    flex-direction: column;
    gap: 16px;
    align-items: center;
  }

  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .news-grid {
    grid-template-columns: 1fr;
  }

  .news-header {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }

  .prev-btn,
  .next-btn {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }

  .prev-btn {
    left: 20px;
  }

  .next-btn {
    right: 20px;
  }
}

@media (max-width: 480px) {
  .section-container {
    padding: 30px 16px;
  }

  .company-name {
    font-size: 36px;
  }

  .slide-subtitle {
    font-size: 16px;
  }

  .products-grid {
    grid-template-columns: 1fr;
  }

  .service-content {
    padding: 30px 20px;
  }

  .product-content {
    padding: 16px 12px;
  }

  .contact-title {
    font-size: 24px;
  }

  .contact-address,
  .contact-phone,
  .contact-email {
    font-size: 14px;
  }
}


</style>

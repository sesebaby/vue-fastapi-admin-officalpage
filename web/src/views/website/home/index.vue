<template>
  <div class="home-page">
    <!-- 滚动进度指示器 -->
    <div class="scroll-progress">
      <div class="progress-bar" :style="{ height: scrollProgress + '%' }"></div>
    </div>

    <!-- 区域指示器 -->
    <div class="section-indicators">
      <div
        v-for="(section, index) in sections"
        :key="section"
        :class="['indicator-dot', { active: currentSection === index }]"
        @click="scrollToSection(section)"
        :title="getSectionName(section)"
      ></div>
    </div>

    <!-- 侧边导航菜单 -->
    <nav class="side-navigation" :class="{ visible: showSideNav }">
      <div class="nav-toggle" @click="toggleSideNav">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul class="nav-menu">
        <li v-for="(section, index) in sections" :key="section">
          <a
            :href="`#${section}`"
            :class="{ active: currentSection === index }"
            @click="scrollToSection(section)"
          >
            {{ getSectionName(section) }}
          </a>
        </li>
      </ul>
    </nav>

    <!-- Hero Banner 轮播区域 - 华天科技风格 -->
    <section id="home" class="hero-banner section-full">
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
                打造卓越的先进封测及软硬件开发一站式解决方案服务商
              </h2>
              <div class="hero-actions">
                <button class="cta-button primary" @click="scrollToSection('about')">了解更多</button>
                <button class="cta-button secondary" @click="scrollToSection('contact')">联系我们</button>
              </div>
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
                <span class="company-name">专业技术团队</span>
              </h1>
              <h2 class="slide-subtitle">
                快速响应 · 质量保证 · 一站式解决方案
              </h2>
              <div class="hero-actions">
                <button class="cta-button primary" @click="scrollToSection('technology')">技术能力</button>
                <button class="cta-button secondary" @click="scrollToSection('business')">核心业务</button>
              </div>
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

    <!-- 关于我们区域 -->
    <section id="about" class="about-section section-half">
      <div class="section-container">
        <div class="about-content">
          <div class="about-text">
            <div class="section-header">
              <h2 class="section-title">关于思普微</h2>
              <div class="title-underline"></div>
            </div>
            <div class="company-intro">
              <p class="intro-highlight">
                苏州思普微电子科技有限公司成立于2019年，总部位于苏州，是国内领先的先进系统级封装设计软硬件开发一站式服务综合服务供应商。
              </p>
              <p class="intro-description">
                公司专注于先进封装技术和硬件方案开发，拥有专业的技术团队和完善的服务体系，为客户提供从设计到测试的全流程解决方案。
              </p>
              <div class="company-stats">
                <div class="stat-item">
                  <div class="stat-number">2019</div>
                  <div class="stat-label">成立年份</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">100+</div>
                  <div class="stat-label">服务客户</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">5+</div>
                  <div class="stat-label">核心团队</div>
                </div>
              </div>
            </div>
          </div>
          <div class="about-image">
            <img src="/images/business_office_scene.jpg" alt="办公场景" class="about-img">
            <div class="image-overlay">
              <div class="overlay-content">
                <h4>专业团队</h4>
                <p>硬件设计、SIP设计、PCB设计、软件开发、热力电仿真等专业团队</p>
              </div>
            </div>
          </div>
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

    <!-- 核心业务展示 - 华天科技风格 -->
    <section id="business" class="main-services-section section-full">
      <div class="section-container">
        <div class="section-header centered">
          <h2 class="section-title">核心业务</h2>
          <div class="title-underline"></div>
          <p class="section-subtitle">专业的先进系统级封装设计软硬件开发一站式服务</p>
        </div>

        <div class="services-grid">
          <div class="service-card large-card" @mouseenter="startHover" @mouseleave="endHover">
            <div class="service-content">
              <div class="service-icon">
                <img src="/images/icon_advanced_packaging.jpg" alt="先进封装">
              </div>
              <h4 class="service-brand">SIPUMTECH</h4>
              <h4 class="service-subtitle">Advanced Packaging</h4>
              <h5 class="service-title">先进封装</h5>
              <p class="service-description">
                提供wafer后段bump，RDL优化及设计加工、wafer级设计封装（WLCSP）、硅转接板、硅穿孔（TSV）设计加工等服务。
              </p>
              <ul class="service-features">
                <li>晶圆级封装设计与制造</li>
                <li>IC测试板设计加工</li>
                <li>先进封装一站式方案</li>
              </ul>
              <div class="service-more">
                <span class="more-text">了解详情</span>
                <span class="more-arrow">→</span>
              </div>
            </div>
          </div>

          <div class="service-card large-card" @mouseenter="startHover" @mouseleave="endHover">
            <div class="service-content">
              <div class="service-icon">
                <img src="/images/icon_hardware_design.jpg" alt="硬件方案">
              </div>
              <h4 class="service-brand">SIPUMTECH</h4>
              <h4 class="service-subtitle">Hardware Solutions</h4>
              <h5 class="service-title">软硬件方案开发</h5>
              <p class="service-description">
                硬件方案开发、原理图及PCB设计、板级及系统级仿真、嵌入式驱动程序及上位机软件开发等服务。
              </p>
              <ul class="service-features">
                <li>硬件设计开发</li>
                <li>PCB产品设计制造</li>
                <li>软件开发设计</li>
              </ul>
              <div class="service-more">
                <span class="more-text">了解详情</span>
                <span class="more-arrow">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 技术能力展示 - 华天科技风格 -->
    <section id="technology" class="technology-section section-full">
      <div class="section-container">
        <div class="section-header centered">
          <h2 class="section-title">技术能力</h2>
          <div class="title-underline"></div>
          <p class="section-subtitle">专业的技术团队和完善的技术体系</p>
        </div>

        <div class="technology-content">
          <div class="tech-overview">
            <div class="tech-image">
              <img src="/images/page4_business_scope_full.jpg" alt="业务范围" class="overview-img">
            </div>
            <div class="tech-description">
              <h3>全方位技术服务</h3>
              <p>思普微科技拥有专业的技术团队，包括硬件设计、SIP设计、PCB设计、软件开发、热力电仿真等多个专业领域，为客户提供全方位的技术服务。</p>
              <div class="tech-highlights">
                <div class="highlight-item">
                  <div class="highlight-icon">🔬</div>
                  <div class="highlight-text">
                    <h4>先进工艺</h4>
                    <p>掌握最新的封装工艺技术</p>
                  </div>
                </div>
                <div class="highlight-item">
                  <div class="highlight-icon">⚡</div>
                  <div class="highlight-text">
                    <h4>快速响应</h4>
                    <p>7x24小时技术支持服务</p>
                  </div>
                </div>
                <div class="highlight-item">
                  <div class="highlight-icon">🎯</div>
                  <div class="highlight-text">
                    <h4>精准定制</h4>
                    <p>根据客户需求定制解决方案</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="tech-capabilities">
            <div class="capability-card">
              <div class="capability-icon">
                <img src="/images/icon_advanced_packaging.jpg" alt="先进封装">
              </div>
              <h4>先进封装技术</h4>
              <p>WLCSP、TSV、RDL等先进封装技术，满足高密度高速度封装需求</p>
            </div>

            <div class="capability-card">
              <div class="capability-icon">
                <img src="/images/icon_hardware_design.jpg" alt="硬件设计">
              </div>
              <h4>硬件设计能力</h4>
              <p>原理图设计、PCB设计、系统级仿真等硬件开发全流程服务</p>
            </div>

            <div class="capability-card">
              <div class="capability-icon">
                <img src="/images/icon_ic_testing.jpg" alt="测试服务">
              </div>
              <h4>测试验证服务</h4>
              <p>MEMS探针卡设计、Load board测试板设计、测试板组装等</p>
            </div>

            <div class="capability-card">
              <div class="capability-icon">
                <img src="/images/technical_chart_circuit.jpg" alt="仿真分析">
              </div>
              <h4>仿真分析技术</h4>
              <p>热力电仿真、信号完整性分析、电磁兼容性设计等</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 成功案例区域 -->
    <section id="cases" class="cases-section section-half">
      <div class="section-container">
        <div class="section-header centered">
          <h2 class="section-title">成功案例</h2>
          <div class="title-underline"></div>
          <p class="section-subtitle">为多个行业客户提供专业的技术解决方案</p>
        </div>

        <div class="cases-content">
          <div class="cases-overview">
            <div class="overview-image">
              <img src="/images/page5_service_coverage_full.jpg" alt="服务覆盖" class="coverage-img">
            </div>
            <div class="overview-text">
              <h3>广泛的服务覆盖</h3>
              <p>思普微科技服务覆盖全国多个重点城市，为通信/服务器、科研院所、工控设备、医疗设备、高等院校等多个行业提供专业服务。</p>
            </div>
          </div>

          <div class="industry-sectors">
            <div class="sector-item">
              <div class="sector-icon">📡</div>
              <h4>通信/服务器</h4>
              <p>为通信设备和服务器厂商提供高性能封装解决方案</p>
            </div>
            <div class="sector-item">
              <div class="sector-icon">🏫</div>
              <h4>科研院所</h4>
              <p>支持科研院所的前沿技术研发和产业化应用</p>
            </div>
            <div class="sector-item">
              <div class="sector-icon">🏭</div>
              <h4>工控设备</h4>
              <p>为工业控制设备提供可靠的硬件解决方案</p>
            </div>
            <div class="sector-item">
              <div class="sector-icon">🏥</div>
              <h4>医疗设备</h4>
              <p>为医疗设备厂商提供高精度的封装技术服务</p>
            </div>
            <div class="sector-item">
              <div class="sector-icon">🎓</div>
              <h4>高等院校</h4>
              <p>与高等院校合作开展产学研一体化项目</p>
            </div>
          </div>

          <div class="service-process">
            <h3>服务流程</h3>
            <div class="process-image">
              <img src="/images/page6_design_process_full.jpg" alt="设计流程" class="process-img">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 新闻动态 - 华天科技风格 -->
    <section id="news" class="news-section section-half">
      <div class="section-container">
        <div class="news-header">
          <h3 class="news-title">新闻动态</h3>
          <a href="#" class="news-more">
            <span>查看更多</span>
            <span class="more-arrow">→</span>
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

    <!-- 联系我们 - 华天科技风格 -->
    <section id="contact" class="contact-section section-half">
      <div class="section-container">
        <div class="section-header centered">
          <h2 class="section-title">联系我们</h2>
          <div class="title-underline"></div>
          <p class="section-subtitle">专业团队随时为您提供技术支持和解决方案</p>
        </div>

        <div class="contact-content">
          <div class="contact-info">
            <div class="contact-item">
              <div class="contact-icon">📍</div>
              <div class="contact-details">
                <h4>公司地址</h4>
                <p>苏州市吴江区东太湖生态旅游度假区体育路508号金鹰商业中心2,3幢3幢1911</p>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">📞</div>
              <div class="contact-details">
                <h4>联系电话</h4>
                <p>15318923490</p>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">📧</div>
              <div class="contact-details">
                <h4>邮箱地址</h4>
                <p>wenqiang.chang@sipumtech.com</p>
              </div>
            </div>
          </div>

          <div class="contact-certifications">
            <h4>资质认证</h4>
            <div class="cert-images">
              <img src="/images/ISO9001质量管理体系认证证书.png" alt="ISO9001认证" class="cert-img">
              <img src="/images/武器装备质量管理体系证书.png" alt="军工认证" class="cert-img">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 回到顶部按钮 -->
    <div class="back-to-top" :class="{ visible: showBackToTop }" @click="scrollToTop">
      <span>↑</span>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'

// 滚动相关状态
const scrollProgress = ref(0)
const showBackToTop = ref(false)
const showSideNav = ref(false)

// 轮播功能
const currentSlide = ref(0)
const slides = ref([
  { id: 1, title: 'SIPUMTECH', subtitle: '打造卓越的先进封测及软硬件开发一站式解决方案服务商' },
  { id: 2, title: '专业技术团队', subtitle: '快速响应·质量保证·一站式解决方案' }
])

let slideInterval = null

// 轮播控制函数
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

// 滚动分段相关状态
const currentSection = ref(0)
const isScrolling = ref(false)
const sections = ref(['home', 'about', 'business', 'technology', 'cases', 'news', 'contact'])

// 滚动功能
const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight

  // 更新滚动进度
  scrollProgress.value = (scrollTop / scrollHeight) * 100

  // 显示/隐藏回到顶部按钮
  showBackToTop.value = scrollTop > 300

  // 更新当前区域
  updateCurrentSection()
}

const updateCurrentSection = () => {
  const sectionElements = sections.value.map(id => document.getElementById(id)).filter(Boolean)
  const scrollTop = window.pageYOffset + window.innerHeight / 2

  for (let i = sectionElements.length - 1; i >= 0; i--) {
    const element = sectionElements[i]
    if (element && element.offsetTop <= scrollTop) {
      currentSection.value = i
      break
    }
  }
}

// 鼠标滚轮事件处理
const handleWheel = (event) => {
  if (isScrolling.value) return

  event.preventDefault()

  const delta = event.deltaY
  let targetSection = currentSection.value

  if (delta > 0 && currentSection.value < sections.value.length - 1) {
    // 向下滚动
    targetSection = currentSection.value + 1
  } else if (delta < 0 && currentSection.value > 0) {
    // 向上滚动
    targetSection = currentSection.value - 1
  }

  if (targetSection !== currentSection.value) {
    scrollToSection(sections.value[targetSection])
  }
}

const scrollToTop = () => {
  scrollToSection('home')
}

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    isScrolling.value = true

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })

    // 更新当前区域索引
    const sectionIndex = sections.value.indexOf(sectionId)
    if (sectionIndex !== -1) {
      currentSection.value = sectionIndex
    }

    // 滚动完成后重置状态
    setTimeout(() => {
      isScrolling.value = false
    }, 1000)
  }
  showSideNav.value = false
}

const toggleSideNav = () => {
  showSideNav.value = !showSideNav.value
}

// 获取区域名称
const getSectionName = (sectionId) => {
  const names = {
    home: '首页',
    about: '关于我们',
    business: '核心业务',
    technology: '技术能力',
    cases: '成功案例',
    news: '新闻动态',
    contact: '联系我们'
  }
  return names[sectionId] || sectionId
}

// 键盘导航
const handleKeydown = (event) => {
  if (isScrolling.value) return

  switch (event.key) {
    case 'ArrowDown':
    case 'PageDown':
      event.preventDefault()
      if (currentSection.value < sections.value.length - 1) {
        scrollToSection(sections.value[currentSection.value + 1])
      }
      break
    case 'ArrowUp':
    case 'PageUp':
      event.preventDefault()
      if (currentSection.value > 0) {
        scrollToSection(sections.value[currentSection.value - 1])
      }
      break
    case 'Home':
      event.preventDefault()
      scrollToSection('home')
      break
    case 'End':
      event.preventDefault()
      scrollToSection('contact')
      break
  }
}

// 卡片悬停效果
const startHover = (event) => {
  stopAutoSlide()
}

const endHover = (event) => {
  startAutoSlide()
}

onMounted(() => {
  startAutoSlide()

  // 添加滚动监听
  window.addEventListener('scroll', handleScroll)

  // 添加滚轮监听（分段滚动）
  window.addEventListener('wheel', handleWheel, { passive: false })

  // 添加键盘监听
  window.addEventListener('keydown', handleKeydown)

  // 初始化当前区域
  updateCurrentSection()

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
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('wheel', handleWheel)
  window.removeEventListener('keydown', handleKeydown)
})

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

/* 平滑滚动 */
html {
  scroll-behavior: smooth;
}

/* 区域过渡效果 */
section {
  transition: all 0.6s ease-in-out;
}

section.section-full,
section.section-half {
  opacity: 1;
  transform: translateY(0);
}

/* 滚动进度指示器 */
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 4px;
  height: 100vh;
  background: rgba(30, 58, 138, 0.1);
  z-index: 9999;
}

.progress-bar {
  width: 100%;
  background: linear-gradient(to bottom, #1e3a8a, #f59e0b);
  transition: height 0.3s ease;
}

/* 区域指示器 */
.section-indicators {
  position: fixed;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 1000;
}

.indicator-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(30, 58, 138, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.indicator-dot:hover {
  background: rgba(30, 58, 138, 0.6);
  transform: scale(1.2);
}

.indicator-dot.active {
  background: #1e3a8a;
  transform: scale(1.3);
}

.indicator-dot.active::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #f59e0b;
}

/* 侧边导航菜单 */
.side-navigation {
  position: fixed;
  top: 0;
  right: -300px;
  width: 300px;
  height: 100vh;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  z-index: 9998;
  transition: right 0.3s ease;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
}

.side-navigation.visible {
  right: 0;
}

.nav-toggle {
  position: absolute;
  top: 30px;
  left: -60px;
  width: 50px;
  height: 50px;
  background: #1e3a8a;
  border-radius: 50% 0 0 50%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
}

.nav-toggle span {
  width: 20px;
  height: 2px;
  background: #ffffff;
  transition: all 0.3s ease;
}

.nav-menu {
  list-style: none;
  padding: 100px 30px 30px;
  margin: 0;
}

.nav-menu li {
  margin-bottom: 20px;
}

.nav-menu a {
  color: #1e3a8a;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  padding: 12px 20px;
  display: block;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.nav-menu a:hover,
.nav-menu a.active {
  background: #f0f9ff;
  color: #1e40af;
}

.nav-menu a.active {
  background: #1e3a8a;
  color: #ffffff;
}

.nav-menu a.active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: #f59e0b;
}

/* 区域分段样式 */
.section-full {
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.section-half {
  min-height: 80vh;
  padding: 100px 0;
}

/* 回到顶部按钮 */
.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: #1e3a8a;
  color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 1000;
  font-size: 20px;
  font-weight: bold;
}

.back-to-top.visible {
  opacity: 1;
  visibility: visible;
}

.back-to-top:hover {
  background: #1e40af;
  transform: translateY(-3px);
}

/* Hero Banner 轮播样式 - 华天科技风格 */
.hero-banner {
  position: relative;
  height: 100vh;
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

/* Hero Banner CTA按钮 */
.hero-actions {
  margin-top: 40px;
  display: flex;
  gap: 20px;
  justify-content: center;
}

.cta-button {
  padding: 15px 35px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.cta-button.primary {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: #ffffff;
  box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);
}

.cta-button.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(245, 158, 11, 0.4);
}

.cta-button.secondary {
  background: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
}

.cta-button.secondary:hover {
  background: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
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

.section-header {
  margin-bottom: 60px;
}

.section-header.centered {
  text-align: center;
}

.section-title {
  font-size: 36px;
  font-weight: bold;
  color: #1e3a8a;
  margin: 0 0 16px 0;
  position: relative;
}

.title-underline {
  width: 60px;
  height: 4px;
  background: #f59e0b;
  margin: 0 auto 20px;
}

.section-header.centered .title-underline {
  margin: 0 auto 20px;
}

.section-header:not(.centered) .title-underline {
  margin: 0 0 20px 0;
}

.section-subtitle {
  font-size: 18px;
  color: #6b7280;
  line-height: 1.6;
  max-width: 600px;
}

.section-header.centered .section-subtitle {
  margin: 0 auto;
}

/* 关于我们区域样式 */
.about-section {
  background: #ffffff;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.about-text {
  padding-right: 20px;
}

.intro-highlight {
  font-size: 20px;
  font-weight: 600;
  color: #1e3a8a;
  line-height: 1.6;
  margin-bottom: 24px;
}

.intro-description {
  font-size: 16px;
  color: #6b7280;
  line-height: 1.7;
  margin-bottom: 40px;
}

.company-stats {
  display: flex;
  gap: 40px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 32px;
  font-weight: bold;
  color: #f59e0b;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 14px;
  color: #6b7280;
  font-weight: 500;
}

.about-image {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
}

.about-img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(30, 58, 138, 0.9));
  color: #ffffff;
  padding: 30px;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.about-image:hover .image-overlay {
  transform: translateY(0);
}

.about-image:hover .about-img {
  transform: scale(1.05);
}

.overlay-content h4 {
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 12px 0;
}

.overlay-content p {
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
  opacity: 0.9;
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

.service-icon {
  width: 60px;
  height: 60px;
  margin-bottom: 20px;
  border-radius: 12px;
  overflow: hidden;
  background: #f0f9ff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-icon img {
  width: 40px;
  height: 40px;
  object-fit: contain;
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
  margin: 0 0 20px 0;
}

.service-features {
  list-style: none;
  padding: 0;
  margin: 0 0 30px 0;
}

.service-features li {
  font-size: 14px;
  color: #374151;
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
}

.service-features li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #f59e0b;
  font-weight: bold;
}

.service-more {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #1e3a8a;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.service-card:hover .service-more {
  color: #f59e0b;
}

.more-arrow {
  transition: transform 0.3s ease;
}

.service-card:hover .more-arrow {
  transform: translateX(5px);
}

/* 技术能力展示 - 华天科技风格 */
.technology-section {
  background: #f8f9fa;
}

.technology-content {
  display: flex;
  flex-direction: column;
  gap: 80px;
}

.tech-overview {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.tech-image {
  border-radius: 12px;
  overflow: hidden;
}

.overview-img {
  width: 100%;
  height: 350px;
  object-fit: cover;
}

.tech-description h3 {
  font-size: 28px;
  font-weight: bold;
  color: #1e3a8a;
  margin: 0 0 20px 0;
}

.tech-description p {
  font-size: 16px;
  color: #6b7280;
  line-height: 1.7;
  margin-bottom: 30px;
}

.tech-highlights {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.highlight-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.highlight-icon {
  font-size: 24px;
  margin-top: 4px;
}

.highlight-text h4 {
  font-size: 18px;
  font-weight: bold;
  color: #1f2937;
  margin: 0 0 8px 0;
}

.highlight-text p {
  font-size: 14px;
  color: #6b7280;
  margin: 0;
  line-height: 1.5;
}

.tech-capabilities {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.capability-card {
  background: #ffffff;
  padding: 30px 24px;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid #e5e7eb;
}

.capability-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border-color: #3b82f6;
}

.capability-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 20px;
  border-radius: 12px;
  overflow: hidden;
  background: #f0f9ff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.capability-icon img {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.capability-card h4 {
  font-size: 18px;
  font-weight: bold;
  color: #1f2937;
  margin: 0 0 12px 0;
}

.capability-card p {
  font-size: 14px;
  color: #6b7280;
  line-height: 1.5;
  margin: 0;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
}

/* 成功案例区域样式 */
.cases-section {
  background: #ffffff;
}

.cases-content {
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.cases-overview {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.overview-image {
  border-radius: 12px;
  overflow: hidden;
}

.coverage-img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.overview-text h3 {
  font-size: 28px;
  font-weight: bold;
  color: #1e3a8a;
  margin: 0 0 20px 0;
}

.overview-text p {
  font-size: 16px;
  color: #6b7280;
  line-height: 1.7;
  margin: 0;
}

.industry-sectors {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
}

.sector-item {
  text-align: center;
  padding: 30px 20px;
  background: #f8f9fa;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.sector-item:hover {
  background: #1e3a8a;
  color: #ffffff;
  transform: translateY(-5px);
}

.sector-icon {
  font-size: 32px;
  margin-bottom: 16px;
}

.sector-item h4 {
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 8px 0;
}

.sector-item p {
  font-size: 12px;
  line-height: 1.4;
  margin: 0;
  opacity: 0.8;
}

.service-process {
  text-align: center;
}

.service-process h3 {
  font-size: 28px;
  font-weight: bold;
  color: #1e3a8a;
  margin: 0 0 30px 0;
}

.process-image {
  border-radius: 12px;
  overflow: hidden;
  max-width: 800px;
  margin: 0 auto;
}

.process-img {
  width: 100%;
  height: auto;
  object-fit: cover;
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
}

.contact-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 60px;
  align-items: start;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 30px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.contact-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}

.contact-icon {
  font-size: 24px;
  margin-top: 4px;
  color: #f59e0b;
}

.contact-details h4 {
  font-size: 18px;
  font-weight: bold;
  color: #1e3a8a;
  margin: 0 0 8px 0;
}

.contact-details p {
  font-size: 16px;
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
}

.contact-certifications {
  background: #ffffff;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  text-align: center;
}

.contact-certifications h4 {
  font-size: 20px;
  font-weight: bold;
  color: #1e3a8a;
  margin: 0 0 24px 0;
}

.cert-images {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.cert-img {
  width: 120px;
  height: 120px;
  object-fit: contain;
  border-radius: 8px;
  background: #f8f9fa;
  padding: 8px;
  transition: transform 0.3s ease;
}

.cert-img:hover {
  transform: scale(1.05);
}

/* 响应式设计 - 华天科技风格 */
@media (max-width: 1024px) {
  .services-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .tech-capabilities {
    grid-template-columns: repeat(2, 1fr);
  }

  .industry-sectors {
    grid-template-columns: repeat(3, 1fr);
  }

  .service-nav-list {
    gap: 30px;
  }

  .about-content,
  .tech-overview,
  .cases-overview {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .contact-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .section-container {
    padding: 40px 20px;
  }

  .section-half {
    min-height: auto;
    padding: 60px 0;
  }

  .company-name {
    font-size: 48px;
  }

  .slide-subtitle {
    font-size: 20px;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .service-nav-list {
    flex-direction: column;
    gap: 16px;
    align-items: center;
  }

  .tech-capabilities {
    grid-template-columns: 1fr;
  }

  .industry-sectors {
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

  .company-stats {
    justify-content: center;
    gap: 30px;
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

  .side-navigation {
    width: 250px;
    right: -250px;
  }

  .section-indicators {
    display: none;
  }
}

@media (max-width: 480px) {
  .section-container {
    padding: 30px 16px;
  }

  .company-name {
    font-size: 32px;
  }

  .slide-subtitle {
    font-size: 16px;
  }

  .section-title {
    font-size: 28px;
  }

  .industry-sectors {
    grid-template-columns: 1fr;
  }

  .service-content {
    padding: 30px 20px;
  }

  .contact-item {
    padding: 20px;
  }

  .contact-certifications {
    padding: 30px 20px;
  }

  .cert-images {
    flex-direction: column;
  }

  .cert-img {
    width: 100px;
    height: 100px;
  }

  .back-to-top {
    width: 45px;
    height: 45px;
    bottom: 20px;
    right: 20px;
  }
}


</style>

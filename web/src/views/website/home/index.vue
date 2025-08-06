<template>
  <div class="home-page">
    <!-- Hero Banner 区域 -->
    <section id="home" class="hero-banner">
      <div class="hero-background">
        <img src="/images/科技电路背景图.png" alt="科技背景" class="bg-image">
        <div class="bg-overlay"></div>
      </div>

      <div class="hero-content">
        <div class="hero-container">
          <div class="hero-text">
            <h1 class="hero-title">
              先进封装 · 一站式服务
            </h1>
            <p class="hero-subtitle">
              从设计到测试，SIPUMTECH让创新更简单
            </p>

            <!-- 信任建立元素 -->
            <div class="trust-indicators">
              <div class="trust-badge">
                <span>🏆 ISO质量认证</span>
              </div>
              <div class="trust-badge">
                <span>🛡️ 军工认证</span>
              </div>
              <div class="trust-badge">
                <span>⏰ 5年专业经验</span>
              </div>
            </div>

            <!-- 核心价值点 -->
            <div class="value-points">
              <div class="value-point">
                <span>⚙️ 专业技术</span>
              </div>
              <div class="value-point">
                <span>⚡ 快速响应</span>
              </div>
              <div class="value-point">
                <span>✅ 质量保证</span>
              </div>
            </div>

            <div class="hero-cta">
              <n-button type="primary" size="large" class="cta-primary">
                免费技术咨询
              </n-button>
              <n-button type="default" size="large" class="cta-secondary">
                查看成功案例
              </n-button>
            </div>
          </div>

          <div class="hero-image">
            <img src="/images/商务科技概念图.png" alt="商务科技" class="hero-img">
          </div>
        </div>
      </div>
    </section>

    <!-- 核心业务展示 -->
    <section id="business" class="business-section">
      <div class="section-container">
        <div class="section-header">
          <h2 class="section-title">核心业务</h2>
          <p class="section-subtitle">专业的先进系统级封装设计软硬件开发一站式服务</p>
        </div>
        
        <div class="business-grid">
          <div class="business-card">
            <div class="card-icon">
              <img src="/images/icon_advanced_packaging.jpg" alt="先进封装">
            </div>
            <h3>先进封装</h3>
            <p>晶圆级封装、IC测试板设计加工、先进封装一站式方案</p>
            <ul>
              <li>wafer后段bump，RDL优化及设计加工</li>
              <li>wafer级设计封装（WLCSP）</li>
              <li>硅转接板、硅穿孔（TSV）设计加工</li>
            </ul>
            <n-button type="primary" class="card-cta">获取方案</n-button>
          </div>
          
          <div class="business-card">
            <div class="card-icon">
              <img src="/images/icon_hardware_design.jpg" alt="硬件方案">
            </div>
            <h3>硬件方案</h3>
            <p>硬件方案开发、原理图及PCB设计、板级及系统级仿真</p>
            <ul>
              <li>硬件方案开发与优化</li>
              <li>原理图及PCB设计</li>
              <li>板级及系统级仿真分析</li>
            </ul>
            <n-button type="primary" class="card-cta">技术咨询</n-button>
          </div>
          
          <div class="business-card">
            <div class="card-icon">
              <img src="/images/icon_ic_testing.jpg" alt="测试服务">
            </div>
            <h3>测试服务</h3>
            <p>MEMS探针卡设计加工、Load board测试板设计、测试板组装</p>
            <ul>
              <li>MEMS探针卡设计加工</li>
              <li>Load board, IC测试板设计加工</li>
              <li>测试socket代购、测试板组装</li>
            </ul>
            <n-button type="primary" class="card-cta">了解详情</n-button>
          </div>
        </div>
      </div>
    </section>

    <!-- 服务行业展示 -->
    <section class="industries-section">
      <div class="section-container">
        <div class="section-header">
          <h2 class="section-title">服务行业</h2>
          <p class="section-subtitle">为多个行业提供专业的技术解决方案</p>
        </div>
        
        <div class="industries-grid">
          <div class="industry-item">
            <div class="industry-icon">📡</div>
            <h4>通信/服务器</h4>
          </div>
          <div class="industry-item">
            <div class="industry-icon">🏫</div>
            <h4>科研院所</h4>
          </div>
          <div class="industry-item">
            <div class="industry-icon">🏭</div>
            <h4>工控设备</h4>
          </div>
          <div class="industry-item">
            <div class="industry-icon">🏥</div>
            <h4>医疗设备</h4>
          </div>
          <div class="industry-item">
            <div class="industry-icon">🎓</div>
            <h4>高等院校</h4>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系我们 -->
    <section id="contact" class="contact-section">
      <div class="section-container">
        <div class="section-header">
          <h2 class="section-title">联系我们</h2>
          <p class="section-subtitle">专业团队随时为您提供技术支持和解决方案</p>
        </div>
        
        <div class="contact-content">
          <div class="contact-info">
            <div class="contact-item">
              <div class="contact-icon">📍</div>
              <div>
                <h4>公司地址</h4>
                <p>苏州市吴江区东太湖生态旅游度假区体育路508号金鹰商业中心2,3幢3幢1911</p>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">📞</div>
              <div>
                <h4>联系电话</h4>
                <p>15318923490</p>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">📧</div>
              <div>
                <h4>邮箱地址</h4>
                <p>wenqiang.chang@sipumtech.com</p>
              </div>
            </div>
          </div>
          
          <div class="contact-form">
            <n-form ref="formRef" :model="contactForm" :rules="formRules">
              <n-form-item label="姓名" path="name">
                <n-input v-model:value="contactForm.name" placeholder="请输入您的姓名" />
              </n-form-item>
              <n-form-item label="电话" path="phone">
                <n-input v-model:value="contactForm.phone" placeholder="请输入您的联系电话" />
              </n-form-item>
              <n-form-item label="邮箱" path="email">
                <n-input v-model:value="contactForm.email" placeholder="请输入您的邮箱地址" />
              </n-form-item>
              <n-form-item label="留言" path="message">
                <n-input
                  v-model:value="contactForm.message"
                  type="textarea"
                  placeholder="请描述您的需求或问题"
                  :rows="4"
                />
              </n-form-item>
              <n-form-item>
                <n-button type="primary" size="large" @click="submitForm" block>
                  提交咨询
                </n-button>
              </n-form-item>
            </n-form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

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
/* 首页样式 */
.home-page {
  width: 100%;
}

/* Hero Banner 样式 */
.hero-banner {
  position: relative;
  min-height: 600px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-background {
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

.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.hero-text {
  color: #ffffff;
}

.hero-title {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 20px;
  margin-bottom: 30px;
  opacity: 0.9;
}

.trust-indicators {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}

.trust-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.1);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
}

.value-points {
  display: flex;
  gap: 30px;
  margin-bottom: 40px;
}

.value-point {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 500;
}

.hero-cta {
  display: flex;
  gap: 16px;
}

.cta-primary {
  background: linear-gradient(135deg, #00D4AA 0%, #00b894 100%);
  border: none;
}

.cta-secondary {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #ffffff;
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-img {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
}

/* 通用区域样式 */
.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 36px;
  font-weight: bold;
  color: #1e3a8a;
  margin-bottom: 16px;
}

.section-subtitle {
  font-size: 18px;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto;
}

/* 业务展示样式 */
.business-section {
  background: #f8fafc;
}

.business-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.business-card {
  background: #ffffff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.business-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.card-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  border-radius: 50%;
  overflow: hidden;
  background: #f0f9ff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-icon img {
  width: 60px;
  height: 60px;
  object-fit: contain;
}

.business-card h3 {
  font-size: 24px;
  font-weight: bold;
  color: #1e3a8a;
  margin-bottom: 12px;
}

.business-card p {
  color: #6b7280;
  margin-bottom: 20px;
  line-height: 1.6;
}

.business-card ul {
  text-align: left;
  margin-bottom: 24px;
  padding-left: 0;
  list-style: none;
}

.business-card li {
  color: #374151;
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
}

.business-card li::before {
  content: "•";
  color: #00D4AA;
  font-weight: bold;
  position: absolute;
  left: 0;
}

.card-cta {
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  border: none;
}

/* 服务行业样式 */
.industries-section {
  background: #ffffff;
}

.industries-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
}

.industry-item {
  text-align: center;
  padding: 30px 20px;
  border-radius: 12px;
  background: #f8fafc;
  transition: all 0.3s ease;
}

.industry-item:hover {
  background: #1e3a8a;
  color: #ffffff;
  transform: translateY(-3px);
}

.industry-item h4 {
  margin-top: 16px;
  font-size: 18px;
  font-weight: 600;
}

.industry-icon {
  font-size: 48px;
  margin-bottom: 8px;
}

/* 联系我们样式 */
.contact-section {
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
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
  gap: 16px;
  align-items: flex-start;
}

.contact-icon {
  font-size: 24px;
  margin-top: 4px;
}

.contact-item h4 {
  font-size: 18px;
  font-weight: 600;
  color: #1e3a8a;
  margin-bottom: 8px;
}

.contact-item p {
  color: #374151;
  line-height: 1.6;
  margin: 0;
}

.contact-form {
  background: #ffffff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }

  .hero-title {
    font-size: 32px;
  }

  .hero-subtitle {
    font-size: 16px;
  }

  .trust-indicators {
    justify-content: center;
    flex-wrap: wrap;
  }

  .value-points {
    justify-content: center;
    flex-wrap: wrap;
  }

  .hero-cta {
    justify-content: center;
    flex-wrap: wrap;
  }

  .section-container {
    padding: 60px 16px;
  }

  .section-title {
    font-size: 28px;
  }

  .business-grid {
    grid-template-columns: 1fr;
  }

  .industries-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .contact-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .contact-form {
    padding: 24px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 24px;
  }

  .section-title {
    font-size: 24px;
  }

  .industries-grid {
    grid-template-columns: 1fr;
  }
}
</style>

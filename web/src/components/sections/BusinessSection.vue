<template>
  <div>
    <!-- 服务导航区域 -->
    <section class="service-nav-section">
      <div class="section-container">
        <div class="service-nav-header">
          <h3 class="service-nav-title">
            <span class="title-highlight">{{ $t('website.service_nav.title') }}</span>
          </h3>
        </div>
        <div class="service-nav-list">
          <a href="#advanced-packaging" class="service-nav-item">
            <h5>{{ $t('website.service_nav.advanced_packaging') }}</h5>
          </a>
          <a href="#hardware-solution" class="service-nav-item">
            <h5>{{ $t('website.service_nav.hardware_solution') }}</h5>
          </a>
          <a href="#testing-service" class="service-nav-item">
            <h5>{{ $t('website.service_nav.testing_service') }}</h5>
          </a>
        </div>
      </div>
    </section>

    <!-- 核心业务展示 -->
    <section id="business" class="main-services-section section-full">
      <div class="section-container">
        <div class="section-header centered">
          <h2 class="section-title">{{ $t('website.business.title') }}</h2>
          <div class="title-underline"></div>
          <p class="section-subtitle">{{ $t('website.business.subtitle') }}</p>
        </div>

        <div class="services-grid">
          <!-- 先进封装服务 -->
          <div class="service-card large-card" @mouseenter="$emit('start-hover')" @mouseleave="$emit('end-hover')">
            <div class="service-content">
              <div class="service-icon">
                <img src="/images/icon_advanced_packaging.jpg" alt="先进封装">
              </div>
              <h4 class="service-brand">{{ $t('website.business.advanced_packaging.brand') }}</h4>
              <h4 class="service-subtitle">{{ $t('website.business.advanced_packaging.subtitle') }}</h4>
              <h5 class="service-title">{{ $t('website.business.advanced_packaging.title') }}</h5>
              <p class="service-description">
                {{ $t('website.business.advanced_packaging.description') }}
              </p>
              <ul class="service-features">
                <li>{{ $t('website.business.advanced_packaging.feature_1') }}</li>
                <li>{{ $t('website.business.advanced_packaging.feature_2') }}</li>
                <li>{{ $t('website.business.advanced_packaging.feature_3') }}</li>
              </ul>
              <!-- P1-5: 添加CTA按钮 -->
              <div class="service-actions">
                <button class="cta-button primary" @click="$emit('get-solution', 'advanced-packaging')">
                  获取方案
                </button>
                <button class="cta-button secondary" @click="$emit('tech-consultation', 'advanced-packaging')">
                  技术咨询
                </button>
              </div>
            </div>
          </div>

          <!-- 硬件方案服务 -->
          <div class="service-card large-card" @mouseenter="$emit('start-hover')" @mouseleave="$emit('end-hover')">
            <div class="service-content">
              <div class="service-icon">
                <img src="/images/icon_hardware_design.jpg" alt="硬件方案">
              </div>
              <h4 class="service-brand">{{ $t('website.business.hardware_solution.brand') }}</h4>
              <h4 class="service-subtitle">{{ $t('website.business.hardware_solution.subtitle') }}</h4>
              <h5 class="service-title">{{ $t('website.business.hardware_solution.title') }}</h5>
              <p class="service-description">
                {{ $t('website.business.hardware_solution.description') }}
              </p>
              <ul class="service-features">
                <li>{{ $t('website.business.hardware_solution.feature_1') }}</li>
                <li>{{ $t('website.business.hardware_solution.feature_2') }}</li>
                <li>{{ $t('website.business.hardware_solution.feature_3') }}</li>
              </ul>
              <!-- P1-5: 添加CTA按钮 -->
              <div class="service-actions">
                <button class="cta-button primary" @click="$emit('get-solution', 'hardware-solution')">
                  获取方案
                </button>
                <button class="cta-button secondary" @click="$emit('tech-consultation', 'hardware-solution')">
                  技术咨询
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// 定义事件
const emit = defineEmits(['start-hover', 'end-hover', 'get-solution', 'tech-consultation'])
</script>

<style scoped>
/* 服务导航区域 */
.service-nav-section {
  padding: 60px 0;
  background: white;
  border-bottom: 1px solid #e5e7eb;
}

.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
}

.service-nav-header {
  text-align: center;
  margin-bottom: 40px;
}

.service-nav-title {
  font-size: 28px;
  font-weight: bold;
  color: #1e3a8a;
  margin: 0;
}

.title-highlight {
  position: relative;
  display: inline-block;
}

.title-highlight::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(45deg, #f59e0b, #d97706);
  border-radius: 2px;
}

.service-nav-list {
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
}

.service-nav-item {
  padding: 16px 24px;
  background: #f8fafc;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  min-width: 200px;
  text-align: center;
}

.service-nav-item:hover {
  background: #1e3a8a;
  border-color: #1e3a8a;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(30, 58, 138, 0.2);
}

.service-nav-item h5 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #374151;
  transition: color 0.3s ease;
}

.service-nav-item:hover h5 {
  color: white;
}

/* 核心业务展示 */
.main-services-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-header.centered {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 80px;
}

.section-title {
  font-size: 42px;
  font-weight: bold;
  color: #1e3a8a;
  margin: 0 0 20px 0;
  line-height: 1.2;
}

.title-underline {
  width: 80px;
  height: 4px;
  background: linear-gradient(45deg, #f59e0b, #d97706);
  border-radius: 2px;
  margin: 0 auto 30px auto;
}

.section-subtitle {
  font-size: 18px;
  color: #6b7280;
  margin: 0;
  line-height: 1.6;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.service-card {
  background: white;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid #f1f5f9;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(30, 58, 138, 0.15);
  border-color: #e2e8f0;
}

.service-content {
  text-align: center;
}

.service-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 24px auto;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.service-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.service-brand {
  font-size: 14px;
  font-weight: 600;
  color: #f59e0b;
  margin: 0 0 8px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.service-subtitle {
  font-size: 16px;
  font-weight: 600;
  color: #6b7280;
  margin: 0 0 12px 0;
}

.service-title {
  font-size: 24px;
  font-weight: bold;
  color: #1e3a8a;
  margin: 0 0 20px 0;
  line-height: 1.3;
}

.service-description {
  font-size: 16px;
  color: #6b7280;
  line-height: 1.6;
  margin: 0 0 24px 0;
}

.service-features {
  list-style: none;
  padding: 0;
  margin: 0 0 30px 0;
  text-align: left;
}

.service-features li {
  padding: 8px 0;
  color: #374151;
  position: relative;
  padding-left: 24px;
}

.service-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #10b981;
  font-weight: bold;
}

/* P1-5: CTA按钮样式 */
.service-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 24px;
}

.cta-button {
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
}

.cta-button.primary {
  background: linear-gradient(45deg, #f59e0b, #d97706);
  color: white;
  box-shadow: 0 2px 8px rgba(245, 158, 11, 0.3);
}

.cta-button.primary:hover {
  background: linear-gradient(45deg, #d97706, #b45309);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.4);
}

.cta-button.secondary {
  background: transparent;
  color: #1e3a8a;
  border: 2px solid #1e3a8a;
}

.cta-button.secondary:hover {
  background: #1e3a8a;
  color: white;
  transform: translateY(-1px);
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .services-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .service-nav-list {
    gap: 20px;
  }

  .service-nav-item {
    min-width: 160px;
  }
}

@media (max-width: 768px) {
  .main-services-section {
    padding: 80px 0;
  }

  .section-container {
    padding: 0 20px;
  }

  .section-title {
    font-size: 32px;
  }

  .service-card {
    padding: 30px 20px;
  }

  .service-nav-list {
    flex-direction: column;
    align-items: center;
  }

  .service-actions {
    flex-direction: column;
  }

  .cta-button {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .service-nav-section {
    padding: 40px 0;
  }

  .main-services-section {
    padding: 60px 0;
  }

  .section-container {
    padding: 0 16px;
  }

  .section-title {
    font-size: 28px;
  }

  .service-card {
    padding: 24px 16px;
  }

  .service-title {
    font-size: 20px;
  }
}
</style>

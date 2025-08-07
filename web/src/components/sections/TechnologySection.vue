<template>
  <section id="technology" class="technology-section section-full">
    <div class="section-container">
      <div class="section-header centered">
        <h2 class="section-title">{{ $t('website.technology.title') }}</h2>
        <div class="title-underline"></div>
        <p class="section-subtitle">{{ $t('website.technology.subtitle') }}</p>
      </div>

      <div class="technology-content">
        <div class="tech-overview">
          <div class="tech-image">
            <img src="/images/page4_business_scope_full.jpg" alt="业务范围" class="overview-img">
          </div>
          <div class="tech-description">
            <h3>{{ $t('website.technology.overview_title') }}</h3>
            <p>{{ $t('website.technology.overview_description') }}</p>
            <div class="tech-highlights">
              <div class="highlight-item">
                <div class="highlight-icon">🔬</div>
                <div class="highlight-text">
                  <h4>{{ $t('website.technology.highlight_1_title') }}</h4>
                  <p>{{ $t('website.technology.highlight_1_desc') }}</p>
                </div>
              </div>
              <div class="highlight-item">
                <div class="highlight-icon">⚡</div>
                <div class="highlight-text">
                  <h4>{{ $t('website.technology.highlight_2_title') }}</h4>
                  <p>{{ $t('website.technology.highlight_2_desc') }}</p>
                </div>
              </div>
              <div class="highlight-item">
                <div class="highlight-icon">🎯</div>
                <div class="highlight-text">
                  <h4>{{ $t('website.technology.highlight_3_title') }}</h4>
                  <p>{{ $t('website.technology.highlight_3_desc') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="tech-capabilities">
          <div class="capability-card">
            <div class="capability-icon">
              <img src="/images/icon_advanced_packaging.jpg" :alt="$t('website.technology.capability_1_title')">
            </div>
            <h4>{{ $t('website.technology.capability_1_title') }}</h4>
            <p>{{ $t('website.technology.capability_1_desc') }}</p>
          </div>

          <div class="capability-card">
            <div class="capability-icon">
              <img src="/images/icon_hardware_design.jpg" :alt="$t('website.technology.capability_2_title')">
            </div>
            <h4>{{ $t('website.technology.capability_2_title') }}</h4>
            <p>{{ $t('website.technology.capability_2_desc') }}</p>
          </div>

          <div class="capability-card">
            <div class="capability-icon">
              <img src="/images/icon_ic_testing.jpg" :alt="$t('website.technology.capability_3_title')">
            </div>
            <h4>{{ $t('website.technology.capability_3_title') }}</h4>
            <p>{{ $t('website.technology.capability_3_desc') }}</p>
          </div>

          <div class="capability-card">
            <div class="capability-icon">
              <img src="/images/technical_chart_circuit.jpg" :alt="$t('website.technology.capability_4_title')">
            </div>
            <h4>{{ $t('website.technology.capability_4_title') }}</h4>
            <p>{{ $t('website.technology.capability_4_desc') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
/* 技术能力展示样式 - 华天科技风格 */
.technology-section {
  background: #f8f9fa;
  padding: 100px 0;
}

.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
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

/* 响应式设计 */
@media (max-width: 1024px) {
  .tech-overview {
    gap: 40px;
  }

  .tech-capabilities {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}

@media (max-width: 768px) {
  .technology-section {
    padding: 80px 0;
  }

  .section-container {
    padding: 0 20px;
  }

  .section-title {
    font-size: 32px;
  }

  .technology-content {
    gap: 60px;
  }

  .tech-overview {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .overview-img {
    height: 250px;
  }

  .tech-description h3 {
    font-size: 24px;
  }

  .tech-capabilities {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .capability-card {
    padding: 24px 20px;
  }
}

@media (max-width: 480px) {
  .technology-section {
    padding: 60px 0;
  }

  .section-container {
    padding: 0 16px;
  }

  .section-title {
    font-size: 28px;
  }

  .technology-content {
    gap: 40px;
  }

  .overview-img {
    height: 200px;
  }

  .tech-description h3 {
    font-size: 20px;
  }

  .tech-description p {
    font-size: 15px;
  }

  .capability-card {
    padding: 20px 16px;
  }

  .highlight-item {
    gap: 12px;
  }

  .highlight-icon {
    font-size: 20px;
  }

  .highlight-text h4 {
    font-size: 16px;
  }

  .highlight-text p {
    font-size: 13px;
  }
}
</style>

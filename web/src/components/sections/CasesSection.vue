<template>
  <section id="cases" class="cases-section section-half">
    <div class="section-container">
      <div class="section-header centered">
        <h2 class="section-title">{{ $t('website.cases.title') }}</h2>
        <div class="title-underline"></div>
        <p class="section-subtitle">{{ $t('website.cases.subtitle') }}</p>
      </div>

      <div class="cases-content">
        <div class="cases-overview">
          <div class="overview-image">
            <img src="/images/page5_service_coverage_full.jpg" alt="服务覆盖" class="coverage-img">
          </div>
          <div class="overview-text">
            <h3>{{ $t('website.cases.overview_title') }}</h3>
            <p>{{ $t('website.cases.overview_description') }}</p>
          </div>
        </div>

        <div class="industry-sectors">
          <div class="sector-item">
            <div class="sector-icon">📡</div>
            <h4>{{ $t('website.cases.sector_1_title') }}</h4>
            <p>{{ $t('website.cases.sector_1_desc') }}</p>
          </div>
          <div class="sector-item">
            <div class="sector-icon">🏫</div>
            <h4>{{ $t('website.cases.sector_2_title') }}</h4>
            <p>{{ $t('website.cases.sector_2_desc') }}</p>
          </div>
          <div class="sector-item">
            <div class="sector-icon">🏭</div>
            <h4>{{ $t('website.cases.sector_3_title') }}</h4>
            <p>{{ $t('website.cases.sector_3_desc') }}</p>
          </div>
          <div class="sector-item">
            <div class="sector-icon">🏥</div>
            <h4>{{ $t('website.cases.sector_4_title') }}</h4>
            <p>{{ $t('website.cases.sector_4_desc') }}</p>
          </div>
          <div class="sector-item">
            <div class="sector-icon">🎓</div>
            <h4>{{ $t('website.cases.sector_5_title') }}</h4>
            <p>{{ $t('website.cases.sector_5_desc') }}</p>
          </div>
        </div>

        <div class="service-process">
          <h3>{{ $t('website.cases.process_title') }}</h3>
          <div class="process-image">
            <img src="/images/page6_design_process_full.jpg" :alt="$t('website.cases.process_title')" class="process-img">
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
/* 成功案例区域样式 */
.cases-section {
  background: #ffffff;
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

/* 响应式设计 */
@media (max-width: 1024px) {
  .cases-overview {
    gap: 40px;
  }

  .industry-sectors {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .sector-item {
    padding: 24px 16px;
  }
}

@media (max-width: 768px) {
  .cases-section {
    padding: 80px 0;
  }

  .section-container {
    padding: 0 20px;
  }

  .section-title {
    font-size: 32px;
  }

  .cases-content {
    gap: 40px;
  }

  .cases-overview {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .coverage-img {
    height: 250px;
  }

  .overview-text h3 {
    font-size: 24px;
  }

  .industry-sectors {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .sector-item {
    padding: 20px 12px;
  }

  .sector-icon {
    font-size: 28px;
    margin-bottom: 12px;
  }

  .sector-item h4 {
    font-size: 15px;
  }

  .sector-item p {
    font-size: 11px;
  }

  .service-process h3 {
    font-size: 24px;
  }
}

@media (max-width: 480px) {
  .cases-section {
    padding: 60px 0;
  }

  .section-container {
    padding: 0 16px;
  }

  .section-title {
    font-size: 28px;
  }

  .cases-content {
    gap: 30px;
  }

  .coverage-img {
    height: 200px;
  }

  .overview-text h3 {
    font-size: 20px;
  }

  .overview-text p {
    font-size: 15px;
  }

  .industry-sectors {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .sector-item {
    padding: 16px 12px;
  }

  .sector-icon {
    font-size: 24px;
    margin-bottom: 8px;
  }

  .sector-item h4 {
    font-size: 14px;
  }

  .sector-item p {
    font-size: 10px;
  }

  .service-process h3 {
    font-size: 20px;
    margin-bottom: 20px;
  }
}
</style>

<template>
  <section id="contact" class="contact-section section-half">
    <div class="section-container">
      <div class="section-header centered">
        <h2 class="section-title">{{ $t('website.contact.title') }}</h2>
        <div class="title-underline"></div>
        <p class="section-subtitle">{{ $t('website.contact.subtitle') }}</p>
      </div>

      <div class="contact-content">
        <div class="contact-info">
          <div class="contact-item">
            <div class="contact-icon">📍</div>
            <div class="contact-details">
              <h4>{{ $t('website.contact.address_title') }}</h4>
              <p>{{ $t('website.contact.address') }}</p>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon">📞</div>
            <div class="contact-details">
              <h4>{{ $t('website.contact.phone_title') }}</h4>
              <p>{{ $t('website.contact.phone') }}</p>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon">📧</div>
            <div class="contact-details">
              <h4>{{ $t('website.contact.email_title') }}</h4>
              <p>{{ $t('website.contact.email') }}</p>
            </div>
          </div>
        </div>

        <div class="contact-certifications">
          <h4>{{ $t('website.contact.certification_title') }}</h4>
          <div class="cert-images">
            <img src="/images/ISO9001质量管理体系认证证书.png" alt="ISO9001认证" class="cert-img">
            <img src="/images/武器装备质量管理体系证书.png" alt="军工认证" class="cert-img">
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
/* 联系我们区域样式 - 华天科技风格 */
.contact-section {
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
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
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid #f1f5f9;
}

.contact-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(30, 58, 138, 0.12);
  border-color: #e2e8f0;
}

.contact-icon {
  font-size: 24px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f9ff;
  border-radius: 12px;
  flex-shrink: 0;
}

.contact-details h4 {
  font-size: 18px;
  font-weight: 600;
  color: #1e3a8a;
  margin: 0 0 8px 0;
}

.contact-details p {
  font-size: 16px;
  color: #6b7280;
  margin: 0;
  line-height: 1.6;
}

.contact-certifications {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #f1f5f9;
  text-align: center;
}

.contact-certifications h4 {
  font-size: 20px;
  font-weight: 600;
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
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.cert-img:hover {
  transform: scale(1.05);
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .cert-images {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }

  .cert-img {
    max-width: 200px;
  }
}

@media (max-width: 768px) {
  .contact-section {
    padding: 80px 0;
  }

  .section-container {
    padding: 0 20px;
  }

  .section-title {
    font-size: 32px;
  }

  .contact-content {
    gap: 30px;
  }

  .contact-info {
    gap: 20px;
  }

  .contact-item {
    padding: 24px 20px;
    gap: 16px;
  }

  .contact-icon {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }

  .contact-details h4 {
    font-size: 16px;
  }

  .contact-details p {
    font-size: 15px;
  }

  .contact-certifications {
    padding: 24px 20px;
  }

  .contact-certifications h4 {
    font-size: 18px;
    margin-bottom: 20px;
  }

  .cert-images {
    gap: 16px;
  }

  .cert-img {
    max-width: 150px;
  }
}

@media (max-width: 480px) {
  .contact-section {
    padding: 60px 0;
  }

  .section-container {
    padding: 0 16px;
  }

  .section-title {
    font-size: 28px;
  }

  .contact-item {
    padding: 20px 16px;
    gap: 12px;
  }

  .contact-icon {
    width: 36px;
    height: 36px;
    font-size: 18px;
  }

  .contact-details h4 {
    font-size: 15px;
  }

  .contact-details p {
    font-size: 14px;
  }

  .contact-certifications {
    padding: 20px 16px;
  }

  .contact-certifications h4 {
    font-size: 16px;
    margin-bottom: 16px;
  }

  .cert-images {
    flex-direction: column;
    gap: 12px;
  }

  .cert-img {
    max-width: 120px;
  }
}
</style>

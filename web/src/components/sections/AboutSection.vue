<template>
  <section id="about" class="about-section section-half">
    <div class="section-container">
      <div class="about-content">
        <div class="about-text">
          <div class="section-header">
            <h2 class="section-title">{{ $t('website.about.title') }}</h2>
            <div class="title-underline"></div>
          </div>
          <div class="company-intro">
            <p class="intro-highlight">
              {{ $t('website.about.intro_highlight') }}
            </p>
            <p class="intro-description">
              {{ $t('website.about.intro_description') }}
            </p>
            <div class="company-stats">
              <div class="stat-item">
                <div class="stat-number">2019</div>
                <div class="stat-label">{{ $t('website.about.stat_founded') }}</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">100+</div>
                <div class="stat-label">{{ $t('website.about.stat_clients') }}</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">5+</div>
                <div class="stat-label">{{ $t('website.about.stat_team') }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="about-image">
          <img src="/images/business_office_scene.jpg" alt="办公场景" class="about-img">
          <div class="image-overlay">
            <div class="overlay-content">
              <h4>{{ $t('website.about.team_overlay_title') }}</h4>
              <p>{{ $t('website.about.team_overlay_desc') }}</p>
            </div>
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
/* 关于我们区域 */
.about-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  position: relative;
}

.about-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #e2e8f0, transparent);
}

.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.section-header {
  margin-bottom: 40px;
}

.section-title {
  font-size: 42px;
  font-weight: bold;
  color: #1e3a8a;
  margin: 0 0 20px 0;
  line-height: 1.2;
  position: relative;
}

.title-underline {
  width: 80px;
  height: 4px;
  background: linear-gradient(45deg, #f59e0b, #d97706);
  border-radius: 2px;
  position: relative;
}

.title-underline::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 4px;
  background: #1e3a8a;
  border-radius: 2px;
  animation: slideUnderline 2s ease-in-out infinite;
}

@keyframes slideUnderline {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(40px); }
}

.company-intro {
  color: #374151;
  line-height: 1.8;
}

.intro-highlight {
  font-size: 20px;
  font-weight: 600;
  color: #1e3a8a;
  margin-bottom: 24px;
  line-height: 1.6;
}

.intro-description {
  font-size: 16px;
  margin-bottom: 40px;
  color: #6b7280;
}

.company-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 40px;
}

.stat-item {
  text-align: center;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(30, 58, 138, 0.15);
}

.stat-number {
  font-size: 32px;
  font-weight: bold;
  color: #1e3a8a;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 14px;
  color: #6b7280;
  font-weight: 500;
}

.about-image {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.about-img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.about-image:hover .about-img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(30, 58, 138, 0.9));
  color: white;
  padding: 30px;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.about-image:hover .image-overlay {
  transform: translateY(0);
}

.overlay-content h4 {
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 8px 0;
}

.overlay-content p {
  font-size: 14px;
  margin: 0;
  opacity: 0.9;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .about-content {
    gap: 60px;
  }

  .section-title {
    font-size: 36px;
  }

  .company-stats {
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .about-section {
    padding: 80px 0;
  }

  .section-container {
    padding: 0 20px;
  }

  .about-content {
    grid-template-columns: 1fr;
    gap: 50px;
  }

  .section-title {
    font-size: 32px;
  }

  .intro-highlight {
    font-size: 18px;
  }

  .company-stats {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .stat-item {
    padding: 16px;
  }

  .stat-number {
    font-size: 28px;
  }

  .about-img {
    height: 300px;
  }
}

@media (max-width: 480px) {
  .about-section {
    padding: 60px 0;
  }

  .section-container {
    padding: 0 16px;
  }

  .section-title {
    font-size: 28px;
  }

  .intro-highlight {
    font-size: 16px;
  }

  .intro-description {
    font-size: 15px;
  }

  .about-img {
    height: 250px;
  }

  .image-overlay {
    padding: 20px;
  }
}
</style>

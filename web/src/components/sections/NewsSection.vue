<template>
  <section id="news" class="news-section section-half">
    <div class="section-container">
      <div class="news-header">
        <h3 class="news-title">{{ $t('website.news.title') }}</h3>
        <a href="#" class="news-more">
          <span>{{ $t('website.news.more') }}</span>
          <span class="more-arrow">→</span>
        </a>
      </div>

      <div class="news-grid">
        <div class="news-item">
          <a href="#" class="news-link">
            <img src="/images/business_office_scene.jpg" :alt="$t('website.news.news_1_title')" class="news-image">
            <div class="news-date">2024-08-06</div>
            <h5 class="news-item-title">{{ $t('website.news.news_1_title') }}</h5>
            <p class="news-excerpt">{{ $t('website.news.news_1_excerpt') }}</p>
          </a>
        </div>

        <div class="news-item">
          <a href="#" class="news-link">
            <img src="/images/modern_buildings_night_scene.jpg" :alt="$t('website.news.news_2_title')" class="news-image">
            <div class="news-date">2024-07-28</div>
            <h5 class="news-item-title">{{ $t('website.news.news_2_title') }}</h5>
            <p class="news-excerpt">{{ $t('website.news.news_2_excerpt') }}</p>
          </a>
        </div>

        <div class="news-item">
          <a href="#" class="news-link">
            <img src="/images/product_development_cycle_chart.jpg" :alt="$t('website.news.news_3_title')" class="news-image">
            <div class="news-date">2024-02-01</div>
            <h5 class="news-item-title">{{ $t('website.news.news_3_title') }}</h5>
            <p class="news-excerpt">{{ $t('website.news.news_3_excerpt') }}</p>
          </a>
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
/* 新闻动态样式 - 华天科技风格 */
.news-section {
  background: #ffffff;
  padding: 80px 0;
}

.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
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
  border-radius: 2px;
}

.news-more {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #6b7280;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.news-more:hover {
  color: #1e3a8a;
}

.more-arrow {
  transition: transform 0.3s ease;
}

.news-more:hover .more-arrow {
  transform: translateX(4px);
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.news-item {
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid #f1f5f9;
}

.news-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(30, 58, 138, 0.15);
  border-color: #e2e8f0;
}

.news-link {
  display: block;
  text-decoration: none;
  color: inherit;
}

.news-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.news-item:hover .news-image {
  transform: scale(1.05);
}

.news-date {
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(30, 58, 138, 0.9);
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
}

.news-item {
  position: relative;
}

.news-item-title {
  font-size: 18px;
  font-weight: 600;
  color: #1e3a8a;
  margin: 20px 20px 12px 20px;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.news-excerpt {
  font-size: 14px;
  color: #6b7280;
  line-height: 1.6;
  margin: 0 20px 20px 20px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .news-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}

@media (max-width: 768px) {
  .news-section {
    padding: 60px 0;
  }

  .section-container {
    padding: 0 20px;
  }

  .news-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 40px;
  }

  .news-title {
    font-size: 28px;
  }

  .news-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .news-image {
    height: 180px;
  }

  .news-item-title {
    font-size: 16px;
    margin: 16px 16px 10px 16px;
  }

  .news-excerpt {
    font-size: 13px;
    margin: 0 16px 16px 16px;
  }

  .news-date {
    top: 12px;
    right: 12px;
    padding: 4px 8px;
    font-size: 11px;
  }
}

@media (max-width: 480px) {
  .news-section {
    padding: 50px 0;
  }

  .section-container {
    padding: 0 16px;
  }

  .news-title {
    font-size: 24px;
  }

  .news-image {
    height: 160px;
  }

  .news-item-title {
    font-size: 15px;
    margin: 14px 14px 8px 14px;
  }

  .news-excerpt {
    font-size: 12px;
    margin: 0 14px 14px 14px;
  }
}
</style>

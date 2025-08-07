<template>
  <!-- 使用Naive UI原生轮播组件重构Hero Section -->
  <section id="home" class="hero-banner section-full">
    <n-carousel
      :autoplay="true"
      :interval="5000"
      :show-dots="true"
      :show-arrow="true"
      style="height: 100vh;"
      effect="slide"
    >
      <!-- 第一张轮播 - 使用Naive UI组件结构 -->
      <div class="hero-slide">
        <n-image
          :src="getImagePath('hero', 'tech_concept')"
          :fallback-src="PLACEHOLDER_IMAGES.business"
          alt="商务科技"
          object-fit="cover"
          style="width: 100%; height: 100vh; position: absolute; top: 0; left: 0; z-index: 1;"
        />
        <div class="hero-overlay"></div>
        <n-space
          vertical
          align="center"
          justify="center"
          style="position: relative; z-index: 3; height: 100vh; text-align: center; color: white;"
        >
          <h1 class="hero-title">
            {{ $t('website.hero.company_name') }}
          </h1>
          <h2 class="hero-subtitle">
            {{ $t('website.hero.title_1') }}
          </h2>
          <p class="hero-description">
            {{ $t('website.hero.subtitle_1') }}
          </p>
          <n-space :size="20">
            <n-button
              type="primary"
              size="large"
              @click="$emit('scroll-to-section', 'about')"
            >
              {{ $t('website.hero.cta_learn_more') }}
            </n-button>
            <n-button
              type="default"
              size="large"
              @click="$emit('scroll-to-section', 'contact')"
            >
              {{ $t('website.hero.cta_contact') }}
            </n-button>
          </n-space>
        </n-space>
      </div>

      <!-- 第二张轮播 - 使用Naive UI组件结构 -->
      <div class="hero-slide">
        <n-image
          :src="getImagePath('hero', 'circuit_background')"
          :fallback-src="PLACEHOLDER_IMAGES.technology"
          alt="科技背景"
          object-fit="cover"
          style="width: 100%; height: 100vh; position: absolute; top: 0; left: 0; z-index: 1;"
        />
        <div class="hero-overlay"></div>
        <n-space
          vertical
          align="center"
          justify="center"
          style="position: relative; z-index: 3; height: 100vh; text-align: center; color: white;"
        >
          <h1 class="hero-title">
            {{ $t('website.hero.title_2') }}
          </h1>
          <h2 class="hero-subtitle">
            {{ $t('website.hero.subtitle_2') }}
          </h2>
          <n-space :size="20">
            <n-button
              type="primary"
              size="large"
              @click="$emit('scroll-to-section', 'technology')"
            >
              {{ $t('website.hero.cta_technology') }}
            </n-button>
            <n-button
              type="default"
              size="large"
              @click="$emit('scroll-to-section', 'business')"
            >
              {{ $t('website.hero.cta_business') }}
            </n-button>
          </n-space>
        </n-space>
      </div>
    </n-carousel>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { getImagePath, PLACEHOLDER_IMAGES } from '@/utils/imageUtils'

const { t } = useI18n()

// 定义事件 - 简化后只需要滚动事件
const emit = defineEmits(['scroll-to-section'])

//
// 所有轮播逻辑已移除 - 现在由Naive UI的n-carousel组件自动处理
// 包括：自动播放、指示器、控制按钮、悬停暂停等功能
//
</script>

<style scoped>
/*
 * Hero Banner样式 - 使用Naive UI原生轮播组件
 * 大部分样式已由n-carousel组件自动处理
 */
.hero-banner {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

/*
 * 自定义轮播样式已移除 - 现在使用Naive UI的n-carousel组件
 * 只保留必要的内容样式
 */

.hero-slide {
  position: relative;
  width: 100%;
  height: 100vh;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--sipumtech-bg-gradient-2);
  z-index: 2;
}

/*
 * Hero内容样式 - 简化版，主要依赖Naive UI组件样式
 * 只保留必要的品牌样式
 */
.hero-title {
  font-size: 4rem;
  font-weight: var(--sipumtech-font-weight-bold);
  margin: 0;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  color: var(--sipumtech-text-white);
}

.hero-subtitle {
  font-size: 1.8rem;
  font-weight: var(--sipumtech-font-weight-medium);
  margin: 1rem 0;
  opacity: 0.95;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  color: var(--sipumtech-text-white);
}

.hero-description {
  font-size: 1.1rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto 2rem auto;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  color: var(--sipumtech-text-white);
}

/*
 * CTA按钮样式已移除 - 现在使用Naive UI的n-button组件
 * 所有按钮样式由Naive UI自动处理
 */

/*
 * 所有轮播控制样式已移除 - 现在由Naive UI的n-carousel组件自动处理
 * 包括：控制按钮、指示器、悬停效果等
 */

/* 响应式设计 - 简化版，主要依赖Naive UI的响应式能力 */
@media (max-width: 1024px) {
  .hero-title {
    font-size: 3rem;
  }

  .hero-subtitle {
    font-size: 1.5rem;
  }

  .hero-description {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.3rem;
  }

  .hero-description {
    font-size: 0.9rem;
  }
}
</style>

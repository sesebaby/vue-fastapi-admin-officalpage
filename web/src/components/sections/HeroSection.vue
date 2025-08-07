<template>
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
              <span class="company-name">{{ $t('website.hero.company_name') }}</span>
            </h1>
            <h2 class="slide-subtitle animated-text">
              {{ $t('website.hero.title_1') }}
            </h2>
            <p class="slide-description">
              {{ $t('website.hero.subtitle_1') }}
            </p>
            <div class="hero-actions">
              <button class="cta-button primary" @click="$emit('scroll-to-section', 'about')">
                {{ $t('website.hero.cta_learn_more') }}
              </button>
              <button class="cta-button secondary" @click="$emit('scroll-to-section', 'contact')">
                {{ $t('website.hero.cta_contact') }}
              </button>
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
              <span class="company-name">{{ $t('website.hero.title_2') }}</span>
            </h1>
            <h2 class="slide-subtitle">
              {{ $t('website.hero.subtitle_2') }}
            </h2>
            <div class="hero-actions">
              <button class="cta-button primary" @click="$emit('scroll-to-section', 'technology')">
                {{ $t('website.hero.cta_technology') }}
              </button>
              <button class="cta-button secondary" @click="$emit('scroll-to-section', 'business')">
                {{ $t('website.hero.cta_business') }}
              </button>
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
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// 定义事件
const emit = defineEmits(['scroll-to-section'])

// 轮播相关状态
const currentSlide = ref(0)
const slides = ref([
  { id: 1, title: 'slide1' },
  { id: 2, title: 'slide2' }
])
const autoSlideInterval = ref(null)

// 轮播功能
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

// 自动轮播
const startAutoSlide = () => {
  autoSlideInterval.value = setInterval(() => {
    nextSlide()
  }, 5000)
}

const stopAutoSlide = () => {
  if (autoSlideInterval.value) {
    clearInterval(autoSlideInterval.value)
    autoSlideInterval.value = null
  }
}

// 卡片悬停效果
const startHover = () => {
  stopAutoSlide()
}

const endHover = () => {
  startAutoSlide()
}

// 生命周期
onMounted(() => {
  startAutoSlide()
})

onUnmounted(() => {
  stopAutoSlide()
})

// 暴露方法给父组件
defineExpose({
  startHover,
  endHover
})
</script>

<style scoped>
/* Hero Banner 样式 */
.hero-banner {
  position: relative;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
  display: flex;
  align-items: center;
  justify-content: center;
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
  object-position: center;
}

.bg-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(30, 58, 138, 0.8) 0%,
    rgba(59, 130, 246, 0.6) 50%,
    rgba(147, 51, 234, 0.7) 100%
  );
}

.slide-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
}

.slide-container {
  max-width: 800px;
  margin: 0 auto;
}

.slide-title {
  margin: 0;
  line-height: 1.1;
}

.company-name {
  font-size: 72px;
  font-weight: bold;
  background: linear-gradient(45deg, #ffffff, #f0f9ff, #dbeafe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: 2px;
}

.slide-subtitle {
  font-size: 28px;
  font-weight: 500;
  margin: 0 0 20px 0;
  opacity: 0.95;
  line-height: 1.4;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.slide-description {
  font-size: 18px;
  font-weight: 400;
  margin: 0 0 30px 0;
  opacity: 0.9;
  line-height: 1.5;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-actions {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 40px;
}

.cta-button {
  padding: 16px 32px;
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
  min-width: 140px;
}

.cta-button.primary {
  background: linear-gradient(45deg, #f59e0b, #d97706);
  color: white;
  box-shadow: 0 4px 15px rgba(245, 158, 11, 0.4);
}

.cta-button.primary:hover {
  background: linear-gradient(45deg, #d97706, #b45309);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(245, 158, 11, 0.6);
}

.cta-button.secondary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
}

.cta-button.secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
}

/* 轮播控制 */
.slider-controls {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  z-index: 3;
  pointer-events: none;
}

.prev-btn,
.next-btn {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  font-size: 24px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  pointer-events: auto;
}

.prev-btn:hover,
.next-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

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
  border: none;
  background: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: white;
  transform: scale(1.2);
}

.indicator:hover {
  background: rgba(255, 255, 255, 0.7);
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .company-name {
    font-size: 52px;
  }

  .slide-subtitle {
    font-size: 22px;
  }

  .slide-description {
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  .slide-content {
    padding: 0 20px;
  }

  .company-name {
    font-size: 48px;
  }

  .slide-subtitle {
    font-size: 20px;
  }

  .slide-description {
    font-size: 15px;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .cta-button {
    width: 100%;
    max-width: 280px;
  }
}

@media (max-width: 480px) {
  .slide-content {
    padding: 0 16px;
  }

  .company-name {
    font-size: 32px;
  }

  .slide-subtitle {
    font-size: 16px;
  }

  .slide-description {
    font-size: 14px;
    max-width: 100%;
  }

  .slider-controls {
    padding: 0 16px;
  }

  .prev-btn,
  .next-btn {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
}
</style>

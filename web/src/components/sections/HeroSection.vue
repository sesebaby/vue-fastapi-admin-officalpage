<template>
  <!-- 使用Naive UI原生轮播组件重构Hero Section -->
  <section id="home" class="hero-banner section-full">
    <n-carousel
      ref="carouselRef"
      :autoplay="autoplayEnabled"
      :interval="carouselInterval"
      :default-index="0"
      :show-dots="true"
      :show-arrow="true"
      :keyboard="false"
      :mousewheel="false"
      :trigger="'click'"
      :transition-style="{ transitionDuration: '500ms' }"
      effect="slide"
      style="height: 100vh;"
      @update:current-index="handleSlideChange"
    >
      <!-- 第一张轮播 - 使用公司主图 -->
      <div class="hero-slide">
        <n-image
          :src="getImagePath('hero', 'company_hero')"
          :fallback-src="PLACEHOLDER_IMAGES.business"
          alt="公司主图"
          object-fit="cover"
          style="width: 100%; height: 100vh; position: absolute; top: 0; left: 0; z-index: 1; object-position: center center;"
          :img-props="{ style: 'filter: brightness(1.1) contrast(1.05);' }"
          @load="handleImageLoad"
          @error="handleImageLoad"
        />
        <div class="hero-overlay"></div>
        <n-space
          vertical
          align="center"
          justify="center"
          style="position: relative; z-index: 3; height: 100vh; text-align: center; color: white;"
        >
          <h1 class="hero-title" :style="{ fontSize: heroTitleSize }">
            {{ $t('website.hero.company_name') }}
          </h1>
          <h2 class="hero-subtitle" :style="{ fontSize: heroSubtitleSize }">
            {{ $t('website.hero.title_1') }}
          </h2>
          <p class="hero-description" :style="{ fontSize: heroDescriptionSize }">
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

      <!-- 第二张轮播 - 使用科技背景图片 -->
      <div class="hero-slide">
        <n-image
          :src="getImagePath('hero', 'tech_background')"
          :fallback-src="PLACEHOLDER_IMAGES.technology"
          alt="科技背景"
          object-fit="cover"
          style="width: 100%; height: 100vh; position: absolute; top: 0; left: 0; z-index: 1; object-position: center center;"
          :img-props="{ style: 'filter: brightness(1.2) contrast(1.1);' }"
          @load="handleImageLoad"
          @error="handleImageLoad"
        />
        <div class="hero-overlay"></div>
        <n-space
          vertical
          align="center"
          justify="center"
          style="position: relative; z-index: 3; height: 100vh; text-align: center; color: white;"
        >
          <h1 class="hero-title" :style="{ fontSize: heroTitleSize }">
            {{ $t('website.hero.title_2') }}
          </h1>
          <h2 class="hero-subtitle" :style="{ fontSize: heroSubtitleSize }">
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
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useBreakpoints } from '@vueuse/core'
import { getImagePath, PLACEHOLDER_IMAGES } from '@/utils/imageUtils'

const { t } = useI18n()

// 定义事件 - 简化后只需要滚动事件
const emit = defineEmits(['scroll-to-section'])

// 轮播组件引用
const carouselRef = ref(null)

// 轮播控制状态
const autoplayEnabled = ref(false) // 初始禁用，等待图片加载完成
const carouselInterval = ref(6000) // 增加到6秒，确保有足够展示时间
const currentSlideIndex = ref(0)
const imagesLoaded = ref(0) // 跟踪已加载的图片数量
const totalImages = ref(2) // 总图片数量

// 使用 @vueuse/core 的 breakpoints 进行响应式设计
const breakpoints = useBreakpoints({
  sm: 768,   // 移动端
  md: 1024,  // 平板端
  lg: 1440,  // 桌面端
  xl: 1920   // 大屏桌面端
})

// 响应式字体大小计算
const heroTitleSize = computed(() => {
  if (breakpoints.xl.value) return '6.5rem'      // 大屏桌面端
  if (breakpoints.lg.value) return '5.5rem'      // 桌面端
  if (breakpoints.md.value) return '4.5rem'      // 平板端
  if (breakpoints.sm.value) return '3.5rem'      // 移动端
  return '2.8rem'                                 // 小屏移动端
})

const heroSubtitleSize = computed(() => {
  if (breakpoints.xl.value) return '2.8rem'      // 大屏桌面端
  if (breakpoints.lg.value) return '2.4rem'      // 桌面端
  if (breakpoints.md.value) return '2rem'        // 平板端
  if (breakpoints.sm.value) return '1.6rem'      // 移动端
  return '1.4rem'                                 // 小屏移动端
})

const heroDescriptionSize = computed(() => {
  if (breakpoints.xl.value) return '1.6rem'      // 大屏桌面端
  if (breakpoints.lg.value) return '1.4rem'      // 桌面端
  if (breakpoints.md.value) return '1.2rem'      // 平板端
  if (breakpoints.sm.value) return '1.1rem'      // 移动端
  return '1rem'                                   // 小屏移动端
})

// 图片加载完成处理
const handleImageLoad = () => {
  imagesLoaded.value++
  console.log(`图片加载完成: ${imagesLoaded.value}/${totalImages.value}`)

  // 当所有图片都加载完成时，启动自动播放
  if (imagesLoaded.value >= totalImages.value) {
    setTimeout(() => {
      autoplayEnabled.value = true
      console.log('所有图片加载完成，启动轮播自动播放')
    }, 500) // 延迟500ms确保渲染完成
  }
}

// 轮播事件处理函数
const handleSlideChange = (index) => {
  currentSlideIndex.value = index
  console.log(`轮播切换到第 ${index + 1} 张图片`)
}

// 轮播控制方法
const pauseCarousel = () => {
  autoplayEnabled.value = false
}

const resumeCarousel = () => {
  autoplayEnabled.value = true
}

const goToSlide = (index) => {
  if (carouselRef.value) {
    carouselRef.value.to(index)
  }
}

// 生命周期管理 - 确保轮播正确初始化
onMounted(() => {
  // 延迟启动自动播放，确保组件完全加载
  setTimeout(() => {
    if (carouselRef.value) {
      // 确保从第一张开始
      carouselRef.value.to(0)
      console.log('轮播组件初始化完成')
    }
  }, 100)
})

onUnmounted(() => {
  // 清理轮播状态
  autoplayEnabled.value = false
})
</script>

<style scoped>
/*
 * Hero Banner样式 - 使用Naive UI原生轮播组件
 * 优化轮播加载和切换效果
 */
.hero-banner {
  position: relative;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); /* 加载时的背景色 */
}

/* 轮播组件优化 */
.hero-banner :deep(.n-carousel) {
  height: 100vh;
}

/* 轮播指示器样式优化 */
.hero-banner :deep(.n-carousel__dots) {
  bottom: 30px;
  z-index: 10;
}

/* 轮播箭头样式优化 */
.hero-banner :deep(.n-carousel__arrow) {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  z-index: 10;
}

.hero-banner :deep(.n-carousel__arrow:hover) {
  background: rgba(255, 255, 255, 0.3);
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
  background: linear-gradient(135deg,
    rgba(30, 58, 138, 0.4) 0%,
    rgba(59, 130, 246, 0.3) 50%,
    rgba(0, 212, 170, 0.2) 100%
  );
  z-index: 2;
}

/*
 * Hero内容样式 - 使用动态字体大小，优化视觉效果
 * 字体大小通过 @vueuse/core breakpoints 动态计算
 */
.hero-title {
  font-weight: 800; /* 更粗的字体权重 */
  margin: 0;
  letter-spacing: 0.05em; /* 使用相对单位 */
  text-shadow:
    4px 4px 12px rgba(0, 0, 0, 0.7),
    2px 2px 6px rgba(0, 0, 0, 0.9),
    0 0 20px rgba(30, 58, 138, 0.3); /* 添加品牌色光晕 */
  color: #ffffff;
  line-height: 1.1;
  transition: all 0.3s ease; /* 平滑过渡效果 */
}

.hero-subtitle {
  font-weight: 600; /* 中等字体权重 */
  margin: 1.5rem 0;
  text-shadow:
    3px 3px 8px rgba(0, 0, 0, 0.6),
    1px 1px 4px rgba(0, 0, 0, 0.8),
    0 0 15px rgba(59, 130, 246, 0.2); /* 添加蓝色光晕 */
  color: #ffffff;
  line-height: 1.2;
  transition: all 0.3s ease;
}

.hero-description {
  max-width: 800px; /* 增大最大宽度 */
  margin: 0 auto 2.5rem auto;
  text-shadow:
    2px 2px 6px rgba(0, 0, 0, 0.6),
    1px 1px 3px rgba(0, 0, 0, 0.8);
  color: #ffffff;
  line-height: 1.5; /* 增加行高提升可读性 */
  font-weight: 400;
  transition: all 0.3s ease;
}

/*
 * CTA按钮样式已移除 - 现在使用Naive UI的n-button组件
 * 所有按钮样式由Naive UI自动处理
 */

/*
 * 所有轮播控制样式已移除 - 现在由Naive UI的n-carousel组件自动处理
 * 包括：控制按钮、指示器、悬停效果等
 */

/* 响应式设计 - 使用 @vueuse/core breakpoints 动态计算字体大小 */
/* 只保留必要的布局响应式样式 */

/* 移动端布局优化 */
@media (max-width: 768px) {
  .hero-title {
    letter-spacing: 0.02em; /* 移动端减少字间距 */
    line-height: 1.1;
  }

  .hero-subtitle {
    margin: 1rem 0;
    line-height: 1.2;
  }

  .hero-description {
    max-width: 90%;
    margin: 0 auto 1.5rem auto;
    padding: 0 1rem;
    line-height: 1.5;
  }
}

/* 小屏移动端布局优化 */
@media (max-width: 480px) {
  .hero-title {
    letter-spacing: 0.01em;
  }

  .hero-description {
    max-width: 95%;
    padding: 0 0.5rem;
  }
}

/* 大屏优化 */
@media (min-width: 1920px) {
  .hero-description {
    max-width: 900px;
  }
}
</style>

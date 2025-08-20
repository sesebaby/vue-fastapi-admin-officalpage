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
      :trigger="'hover'"
      :transition-style="{ transitionDuration: '500ms' }"
      effect="slide"
      dot-type="line"
      dot-placement="bottom"
      :style="`height: ${carouselHeight};`"
      @update:current-index="handleSlideChange"
    >
      <!-- 第一张轮播 - 使用原版公司主图 -->
      <div class="hero-slide">
        <n-image
          :src="getImagePath('hero', 'company_hero')"
          :fallback-src="PLACEHOLDER_IMAGES.business"
          :alt="$t('website.hero.company_image_alt')"
          :object-fit="adaptiveImageStyle.objectFit"
          :preview-disabled="true"
          :style="`position: absolute; top: 0; left: 0; z-index: 1; display: block; width: 100%; height: ${carouselHeight}; ${adaptiveImageStyle.additionalStyles}`"
          :img-props="{
            style: `width: 100%; height: 100%; object-fit: ${adaptiveImageStyle.objectFit}; object-position: ${companyHeroObjectPosition}; filter: brightness(1.1) contrast(1.05);`
          }"
          @load="handleImageLoad"
          @error="handleImageLoad"
        />
      </div>

      <!-- 第二张轮播 - 使用原版科技背景图片 -->
      <div class="hero-slide">
        <n-image
          :src="getImagePath('hero', 'tech_background')"
          :fallback-src="PLACEHOLDER_IMAGES.technology"
          :alt="$t('website.hero.tech_background_alt')"
          :object-fit="adaptiveImageStyle.objectFit"
          :preview-disabled="true"
          :style="`position: absolute; top: 0; left: 0; z-index: 1; display: block; width: 100%; height: ${carouselHeight}; ${adaptiveImageStyle.additionalStyles}`"
          :img-props="{
            style: `width: 100%; height: 100%; object-fit: ${adaptiveImageStyle.objectFit}; object-position: ${adaptiveImageStyle.objectPosition}; filter: brightness(1.2) contrast(1.1);`
          }"
          @load="handleImageLoad"
          @error="handleImageLoad"
        />
      </div>

      <!-- 第三张轮播 - 使用新的公司实景图片2 -->
      <div class="hero-slide">
        <n-image
          :src="getImagePath('hero', 'third_slide')"
          :fallback-src="PLACEHOLDER_IMAGES.business"
          :alt="$t('website.hero.company_scene_2_alt')"
          :object-fit="adaptiveImageStyle.objectFit"
          :preview-disabled="true"
          :style="`position: absolute; top: 0; left: 0; z-index: 1; display: block; width: 100%; height: ${carouselHeight}; ${adaptiveImageStyle.additionalStyles}`"
          :img-props="{
            style: `width: 100%; height: 100%; object-fit: ${adaptiveImageStyle.objectFit}; object-position: ${adaptiveImageStyle.objectPosition}; filter: brightness(1.1) contrast(1.05);`
          }"
          @load="handleImageLoad"
          @error="handleImageLoad"
        />
      </div>

      <!-- 第四张轮播 - 使用新的公司实景图片3 -->
      <div class="hero-slide">
        <n-image
          :src="getImagePath('hero', 'fourth_slide')"
          :fallback-src="PLACEHOLDER_IMAGES.business"
          :alt="$t('website.hero.company_scene_3_alt')"
          :object-fit="adaptiveImageStyle.objectFit"
          :preview-disabled="true"
          :style="`position: absolute; top: 0; left: 0; z-index: 1; display: block; width: 100%; height: ${carouselHeight}; ${adaptiveImageStyle.additionalStyles}`"
          :img-props="{
            style: `width: 100%; height: 100%; object-fit: ${adaptiveImageStyle.objectFit}; object-position: ${adaptiveImageStyle.objectPosition}; filter: brightness(1.1) contrast(1.05);`
          }"
          @load="handleImageLoad"
          @error="handleImageLoad"
        />
      </div>
    </n-carousel>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { getImagePath, PLACEHOLDER_IMAGES } from '@/utils/imageUtils'

// 定义事件 - 移除滚动事件，因为没有按钮了
// const emit = defineEmits(['scroll-to-section'])

// 轮播组件引用
const carouselRef = ref(null)

// 轮播控制状态
const autoplayEnabled = ref(false) // 初始禁用，等待图片加载完成
const carouselInterval = ref(6000) // 增加到6秒，确保有足够展示时间
const currentSlideIndex = ref(0)
const imagesLoaded = ref(0) // 跟踪已加载的图片数量
const totalImages = ref(4) // 总图片数量

// 响应式窗口尺寸监听
const { width: windowWidth, height: windowHeight } = useWindowSize()

// 响应式轮播高度计算 - 使用100vh确保完全填充容器，消除空白区域
const carouselHeight = computed(() => {
  // 统一使用100vh，确保轮播图完全填充section-full容器
  return '100vh'
})

// 图片加载完成处理
const handleImageLoad = () => {
  imagesLoaded.value++
  // 图片加载完成计数

  // 当所有图片都加载完成时，启动自动播放
  if (imagesLoaded.value >= totalImages.value) {
    setTimeout(() => {
      autoplayEnabled.value = true
      // 所有图片加载完成，启动轮播自动播放
    }, 500) // 延迟500ms确保渲染完成
  }
}

// 轮播事件处理函数
const handleSlideChange = (index) => {
  currentSlideIndex.value = index
  // 轮播切换
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
// 智能图片适配策略 - 根据屏幕比例动态调整显示方式
const adaptiveImageStyle = computed(() => {
  const viewportRatio = windowWidth.value / windowHeight.value

  // 统一使用cover模式确保图片完全填充容器，避免空白区域
  let objectFit = 'cover'
  let objectPosition = 'center center'
  let additionalStyles = ''

  // 超宽屏策略 (比例 > 2.2) - 使用cover确保填充
  if (viewportRatio > 2.2) {
    objectFit = 'cover'
    objectPosition = 'center center'
    additionalStyles = ''
  }
  // 宽屏策略 (比例 1.6-2.2) - 标准显示
  else if (viewportRatio > 1.6) {
    objectFit = 'cover'
    objectPosition = 'center center'
  }
  // 标准屏策略 (比例 1.2-1.6) - 居中显示
  else if (viewportRatio > 1.2) {
    objectFit = 'cover'
    objectPosition = 'center center'
  }
  // 竖屏/窄屏策略 (比例 < 1.2) - 居中显示保持完整填充
  else {
    objectFit = 'cover'
    objectPosition = 'center center'
  }

  return {
    objectFit,
    objectPosition,
    additionalStyles
  }
})
// 仅针对第一张公司主图：为了保证左上角公司 logo 不被 cover 裁切，锚点定位到左上角
const companyHeroObjectPosition = computed(() => {
  // 如需更精细的适配，可基于 viewport 比例返回不同值
  // 例如：超宽屏使用 'left center'，竖屏使用 'left 10%'
  return 'left top'
})



// 生命周期管理 - 确保轮播正确初始化
onMounted(() => {
  // 延迟启动自动播放，确保组件完全加载
  setTimeout(() => {
    if (carouselRef.value) {
      // 确保从第一张开始
      carouselRef.value.to(0)
      // 轮播组件初始化完成
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
  overflow: hidden;
  background: var(--sipumtech-bg-tech); /* 统一使用科技蓝背景 */
  /* 确保Hero Section完全填充，消除空白区域 */
  height: 100vh;
  min-height: 100vh;
  display: flex;
  align-items: stretch; /* 让子元素完全填充 */
}

/* 轮播容器尺寸由 n-carousel 的内联 style 控制为 100vh，此处不再覆盖内部结构样式（遵循 Naive UI 优先原则） */

/* 轮播指示器样式优化 - 增强可见性和对比度 */
.hero-banner :deep(.n-carousel__dots) {
  bottom: 40px;
  z-index: 10;
  /* 为指示器区域添加背景遮罩，增强对比度 */
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.4) 50%,
    transparent 100%
  );
  padding: 20px 0 10px 0;
  border-radius: 8px 8px 0 0;
  backdrop-filter: blur(4px);
}

/* 线条样式指示器优化 */
.hero-banner :deep(.n-carousel__dot) {
  width: 40px !important;
  height: 4px !important;
  border-radius: 2px !important;
  margin: 0 6px !important;
  background: rgba(255, 255, 255, 0.4) !important;
  border: 1px solid rgba(255, 255, 255, 0.6) !important;
  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.3),
    0 1px 3px rgba(0, 0, 0, 0.5) !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
  cursor: pointer !important;
}

/* 激活状态的指示器 */
.hero-banner :deep(.n-carousel__dot--active) {
  background: rgba(255, 255, 255, 0.95) !important;
  border: 1px solid #ffffff !important;
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.4),
    0 2px 6px rgba(0, 0, 0, 0.6),
    0 0 0 2px rgba(255, 255, 255, 0.3) !important;
  transform: scale(1.1) !important;
}

/* 悬停状态的指示器 */
.hero-banner :deep(.n-carousel__dot:hover) {
  background: rgba(255, 255, 255, 0.7) !important;
  border: 1px solid rgba(255, 255, 255, 0.9) !important;
  transform: scale(1.05) !important;
  box-shadow:
    0 3px 10px rgba(0, 0, 0, 0.35),
    0 1px 4px rgba(0, 0, 0, 0.55) !important;
}

/* 轮播箭头样式优化 - 在浅色背景下提升对比度与可见性 */
.hero-banner :deep(.n-carousel__arrow) {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  /* 深色半透明背景，搭配白色描边，保证任何背景下都有清晰对比 */
  background: rgba(0, 0, 0, 0.45);
  color: #ffffff; /* 确保箭头图标为白色 */
  border: 1px solid rgba(255, 255, 255, 0.35);
  box-shadow:
    0 8px 24px rgba(0, 0, 0, 0.45),
    0 2px 6px rgba(0, 0, 0, 0.25),
    inset 0 0 0 1px rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(6px);
  z-index: 10;
  transition: background 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
}

/* 兼容某些图标实现需显式设置 fill */
.hero-banner :deep(.n-carousel__arrow svg) {
  color: #ffffff;
  fill: currentColor;
}

.hero-banner :deep(.n-carousel__arrow:hover) {
  background: rgba(0, 0, 0, 0.65);
  border-color: rgba(255, 255, 255, 0.55);
  box-shadow:
    0 10px 28px rgba(0, 0, 0, 0.5),
    0 3px 8px rgba(0, 0, 0, 0.3),
    0 0 0 2px rgba(255, 255, 255, 0.18);
  transform: translateY(-1px);
}

.hero-banner :deep(.n-carousel__arrow:active) {
  background: rgba(0, 0, 0, 0.75);
  transform: translateY(0);
}

/*
 * 自定义轮播样式已移除 - 现在使用Naive UI的n-carousel组件
 * 只保留必要的内容样式
 */

.hero-slide {
  position: relative;
  width: 100%;
  height: 100%; /* 使用100%高度，由父容器控制 */
  overflow: hidden; /* 确保图片不会超出容器 */
  background: var(--sipumtech-bg-tech); /* 统一使用科技蓝背景 */
}

/* 遵循Naive UI优先原则：所有样式通过n-image组件的官方属性设置，不使用深度选择器覆盖内部样式 */

/* 移动端响应式优化 */
@media (max-width: 768px) {
  /* 移动端轮播指示器位置和样式调整 */
  .hero-banner :deep(.n-carousel__dots) {
    bottom: 25px;
    padding: 15px 0 8px 0;
  }

  /* 移动端指示器尺寸调整 */
  .hero-banner :deep(.n-carousel__dot) {
    width: 32px !important;
    height: 3px !important;
    margin: 0 4px !important;
  }

  /* 移动端轮播箭头样式调整 */
  .hero-banner :deep(.n-carousel__arrow) {
    width: 38px;
    height: 38px;
    border-radius: 9px;
    background: rgba(0, 0, 0, 0.5);
    border-color: rgba(255, 255, 255, 0.45);
  }
}

/* 小屏幕设备进一步优化 */
@media (max-width: 480px) {
  .hero-banner :deep(.n-carousel__dots) {
    bottom: 20px;
    padding: 12px 0 6px 0;
  }

  .hero-banner :deep(.n-carousel__dot) {
    width: 28px !important;
    height: 3px !important;
    margin: 0 3px !important;
  }
}

/* 平板端和桌面端响应式优化 - 高度现在由JavaScript动态控制 */


/*
 * 文字样式已移除 - Hero区域现在只显示纯净的轮播图片背景
 * 所有文字内容和按钮已被移除，保持简洁的视觉效果
 */

/*
 * 响应式样式已简化 - 移除了所有文字相关的响应式配置
 * Hero区域现在专注于图片展示，无需文字布局优化
 */

/*
 * 响应式图片适配现在通过 JavaScript 智能控制
 * 移除静态媒体查询，使用动态计算的适配策略
 * 确保在所有设备和分辨率下都有最佳显示效果
 */
</style>

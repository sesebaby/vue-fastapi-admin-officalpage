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
      style="height: 100vh;"
      @update:current-index="handleSlideChange"
    >
      <!-- 第一张轮播 - 使用公司主图 -->
      <div class="hero-slide">
        <n-image
          :src="getImagePath('hero', 'company_hero')"
          :fallback-src="PLACEHOLDER_IMAGES.business"
          alt="公司主图"
          :object-fit="adaptiveImageStyle.objectFit"
          :preview-disabled="true"
          :style="`position: absolute; top: 0; left: 0; z-index: 1; display: block; width: 100%; height: 100vh; ${adaptiveImageStyle.additionalStyles}`"
          :img-props="{
            style: `width: 100%; height: 100%; object-fit: ${adaptiveImageStyle.objectFit}; object-position: ${adaptiveImageStyle.objectPosition}; filter: brightness(1.1) contrast(1.05);`
          }"
          @load="handleImageLoad"
          @error="handleImageLoad"
        />

      </div>

      <!-- 第二张轮播 - 使用科技背景图片 -->
      <div class="hero-slide">
        <n-image
          :src="getImagePath('hero', 'tech_background')"
          :fallback-src="PLACEHOLDER_IMAGES.technology"
          alt="科技背景"
          :object-fit="adaptiveImageStyle.objectFit"
          :preview-disabled="true"
          :style="`position: absolute; top: 0; left: 0; z-index: 1; display: block; width: 100%; height: 100vh; ${adaptiveImageStyle.additionalStyles}`"
          :img-props="{
            style: `width: 100%; height: 100%; object-fit: ${adaptiveImageStyle.objectFit}; object-position: ${adaptiveImageStyle.objectPosition}; filter: brightness(1.2) contrast(1.1);`
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
const totalImages = ref(2) // 总图片数量

// 响应式窗口尺寸监听
const { width: windowWidth, height: windowHeight } = useWindowSize()

// 移除了响应式字体大小计算逻辑，因为已经没有文字内容

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
// 智能图片适配策略 - 根据屏幕比例动态调整显示方式
const adaptiveImageStyle = computed(() => {
  const viewportRatio = windowWidth.value / windowHeight.value

  // 图片宽高比信息
  const imageRatios = [1.41, 1.6] // 两张轮播图的宽高比

  let objectFit = 'cover'
  let objectPosition = 'center center'
  let additionalStyles = ''

  // 超宽屏策略 (比例 > 2.2) - 避免过度裁剪
  if (viewportRatio > 2.2) {
    objectFit = 'contain'
    objectPosition = 'center center'
    additionalStyles = 'background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);'
  }
  // 宽屏策略 (比例 1.6-2.2) - 标准显示
  else if (viewportRatio > 1.6) {
    objectFit = 'cover'
    objectPosition = 'center 45%'
  }
  // 标准屏策略 (比例 1.2-1.6) - 居中显示
  else if (viewportRatio > 1.2) {
    objectFit = 'cover'
    objectPosition = 'center center'
  }
  // 竖屏/窄屏策略 (比例 < 1.2) - 顶部对齐保持重要内容
  else {
    objectFit = 'cover'
    objectPosition = 'center 30%'
  }

  return {
    objectFit,
    objectPosition,
    additionalStyles
  }
})


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

/* 轮播容器尺寸由 n-carousel 的内联 style 控制为 100vh，此处不再覆盖内部结构样式（遵循 Naive UI 优先原则） */

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
  overflow: hidden; /* 确保图片不会超出容器 */
}

/* 遵循 Naive UI 优先原则：不覆盖 n-image 内部结构，由组件属性控制填充与对齐 */


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

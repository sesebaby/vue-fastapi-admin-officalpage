<template>
  <!-- 成功案例展示区域 - 圆形动画布局 -->
  <section id="cases" class="cases-section section-half">
    <div class="section-container">
      <!-- 标题区域 -->
      <n-space vertical align="center" :size="20" style="margin-bottom: 80px;">
        <h2 class="section-title">{{ $t('website.cases.title') }}</h2>
        <div class="title-underline"></div>
        <p class="section-subtitle">{{ $t('website.cases.subtitle') }}</p>
      </n-space>

      <!-- 圆形服务展示区域 -->
      <div class="circular-services-container" ref="circularContainer">
        <!-- 中心圆形区域 -->
        <div class="center-circle" :class="{ 'animate-in': isVisible }">
          <div class="center-content">
            <n-text class="center-title">
              {{ $t('website.cases.center_title') }}
            </n-text>
            <n-text class="center-subtitle">
              {{ $t('website.cases.center_subtitle') }}
            </n-text>
          </div>
        </div>

        <!-- 环形服务项目 -->
        <div
          v-for="(service, index) in services"
          :key="`service-${service.key}-${index}`"
          class="service-item"
          :class="{ 'animate-in': isVisible }"
          :style="{
            '--delay': `${index * 0.1}s`,
            '--angle': `${(360 / services.length) * index}deg`
          }"
          @mouseenter="handleServiceHover(index, true)"
          @mouseleave="handleServiceHover(index, false)"
        >
          <n-card
            hoverable
            class="service-card"
            :class="{ 'hovered': hoveredIndex === index }"
          >
            <!-- 长方形卡片布局 - 左右结构 -->
            <div class="card-content-wrapper">
              <!-- 左侧图标区域 -->
              <div class="icon-section">
                <n-avatar
                  :size="50"
                  :style="{
                    background: 'linear-gradient(135deg, var(--sipumtech-primary-blue), var(--sipumtech-accent-blue))',
                    color: '#ffffff',
                    fontSize: '24px',
                    flexShrink: 0
                  }"
                >
                  {{ service.icon }}
                </n-avatar>
              </div>

              <!-- 右侧文字区域 -->
              <div class="text-section">
                <!-- 服务标题 -->
                <n-text
                  class="service-title"
                  :style="{
                    fontSize: '15px',
                    fontWeight: 'var(--sipumtech-font-weight-bold)',
                    color: 'var(--sipumtech-primary-blue)',
                    lineHeight: '1.3',
                    display: 'block',
                    marginBottom: '6px'
                  }"
                >
                  {{ $t(`website.cases.service_${index + 1}_title`) }}
                </n-text>

                <!-- 服务描述 - 仅在桌面端显示 -->
                <n-ellipsis
                  v-if="shouldShowDescription"
                  class="service-description"
                  :line-clamp="1"
                  :style="{
                    fontSize: '12px',
                    color: 'var(--sipumtech-text-secondary)',
                    lineHeight: '1.4'
                  }"
                >
                  {{ $t(`website.cases.service_${index + 1}_desc`) }}
                </n-ellipsis>
              </div>
            </div>
          </n-card>
        </div>

        <!-- 装饰性连接线 -->
        <div class="connection-lines" :class="{ 'animate-in': isVisible }">
          <div
            v-for="index in services.length"
            :key="`connection-line-${index}`"
            class="connection-line"
            :style="{
              '--line-angle': `${(360 / services.length) * (index - 1)}deg`,
              '--delay': `${0.8 + index * 0.05}s`
            }"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'

// 响应式数据
const circularContainer = ref(null)
const isVisible = ref(false)
const hoveredIndex = ref(-1)

// 响应式断点检测
const breakpoints = useBreakpoints(breakpointsTailwind)
const isDesktop = breakpoints.greater('lg') // >= 1024px
const shouldShowDescription = computed(() => isDesktop.value)

// 服务项目配置
const services = ref([
  { icon: '🔧', key: 'service_1' }, // 先进封装设计
  { icon: '💻', key: 'service_2' }, // 硬件方案开发
  { icon: '📊', key: 'service_3' }, // 仿真分析
  { icon: '🧪', key: 'service_4' }, // 测试验证
  { icon: '⚙️', key: 'service_5' }, // 工艺优化
  { icon: '🛠️', key: 'service_6' }  // 技术支持
])

// 滚动监听 - 使用 VueUse 的 Intersection Observer
const { stop } = useIntersectionObserver(
  circularContainer,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      // 延迟触发动画，让用户有时间看到初始状态
      setTimeout(() => {
        isVisible.value = true
      }, 200)
    }
  },
  {
    threshold: 0.3, // 当30%的元素可见时触发
    rootMargin: '-50px' // 提前50px触发
  }
)

// 服务项目悬停处理
const handleServiceHover = (index, isHover) => {
  hoveredIndex.value = isHover ? index : -1
}

// 组件卸载时清理
onUnmounted(() => {
  stop()
})
</script>

<style scoped>
/*
 * CasesSection圆形动画布局样式 - 基于Naive UI组件
 * 实现参考网站的圆形服务展示效果
 */

/* 成功案例区域 */
.cases-section {
  background: var(--sipumtech-bg-tech);
  padding: var(--sipumtech-section-padding-desktop);
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.section-container {
  max-width: var(--sipumtech-container-max-width);
  margin: 0 auto;
  padding: 0 var(--sipumtech-container-padding-desktop);
  width: 100%;
}

/* 响应式容器padding - 修复移动端内容区域过窄问题 */
@media (max-width: 1024px) and (min-width: 769px) {
  .section-container {
    padding: 0 var(--sipumtech-container-padding-tablet);
  }
}

@media (max-width: 768px) {
  .section-container {
    padding: 0 var(--sipumtech-container-padding-mobile);
  }
}

/* 保留必要的品牌样式 */
.section-title {
  font-size: var(--sipumtech-font-size-h1);
  font-weight: var(--sipumtech-font-weight-bold);
  color: var(--sipumtech-primary-blue);
  margin: 0;
  line-height: var(--sipumtech-line-height-tight);
}

.title-underline {
  width: 80px;
  height: 4px;
  background: linear-gradient(45deg, var(--sipumtech-accent-orange), #d97706);
  border-radius: var(--sipumtech-radius-sm);
}

.section-subtitle {
  font-size: 18px;
  color: var(--sipumtech-text-secondary);
  margin: 0;
  line-height: var(--sipumtech-line-height-relaxed);
}

/* 圆形服务展示容器 - 优化响应式布局 */
.circular-services-container {
  position: relative;
  width: 1100px; /* 增大桌面端容器尺寸以适配更大的卡片 */
  height: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 中心圆形区域 - 优化样式，移除装饰后更加简洁 */
.center-circle {
  position: absolute;
  width: 220px; /* 稍微增大尺寸 */
  height: 220px;
  background: linear-gradient(135deg, var(--sipumtech-primary-blue), var(--sipumtech-secondary-blue));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  box-shadow: 0 12px 40px rgba(30, 58, 138, 0.4); /* 增强阴影效果 */
  transform: scale(0) rotate(-180deg);
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;
  border: 3px solid rgba(255, 255, 255, 0.2); /* 添加微妙的边框 */
}

/* 移除装饰线条 - 注释掉原有的::before伪元素 */
/*
.center-circle::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(
    from 0deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  animation: rotate-continuous 8s linear infinite;
  opacity: 0;
  transition: opacity 0.5s ease;
}
*/

.center-circle.animate-in {
  transform: scale(1) rotate(0deg);
  opacity: 1;
  transition-delay: 0.3s;
}

/* 移除装饰线条动画触发 */
/*
.center-circle.animate-in::before {
  opacity: 1;
  transition-delay: 1s;
}
*/

/* 持续旋转动画 */
@keyframes rotate-continuous {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.center-content {
  text-align: center;
  padding: 14px 12px;
  position: relative;
  z-index: 2;
  max-width: 90%;
}

.center-title {
  font-size: clamp(16px, 5vw, 22px);
  font-weight: var(--sipumtech-font-weight-bold);
  color: #fff;
  line-height: 1.2;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  word-break: keep-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.center-subtitle {
  font-size: clamp(12px, 3.2vw, 14px);
  color: #fff;
  opacity: 0.95;
  margin-top: 6px;
  text-align: center;
  font-weight: var(--sipumtech-font-weight-medium);
  letter-spacing: 0.5px;
  word-break: keep-all;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* 移除中心圆形脉冲效果 */
/*
.center-circle::after {
  content: '';
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border: 2px solid rgba(30, 58, 138, 0.3);
  border-radius: 50%;
  animation: pulse-ring 2s ease-out infinite;
  opacity: 0;
}

.center-circle.animate-in::after {
  opacity: 1;
  animation-delay: 1.5s;
}

@keyframes pulse-ring {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  100% {
    transform: scale(1.3);
    opacity: 0;
  }
}
*/

/* 环形服务项目 - 长方形卡片设计 */
.service-item {
  position: absolute;
  width: 260px; /* 增大长方形卡片宽度以避免文字截断 */
  height: 150px; /* 保持长方形卡片高度 */
  transform-origin: center;
  transform:
    rotate(var(--angle))
    translateY(-450px) /* 增大距离适配更大的容器和卡片 */
    rotate(calc(-1 * var(--angle)))
    scale(0);
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.service-item.animate-in {
  transform:
    rotate(var(--angle))
    translateY(-450px) /* 增大距离适配更大的容器和卡片 */
    rotate(calc(-1 * var(--angle)))
    scale(1);
  opacity: 1;
  transition-delay: calc(0.5s + var(--delay));
}

/* 服务卡片样式 - 长方形毛玻璃效果设计 */
.service-card {
  width: 100%;
  height: 100%;
  border-radius: 20px; /* 增大圆角适配长方形 */
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  /* 毛玻璃效果 */
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  /* 立体效果 */
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow:
    0 8px 32px rgba(30, 58, 138, 0.12),
    0 4px 16px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
  overflow: hidden; /* 确保内容不会溢出卡片边界 */
}

/* 确保卡片内容正确布局 */
.service-card :deep(.n-card__content) {
  height: 100%;
  padding: 0; /* 移除默认padding，使用自定义spacing */
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 长方形卡片内容布局 */
.card-content-wrapper {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 16px;
  gap: 12px;
}

.icon-section {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0; /* 允许文字区域收缩 */
}

.service-title {
  word-break: break-word;
  overflow-wrap: break-word;
}

/* 服务描述文字样式 - 现在通过条件渲染控制显示 */
.service-description {
  width: 100%;
  text-align: left;
}

.service-card:hover,
.service-card.hovered {
  transform: translateY(-12px) scale(1.03);
  /* 增强悬停时的毛玻璃和立体效果 */
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  border-color: rgba(30, 58, 138, 0.3);
  box-shadow:
    0 16px 48px rgba(30, 58, 138, 0.2),
    0 8px 24px rgba(0, 0, 0, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
}

/* 确保n-ellipsis组件正确工作 */
.service-description :deep(.n-ellipsis) {
  width: 100%;
}

/* 装饰性连接线 */
.connection-lines {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 1;
}

.connection-line {
  position: absolute;
  width: 2px;
  height: 120px;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(30, 58, 138, 0.4),
    rgba(30, 58, 138, 0.6),
    rgba(30, 58, 138, 0.4),
    transparent
  );
  top: 50%;
  left: 50%;
  transform-origin: center bottom;
  transform:
    translateX(-50%)
    translateY(-60px)
    rotate(var(--line-angle))
    scaleY(0);
  opacity: 0;
  transition: all 0.6s ease;
}

.connection-line::before {
  content: '';
  position: absolute;
  top: 0;
  left: -1px;
  width: 4px;
  height: 100%;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  animation: line-flow 3s ease-in-out infinite;
  opacity: 0;
}

.connection-lines.animate-in .connection-line {
  transform:
    translateX(-50%)
    translateY(-60px)
    rotate(var(--line-angle))
    scaleY(1);
  opacity: 1;
  transition-delay: var(--delay);
}

.connection-lines.animate-in .connection-line::before {
  opacity: 1;
  animation-delay: calc(var(--delay) + 0.5s);
}

@keyframes line-flow {
  0%, 100% {
    transform: translateY(-100%);
    opacity: 0;
  }
  50% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* 响应式设计 */
/* 平板端优化 (768px-1024px) */
@media (max-width: 1024px) and (min-width: 769px) {
  .circular-services-container {
    width: 850px; /* 增大平板端容器尺寸 */
    height: 850px;
  }

  .service-item {
    width: 220px; /* 增大平板端长方形卡片宽度 */
    height: 120px; /* 平板端长方形卡片高度 */
    transform:
      rotate(var(--angle))
      translateY(-350px) /* 调整平板端距离 */
      rotate(calc(-1 * var(--angle)))
      scale(0);
  }

  .service-item.animate-in {
    transform:
      rotate(var(--angle))
      translateY(-350px) /* 调整平板端距离 */
      rotate(calc(-1 * var(--angle)))
      scale(1);
  }

  /* 平板端卡片内容布局调整 */
  .card-content-wrapper {
    padding: 12px;
    gap: 10px;
  }

  /* 平板端图标大小调整 */
  .service-item .n-avatar {
    width: 40px !important;
    height: 40px !important;
    font-size: 20px !important;
  }

  /* 平板端文字大小调整 */
  .service-title {
    font-size: 13px !important;
    line-height: 1.3 !important;
  }
}

/* 移动端优化 (≤768px) */
@media (max-width: 768px) {
  .cases-section {
    padding: 60px 0;
    min-height: auto;
  }

  .circular-services-container {
    width: 480px; /* 适当减小移动端容器尺寸以适配更紧凑的卡片 */
    height: 480px;
  }

  .center-circle {
    width: 150px; /* 保持移动端中心圆尺寸 */
    height: 150px;
  }

  .center-content {
    padding: 15px;
  }

  /* 移动端中心圆文字控制（≤768px）- 使用显式类选择器并提高优先级 */
  .center-title {
    font-size: 18px !important;
    line-height: 1.2 !important;
    white-space: normal !important;
    overflow: visible !important;
    text-overflow: clip !important;
  }
  .center-subtitle {
    font-size: 12px !important;
    line-height: 1.2 !important;
    white-space: normal !important;
  }


  .service-item {
    width: 160px; /* 减小移动端长方形卡片宽度，确保6个卡片完整显示 */
    height: 100px; /* 移动端长方形卡片高度 */
    transform:
      rotate(var(--angle))
      translateY(-220px) /* 调整距离适配更紧凑的布局 */
      rotate(calc(-1 * var(--angle)))
      scale(0);
  }

  .service-item.animate-in {
    transform:
      rotate(var(--angle))
      translateY(-220px) /* 调整距离适配更紧凑的布局 */
      rotate(calc(-1 * var(--angle)))
      scale(1);
  }

  /* 移动端卡片内容布局调整 - 优化紧凑布局 */
  .card-content-wrapper {
    padding: 12px 10px; /* 增加垂直padding确保文字不被截断 */
    gap: 8px;
    justify-content: center; /* 确保内容居中对齐 */
  }

  /* 移动端图标大小调整 */
  .service-item .n-avatar {
    width: 32px !important;
    height: 32px !important;
    font-size: 16px !important;
  }

  /* 移动端文字大小调整 - 确保标题清晰可读 */
  .service-title {
    font-size: 12px !important;
    line-height: 1.4 !important;
    font-weight: 600 !important; /* 增加字重提高可读性 */
    text-align: center !important; /* 确保文字居中 */
  }

  .connection-line {
    height: 80px;
    transform:
      translateX(-50%)
      translateY(-40px)
      rotate(var(--line-angle))
      scaleY(0);
  }

  .connection-lines.animate-in .connection-line {
    transform:
      translateX(-50%)
      translateY(-40px)
      rotate(var(--line-angle))
      scaleY(1);
  }
}

@media (max-width: 480px) {
  .circular-services-container {
    width: 380px; /* 减小超小屏幕容器尺寸以适配更紧凑的卡片 */
    height: 380px;
  }

  .center-circle {
    width: 110px; /* 保持中心圆尺寸 */
    height: 110px;
  }

  .center-content {
    padding: 10px;
  }

  /* 超小屏幕中心文字调整（≤480px）- 使用明确类名，避免选择器歧义 */
  .center-title {
    font-size: 16px !important;
    line-height: 1.2 !important;
  }

  .center-subtitle {
    font-size: 11px !important;
    line-height: 1.2 !important;
  }

  .service-item {
    width: 130px; /* 减小超小屏幕长方形卡片宽度，确保紧凑布局 */
    height: 80px; /* 超小屏幕长方形卡片高度 */
    transform:
      rotate(var(--angle))
      translateY(-170px) /* 调整距离适配更紧凑的布局 */
      rotate(calc(-1 * var(--angle)))
      scale(0);
  }

  .service-item.animate-in {
    transform:
      rotate(var(--angle))
      translateY(-170px) /* 调整距离适配更紧凑的布局 */
      rotate(calc(-1 * var(--angle)))
      scale(1);
  }

  /* 超小屏幕卡片内容布局调整 - 最紧凑布局 */
  .card-content-wrapper {
    padding: 10px 8px; /* 保持适当的padding确保内容不贴边 */
    gap: 6px;
    justify-content: center; /* 确保内容居中对齐 */
  }

  /* 超小屏幕图标大小调整 */
  .service-item .n-avatar {
    width: 28px !important;
    height: 28px !important;
    font-size: 14px !important;
  }

  /* 超小屏幕文字大小调整 - 确保标题清晰可读 */
  .service-title {
    font-size: 11px !important;
    line-height: 1.3 !important;
    font-weight: 600 !important; /* 增加字重提高可读性 */
    text-align: center !important; /* 确保文字居中 */
  }
}

/* 极小屏幕优化 (≤360px) - 针对最小的移动设备 */
@media (max-width: 360px) {
  .circular-services-container {
    width: 320px; /* 进一步减小容器尺寸 */
    height: 320px;
  }

  .center-circle {
    width: 100px; /* 适当减小中心圆 */
    height: 100px;
  }

  .center-content {
    padding: 8px;
  }

  /* 极小屏幕中心文字调整 */
  .center-content .n-text:first-child {
    font-size: 16px !important;
  }

  .center-content .n-text:last-child {
    font-size: 11px !important;
  }

  .service-item {
    width: 110px; /* 极小屏幕卡片宽度 */
    height: 70px; /* 极小屏幕卡片高度 */
    transform:
      rotate(var(--angle))
      translateY(-145px) /* 调整距离 */
      rotate(calc(-1 * var(--angle)))
      scale(0);
  }

  .service-item.animate-in {
    transform:
      rotate(var(--angle))
      translateY(-145px) /* 调整距离 */
      rotate(calc(-1 * var(--angle)))
      scale(1);
  }

  /* 极小屏幕卡片内容布局 */
  .card-content-wrapper {
    padding: 8px 6px;
    gap: 4px;
  }

  /* 极小屏幕图标调整 */
  .service-item .n-avatar {
    width: 24px !important;
    height: 24px !important;
    font-size: 12px !important;
  }

  /* 极小屏幕文字调整 */
  .service-title {
    font-size: 10px !important;
    line-height: 1.2 !important;
  }
}
</style>

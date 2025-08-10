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
            <n-text
              :style="{
                fontSize: '24px',
                fontWeight: 'var(--sipumtech-font-weight-bold)',
                color: '#ffffff',
                lineHeight: '1.3',
                textAlign: 'center',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
              }"
            >
              {{ $t('website.cases.center_title') }}
            </n-text>
            <n-text
              :style="{
                fontSize: '14px',
                color: '#ffffff',
                opacity: '0.95',
                marginTop: '6px',
                textAlign: 'center',
                fontWeight: 'var(--sipumtech-font-weight-medium)',
                letterSpacing: '1px'
              }"
            >
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
            <n-space vertical align="center" :size="12">
              <!-- 服务图标 -->
              <n-avatar
                :size="60"
                :style="{
                  background: 'linear-gradient(135deg, var(--sipumtech-primary-blue), var(--sipumtech-accent-blue))',
                  color: '#ffffff',
                  fontSize: '28px'
                }"
              >
                {{ service.icon }}
              </n-avatar>

              <!-- 服务标题 -->
              <n-text
                :style="{
                  fontSize: '16px',
                  fontWeight: 'var(--sipumtech-font-weight-bold)',
                  color: 'var(--sipumtech-primary-blue)',
                  textAlign: 'center',
                  lineHeight: '1.3'
                }"
              >
                {{ $t(`website.cases.service_${index + 1}_title`) }}
              </n-text>

              <!-- 服务描述 -->
              <n-text
                :style="{
                  fontSize: '12px',
                  color: 'var(--sipumtech-text-secondary)',
                  textAlign: 'center',
                  lineHeight: '1.4',
                  whiteSpace: 'pre-line'
                }"
              >
                {{ $t(`website.cases.service_${index + 1}_desc`) }}
              </n-text>
            </n-space>
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
import { ref, onMounted, onUnmounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

// 响应式数据
const circularContainer = ref(null)
const isVisible = ref(false)
const hoveredIndex = ref(-1)

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
  background: var(--sipumtech-bg-white);
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
  width: 800px; /* 增大桌面端容器尺寸 */
  height: 800px;
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
  padding: 20px;
  position: relative;
  z-index: 2;
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

/* 环形服务项目 */
.service-item {
  position: absolute;
  width: 160px;
  height: 160px;
  transform-origin: center;
  transform:
    rotate(var(--angle))
    translateY(-250px)
    rotate(calc(-1 * var(--angle)))
    scale(0);
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.service-item.animate-in {
  transform:
    rotate(var(--angle))
    translateY(-320px) /* 增大距离适配更大的容器 */
    rotate(calc(-1 * var(--angle)))
    scale(1);
  opacity: 1;
  transition-delay: calc(0.5s + var(--delay));
}

/* 服务卡片样式 */
.service-card {
  width: 100%;
  height: 100%;
  border-radius: 16px;
  transition: all 0.3s ease;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 2px solid transparent;
}

.service-card:hover,
.service-card.hovered {
  transform: translateY(-8px) scale(1.05);
  box-shadow: 0 12px 40px rgba(30, 58, 138, 0.2);
  border-color: var(--sipumtech-primary-blue);
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
    width: 650px;
    height: 650px;
  }

  .service-item.animate-in {
    transform:
      rotate(var(--angle))
      translateY(-260px) /* 平板端适中距离 */
      rotate(calc(-1 * var(--angle)))
      scale(1);
  }
}

/* 移动端优化 (≤768px) */
@media (max-width: 768px) {
  .cases-section {
    padding: 60px 0;
    min-height: auto;
  }

  .circular-services-container {
    width: 400px;
    height: 400px;
  }

  .center-circle {
    width: 150px; /* 稍微增大移动端中心圆 */
    height: 150px;
  }

  .center-content {
    padding: 15px;
  }

  .service-item {
    width: 120px;
    height: 120px;
    transform:
      rotate(var(--angle))
      translateY(-180px)
      rotate(calc(-1 * var(--angle)))
      scale(0);
  }

  .service-item.animate-in {
    transform:
      rotate(var(--angle))
      translateY(-180px)
      rotate(calc(-1 * var(--angle)))
      scale(1);
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
    width: 320px;
    height: 320px;
  }

  .center-circle {
    width: 120px;
    height: 120px;
  }

  .service-item {
    width: 100px;
    height: 100px;
    transform:
      rotate(var(--angle))
      translateY(-140px)
      rotate(calc(-1 * var(--angle)))
      scale(0);
  }

  .service-item.animate-in {
    transform:
      rotate(var(--angle))
      translateY(-140px)
      rotate(calc(-1 * var(--angle)))
      scale(1);
  }
}
</style>

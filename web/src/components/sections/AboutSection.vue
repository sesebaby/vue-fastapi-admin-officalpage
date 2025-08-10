<template>
  <!-- 关于我们区域 - 使用Naive UI原生组件 -->
  <section id="about" class="about-section section-half">
    <div class="section-container">
      <!-- 使用Naive UI Grid布局 - 优化高度对齐 -->
      <n-grid
        :cols="2"
        :collapsed="true"
        :collapsed-rows="1"
        :x-gap="80"
        :y-gap="40"
        responsive="screen"
        align-items="stretch"
        class="about-grid-container"
      >
        <!-- 左侧文本内容 -->
        <n-grid-item>
          <n-space vertical :size="40">
            <!-- 标题区域 -->
            <n-space vertical :size="20">
              <n-text
                :style="{
                  fontSize: 'var(--sipumtech-font-size-h1)',
                  fontWeight: 'var(--sipumtech-font-weight-bold)',
                  color: 'var(--sipumtech-primary-blue)',
                  lineHeight: 'var(--sipumtech-line-height-tight)'
                }"
              >
                {{ $t('website.about.title') }}
              </n-text>
              <div class="title-underline"></div>
            </n-space>

            <!-- 公司核心信息标签 - 使用Naive UI Tag组件突出显示 -->
            <n-space :size="12" wrap>
              <n-tag
                type="info"
                size="large"
                :bordered="false"
                style="background: linear-gradient(135deg, #1e3a8a, #3b82f6); color: white; font-weight: 600; padding: 8px 16px;"
              >
                {{ $t('website.about.tag_founded') }}
              </n-tag>
              <n-tag
                type="info"
                size="large"
                :bordered="false"
                style="background: linear-gradient(135deg, #059669, #10b981); color: white; font-weight: 600; padding: 8px 16px;"
              >
                {{ $t('website.about.tag_location') }}
              </n-tag>
              <n-tag
                type="info"
                size="large"
                :bordered="false"
                style="background: linear-gradient(135deg, #dc2626, #ef4444); color: white; font-weight: 600; padding: 8px 16px;"
              >
                {{ $t('website.about.tag_positioning') }}
              </n-tag>
            </n-space>

            <!-- 公司介绍 - 重新组织内容层次 -->
            <n-space vertical :size="24">
              <n-text
                :style="{
                  fontSize: 'var(--sipumtech-font-size-h4)',
                  fontWeight: 'var(--sipumtech-font-weight-semibold)',
                  color: 'var(--sipumtech-primary-blue)',
                  lineHeight: 'var(--sipumtech-line-height-relaxed)'
                }"
              >
                {{ $t('website.about.intro_highlight') }}
              </n-text>
              <n-text
                :style="{
                  fontSize: 'var(--sipumtech-font-size-body)',
                  color: 'var(--sipumtech-text-secondary)',
                  lineHeight: 'var(--sipumtech-line-height-relaxed)'
                }"
              >
                {{ $t('website.about.intro_description') }}
              </n-text>
            </n-space>

            <!-- 添加分隔线 - 使用Naive UI Divider组件 -->
            <n-divider style="margin: 20px 0;" />

            <!-- "了解更多"按钮 - 使用Naive UI Button组件 -->
            <n-space>
              <n-button
                type="primary"
                size="large"
                @click="handleLearnMore"
                style="padding: 12px 32px; font-size: 16px; font-weight: 600;"
              >
                {{ $t('website.about.cta_learn_more') }}
              </n-button>
              <n-button
                type="default"
                size="large"
                @click="handleContactUs"
                style="padding: 12px 32px; font-size: 16px;"
              >
                {{ $t('website.about.cta_contact') }}
              </n-button>
            </n-space>

            <!-- 公司统计数据 - 使用Naive UI Statistic组件 -->
            <n-grid :cols="3" :x-gap="30">
              <n-grid-item>
                <n-statistic
                  :label="$t('website.about.stat_founded')"
                  :value="2019"
                  :value-style="{ fontSize: '32px', fontWeight: 'bold', color: '#1e3a8a' }"
                />
              </n-grid-item>
              <n-grid-item>
                <n-statistic
                  :label="$t('website.about.stat_clients')"
                  value="100+"
                  :value-style="{ fontSize: '32px', fontWeight: 'bold', color: '#1e3a8a' }"
                />
              </n-grid-item>
              <n-grid-item>
                <n-statistic
                  :label="$t('website.about.stat_team')"
                  value="5+"
                  :value-style="{ fontSize: '32px', fontWeight: 'bold', color: '#1e3a8a' }"
                />
              </n-grid-item>
            </n-grid>
          </n-space>
        </n-grid-item>

        <!-- 右侧图片内容 -->
        <n-grid-item>
          <div class="about-image-container height-match-container">
            <!-- 使用Naive UI Image组件 - 高度自适应左侧内容 -->
            <n-image
              :src="getImagePath('about', 'office_scene')"
              :fallback-src="PLACEHOLDER_IMAGES.business"
              alt="办公场景"
              object-fit="cover"
              class="responsive-image height-adaptive-image"
              :img-props="{
                style: 'width: 100%; height: 100%; object-fit: cover; object-position: center;'
              }"
            />

            <!-- 图片覆盖层信息 -->
            <n-card
              class="image-overlay-card"
              :bordered="false"
              style="position: absolute; bottom: 20px; left: 20px; right: 20px; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); z-index: 2;"
            >
              <n-space vertical :size="8">
                <n-text
                  :style="{
                    fontSize: '18px',
                    fontWeight: 'var(--sipumtech-font-weight-semibold)',
                    color: 'var(--sipumtech-primary-blue)'
                  }"
                >
                  {{ $t('website.about.team_overlay_title') }}
                </n-text>
                <n-text
                  :style="{
                    fontSize: 'var(--sipumtech-font-size-small)',
                    color: 'var(--sipumtech-text-secondary)'
                  }"
                >
                  {{ $t('website.about.team_overlay_desc') }}
                </n-text>
              </n-space>
            </n-card>
          </div>
        </n-grid-item>
      </n-grid>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { getImagePath, PLACEHOLDER_IMAGES } from '@/utils/imageUtils'

const { t } = useI18n()
const router = useRouter()

// 按钮点击事件处理
const handleLearnMore = () => {
  // 跳转到关于我们详细页面
  // 如果有独立的关于我们页面路由，使用router.push('/about')
  // 目前先滚动到页面顶部，后续可以根据实际路由配置调整
  const aboutElement = document.getElementById('about')
  if (aboutElement) {
    aboutElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  // 可以在这里添加埋点统计
  console.log('用户点击了解更多按钮')
}

const handleContactUs = () => {
  // 滚动到联系我们区域
  const contactElement = document.getElementById('contact')
  if (contactElement) {
    contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  // 可以在这里添加埋点统计
  console.log('用户点击联系我们按钮')
}
</script>

<style scoped>
/*
 * AboutSection样式 - 使用Naive UI原生组件
 * 大部分样式已由n-grid、n-statistic、n-image、n-card等组件自动处理
 */

/* 关于我们区域 */
.about-section {
  padding: var(--sipumtech-section-padding-desktop);
  background: var(--sipumtech-bg-gradient-1);
  position: relative;
}

.about-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--sipumtech-divider), transparent);
}

.section-container {
  max-width: var(--sipumtech-container-max-width);
  margin: 0 auto;
  padding: 0 var(--sipumtech-container-padding-desktop);
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

/* 网格容器样式 - 确保高度对齐 */
.about-grid-container {
  min-height: 600px; /* 设置最小高度 */
}

/* 确保网格项目高度一致 */
.about-grid-container .n-grid-item {
  display: flex;
  flex-direction: column;
  height: 100%;
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
  position: relative;
}

.title-underline::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 4px;
  background: var(--sipumtech-primary-blue);
  border-radius: var(--sipumtech-radius-sm);
  animation: slideUnderline 2s ease-in-out infinite;
}

@keyframes slideUnderline {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(40px); }
}

/*
 * 所有文本内容样式已迁移到 n-text 组件的 :style 属性
 * 移除所有 margin: 0 重置和自定义文本样式类
 * 完全依赖 Naive UI 组件属性管理样式
 */

/* 图片容器样式 - 高度匹配优化 */
.about-image-container {
  position: relative;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
}

/* 高度匹配容器 - 关键样式 */
.height-match-container {
  height: 100%;
  min-height: 500px; /* 设置最小高度确保在内容较少时有合理的显示 */
  display: flex;
  flex-direction: column;
}

/* 响应式图片样式 - 高度自适应 */
.responsive-image {
  width: 100%;
  border-radius: 12px;
  flex: 1; /* 让图片占据剩余空间 */
}

/* 高度自适应图片 */
.height-adaptive-image {
  height: 100% !important;
  min-height: 500px;
  max-height: none; /* 移除最大高度限制 */
}

/*
 * 图片和覆盖层样式完全由 Naive UI 组件处理：
 * - n-image 组件处理图片显示、加载状态、错误处理
 * - n-card 组件处理覆盖层样式、背景、边框
 * - 使用 aspect-ratio 替代固定高度，实现响应式适配
 */

/*
 * 响应式布局优化 - 高度对齐适配：
 * - n-grid 的 align-items="stretch" 确保左右列高度一致
 * - 大屏幕：左右两列等高显示，图片自适应内容高度
 * - 中等屏幕：保持两列布局，调整最小高度
 * - 小屏幕：切换为单列布局，图片使用固定比例
 */

/* 响应式高度对齐优化 */
/* 平板端专门适配 (768px-1024px) */
@media (max-width: 1024px) and (min-width: 769px) {
  .about-grid-container {
    min-height: 550px; /* 平板端适中高度 */
  }

  .height-adaptive-image {
    min-height: 450px; /* 平板端图片高度 */
  }
}

/* 小平板和大手机 (≤1024px) */
@media (max-width: 1024px) {
  .about-grid-container {
    min-height: 500px;
  }

  .height-adaptive-image {
    min-height: 400px;
  }
}

@media (max-width: 768px) {
  /* 小屏幕下切换为单列布局时，恢复固定比例 */
  .about-grid-container {
    min-height: auto;
  }

  .height-match-container {
    min-height: auto;
  }

  .height-adaptive-image {
    min-height: 300px;
    aspect-ratio: 16/9; /* 小屏幕下使用更适合的比例 */
  }
}

@media (max-width: 480px) {
  .height-adaptive-image {
    min-height: 250px;
    aspect-ratio: 4/3;
  }
}
</style>

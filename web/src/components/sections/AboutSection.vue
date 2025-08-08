<template>
  <!-- 关于我们区域 - 使用Naive UI原生组件 -->
  <section id="about" class="about-section section-half">
    <div class="section-container">
      <!-- 使用Naive UI Grid布局 -->
      <n-grid
        :cols="2"
        :collapsed="true"
        :collapsed-rows="1"
        :x-gap="80"
        :y-gap="40"
        responsive="screen"
        align-items="center"
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

            <!-- 公司介绍 -->
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

            <!-- 公司统计数据 - 使用Naive UI Statistic组件 -->
            <n-grid :cols="3" :x-gap="30">
              <n-grid-item>
                <n-statistic
                  label="成立年份"
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
          <div class="about-image-container">
            <!-- 使用Naive UI Image组件 -->
            <n-image
              :src="getImagePath('about', 'office_scene')"
              :fallback-src="PLACEHOLDER_IMAGES.business"
              alt="办公场景"
              object-fit="cover"
              class="responsive-image"
            />

            <!-- 图片覆盖层信息 -->
            <n-card
              class="image-overlay-card"
              :bordered="false"
              style="position: absolute; bottom: 20px; left: 20px; right: 20px; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px);"
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
import { getImagePath, PLACEHOLDER_IMAGES } from '@/utils/imageUtils'

const { t } = useI18n()
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

/* 图片容器样式 */
.about-image-container {
  position: relative;
}

/* 响应式图片样式 */
.responsive-image {
  width: 100%;
  aspect-ratio: 4/3;
  border-radius: 12px;
}

/*
 * 图片和覆盖层样式完全由 Naive UI 组件处理：
 * - n-image 组件处理图片显示、加载状态、错误处理
 * - n-card 组件处理覆盖层样式、背景、边框
 * - 使用 aspect-ratio 替代固定高度，实现响应式适配
 */

/*
 * 响应式布局完全由 Naive UI 组件处理：
 * - n-grid 的 collapsed 和 responsive="screen" 自动处理响应式布局
 * - n-statistic 组件自动适配不同屏幕尺寸
 * - n-text 组件通过 CSS 变量实现一致的字体缩放
 * - .responsive-image 使用 aspect-ratio 实现图片响应式
 * - 移除所有自定义媒体查询，严格遵循 Naive UI 优先原则
 */
</style>

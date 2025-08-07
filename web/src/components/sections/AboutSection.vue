<template>
  <!-- 关于我们区域 - 使用Naive UI原生组件 -->
  <section id="about" class="about-section section-half">
    <div class="section-container">
      <!-- 使用Naive UI Grid布局 -->
      <n-grid
        :cols="2"
        :x-gap="80"
        item-responsive
        responsive="screen"
        style="align-items: center;"
      >
        <!-- 左侧文本内容 -->
        <n-grid-item>
          <n-space vertical :size="40">
            <!-- 标题区域 -->
            <n-space vertical :size="20">
              <h2 class="section-title">{{ $t('website.about.title') }}</h2>
              <div class="title-underline"></div>
            </n-space>

            <!-- 公司介绍 -->
            <n-space vertical :size="24">
              <p class="intro-highlight">
                {{ $t('website.about.intro_highlight') }}
              </p>
              <p class="intro-description">
                {{ $t('website.about.intro_description') }}
              </p>
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
              style="width: 100%; height: 400px; border-radius: 12px;"
            />

            <!-- 图片覆盖层信息 -->
            <n-card
              class="image-overlay-card"
              :bordered="false"
              style="position: absolute; bottom: 20px; left: 20px; right: 20px; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px);"
            >
              <n-space vertical :size="8">
                <h4 class="overlay-title">{{ $t('website.about.team_overlay_title') }}</h4>
                <p class="overlay-description">{{ $t('website.about.team_overlay_desc') }}</p>
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

/* 保留的内容样式 */
.intro-highlight {
  font-size: var(--sipumtech-font-size-h5);
  font-weight: var(--sipumtech-font-weight-semibold);
  color: var(--sipumtech-primary-blue);
  margin: 0;
  line-height: var(--sipumtech-line-height-relaxed);
}

.intro-description {
  font-size: var(--sipumtech-font-size-body);
  color: var(--sipumtech-text-secondary);
  margin: 0;
  line-height: var(--sipumtech-line-height-loose);
}

/*
 * 统计数据样式已移除 - 现在使用Naive UI的n-statistic组件
 * 自动处理数字显示、标签、悬停效果等
 */

/* 图片容器样式 */
.about-image-container {
  position: relative;
}

/* 覆盖层卡片内容样式 */
.overlay-title {
  font-size: 18px;
  font-weight: var(--sipumtech-font-weight-semibold);
  color: var(--sipumtech-primary-blue);
  margin: 0;
}

.overlay-description {
  font-size: var(--sipumtech-font-size-small);
  color: var(--sipumtech-text-secondary);
  margin: 0;
}

/*
 * 图片和覆盖层样式已移除 - 现在使用Naive UI组件
 * n-image组件处理图片显示和悬停效果
 * n-card组件处理覆盖层样式和动画
 */

/* 响应式设计 - 简化版，主要依赖Naive UI的响应式能力 */
@media (max-width: 1024px) {
  .section-title {
    font-size: 36px;
  }
}

@media (max-width: 768px) {
  .about-section {
    padding: 80px 0;
  }

  .section-container {
    padding: 0 20px;
  }

  .section-title {
    font-size: 32px;
  }

  .intro-highlight {
    font-size: 18px;
  }
}

@media (max-width: 480px) {
  .about-section {
    padding: 60px 0;
  }

  .section-container {
    padding: 0 16px;
  }

  .section-title {
    font-size: 28px;
  }

  .intro-highlight {
    font-size: 16px;
  }
}
</style>

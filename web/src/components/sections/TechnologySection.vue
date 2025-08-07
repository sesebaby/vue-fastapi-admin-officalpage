<template>
  <!-- 技术能力展示区域 - 使用Naive UI原生组件 -->
  <section id="technology" class="technology-section section-full">
    <div class="section-container">
      <!-- 标题区域 -->
      <n-space vertical align="center" :size="20" style="margin-bottom: 80px;">
        <h2 class="section-title">{{ $t('website.technology.title') }}</h2>
        <div class="title-underline"></div>
        <p class="section-subtitle">{{ $t('website.technology.subtitle') }}</p>
      </n-space>

      <!-- 技术内容区域 -->
      <n-space vertical :size="80">
        <!-- 技术概览区域 - 使用Naive UI Grid布局 -->
        <n-grid
          :cols="2"
          :x-gap="60"
          item-responsive
          responsive="screen"
          style="align-items: center;"
        >
          <!-- 左侧图片 -->
          <n-grid-item>
            <n-image
              src="/images/page4_business_scope_full.jpg"
              alt="业务范围"
              object-fit="cover"
              style="width: 100%; height: 400px; border-radius: 12px;"
            />
          </n-grid-item>

          <!-- 右侧技术描述 -->
          <n-grid-item>
            <n-space vertical :size="30">
              <n-space vertical :size="16">
                <h3 class="tech-overview-title">{{ $t('website.technology.overview_title') }}</h3>
                <p class="tech-overview-desc">{{ $t('website.technology.overview_description') }}</p>
              </n-space>

              <!-- 技术亮点 - 使用Naive UI Space和Avatar -->
              <n-space vertical :size="20">
                <n-space align="flex-start" :size="16">
                  <n-avatar
                    :size="40"
                    color="#f0f9ff"
                    style="background: #f0f9ff; color: #1e3a8a; font-size: 20px;"
                  >
                    🔬
                  </n-avatar>
                  <n-space vertical :size="4">
                    <h4 class="highlight-title">{{ $t('website.technology.highlight_1_title') }}</h4>
                    <p class="highlight-desc">{{ $t('website.technology.highlight_1_desc') }}</p>
                  </n-space>
                </n-space>

                <n-space align="flex-start" :size="16">
                  <n-avatar
                    :size="40"
                    color="#f0f9ff"
                    style="background: #f0f9ff; color: #1e3a8a; font-size: 20px;"
                  >
                    ⚡
                  </n-avatar>
                  <n-space vertical :size="4">
                    <h4 class="highlight-title">{{ $t('website.technology.highlight_2_title') }}</h4>
                    <p class="highlight-desc">{{ $t('website.technology.highlight_2_desc') }}</p>
                  </n-space>
                </n-space>

                <n-space align="flex-start" :size="16">
                  <n-avatar
                    :size="40"
                    color="#f0f9ff"
                    style="background: #f0f9ff; color: #1e3a8a; font-size: 20px;"
                  >
                    🎯
                  </n-avatar>
                  <n-space vertical :size="4">
                    <h4 class="highlight-title">{{ $t('website.technology.highlight_3_title') }}</h4>
                    <p class="highlight-desc">{{ $t('website.technology.highlight_3_desc') }}</p>
                  </n-space>
                </n-space>
              </n-space>
            </n-space>
          </n-grid-item>
        </n-grid>

        <!-- 技术能力卡片区域 - 使用Naive UI Grid -->
        <n-grid
          :cols="4"
          :x-gap="30"
          :y-gap="30"
          item-responsive
          responsive="screen"
        >
          <!-- 先进封装技术卡片 -->
          <n-grid-item>
            <n-card hoverable class="capability-card">
              <n-space vertical align="center" :size="20">
                <n-image
                  src="/images/icon_advanced_packaging.jpg"
                  :alt="$t('website.technology.capability_1_title')"
                  width="80"
                  height="80"
                  object-fit="cover"
                  style="border-radius: 8px;"
                />
                <n-space vertical align="center" :size="12">
                  <h4 class="capability-title">{{ $t('website.technology.capability_1_title') }}</h4>
                  <p class="capability-desc">{{ $t('website.technology.capability_1_desc') }}</p>
                </n-space>
              </n-space>
            </n-card>
          </n-grid-item>

          <!-- 硬件设计能力卡片 -->
          <n-grid-item>
            <n-card hoverable class="capability-card">
              <n-space vertical align="center" :size="20">
                <n-image
                  src="/images/icon_hardware_design.jpg"
                  :alt="$t('website.technology.capability_2_title')"
                  width="80"
                  height="80"
                  object-fit="cover"
                  style="border-radius: 8px;"
                />
                <n-space vertical align="center" :size="12">
                  <h4 class="capability-title">{{ $t('website.technology.capability_2_title') }}</h4>
                  <p class="capability-desc">{{ $t('website.technology.capability_2_desc') }}</p>
                </n-space>
              </n-space>
            </n-card>
          </n-grid-item>

          <!-- 测试验证服务卡片 -->
          <n-grid-item>
            <n-card hoverable class="capability-card">
              <n-space vertical align="center" :size="20">
                <n-image
                  src="/images/icon_ic_testing.jpg"
                  :alt="$t('website.technology.capability_3_title')"
                  width="80"
                  height="80"
                  object-fit="cover"
                  style="border-radius: 8px;"
                />
                <n-space vertical align="center" :size="12">
                  <h4 class="capability-title">{{ $t('website.technology.capability_3_title') }}</h4>
                  <p class="capability-desc">{{ $t('website.technology.capability_3_desc') }}</p>
                </n-space>
              </n-space>
            </n-card>
          </n-grid-item>

          <!-- 技术咨询服务卡片 -->
          <n-grid-item>
            <n-card hoverable class="capability-card">
              <n-space vertical align="center" :size="20">
                <n-image
                  src="/images/technical_chart_circuit.jpg"
                  :alt="$t('website.technology.capability_4_title')"
                  width="80"
                  height="80"
                  object-fit="cover"
                  style="border-radius: 8px;"
                />
                <n-space vertical align="center" :size="12">
                  <h4 class="capability-title">{{ $t('website.technology.capability_4_title') }}</h4>
                  <p class="capability-desc">{{ $t('website.technology.capability_4_desc') }}</p>
                </n-space>
              </n-space>
            </n-card>
          </n-grid-item>
        </n-grid>
      </n-space>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
/*
 * TechnologySection样式 - 使用Naive UI原生组件
 * 大部分样式已由n-card、n-grid、n-avatar、n-image等组件自动处理
 */

/* 技术能力展示区域 */
.technology-section {
  background: #f8f9fa;
  padding: 100px 0;
}

.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
}

/* 保留必要的品牌样式 */
.section-title {
  font-size: 42px;
  font-weight: bold;
  color: #1e3a8a;
  margin: 0;
  line-height: 1.2;
}

.title-underline {
  width: 80px;
  height: 4px;
  background: linear-gradient(45deg, #f59e0b, #d97706);
  border-radius: 2px;
}

.section-subtitle {
  font-size: 18px;
  color: #6b7280;
  margin: 0;
  line-height: 1.6;
}

/* 技术概览内容样式 */
.tech-overview-title {
  font-size: 28px;
  font-weight: bold;
  color: #1e3a8a;
  margin: 0;
}

.tech-overview-desc {
  font-size: 16px;
  color: #6b7280;
  line-height: 1.7;
  margin: 0;
}

/* 技术亮点样式 */
.highlight-title {
  font-size: 18px;
  font-weight: bold;
  color: #1f2937;
  margin: 0;
}

.highlight-desc {
  font-size: 14px;
  color: #6b7280;
  margin: 0;
  line-height: 1.5;
}

/* 技术能力卡片内容样式 */
.capability-title {
  font-size: 18px;
  font-weight: bold;
  color: #1e3a8a;
  margin: 0;
  text-align: center;
}

.capability-desc {
  font-size: 14px;
  color: #6b7280;
  margin: 0;
  line-height: 1.5;
  text-align: center;
}

/*
 * 技术概览和能力卡片样式已移除 - 现在使用Naive UI组件
 * n-grid组件处理布局，n-card组件处理卡片样式
 * n-image组件处理图片显示，n-avatar组件处理图标
 */

/* 响应式设计 - 简化版，主要依赖Naive UI的响应式能力 */
@media (max-width: 768px) {
  .technology-section {
    padding: 80px 0;
  }

  .section-container {
    padding: 0 20px;
  }

  .section-title {
    font-size: 32px;
  }
}


@media (max-width: 480px) {
  .technology-section {
    padding: 60px 0;
  }

  .section-container {
    padding: 0 16px;
  }

  .section-title {
    font-size: 28px;
  }

  .tech-overview-title {
    font-size: 20px;
  }
}
</style>

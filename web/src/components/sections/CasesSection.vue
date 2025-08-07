<template>
  <!-- 成功案例展示区域 - 使用Naive UI原生组件 -->
  <section id="cases" class="cases-section section-half">
    <div class="section-container">
      <!-- 标题区域 -->
      <n-space vertical align="center" :size="20" style="margin-bottom: 80px;">
        <h2 class="section-title">{{ $t('website.cases.title') }}</h2>
        <div class="title-underline"></div>
        <p class="section-subtitle">{{ $t('website.cases.subtitle') }}</p>
      </n-space>

      <!-- 案例内容区域 -->
      <n-space vertical :size="80">
        <!-- 服务概览区域 - 使用Naive UI Grid布局 -->
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
              src="/images/page5_service_coverage_full.jpg"
              alt="服务覆盖"
              object-fit="cover"
              style="width: 100%; height: 350px; border-radius: 12px;"
            />
          </n-grid-item>

          <!-- 右侧描述 -->
          <n-grid-item>
            <n-space vertical :size="20">
              <h3 class="overview-title">{{ $t('website.cases.overview_title') }}</h3>
              <p class="overview-desc">{{ $t('website.cases.overview_description') }}</p>
            </n-space>
          </n-grid-item>
        </n-grid>

        <!-- 行业领域卡片 - 使用Naive UI Grid -->
        <n-grid
          :cols="5"
          :x-gap="24"
          :y-gap="24"
          item-responsive
          responsive="screen"
        >
          <!-- 通信设备 -->
          <n-grid-item>
            <n-card hoverable class="sector-card">
              <n-space vertical align="center" :size="16">
                <n-avatar
                  :size="50"
                  color="#f0f9ff"
                  style="background: #f0f9ff; color: #1e3a8a; font-size: 24px;"
                >
                  📡
                </n-avatar>
                <n-space vertical align="center" :size="8">
                  <h4 class="sector-title">{{ $t('website.cases.sector_1_title') }}</h4>
                  <p class="sector-desc">{{ $t('website.cases.sector_1_desc') }}</p>
                </n-space>
              </n-space>
            </n-card>
          </n-grid-item>

          <!-- 消费电子 -->
          <n-grid-item>
            <n-card hoverable class="sector-card">
              <n-space vertical align="center" :size="16">
                <n-avatar
                  :size="50"
                  color="#f0f9ff"
                  style="background: #f0f9ff; color: #1e3a8a; font-size: 24px;"
                >
                  🏫
                </n-avatar>
                <n-space vertical align="center" :size="8">
                  <h4 class="sector-title">{{ $t('website.cases.sector_2_title') }}</h4>
                  <p class="sector-desc">{{ $t('website.cases.sector_2_desc') }}</p>
                </n-space>
              </n-space>
            </n-card>
          </n-grid-item>

          <!-- 工业控制 -->
          <n-grid-item>
            <n-card hoverable class="sector-card">
              <n-space vertical align="center" :size="16">
                <n-avatar
                  :size="50"
                  color="#f0f9ff"
                  style="background: #f0f9ff; color: #1e3a8a; font-size: 24px;"
                >
                  🏭
                </n-avatar>
                <n-space vertical align="center" :size="8">
                  <h4 class="sector-title">{{ $t('website.cases.sector_3_title') }}</h4>
                  <p class="sector-desc">{{ $t('website.cases.sector_3_desc') }}</p>
                </n-space>
              </n-space>
            </n-card>
          </n-grid-item>

          <!-- 医疗设备 -->
          <n-grid-item>
            <n-card hoverable class="sector-card">
              <n-space vertical align="center" :size="16">
                <n-avatar
                  :size="50"
                  color="#f0f9ff"
                  style="background: #f0f9ff; color: #1e3a8a; font-size: 24px;"
                >
                  🏥
                </n-avatar>
                <n-space vertical align="center" :size="8">
                  <h4 class="sector-title">{{ $t('website.cases.sector_4_title') }}</h4>
                  <p class="sector-desc">{{ $t('website.cases.sector_4_desc') }}</p>
                </n-space>
              </n-space>
            </n-card>
          </n-grid-item>

          <!-- 汽车电子 -->
          <n-grid-item>
            <n-card hoverable class="sector-card">
              <n-space vertical align="center" :size="16">
                <n-avatar
                  :size="50"
                  color="#f0f9ff"
                  style="background: #f0f9ff; color: #1e3a8a; font-size: 24px;"
                >
                  🎓
                </n-avatar>
                <n-space vertical align="center" :size="8">
                  <h4 class="sector-title">{{ $t('website.cases.sector_5_title') }}</h4>
                  <p class="sector-desc">{{ $t('website.cases.sector_5_desc') }}</p>
                </n-space>
              </n-space>
            </n-card>
          </n-grid-item>
        </n-grid>

        <!-- 服务流程区域 -->
        <n-space vertical align="center" :size="30">
          <h3 class="process-title">{{ $t('website.cases.process_title') }}</h3>
          <n-image
            src="/images/page6_design_process_full.jpg"
            :alt="$t('website.cases.process_title')"
            object-fit="contain"
            style="width: 100%; max-width: 800px; height: auto; border-radius: 12px;"
          />
        </n-space>
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
 * CasesSection样式 - 使用Naive UI原生组件
 * 大部分样式已由n-card、n-grid、n-avatar、n-image等组件自动处理
 */

/* 成功案例区域 */
.cases-section {
  background: #ffffff;
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

/* 服务概览内容样式 */
.overview-title {
  font-size: 28px;
  font-weight: bold;
  color: #1e3a8a;
  margin: 0;
}

.overview-desc {
  font-size: 16px;
  color: #6b7280;
  line-height: 1.7;
  margin: 0;
}

/* 行业领域卡片内容样式 */
.sector-title {
  font-size: 16px;
  font-weight: bold;
  color: #1e3a8a;
  margin: 0;
  text-align: center;
}

.sector-desc {
  font-size: 14px;
  color: #6b7280;
  margin: 0;
  line-height: 1.5;
  text-align: center;
}

/* 服务流程标题样式 */
.process-title {
  font-size: 24px;
  font-weight: bold;
  color: #1e3a8a;
  margin: 0;
}

/*
 * 案例概览和行业卡片样式已移除 - 现在使用Naive UI组件
 * n-grid组件处理布局，n-card组件处理卡片样式
 * n-image组件处理图片显示，n-avatar组件处理图标
 */

/* 响应式设计 - 简化版，主要依赖Naive UI的响应式能力 */
@media (max-width: 768px) {
  .cases-section {
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
  .cases-section {
    padding: 60px 0;
  }

  .section-container {
    padding: 0 16px;
  }

  .section-title {
    font-size: 28px;
  }

  .overview-title {
    font-size: 20px;
  }

  .process-title {
    font-size: 20px;
  }
}
</style>

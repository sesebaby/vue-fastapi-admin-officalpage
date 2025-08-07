<template>
  <!-- 企业实力数据展示组件 - 使用Naive UI原生组件 -->
  <n-card class="stats-card">
    <n-space vertical :size="30">
      <!-- 标题 -->
      <n-space vertical align="center" :size="12">
        <h3 class="stats-title">{{ title || $t('website.stats.title') }}</h3>
        <div class="title-underline"></div>
      </n-space>

      <!-- 统计数据网格 -->
      <n-grid :cols="gridCols" :x-gap="24" :y-gap="24">
        <!-- 成立年份 -->
        <n-grid-item>
          <n-statistic
            :label="$t('website.stats.founded_year')"
            :value="2019"
            :value-style="statisticStyle"
          >
            <template #suffix>
              <span class="stat-suffix">{{ $t('website.stats.year') }}</span>
            </template>
          </n-statistic>
        </n-grid-item>

        <!-- 服务客户数 -->
        <n-grid-item>
          <n-statistic
            :label="$t('website.stats.clients_served')"
            value="100+"
            :value-style="statisticStyle"
          />
        </n-grid-item>

        <!-- 完成项目数 -->
        <n-grid-item>
          <n-statistic
            :label="$t('website.stats.projects_completed')"
            value="200+"
            :value-style="statisticStyle"
          />
        </n-grid-item>

        <!-- 团队规模 -->
        <n-grid-item>
          <n-statistic
            :label="$t('website.stats.team_size')"
            value="15+"
            :value-style="statisticStyle"
          >
            <template #suffix>
              <span class="stat-suffix">{{ $t('website.stats.people') }}</span>
            </template>
          </n-statistic>
        </n-grid-item>

        <!-- 技术专利 -->
        <n-grid-item>
          <n-statistic
            :label="$t('website.stats.patents')"
            value="5+"
            :value-style="statisticStyle"
          >
            <template #suffix>
              <span class="stat-suffix">{{ $t('website.stats.items') }}</span>
            </template>
          </n-statistic>
        </n-grid-item>

        <!-- 行业经验 -->
        <n-grid-item>
          <n-statistic
            :label="$t('website.stats.industry_experience')"
            value="5+"
            :value-style="statisticStyle"
          >
            <template #suffix>
              <span class="stat-suffix">{{ $t('website.stats.years') }}</span>
            </template>
          </n-statistic>
        </n-grid-item>
      </n-grid>

      <!-- 认证标识 -->
      <n-space justify="center" :size="20">
        <n-tooltip trigger="hover">
          <template #trigger>
            <n-image
              :src="getImagePath('certificates', 'iso9001')"
              :fallback-src="PLACEHOLDER_IMAGES.certificate"
              alt="ISO9001认证"
              width="60"
              height="60"
              object-fit="contain"
              class="cert-badge"
            />
          </template>
          {{ $t('website.stats.iso_certification') }}
        </n-tooltip>

        <n-tooltip trigger="hover">
          <template #trigger>
            <n-image
              :src="getImagePath('certificates', 'military')"
              :fallback-src="PLACEHOLDER_IMAGES.certificate"
              alt="军工认证"
              width="60"
              height="60"
              object-fit="contain"
              class="cert-badge"
            />
          </template>
          {{ $t('website.stats.military_certification') }}
        </n-tooltip>
      </n-space>
    </n-space>
  </n-card>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useBreakpoints } from '@vueuse/core'
import { getImagePath, PLACEHOLDER_IMAGES } from '@/utils/imageUtils'

const props = defineProps({
  title: {
    type: String,
    default: ''
  }
})

const { t } = useI18n()

// 响应式栅格列数
const breakpoints = useBreakpoints({
  sm: 768,
  md: 1024,
  lg: 1200
})

const gridCols = computed(() => {
  if (breakpoints.lg.value) return 3  // 大屏幕：3列
  if (breakpoints.md.value) return 2  // 中等屏幕：2列
  if (breakpoints.sm.value) return 2  // 平板：2列
  return 1  // 移动端：1列
})

// 统计数字样式
const statisticStyle = computed(() => ({
  fontSize: '32px',
  fontWeight: 'bold',
  color: 'var(--sipumtech-primary-blue)'
}))
</script>

<style scoped>
/*
 * 企业实力数据展示组件样式 - 使用设计系统变量
 */

.stats-card {
  background: var(--sipumtech-bg-white);
  border: 1px solid var(--sipumtech-border-color);
}

.stats-title {
  font-size: var(--sipumtech-font-size-h3);
  font-weight: var(--sipumtech-font-weight-bold);
  color: var(--sipumtech-primary-blue);
  margin: 0;
  text-align: center;
}

.title-underline {
  width: 60px;
  height: 3px;
  background: var(--sipumtech-accent-green);
  border-radius: var(--sipumtech-radius-sm);
}

.stat-suffix {
  font-size: 16px;
  color: var(--sipumtech-text-secondary);
  margin-left: 4px;
}

.cert-badge {
  border-radius: var(--sipumtech-radius-md);
  transition: var(--sipumtech-transition-normal);
  cursor: pointer;
}

.cert-badge:hover {
  transform: scale(1.1);
  box-shadow: var(--sipumtech-shadow-md);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .stats-title {
    font-size: var(--sipumtech-font-size-h4);
  }
  
  .cert-badge {
    width: 50px !important;
    height: 50px !important;
  }
}
</style>

<template>
  <div class="trust-section" :class="{ compact }">
    <div class="trust-container">
      <div v-if="showTitle" class="trust-header">
        <h3 class="trust-main-title">{{ $t('website.hero.value_tech') }} · {{ $t('website.hero.value_speed') }} · {{ $t('website.hero.value_quality') }}</h3>
      </div>
      
      <n-grid :cols="gridCols" :x-gap="16" :y-gap="12" class="trust-grid">
        <n-grid-item>
          <TrustBadge
            type="iso"
            :title="$t('website.hero.trust_iso')"
            :description="isoDescription"
            :compact="compact"
          />
        </n-grid-item>
        
        <n-grid-item>
          <TrustBadge
            type="military"
            :title="$t('website.hero.trust_military')"
            :description="militaryDescription"
            :compact="compact"
          />
        </n-grid-item>
        
        <n-grid-item>
          <TrustBadge
            type="experience"
            :title="$t('website.hero.trust_experience')"
            :description="experienceDescription"
            :compact="compact"
          />
        </n-grid-item>
      </n-grid>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useBreakpoints } from '@vueuse/core'
import TrustBadge from './TrustBadge.vue'

const props = defineProps({
  compact: {
    type: Boolean,
    default: false
  },
  showTitle: {
    type: Boolean,
    default: true
  }
})

const { locale } = useI18n()

// 响应式栅格列数
const breakpoints = useBreakpoints({
  sm: 768,
  md: 1024,
})

const gridCols = computed(() => {
  if (breakpoints.md.value) return 3  // 桌面端：3列
  if (breakpoints.sm.value) return 3  // 平板端：3列
  return 1  // 移动端：1列
})

// 描述文本
const isoDescription = computed(() => 
  locale.value === 'cn' ? '国际质量管理体系认证' : 'International Quality Management System'
)

const militaryDescription = computed(() => 
  locale.value === 'cn' ? '武器装备质量管理体系' : 'Military Equipment Quality Management'
)

const experienceDescription = computed(() => 
  locale.value === 'cn' ? '专业封装设计经验' : 'Professional Packaging Design Experience'
)
</script>

<style scoped>
.trust-section {
  padding: 32px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border-top: 1px solid var(--n-border-color);
  border-bottom: 1px solid var(--n-border-color);
}

.trust-section.compact {
  padding: 24px 0;
}

.trust-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
}

.trust-header {
  text-align: center;
  margin-bottom: 24px;
}

.trust-main-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--n-text-color-base);
  margin: 0;
  letter-spacing: 0.5px;
}

.trust-grid {
  max-width: 800px;
  margin: 0 auto;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .trust-container {
    padding: 0 20px;
  }
  
  .trust-main-title {
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  .trust-section {
    padding: 24px 0;
  }
  
  .trust-container {
    padding: 0 16px;
  }
  
  .trust-header {
    margin-bottom: 20px;
  }
  
  .trust-main-title {
    font-size: 15px;
  }
  
  .trust-grid {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .trust-section {
    padding: 20px 0;
  }
  
  .trust-main-title {
    font-size: 14px;
    line-height: 1.5;
  }
}
</style>

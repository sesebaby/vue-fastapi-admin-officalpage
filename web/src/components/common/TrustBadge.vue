<template>
  <div class="trust-badge" :class="[`trust-badge--${type}`, { compact }]">
    <div class="trust-icon">
      <component :is="iconComponent" />
    </div>
    <div class="trust-content">
      <div class="trust-title">{{ title }}</div>
      <div v-if="description" class="trust-description">{{ description }}</div>
    </div>
  </div>
</template>

<script setup>
import { computed, h } from 'vue'

const props = defineProps({
  type: {
    type: String,
    required: true,
    validator: (value) => ['iso', 'military', 'experience'].includes(value)
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  compact: {
    type: Boolean,
    default: false
  }
})

// 图标组件映射
const iconComponent = computed(() => {
  const icons = {
    iso: () => h('svg', {
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2'
    }, [
      h('path', { d: 'M9 12l2 2 4-4' }),
      h('path', { d: 'M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z' })
    ]),
    military: () => h('svg', {
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2'
    }, [
      h('path', { d: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' })
    ]),
    experience: () => h('svg', {
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2'
    }, [
      h('circle', { cx: '12', cy: '12', r: '10' }),
      h('polyline', { points: '12,6 12,12 16,14' })
    ])
  }
  return icons[props.type]
})
</script>

<style scoped>
.trust-badge {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background: var(--n-color-base);
  border: 1px solid var(--n-border-color);
  border-radius: var(--n-border-radius);
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.trust-badge:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  border-color: var(--n-color-primary);
}

.trust-badge.compact {
  padding: 12px 16px;
  gap: 8px;
}

.trust-icon {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.trust-badge--iso .trust-icon {
  background: rgba(34, 197, 94, 0.1);
  color: #22c55e;
}

.trust-badge--military .trust-icon {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
}

.trust-badge--experience .trust-icon {
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
}

.trust-icon svg {
  width: 20px;
  height: 20px;
}

.trust-content {
  flex: 1;
  min-width: 0;
}

.trust-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--n-text-color-base);
  line-height: 1.4;
}

.trust-description {
  font-size: 12px;
  color: var(--n-text-color-2);
  line-height: 1.3;
  margin-top: 2px;
}

.trust-badge.compact .trust-icon {
  width: 24px;
  height: 24px;
}

.trust-badge.compact .trust-icon svg {
  width: 16px;
  height: 16px;
}

.trust-badge.compact .trust-title {
  font-size: 13px;
}

.trust-badge.compact .trust-description {
  font-size: 11px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .trust-badge {
    padding: 12px 16px;
    gap: 10px;
  }
  
  .trust-icon {
    width: 28px;
    height: 28px;
  }
  
  .trust-icon svg {
    width: 18px;
    height: 18px;
  }
  
  .trust-title {
    font-size: 13px;
  }
  
  .trust-description {
    font-size: 11px;
  }
}
</style>

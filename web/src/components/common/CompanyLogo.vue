<template>
  <div class="company-logo" :class="{ compact }">
    <img 
      :src="logoSrc" 
      :alt="companyName" 
      class="logo-img"
      :class="{ 'logo-small': compact }"
      loading="lazy"
    >
    <div v-if="!hideInfo" class="company-info">
      <h1 class="company-name" :class="{ 'name-small': compact }">
        {{ companyName }}
      </h1>
      <p v-if="!hideSubtitle" class="company-subtitle" :class="{ 'subtitle-small': compact }">
        {{ companySubtitle }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  logoSrc: {
    type: String,
    default: '/images/company_logo_watermark.jpg'
  },
  compact: {
    type: Boolean,
    default: false
  },
  hideInfo: {
    type: Boolean,
    default: false
  },
  hideSubtitle: {
    type: Boolean,
    default: false
  }
})

const { locale } = useI18n()

const companyName = computed(() => 'SIPUMTECH')
const companySubtitle = computed(() => 
  locale.value === 'cn' 
    ? '苏州思普微电子科技有限公司' 
    : 'Suzhou SIPUMTECH Electronic Technology Co., Ltd.'
)
</script>

<style scoped>
.company-logo {
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s ease;
}

.company-logo.compact {
  gap: 12px;
}

.logo-img {
  width: 60px;
  height: 60px;
  object-fit: contain;
  transition: all 0.3s ease;
}

.logo-img.logo-small {
  width: 40px;
  height: 40px;
}

.company-info {
  display: flex;
  flex-direction: column;
}

.company-name {
  font-size: 28px;
  font-weight: bold;
  color: var(--n-color-primary);
  margin: 0;
  line-height: 1.2;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

.company-name.name-small {
  font-size: 20px;
}

.company-subtitle {
  font-size: 13px;
  color: var(--n-text-color-2);
  margin: 0;
  line-height: 1.2;
  font-weight: 400;
  transition: all 0.3s ease;
}

.company-subtitle.subtitle-small {
  font-size: 11px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .company-name {
    font-size: 18px;
  }
  
  .company-subtitle {
    font-size: 10px;
  }
}

@media (max-width: 480px) {
  .company-logo {
    gap: 8px;
  }
  
  .logo-img {
    width: 40px;
    height: 40px;
  }
  
  .company-name {
    font-size: 16px;
  }
  
  .company-subtitle {
    display: none;
  }
}
</style>

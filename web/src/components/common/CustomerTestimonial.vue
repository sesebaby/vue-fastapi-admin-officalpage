<template>
  <!-- 客户证言组件 - 使用Naive UI原生组件 -->
  <n-card hoverable class="testimonial-card">
    <n-space vertical :size="20">
      <!-- 引用图标 -->
      <n-space justify="center">
        <n-icon :size="32" color="var(--sipumtech-accent-green)">
          <svg viewBox="0 0 24 24">
            <path fill="currentColor" d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
          </svg>
        </n-icon>
      </n-space>

      <!-- 证言内容 -->
      <n-blockquote class="testimonial-quote">
        {{ quote }}
      </n-blockquote>

      <!-- 客户信息 -->
      <n-space align="center" :size="16">
        <!-- 客户头像 -->
        <n-avatar
          :size="50"
          :src="avatar"
          :fallback-src="'/images/default-avatar.png'"
          round
        />
        
        <!-- 客户详情 -->
        <n-space vertical :size="4">
          <h4 class="customer-name">{{ customerName }}</h4>
          <p class="customer-title">{{ customerTitle }}</p>
          <p class="company-name">{{ companyName }}</p>
        </n-space>
      </n-space>

      <!-- 合作项目标签 -->
      <n-space v-if="projectTags && projectTags.length" :size="8">
        <n-tag
          v-for="tag in projectTags"
          :key="tag"
          type="info"
          size="small"
          round
        >
          {{ tag }}
        </n-tag>
      </n-space>

      <!-- 评分 -->
      <n-space v-if="rating" justify="center">
        <n-rate
          :value="rating"
          readonly
          :size="16"
          color="var(--sipumtech-trust-gold)"
        />
      </n-space>
    </n-space>
  </n-card>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  // 证言内容
  quote: {
    type: String,
    required: true
  },
  // 客户姓名
  customerName: {
    type: String,
    required: true
  },
  // 客户职位
  customerTitle: {
    type: String,
    default: ''
  },
  // 公司名称
  companyName: {
    type: String,
    required: true
  },
  // 客户头像
  avatar: {
    type: String,
    default: ''
  },
  // 合作项目标签
  projectTags: {
    type: Array,
    default: () => []
  },
  // 评分 (1-5)
  rating: {
    type: Number,
    default: 5,
    validator: (value) => value >= 1 && value <= 5
  }
})
</script>

<style scoped>
/*
 * 客户证言组件样式 - 使用设计系统变量
 */

.testimonial-card {
  border: 1px solid var(--sipumtech-border-color);
  transition: var(--sipumtech-transition-normal);
}

.testimonial-card:hover {
  border-color: var(--sipumtech-accent-green);
  box-shadow: var(--sipumtech-shadow-brand);
}

.testimonial-quote {
  font-size: var(--sipumtech-font-size-body);
  line-height: var(--sipumtech-line-height-relaxed);
  color: var(--sipumtech-text-primary);
  font-style: italic;
  text-align: center;
  margin: 0;
  padding: 0;
}

.customer-name {
  font-size: var(--sipumtech-font-size-body);
  font-weight: var(--sipumtech-font-weight-semibold);
  color: var(--sipumtech-primary-blue);
  margin: 0;
}

.customer-title {
  font-size: var(--sipumtech-font-size-small);
  color: var(--sipumtech-text-secondary);
  margin: 0;
}

.company-name {
  font-size: var(--sipumtech-font-size-small);
  font-weight: var(--sipumtech-font-weight-medium);
  color: var(--sipumtech-accent-green);
  margin: 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .testimonial-quote {
    font-size: var(--sipumtech-font-size-small);
  }
  
  .customer-name {
    font-size: var(--sipumtech-font-size-small);
  }
  
  .customer-title,
  .company-name {
    font-size: var(--sipumtech-font-size-xs);
  }
}
</style>

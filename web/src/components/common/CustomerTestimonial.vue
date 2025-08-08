<template>
  <!-- 伙伴感言组件 - 使用Naive UI原生组件 + 毛玻璃效果 -->
  <div class="testimonial-wrapper">
    <n-card hoverable class="testimonial-card">
      <n-space vertical :size="20">
        <!-- 引用图标 -->
        <n-space justify="center">
          <div class="quote-icon-wrapper">
            <n-icon :size="32" color="var(--sipumtech-accent-green)">
              <svg viewBox="0 0 24 24">
                <path fill="currentColor" d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
              </svg>
            </n-icon>
          </div>
        </n-space>

        <!-- 证言内容 -->
        <n-blockquote class="testimonial-quote">
          {{ quote }}
        </n-blockquote>

        <!-- 客户信息 -->
        <n-space align="center" :size="16">
          <!-- 客户头像 -->
          <div class="avatar-wrapper">
            <n-avatar
              :size="50"
              :src="avatar"
              :fallback-src="'/images/default-avatar.png'"
              round
            />
          </div>

          <!-- 客户详情 -->
          <n-space vertical :size="4">
            <h4 class="customer-name">{{ customerName }}</h4>
            <p class="customer-title">{{ customerTitle }}</p>
            <p class="company-name">{{ companyName }}</p>
          </n-space>
        </n-space>

        <!-- 合作项目标签 -->
        <n-space v-if="projectTags && projectTags.length" :size="8" justify="center">
          <n-tag
            v-for="tag in projectTags"
            :key="tag"
            type="info"
            size="small"
            round
            class="project-tag"
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
  </div>
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
 * 伙伴感言组件样式 - 毛玻璃效果 + 现代化设计
 */

.testimonial-wrapper {
  position: relative;
  padding: 4px;
  border-radius: 20px;
  background: linear-gradient(135deg,
    rgba(0, 212, 170, 0.1) 0%,
    rgba(30, 58, 138, 0.1) 50%,
    rgba(245, 158, 11, 0.1) 100%
  );
}

.testimonial-card {
  position: relative;
  border: none;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.1),
    0 4px 16px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.testimonial-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg,
    rgba(0, 212, 170, 0.02) 0%,
    rgba(30, 58, 138, 0.02) 50%,
    rgba(245, 158, 11, 0.02) 100%
  );
  pointer-events: none;
  z-index: 0;
}

.testimonial-card > * {
  position: relative;
  z-index: 1;
}

.testimonial-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.15),
    0 8px 24px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(0, 212, 170, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.quote-icon-wrapper {
  padding: 12px;
  border-radius: 50%;
  background: rgba(0, 212, 170, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 12px rgba(0, 212, 170, 0.2);
}

.testimonial-quote {
  font-size: var(--sipumtech-font-size-body);
  line-height: var(--sipumtech-line-height-relaxed);
  color: var(--sipumtech-text-primary);
  font-style: italic;
  text-align: center;
  margin: 0;
  padding: 0;
  position: relative;
}

.testimonial-quote::before,
.testimonial-quote::after {
  content: '"';
  font-size: 2em;
  color: var(--sipumtech-accent-green);
  opacity: 0.3;
  position: absolute;
  font-family: serif;
}

.testimonial-quote::before {
  top: -10px;
  left: -10px;
}

.testimonial-quote::after {
  bottom: -20px;
  right: -10px;
}

.avatar-wrapper {
  position: relative;
}

.avatar-wrapper::after {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  border-radius: 50%;
  background: linear-gradient(135deg,
    var(--sipumtech-accent-green),
    var(--sipumtech-primary-blue)
  );
  z-index: -1;
  opacity: 0.6;
}

.customer-name {
  font-size: var(--sipumtech-font-size-body);
  font-weight: var(--sipumtech-font-weight-semibold);
  color: var(--sipumtech-primary-blue);
  margin: 0;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
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

.project-tag {
  background: rgba(0, 212, 170, 0.1) !important;
  border: 1px solid rgba(0, 212, 170, 0.2) !important;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.project-tag:hover {
  background: rgba(0, 212, 170, 0.2) !important;
  transform: scale(1.05);
}

/* 暗色模式适配 */
@media (prefers-color-scheme: dark) {
  .testimonial-card {
    background: rgba(30, 30, 30, 0.85);
    box-shadow:
      0 8px 32px rgba(0, 0, 0, 0.3),
      0 4px 16px rgba(0, 0, 0, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }

  .testimonial-card:hover {
    box-shadow:
      0 20px 40px rgba(0, 0, 0, 0.4),
      0 8px 24px rgba(0, 0, 0, 0.3),
      0 0 0 1px rgba(0, 212, 170, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .testimonial-wrapper {
    padding: 2px;
    border-radius: 16px;
  }

  .testimonial-card {
    border-radius: 12px;
  }

  .testimonial-card:hover {
    transform: translateY(-4px) scale(1.01);
  }

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

  .quote-icon-wrapper {
    padding: 8px;
  }
}

/* 动画效果 */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
}

.testimonial-card:hover .quote-icon-wrapper {
  animation: float 2s ease-in-out infinite;
}
</style>

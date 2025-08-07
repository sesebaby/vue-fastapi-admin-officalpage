<template>
  <!-- 联系我们区域 - 使用Naive UI原生组件 -->
  <section id="contact" class="contact-section section-half">
    <div class="section-container">
      <!-- 标题区域 -->
      <n-space vertical align="center" :size="20" style="margin-bottom: 80px;">
        <h2 class="section-title">{{ $t('website.contact.title') }}</h2>
        <div class="title-underline"></div>
        <p class="section-subtitle">{{ $t('website.contact.subtitle') }}</p>
      </n-space>

      <!-- 联系内容区域 - 使用Naive UI Grid布局 -->
      <n-grid
        :cols="3"
        :x-gap="60"
        :y-gap="30"
        item-responsive
        responsive="screen"
      >
        <!-- 联系信息卡片 -->
        <n-grid-item :span="2">
          <n-space vertical :size="30">
            <!-- 地址信息卡片 -->
            <n-card hoverable class="contact-card">
              <n-space align="flex-start" :size="20">
                <n-avatar
                  :size="50"
                  color="#f0f9ff"
                  style="background: #f0f9ff; color: #1e3a8a; font-size: 24px;"
                >
                  📍
                </n-avatar>
                <n-space vertical :size="8">
                  <h4 class="contact-title">{{ $t('website.contact.address_title') }}</h4>
                  <p class="contact-text">{{ $t('website.contact.address') }}</p>
                </n-space>
              </n-space>
            </n-card>

            <!-- 电话信息卡片 -->
            <n-card hoverable class="contact-card">
              <n-space align="flex-start" :size="20">
                <n-avatar
                  :size="50"
                  color="#f0f9ff"
                  style="background: #f0f9ff; color: #1e3a8a; font-size: 24px;"
                >
                  📞
                </n-avatar>
                <n-space vertical :size="8">
                  <h4 class="contact-title">{{ $t('website.contact.phone_title') }}</h4>
                  <p class="contact-text">{{ $t('website.contact.phone') }}</p>
                </n-space>
              </n-space>
            </n-card>

            <!-- 邮箱信息卡片 -->
            <n-card hoverable class="contact-card">
              <n-space align="flex-start" :size="20">
                <n-avatar
                  :size="50"
                  color="#f0f9ff"
                  style="background: #f0f9ff; color: #1e3a8a; font-size: 24px;"
                >
                  📧
                </n-avatar>
                <n-space vertical :size="8">
                  <h4 class="contact-title">{{ $t('website.contact.email_title') }}</h4>
                  <p class="contact-text">wenqiang.chang@sipumtech.com</p>
                </n-space>
              </n-space>
            </n-card>
          </n-space>
        </n-grid-item>

        <!-- 资质认证区域 -->
        <n-grid-item :span="1">
          <n-card class="certification-card">
            <n-space vertical :size="20">
              <h4 class="certification-title">{{ $t('website.contact.certification_title') }}</h4>
              <n-space vertical :size="16">
                <n-image
                  src="/images/ISO9001质量管理体系认证证书.png"
                  alt="ISO9001认证"
                  object-fit="contain"
                  style="width: 100%; height: 120px; border-radius: 8px;"
                />
                <n-image
                  src="/images/武器装备质量管理体系证书.png"
                  alt="军工认证"
                  object-fit="contain"
                  style="width: 100%; height: 120px; border-radius: 8px;"
                />
              </n-space>
            </n-space>
          </n-card>
        </n-grid-item>
      </n-grid>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
/*
 * ContactSection样式 - 使用Naive UI原生组件
 * 大部分样式已由n-card、n-grid、n-avatar、n-image等组件自动处理
 */

/* 联系我们区域 */
.contact-section {
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
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

/* 联系信息卡片内容样式 */
.contact-title {
  font-size: 18px;
  font-weight: 600;
  color: #1e3a8a;
  margin: 0;
}

.contact-text {
  font-size: 16px;
  color: #6b7280;
  margin: 0;
  line-height: 1.6;
}

/* 资质认证区域样式 */
.certification-title {
  font-size: 18px;
  font-weight: 600;
  color: #1e3a8a;
  margin: 0;
  text-align: center;
}

/*
 * 联系卡片和图标样式已移除 - 现在使用Naive UI组件
 * n-card组件处理卡片样式和悬停效果
 * n-avatar组件处理图标样式
 * n-image组件处理认证图片显示
 */

/* 响应式设计 - 简化版，主要依赖Naive UI的响应式能力 */
@media (max-width: 1024px) {
  .section-title {
    font-size: 36px;
  }
}

@media (max-width: 768px) {
  .contact-section {
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
  .contact-section {
    padding: 60px 0;
  }

  .section-container {
    padding: 0 16px;
  }

  .section-title {
    font-size: 28px;
  }
}
</style>

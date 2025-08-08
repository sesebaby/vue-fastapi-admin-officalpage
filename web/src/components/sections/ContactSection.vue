<template>
  <!-- 联系我们区域 - 使用Naive UI原生组件 -->
  <section id="contact" class="contact-section section-half">
    <div class="section-container">
      <!-- 标题区域 -->
      <n-space vertical align="center" :size="20" style="margin-bottom: 80px;">
        <n-text
          :style="{
            fontSize: 'var(--sipumtech-font-size-h1)',
            fontWeight: 'var(--sipumtech-font-weight-bold)',
            color: 'var(--sipumtech-primary-blue)',
            lineHeight: 'var(--sipumtech-line-height-tight)'
          }"
        >
          {{ $t('website.contact.title') }}
        </n-text>
        <div class="title-underline"></div>
        <n-text
          :style="{
            fontSize: '18px',
            color: 'var(--sipumtech-text-secondary)',
            lineHeight: 'var(--sipumtech-line-height-relaxed)'
          }"
        >
          {{ $t('website.contact.subtitle') }}
        </n-text>
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
                  <n-text
                    :style="{
                      fontSize: '18px',
                      fontWeight: 'var(--sipumtech-font-weight-semibold)',
                      color: 'var(--sipumtech-primary-blue)'
                    }"
                  >
                    {{ $t('website.contact.address_title') }}
                  </n-text>
                  <n-text
                    :style="{
                      fontSize: 'var(--sipumtech-font-size-body)',
                      color: 'var(--sipumtech-text-secondary)',
                      lineHeight: 'var(--sipumtech-line-height-relaxed)'
                    }"
                  >
                    {{ $t('website.contact.address') }}
                  </n-text>
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
                  <n-text
                    :style="{
                      fontSize: '18px',
                      fontWeight: 'var(--sipumtech-font-weight-semibold)',
                      color: 'var(--sipumtech-primary-blue)'
                    }"
                  >
                    {{ $t('website.contact.phone_title') }}
                  </n-text>
                  <n-text
                    :style="{
                      fontSize: 'var(--sipumtech-font-size-body)',
                      color: 'var(--sipumtech-text-secondary)',
                      lineHeight: 'var(--sipumtech-line-height-relaxed)'
                    }"
                  >
                    {{ $t('website.contact.phone') }}
                  </n-text>
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
                  <n-text
                    :style="{
                      fontSize: '18px',
                      fontWeight: 'var(--sipumtech-font-weight-semibold)',
                      color: 'var(--sipumtech-primary-blue)'
                    }"
                  >
                    {{ $t('website.contact.email_title') }}
                  </n-text>
                  <n-text
                    :style="{
                      fontSize: 'var(--sipumtech-font-size-body)',
                      color: 'var(--sipumtech-text-secondary)',
                      lineHeight: 'var(--sipumtech-line-height-relaxed)'
                    }"
                  >
                    wenqiang.chang@sipumtech.com
                  </n-text>
                </n-space>
              </n-space>
            </n-card>
          </n-space>
        </n-grid-item>

        <!-- 资质认证区域 -->
        <n-grid-item :span="1">
          <n-card class="certification-card">
            <n-space vertical :size="20">
              <n-text
                :style="{
                  fontSize: '18px',
                  fontWeight: 'var(--sipumtech-font-weight-semibold)',
                  color: 'var(--sipumtech-primary-blue)'
                }"
              >
                {{ $t('website.contact.certification_title') }}
              </n-text>
              <n-space vertical :size="16">
                <n-image
                  src="/images/ISO9001质量管理体系认证证书.png"
                  alt="ISO9001认证"
                  object-fit="contain"
                  class="certification-image"
                />
                <n-image
                  src="/images/武器装备质量管理体系证书.png"
                  alt="军工认证"
                  object-fit="contain"
                  class="certification-image"
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
  background: var(--sipumtech-bg-gradient-1);
  padding: var(--sipumtech-section-padding-desktop);
}

.section-container {
  max-width: var(--sipumtech-container-max-width);
  margin: 0 auto;
  padding: 0 var(--sipumtech-container-padding-desktop);
}

/* 保留必要的品牌装饰样式 */
.title-underline {
  width: 80px;
  height: 4px;
  background: linear-gradient(45deg, var(--sipumtech-accent-orange), #d97706);
  border-radius: var(--sipumtech-radius-sm);
}

/* 响应式认证图片样式 */
.certification-image {
  width: 100%;
  aspect-ratio: 3/2;
  border-radius: 8px;
}

/*
 * 所有文本内容样式已迁移到 n-text 组件的 :style 属性
 * - 联系信息标题和内容通过 n-text 组件管理
 * - 认证标题通过 n-text 组件管理
 * - 移除所有 margin: 0 重置和自定义文本样式类
 * - 移除 text-align: center 违规样式
 * - 完全依赖 Naive UI 组件属性管理样式
 *
 * 响应式布局完全由 Naive UI 组件处理：
 * - n-grid 的 item-responsive 和 responsive="screen" 自动处理响应式布局
 * - n-card 组件自动适配不同屏幕尺寸的卡片样式
 * - n-avatar 组件自动处理图标大小和样式
 * - .certification-image 使用 aspect-ratio 实现响应式图片
 * - 移除所有自定义媒体查询，严格遵循 Naive UI 优先原则
 */
</style>

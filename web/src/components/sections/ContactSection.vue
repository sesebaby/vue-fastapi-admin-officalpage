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
        <n-text class="contact-subtitle">
          {{ $t('website.contact.subtitle') }}
        </n-text>
      </n-space>

      <!-- 联系内容区域 -->
      <n-space vertical :size="60">
        <!-- 大屏端：联系信息卡片水平排列 -->
        <div class="contact-info-section">
          <!-- 联系信息卡片网格 - 大屏3列水平排列，平板和手机垂直排列 -->
          <n-grid
            :cols="contactGridCols"
            :x-gap="24"
            :y-gap="20"
            item-responsive
            responsive="screen"
          >
            <!-- 地址信息卡片 -->
            <n-grid-item>
              <n-card hoverable class="contact-info-card">
                <n-space vertical align="center" :size="20">
                  <div class="card-icon-wrapper">
                    <div class="card-icon address-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                  <n-space vertical align="center" :size="8">
                    <n-text strong class="card-title">{{ $t('website.contact.address_title') }}</n-text>
                    <n-text class="card-text">{{ $t('website.contact.address') }}</n-text>
                  </n-space>
                </n-space>
              </n-card>
            </n-grid-item>

            <!-- 电话信息卡片 -->
            <n-grid-item>
              <n-card hoverable class="contact-info-card">
                <n-space vertical align="center" :size="20">
                  <div class="card-icon-wrapper">
                    <div class="card-icon phone-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                  <n-space vertical align="center" :size="8">
                    <n-text strong class="card-title">{{ $t('website.contact.phone_title') }}</n-text>
                    <n-text class="card-text">{{ $t('website.contact.contact_person') }}<br>{{ $t('website.contact.phone') }}</n-text>
                  </n-space>
                </n-space>
              </n-card>
            </n-grid-item>

            <!-- 邮箱信息卡片 -->
            <n-grid-item>
              <n-card hoverable class="contact-info-card">
                <n-space vertical align="center" :size="20">
                  <div class="card-icon-wrapper">
                    <div class="card-icon email-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                  <n-space vertical align="center" :size="8">
                    <n-text strong class="card-title">{{ $t('website.contact.email_title') }}</n-text>
                    <n-text class="card-text email-address-hardcoded">{{ contactEmail }}</n-text>
                  </n-space>
                </n-space>
              </n-card>
            </n-grid-item>
          </n-grid>
        </div>

        <!-- 调试信息区域 - 仅在开发环境显示 -->
        <!-- <div v-if="isDev" class="debug-info-section">
          <n-card title="邮箱地址调试信息" size="small" style="margin: 20px 0; border: 2px dashed #f59e0b;">
            <n-space vertical :size="8">
              <n-text>组件挂载状态: {{ debugInfo.componentMounted ? '✅ 已挂载' : '❌ 未挂载' }}</n-text>
              <n-text>国际化加载状态: {{ debugInfo.i18nLoaded ? '✅ 已加载' : '❌ 未加载' }}</n-text>
              <n-text>邮箱标题 (i18n): "{{ debugInfo.emailTitleFromI18n }}"</n-text>
              <n-text>邮箱地址 (i18n): "{{ debugInfo.emailFromI18n }}"</n-text>
              <n-text>硬编码邮箱地址: "sales@sipumtech.com"</n-text>
              <n-text style="color: #10b981; font-weight: bold;">
                💡 当前使用硬编码方案确保邮箱地址在所有环境下都能正常显示
              </n-text>
            </n-space>
          </n-card>
        </div> -->

        <!-- 地图区域 - 大屏端单独一行 -->
        <div class="map-section">
          <n-card
            key="map-container-card"
            class="map-card map-container-card"
          >
            <n-space
              key="map-card-content"
              vertical
              :size="20"
            >
              <div class="map-header-row">
                <n-text
                  :style="{
                    fontSize: '18px',
                    fontWeight: 'var(--sipumtech-font-weight-semibold)',
                    color: 'var(--sipumtech-primary-blue)'
                  }"
                >
                  {{ $t('website.contact.map_title') }}
                </n-text>

                <div class="map-info-panel">
                  <n-card
                    :bordered="false"
                    class="company-info-card"
                  >
                    <n-space vertical :size="12">
                      <n-text
                        :style="{
                          fontSize: '18px',
                          fontWeight: '600',
                          color: 'var(--sipumtech-primary-blue)'
                        }"
                      >
                        {{ $t('company.name') }}
                      </n-text>

                      <n-text
                        :style="{
                          fontSize: '14px',
                          color: 'var(--sipumtech-text-secondary)',
                          lineHeight: '1.5'
                        }"
                      >
                        {{ $t('website.contact.address') }}
                      </n-text>

                      <n-space :size="8" class="contact-action-buttons">
                        <n-button
                          type="primary"
                          size="tiny"
                          @click="openInMap"
                          :style="{
                            background: 'linear-gradient(135deg, var(--sipumtech-accent-green), var(--sipumtech-primary-blue))',
                            border: 'none',
                            fontSize: '12px',
                            padding: '4px 8px',
                            height: '28px'
                          }"
                        >
                          <template #icon>
                            <n-icon :size="14">
                              <svg viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                              </svg>
                            </n-icon>
                          </template>
                          {{ $t('website.contact.view_in_map') }}
                        </n-button>

                        <n-button
                          size="tiny"
                          @click="copyAddress"
                          :style="{
                            borderColor: 'var(--sipumtech-accent-green)',
                            color: 'var(--sipumtech-accent-green)',
                            fontSize: '12px',
                            padding: '4px 8px',
                            height: '28px'
                          }"
                        >
                          <template #icon>
                            <n-icon :size="14">
                              <svg viewBox="0 0 24 24">
                                <path fill="currentColor" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                              </svg>
                            </n-icon>
                          </template>
                          {{ $t('website.contact.copy_address') }}
                        </n-button>
                      </n-space>
                    </n-space>
                  </n-card>
                </div>
              </div>

              <div class="location-display-container">
                <div ref="mapElementRef" class="map-element" :aria-label="$t('website.contact.map_title')"></div>
              </div>


            </n-space>
          </n-card>
        </div>

        <!-- 在线联系表单（官网） - 移动到地图下方 -->
        <!--
        <div class="contact-form-section">
          <n-card class="contact-form-card" :bordered="true">
            <template #header>
              <n-text
                :style="{
                  fontSize: 'var(--sipumtech-font-size-h3)',
                  fontWeight: 'var(--sipumtech-font-weight-bold)',
                  color: 'var(--sipumtech-primary-blue)',
                  textAlign: 'center',
                  display: 'block'
                }"
              >
                {{ $t('website.contact.form.title') || '在线咨询' }}
              </n-text>
            </template>
            <n-form ref="contactFormRef" :model="contactForm" :rules="contactRules" label-placement="top">
              <n-grid :cols="'xs:1 s:1 m:2 l:2 xl:2'" :x-gap="24" :y-gap="12" responsive="screen">
                <n-grid-item>
                  <n-form-item path="name" :label="$t('website.contact.form.name_label')">
                    <n-input v-model:value="contactForm.name" :placeholder="$t('website.contact.form.name_placeholder')" :maxlength="50" show-count clearable />
                  </n-form-item>
                </n-grid-item>
                <n-grid-item>
                  <n-form-item path="phone" :label="$t('website.contact.form.phone_label')">
                    <n-input v-model:value="contactForm.phone" :placeholder="$t('website.contact.form.phone_placeholder')" :maxlength="30" show-count clearable />
                  </n-form-item>
                </n-grid-item>
                <n-grid-item>
                  <n-form-item path="email" :label="$t('website.contact.form.email_label')">
                    <n-input v-model:value="contactForm.email" :placeholder="$t('website.contact.form.email_placeholder')" :maxlength="255" clearable />
                  </n-form-item>
                </n-grid-item>
                <n-grid-item span="2">
                  <n-form-item path="message" :label="$t('website.contact.form.message_label')">
                    <n-input v-model:value="contactForm.message" type="textarea" :placeholder="$t('website.contact.form.message_placeholder')" :autosize="{ minRows: 4, maxRows: 8 }" :maxlength="500" show-count />
                  </n-form-item>
                </n-grid-item>
              </n-grid>
              <n-space justify="end" style="margin-top: 16px;">
                <n-button type="primary" :loading="submitting" @click="handleSubmit">{{ $t('website.contact.form.submit_button') }}</n-button>
              </n-space>
            </n-form>
          </n-card>
        </div>
        -->
      </n-space>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useBreakpoints } from '@vueuse/core'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const { t, locale } = useI18n()
const contactEmail = 'sales@sipumtech.com'
const mapElementRef = ref(null)
const leafletMap = ref(null)
const leafletMarker = ref(null)

const companyLocation = {
  lat: 31.1515,
  lng: 120.6357,
  zoom: 16,
}

// 响应式断点配置
const breakpoints = useBreakpoints({
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1200
})

// 联系信息网格列数配置
const contactGridCols = computed(() => {
  if (breakpoints.lg.value) return 3  // 大屏：3列
  if (breakpoints.md.value) return 1  // 平板：1列
  return 1  // 移动端：1列
})

const labelContent = () => `
  <div class="contact-map-label">
    <strong>${t('company.name')}</strong>
    <div>${t('website.contact.address')}</div>
  </div>
`

const createMarkerIcon = () => L.divIcon({
  className: 'leaflet-company-marker',
  html: `
    <div class="leaflet-company-marker__pin">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
      </svg>
    </div>
  `,
  iconSize: [44, 44],
  iconAnchor: [22, 44],
  tooltipAnchor: [0, -34],
})

const syncMarkerLabel = () => {
  if (!leafletMarker.value) return
  leafletMarker.value.unbindTooltip()
  leafletMarker.value.bindTooltip(labelContent(), {
    permanent: true,
    direction: 'top',
    offset: [0, -18],
    opacity: 1,
    interactive: false,
    className: 'leaflet-company-label',
  })
}

const initMap = () => {
  if (!mapElementRef.value || leafletMap.value) return

  const map = L.map(mapElementRef.value, {
    center: [companyLocation.lat, companyLocation.lng],
    zoom: companyLocation.zoom,
    zoomControl: true,
    scrollWheelZoom: false,
    attributionControl: true,
  })

  L.tileLayer('https://wprd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}', {
    maxZoom: 19,
    subdomains: ['1', '2', '3', '4'],
    attribution: '&copy; AutoNavi',
  }).addTo(map)

  const marker = L.marker([companyLocation.lat, companyLocation.lng], {
    icon: createMarkerIcon(),
  }).addTo(map)

  leafletMap.value = map
  leafletMarker.value = marker
  syncMarkerLabel()

  map.whenReady(() => {
    setTimeout(() => map.invalidateSize(), 0)
  })
}

onMounted(() => {
  initMap()
})

watch(locale, () => {
  syncMarkerLabel()
})

onUnmounted(() => {
  leafletMarker.value = null
  if (leafletMap.value) {
    leafletMap.value.remove()
    leafletMap.value = null
  }
})

// 在地图中打开位置
const openInMap = () => {
  const { lat, lng, zoom } = companyLocation
  const openStreetMapUrl = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=${zoom}/${lat}/${lng}`
  window.open(openStreetMapUrl, '_blank')
}

// 复制地址到剪贴板
const copyAddress = async () => {
  const addressText = t('website.contact.address')
  try {
    await navigator.clipboard.writeText(addressText)
    window.$message?.success(t('website.contact.address_copied'))
  } catch (err) {
    const textArea = document.createElement('textarea')
    textArea.value = addressText
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
    window.$message?.success(t('website.contact.address_copied'))
  }
}
</script>

<style scoped>
/*
 * ContactSection样式 - 使用Naive UI原生组件
 * 大部分样式已由n-card、n-grid、n-avatar、n-image等组件自动处理
 */

/* 在线联系表单样式 */
.contact-form-section {
  margin-top: 40px;
}

.contact-form-card {
  border: 2px solid #e8f4fd;
  transition: all 0.3s ease;
}

.contact-form-card:hover {
  border-color: var(--sipumtech-primary-blue);
  box-shadow: 0 4px 16px rgba(30, 58, 138, 0.1);
}

/* 联系我们区域 */
.contact-section {
  background: var(--sipumtech-bg-tech);
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

/* 联系副标题样式 */
.contact-subtitle {
  font-size: 18px;
  color: var(--sipumtech-text-secondary);
  line-height: var(--sipumtech-line-height-relaxed);
}

/* 联系卡片样式 - 简洁设计 */
.contact-card {
  border: 2px solid #e8f4fd;
  transition: all 0.3s ease;
  background: #ffffff;
}

.contact-card:hover {
  border-color: #00d4aa;
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0, 212, 170, 0.2);
}

/* 联系信息区域样式 */
.contact-info-section {
  width: 100%;
  margin-bottom: 50px;
}

/* 地图区域样式 */
.map-section {
  width: 100%;
}

/* 现代化毛玻璃卡片设计 */
.modern-glass-card {
  position: relative;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 32px 24px;
  height: 260px; /* 增加基础高度，确保文字内容完整显示 */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.1),
    0 2px 8px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  overflow: hidden;
}

/* 卡片悬停效果 */
.modern-glass-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.15),
    0 8px 16px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
  background: rgba(255, 255, 255, 0.9);
  border-color: rgba(255, 255, 255, 0.3);
}

/* 卡片背景渐变装饰 */
.modern-glass-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg,
    transparent,
    rgba(255, 255, 255, 0.8),
    transparent
  );
}

/* 图标容器 */
.card-icon-wrapper {
  margin-bottom: 20px;
}

/* 图标样式 */
.card-icon {
  width: 64px;
  height: 64px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  position: relative;
  transition: all 0.3s ease;
}

.card-icon svg {
  width: 28px;
  height: 28px;
  transition: all 0.3s ease;
}

/* 地址图标样式 */
.address-icon {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
}

/* 电话图标样式 */
.phone-icon {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  box-shadow: 0 8px 20px rgba(240, 147, 251, 0.3);
}

/* 邮箱图标样式 */
.email-icon {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  box-shadow: 0 8px 20px rgba(79, 172, 254, 0.3);
}

/* 联系信息卡片基础样式 - 遵循NaiveUI优先原则 */
.contact-info-card {
  height: 260px; /* 增加高度确保文字内容完整显示 */
  text-align: center;
}

/* 图标悬停效果 */
.modern-glass-card:hover .card-icon {
  transform: scale(1.1) rotate(5deg);
}

.modern-glass-card:hover .card-icon svg {
  transform: scale(1.1);
}

/* 卡片内容 */
.card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* 卡片标题 */
.card-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--sipumtech-primary-blue, #1e3a8a);
  margin: 0 0 12px 0;
  line-height: 1.4;
  transition: color 0.3s ease;
}

/* 卡片文本 */
.card-text {
  font-size: 14px;
  color: var(--sipumtech-text-secondary, #64748b);
  line-height: 1.6;
  margin: 0;
  word-wrap: break-word;
  hyphens: auto;
  transition: color 0.3s ease;
}

/* 硬编码邮箱地址样式 - 确保与其他联系信息样式完全一致 */
.email-address-hardcoded {
  font-size: 14px !important;
  color: var(--sipumtech-text-secondary, #64748b) !important;
  line-height: 1.6 !important;
  margin: 0 !important;
  word-wrap: break-word !important;
  hyphens: auto !important;
  transition: color 0.3s ease !important;
  /* 确保邮箱地址可以正常选择和复制 */
  user-select: text !important;
  -webkit-user-select: text !important;
  -moz-user-select: text !important;
  -ms-user-select: text !important;
  /* 防止任何可能的隐藏或过滤 */
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
}

/* 调试信息区域样式 */
.debug-info-section {
  margin: 20px 0;
}

.debug-info-section .n-card {
  background: #fffbeb !important;
  border: 2px dashed #f59e0b !important;
}

.debug-info-section .n-text {
  font-family: 'Courier New', monospace;
  font-size: 13px;
}

/* 移除特殊样式，使用NaiveUI原生样式 */

/* 卡片悬停时的文字效果 */
.modern-glass-card:hover .card-title {
  color: var(--sipumtech-primary-blue, #1e40af);
}

.modern-glass-card:hover .card-text {
  color: var(--sipumtech-text-primary, #374151);
}

/* 大屏端确保3个卡片等宽等高 - 移除自定义grid样式，使用n-grid原生响应式 */
@media (min-width: 1024px) {
  /* 移除自定义grid样式，避免与n-grid冲突 */

  .modern-glass-card {
    height: 300px; /* 增加大屏端高度，确保文字内容完整显示 */
    padding: 36px 28px;
  }

  .card-title {
    font-size: 19px;
    margin-bottom: 12px;
  }

  .card-text {
    font-size: 15px;
    line-height: 1.5;
    word-break: break-word;
    hyphens: auto;
  }

  /* 大屏端硬编码邮箱地址样式 */
  .email-address-hardcoded {
    font-size: 15px !important;
    line-height: 1.5 !important;
    word-break: break-word !important;
    hyphens: auto !important;
  }

  /* 大屏端使用NaiveUI原生样式 */

}

/* 地图卡片样式 - 简洁清晰设计 */
.map-card {
  border: 2px solid #e8f4fd;
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* 地图容器卡片 - 大屏端独立高度 */
.map-container-card {
  width: 100%;
  min-height: 450px;
  display: flex;
  flex-direction: column;
}

/* 位置展示容器样式 - 完全透明 */
.location-display-container {
  position: relative;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  background: transparent;
}

.map-header-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
}

.map-info-panel {
  width: min(340px, 100%);
  flex-shrink: 0;
}

.map-element {
  width: 100%;
  height: 400px;
  min-height: 400px;
  border-radius: 12px;
  overflow: hidden;
  background: linear-gradient(135deg, #f8fbff 0%, #eaf4ff 100%);
}

.map-element :deep(.leaflet-container) {
  width: 100%;
  height: 100%;
  font-family: var(--sipumtech-font-family);
}

.map-element :deep(.leaflet-control-zoom a) {
  color: var(--sipumtech-primary-blue);
}

.map-element :deep(.leaflet-company-marker) {
  background: transparent;
  border: 0;
}

.map-element :deep(.leaflet-company-marker__pin) {
  width: 44px;
  height: 44px;
  border-radius: 50% 50% 50% 0;
  background: linear-gradient(135deg, var(--sipumtech-primary-blue), var(--sipumtech-accent-green));
  box-shadow: 0 14px 30px rgba(30, 58, 138, 0.3);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(-45deg);
  transform-origin: center;
}

.map-element :deep(.leaflet-company-marker__pin svg) {
  width: 22px;
  height: 22px;
  transform: rotate(45deg);
}

.map-element :deep(.leaflet-company-label) {
  background: transparent;
  border: 0;
  box-shadow: none;
  margin-bottom: 4px;
}

.map-element :deep(.leaflet-company-label:before) {
  border-top-color: #fff;
}

.map-element :deep(.leaflet-tooltip.leaflet-company-label) {
  background: #fff;
  color: var(--sipumtech-text-secondary);
  border: 1px solid rgba(226, 232, 240, 0.95);
  border-radius: 16px;
  box-shadow: 0 14px 32px rgba(15, 23, 42, 0.16);
  padding: 14px 16px;
  min-width: 260px;
  max-width: 340px;
  white-space: normal;
}

.map-element :deep(.contact-map-label strong) {
  display: block;
  margin-bottom: 8px;
  font-size: 16px;
  line-height: 1.45;
  color: var(--sipumtech-primary-blue);
}

.map-element :deep(.contact-map-label div) {
  font-size: 14px;
  line-height: 1.7;
  color: var(--sipumtech-text-secondary);
  word-break: break-word;
}

/* 响应式设计 - 移动端地图适配 */
@media (max-width: 768px) {
  .map-element {
    height: 350px;  /* 增加移动端地图高度 */
    min-height: 350px;
    position: relative;
  }

  .map-container-card {
    min-height: 450px;  /* 增加卡片高度以适应更大的地图 */
  }

  .map-header-row {
    flex-direction: column;
    align-items: stretch;
  }

  .map-info-panel {
    width: 100%;
  }
}

/* 移除旧的区域标签和动画样式，因为现在使用真实地图 */

/* 公司信息卡片 - 简洁设计 */
.company-info-card {
  background: #ffffff !important;
  border: 2px solid #e8f4fd !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;
}

.company-info-card :deep(.n-card__content) {
  word-break: break-word;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .contact-section {
    padding: var(--sipumtech-section-padding-tablet);
  }

  .section-container {
    padding: 0 var(--sipumtech-container-padding-tablet);
  }

  /* 平板端字体优化 - 应用TrustBuildingSection最佳实践 */
  .contact-section h2 {
    font-size: var(--sipumtech-font-size-h2) !important;
  }

  .contact-section h3 {
    font-size: var(--sipumtech-font-size-h4) !important;
  }

  /* 平板端布局调整 */
  .contact-info-section {
    margin-bottom: 40px;
  }

  .map-container-card {
    min-height: 400px;
  }

  .modern-glass-card {
    height: 260px; /* 增加平板端高度，确保文字内容完整显示 */
    padding: 28px 20px;
    border-radius: 16px;
  }

  .card-icon {
    width: 56px;
    height: 56px;
    border-radius: 14px;
  }

  .card-icon svg {
    width: 24px;
    height: 24px;
  }

  .card-title {
    font-size: 17px;
    margin-bottom: 10px;
  }

  .card-text {
    font-size: 14px;
    line-height: 1.4;
    word-break: break-word;
    hyphens: auto;
  }

  /* 平板端硬编码邮箱地址样式 */
  .email-address-hardcoded {
    font-size: 14px !important;
    line-height: 1.4 !important;
    word-break: break-word !important;
    hyphens: auto !important;
  }

  /* 平板端使用NaiveUI原生样式 */


  .map-info-panel {
    width: min(320px, 100%);
  }
}

/* 按钮容器样式 */
.contact-action-buttons {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
}

.contact-action-buttons .n-button {
  white-space: nowrap;
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .contact-section {
    padding: var(--sipumtech-section-padding-mobile);
  }

  .section-container {
    padding: 0 var(--sipumtech-container-padding-mobile);
  }

  /* 移动端副标题字体优化 */
  .contact-subtitle {
    font-size: 14px;
    line-height: 1.4;
  }

  /* 移动端字体优化 - 应用TrustBuildingSection最佳实践 */
  .contact-section h2 {
    font-size: var(--sipumtech-font-size-h3) !important;
  }

  .contact-section h3 {
    font-size: var(--sipumtech-font-size-h5) !important;
  }

  .contact-section p {
    font-size: var(--sipumtech-font-size-small) !important;
  }

  .contact-info-section {
    margin-bottom: 30px;
  }

  .modern-glass-card {
    height: 220px; /* 增加移动端高度，确保文字内容完整显示 */
    padding: 24px 18px;
    border-radius: 14px;
    margin-bottom: 16px;
  }

  .card-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    margin-bottom: 16px;
  }

  .card-icon svg {
    width: 20px;
    height: 20px;
  }

  .card-title {
    font-size: 16px;
    margin-bottom: 8px;
  }

  .card-text {
    font-size: 13px;
    line-height: 1.4;
    word-break: break-word;
    hyphens: auto;
  }

  /* 移动端硬编码邮箱地址样式 */
  .email-address-hardcoded {
    font-size: 13px !important;
    line-height: 1.4 !important;
    word-break: break-word !important;
    hyphens: auto !important;
  }

  /* 移动端使用NaiveUI原生样式 */


  .map-element {
    height: 300px;
    min-height: 300px;
  }

  .location-display-container {
    display: flex;
    flex-direction: column;
  }
}

@media (max-width: 480px) {

  .map-element {
    height: 250px;
  }

  .map-info-overlay {
    margin-top: 12px;
  }

  .company-info-card {
    padding: 12px !important;
  }

  .contact-action-buttons {
    flex-wrap: nowrap !important;
  }

  .contact-action-buttons .n-button {
    font-size: 11px !important;
    padding: 3px 6px !important;
    height: 26px !important;
    min-width: auto !important;
    flex-shrink: 1;
  }

  /* 移动端表单适配 */
  .contact-form-section {
    margin-top: 24px;
  }

  .contact-form-card {
    border-radius: 12px;
  }

  /* 移动端表单标题字体调整 */
  .contact-form-card .n-card-header {
    padding: 16px 16px 12px 16px;
  }

  .contact-form-card .n-card-header .n-text {
    font-size: var(--sipumtech-font-size-h4) !important;
  }

  /* 移动端表单内容间距优化 */
  .contact-form-card .n-card__content {
    padding: 16px;
  }
}

/*
 * 组件样式说明：
 * - 联系信息卡片使用毛玻璃效果和现代化设计
 * - 在线联系表单支持完整的中英文切换和移动端适配
 * - 简洁的地址信息展示，包含位置图标和公司信息
 * - 提供地图查看和地址复制功能
 * - 响应式设计适配不同屏幕尺寸
 * - 严格遵循 Naive UI 框架优先原则
 * - 使用 Leaflet + OpenStreetMap 提供真实交互地图
 */
</style>

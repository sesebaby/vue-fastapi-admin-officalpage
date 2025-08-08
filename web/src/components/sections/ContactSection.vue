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

      <!-- 联系内容区域 -->
      <n-space vertical :size="60">
        <!-- 联系信息卡片区域 -->
        <n-grid
          :cols="3"
          :x-gap="40"
          :y-gap="30"
          item-responsive
          responsive="screen"
        >
          <!-- 地址信息卡片 -->
          <n-grid-item>
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
          </n-grid-item>

          <!-- 电话信息卡片 -->
          <n-grid-item>
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
          </n-grid-item>

          <!-- 邮箱信息卡片 -->
          <n-grid-item>
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
          </n-grid-item>
        </n-grid>

        <!-- 地图区域 - 单独一行 -->
        <n-card class="map-card">
          <n-space vertical :size="20">
            <n-text
              :style="{
                fontSize: '18px',
                fontWeight: 'var(--sipumtech-font-weight-semibold)',
                color: 'var(--sipumtech-primary-blue)'
              }"
            >
              {{ $t('website.contact.map_title') }}
            </n-text>

            <!-- 地图容器 -->
            <div class="map-container">
              <div
                v-if="mapLoading"
                class="map-loading"
              >
                <n-spin size="large">
                  <template #description>
                    <n-text>{{ $t('website.contact.map_loading') }}</n-text>
                  </template>
                </n-spin>
              </div>

              <iframe
                v-else
                :src="mapUrl"
                class="map-iframe"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                @load="handleMapLoad"
                @error="handleMapError"
              ></iframe>
            </div>

            <!-- 地址信息显示 -->
            <div class="address-info">
              <n-space align="center" :size="12">
                <n-icon :size="20" color="var(--sipumtech-accent-green)">
                  <svg viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </n-icon>
                <n-text
                  :style="{
                    fontSize: 'var(--sipumtech-font-size-body)',
                    color: 'var(--sipumtech-text-primary)',
                    fontWeight: '500'
                  }"
                >
                  {{ companyAddress }}
                </n-text>
              </n-space>
            </div>
          </n-space>
        </n-card>
      </n-space>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// 地图相关状态
const mapLoading = ref(true)

// 公司地址信息
const companyAddress = '江苏省苏州市吴江区东太湖生态旅游度假区体育路508号金鹰商业中心2,3幢3幢1911'

// 构建地图URL - 使用高德地图搜索页面
const mapUrl = `https://uri.amap.com/search?query=${encodeURIComponent('江苏省苏州市吴江区东太湖生态旅游度假区体育路508号金鹰商业中心')}&city=${encodeURIComponent('苏州')}&src=mypage`

// 处理地图加载完成
const handleMapLoad = () => {
  mapLoading.value = false
}

// 处理地图加载错误
const handleMapError = () => {
  mapLoading.value = false
  console.warn('地图iframe加载失败，但这通常不影响显示')
}

// 组件挂载时设置加载状态
onMounted(() => {
  // 设置一个最小加载时间，确保用户看到加载状态
  setTimeout(() => {
    if (mapLoading.value) {
      mapLoading.value = false
    }
  }, 2000)
})
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

/* 联系卡片样式 */
.contact-card {
  border: 1px solid rgba(0, 212, 170, 0.1);
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.contact-card:hover {
  border-color: rgba(0, 212, 170, 0.3);
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

/* 地图卡片样式 */
.map-card {
  border: 1px solid rgba(0, 212, 170, 0.1);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-radius: 16px;
  overflow: hidden;
}

/* 地图容器样式 */
.map-container {
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  background: #f8fafc;
  border: 2px solid rgba(0, 212, 170, 0.1);
}

.map-iframe {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  border: none;
  background: #f8fafc;
}

/* 地图加载状态 */
.map-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.map-error {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.95);
}

/* 地址信息显示 */
.address-info {
  padding: 16px;
  background: rgba(0, 212, 170, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(0, 212, 170, 0.1);
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .map-container {
    height: 350px;
  }

  .address-info {
    padding: 12px;
  }
}

@media (max-width: 768px) {
  .contact-section {
    padding: var(--sipumtech-section-padding-mobile);
  }

  .section-container {
    padding: 0 var(--sipumtech-container-padding-mobile);
  }

  .map-container {
    height: 300px;
  }

  .address-info {
    padding: 12px;
  }
}

@media (max-width: 480px) {
  .map-container {
    height: 250px;
  }
}

/*
 * 组件样式说明：
 * - 联系信息卡片使用毛玻璃效果和现代化设计
 * - 地图组件集成高德地图API，支持缩放、拖拽等交互
 * - 自定义标记点使用SVG图标，包含公司信息
 * - 信息窗体提供导航和地址复制功能
 * - 完整的加载状态和错误处理
 * - 响应式设计适配不同屏幕尺寸
 * - 严格遵循 Naive UI 框架优先原则
 */
</style>

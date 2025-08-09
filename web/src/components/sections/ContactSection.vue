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

            <!-- 位置展示容器 -->
            <div class="location-display-container">
              <!-- 百度地图容器 -->
              <div id="baidu-map-container" class="map-container">
                <!-- 地图加载状态 -->
                <div v-if="mapLoading" class="map-loading">
                  <n-spin size="large">
                    <template #description>
                      正在加载地图...
                    </template>
                  </n-spin>
                </div>

                <!-- 地图加载失败提示 -->
                <div v-if="mapError" class="map-error">
                  <n-result status="error" title="地图加载失败">
                    <template #description>
                      <div style="text-align: left; max-width: 400px;">
                        <p><strong>可能的原因：</strong></p>
                        <ul style="margin: 8px 0; padding-left: 20px;">
                          <li>百度地图API密钥未配置或无效</li>
                          <li>网络连接问题</li>
                          <li>API密钥权限设置问题</li>
                        </ul>
                        <p><strong>解决方法：</strong></p>
                        <ol style="margin: 8px 0; padding-left: 20px;">
                          <li>访问 <a href="https://lbsyun.baidu.com/" target="_blank" style="color: #1890ff;">百度地图开放平台</a> 申请API密钥</li>
                          <li>在项目根目录的 <code>.env.local</code> 文件中配置密钥</li>
                          <li>重启开发服务器</li>
                        </ol>
                      </div>
                    </template>
                    <template #footer>
                      <n-space>
                        <n-button @click="initBaiduMap" type="primary">重新加载</n-button>
                        <n-button @click="() => window.open('https://lbsyun.baidu.com/', '_blank')" type="default">
                          申请API密钥
                        </n-button>
                      </n-space>
                    </template>
                  </n-result>
                </div>
              </div>

              <!-- 地址信息卡片 -->
              <div class="map-info-overlay">
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
                      苏州思普微电子科技有限公司
                    </n-text>

                    <n-text
                      :style="{
                        fontSize: '14px',
                        color: 'var(--sipumtech-text-secondary)',
                        lineHeight: '1.5'
                      }"
                    >
                      {{ companyAddress }}
                    </n-text>

                    <!-- 操作按钮 -->
                    <n-space :size="12">
                      <n-button
                        type="primary"
                        size="small"
                        @click="openInMap"
                        :style="{
                          background: 'linear-gradient(135deg, var(--sipumtech-accent-green), var(--sipumtech-primary-blue))',
                          border: 'none'
                        }"
                      >
                        <template #icon>
                          <n-icon>
                            <svg viewBox="0 0 24 24">
                              <path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                            </svg>
                          </n-icon>
                        </template>
                        在地图中查看
                      </n-button>

                      <n-button
                        size="small"
                        @click="copyAddress"
                        :style="{
                          borderColor: 'var(--sipumtech-accent-green)',
                          color: 'var(--sipumtech-accent-green)'
                        }"
                      >
                        <template #icon>
                          <n-icon>
                            <svg viewBox="0 0 24 24">
                              <path fill="currentColor" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                            </svg>
                          </n-icon>
                        </template>
                        复制地址
                      </n-button>
                    </n-space>
                  </n-space>
                </n-card>
              </div>
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
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// 公司地址信息
const companyAddress = '江苏省苏州市吴江区东太湖生态旅游度假区体育路508号金鹰商业中心2,3幢3幢1911'

// 百度地图相关状态
const mapLoading = ref(true)
const mapError = ref(false)
const baiduMap = ref(null)
const mapMarker = ref(null)

// 公司位置坐标 (百度地图BD09坐标系)
const companyLocation = {
  lng: 120.6357, // 经度
  lat: 31.1515,  // 纬度
  name: '苏州思普微电子科技有限公司',
  address: companyAddress
}



// 加载百度地图API
const loadBaiduMapAPI = () => {
  return new Promise((resolve, reject) => {
    // 检查是否已经加载
    if (window.BMap) {
      resolve(window.BMap)
      return
    }

    const apiKey = import.meta.env.VITE_BAIDU_MAP_API_KEY || 'your_api_key_here'
    console.log('读取到的API密钥:', apiKey, '长度:', apiKey?.length)

    // 直接加载百度地图的JavaScript文件
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = `https://api.map.baidu.com/getscript?v=3.0&ak=${apiKey}&services=&t=${Date.now()}`
    script.async = true

    script.onload = () => {
      // 等待BMap对象可用
      const checkBMap = () => {
        if (window.BMap) {
          resolve(window.BMap)
        } else {
          // 如果BMap还没有加载，等待一下再检查
          setTimeout(checkBMap, 100)
        }
      }
      checkBMap()
    }

    script.onerror = () => {
      reject(new Error('百度地图API网络请求失败'))
    }

    // 设置超时处理
    const timeout = setTimeout(() => {
      reject(new Error('百度地图API加载超时'))
    }, 10000) // 10秒超时

    // 成功加载后清除超时
    const originalOnload = script.onload
    script.onload = () => {
      clearTimeout(timeout)
      originalOnload()
    }

    document.head.appendChild(script)
  })
}

// 初始化百度地图
const initBaiduMap = async () => {
  try {
    mapLoading.value = true
    mapError.value = false

    // 检查API密钥是否配置
    const apiKey = import.meta.env.VITE_BAIDU_MAP_API_KEY
    console.log('读取到的API密钥:', apiKey, '长度:', apiKey?.length)

    if (!apiKey || apiKey === 'your_api_key_here' || apiKey === 'YOUR_ACTUAL_API_KEY') {
      throw new Error(`请先配置百度地图API密钥。当前值: ${apiKey}`)
    }

    // 加载百度地图API
    const BMap = await loadBaiduMapAPI()

    // 创建地图实例
    const mapContainer = document.getElementById('baidu-map-container')
    if (!mapContainer) {
      throw new Error('地图容器未找到')
    }

    baiduMap.value = new BMap.Map(mapContainer)

    // 创建公司位置点
    const point = new BMap.Point(companyLocation.lng, companyLocation.lat)

    // 设置地图中心点和缩放级别
    baiduMap.value.centerAndZoom(point, 16)

    // 启用地图功能
    baiduMap.value.enableScrollWheelZoom(true) // 启用滚轮缩放
    baiduMap.value.enableDragging(true) // 启用拖拽
    baiduMap.value.enableDoubleClickZoom(true) // 启用双击缩放

    // 添加地图控件
    baiduMap.value.addControl(new BMap.NavigationControl()) // 缩放控件
    baiduMap.value.addControl(new BMap.ScaleControl()) // 比例尺控件

    // 创建标记点
    mapMarker.value = new BMap.Marker(point)
    baiduMap.value.addOverlay(mapMarker.value)

    // 创建信息窗口
    const infoWindow = new BMap.InfoWindow(`
      <div style="padding: 10px; line-height: 1.5;">
        <h4 style="margin: 0 0 8px 0; color: #1890ff;">${companyLocation.name}</h4>
        <p style="margin: 0; color: #666; font-size: 13px;">${companyLocation.address}</p>
      </div>
    `, {
      width: 300,
      height: 80
    })

    // 点击标记显示信息窗口
    mapMarker.value.addEventListener('click', () => {
      baiduMap.value.openInfoWindow(infoWindow, point)
    })

    // 默认显示信息窗口
    setTimeout(() => {
      baiduMap.value.openInfoWindow(infoWindow, point)
    }, 1000)

    mapLoading.value = false

  } catch (error) {
    console.error('百度地图初始化失败:', error)
    mapError.value = true
    mapLoading.value = false

    // 根据错误类型显示不同的提示信息
    if (error.message.includes('API密钥')) {
      window.$message?.warning('请先配置百度地图API密钥')
    } else {
      window.$message?.error('地图加载失败，请检查网络连接或API密钥配置')
    }
  }
}

// 在地图中打开位置
const openInMap = () => {
  const baiduMapUrl = `https://map.baidu.com/search/${encodeURIComponent(companyAddress)}/@13515782.17,3665847.89,19z?querytype=s&da_src=shareurl&wd=${encodeURIComponent(companyAddress)}&c=224&src=0&pn=0&sug=0&l=19&b=(13515662,3665727;13515902,3665967)&from=webmap&biz_forward=%7B%22scaler%22:1,%22styles%22:%22pl%22%7D`
  window.open(baiduMapUrl, '_blank')
}

// 复制地址到剪贴板
const copyAddress = async () => {
  try {
    await navigator.clipboard.writeText(companyAddress)
    window.$message?.success('地址已复制到剪贴板')
  } catch (err) {
    const textArea = document.createElement('textarea')
    textArea.value = companyAddress
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
    window.$message?.success('地址已复制到剪贴板')
  }
}

// 组件挂载时初始化地图
onMounted(() => {
  // 延迟初始化，确保DOM完全渲染
  setTimeout(() => {
    initBaiduMap()
  }, 100)
})

// 组件卸载时清理资源
onUnmounted(() => {
  if (baiduMap.value) {
    baiduMap.value.clearOverlays()
    baiduMap.value = null
  }
  if (mapMarker.value) {
    mapMarker.value = null
  }
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

/* 地图卡片样式 - 简洁清晰设计 */
.map-card {
  border: 2px solid #e8f4fd;
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* 位置展示容器样式 - 完全透明 */
.location-display-container {
  position: relative;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  background: transparent;
}

/* 百度地图容器样式 */
.map-container {
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  background: #f5f5f5;
}

/* 地图加载状态样式 */
.map-loading {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.9);
  z-index: 10;
}

/* 地图错误状态样式 */
.map-error {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  z-index: 10;
}

/* 百度地图相关样式 - 确保地图正常显示 */
.map-container .BMap_mask {
  border-radius: 12px;
}

/* 百度地图控件样式调整 */
.map-container .anchorBL {
  left: 10px !important;
  bottom: 10px !important;
}

.map-container .anchorTL {
  top: 10px !important;
  left: 10px !important;
}

/* 响应式设计 - 移动端地图适配 */
@media (max-width: 768px) {
  .map-container {
    height: 300px;
  }

  .map-loading,
  .map-error {
    padding: 20px;
  }
}

/* 移除旧的区域标签和动画样式，因为现在使用真实地图 */

/* 地图信息覆盖层 */
.map-info-overlay {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 10;
  max-width: 300px;
}

/* 公司信息卡片 - 简洁设计 */
.company-info-card {
  background: #ffffff !important;
  border: 2px solid #e8f4fd !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .contact-section {
    padding: var(--sipumtech-section-padding-tablet);
  }

  .section-container {
    padding: 0 var(--sipumtech-container-padding-tablet);
  }

  .map-background {
    height: 350px;
  }

  .map-info-overlay {
    max-width: 280px;
  }

  .marker-pin {
    width: 45px;
    height: 45px;
  }
}

@media (max-width: 768px) {
  .contact-section {
    padding: var(--sipumtech-section-padding-mobile);
  }

  .section-container {
    padding: 0 var(--sipumtech-container-padding-mobile);
  }

  .map-background {
    height: 300px;
  }

  .map-info-overlay {
    position: static;
    max-width: none;
    margin-top: 16px;
  }

  .location-display-container {
    display: flex;
    flex-direction: column;
  }

  .marker-pin {
    width: 40px;
    height: 40px;
  }

  .area-label {
    font-size: 11px;
    padding: 4px 8px;
  }
}

@media (max-width: 480px) {
  .map-background {
    height: 250px;
  }

  .map-info-overlay {
    margin-top: 12px;
  }

  .company-info-card {
    padding: 12px !important;
  }

  .marker-pin {
    width: 35px;
    height: 35px;
  }

  .area-label {
    font-size: 10px;
    padding: 3px 6px;
  }
}

/*
 * 组件样式说明：
 * - 联系信息卡片使用毛玻璃效果和现代化设计
 * - 简洁的地址信息展示，包含位置图标和公司信息
 * - 提供地图查看和地址复制功能
 * - 响应式设计适配不同屏幕尺寸
 * - 严格遵循 Naive UI 框架优先原则
 * - 简单可靠，无需依赖第三方地图API
 */
</style>

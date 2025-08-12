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
        <!-- 大屏端：联系信息卡片水平排列 -->
        <div class="contact-info-section">
          <!-- 联系信息卡片网格 - 大屏3列水平排列，平板和手机垂直排列 -->
          <n-grid
            :cols="'1024:3 768:1 480:1'"
            :x-gap="24"
            :y-gap="20"
            item-responsive
            responsive="screen"
          >
            <!-- 地址信息卡片 -->
            <n-grid-item>
              <div class="contact-info-card modern-glass-card">
                <div class="card-icon-wrapper">
                  <div class="card-icon address-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
                <div class="card-content">
                  <h3 class="card-title">{{ $t('website.contact.address_title') }}</h3>
                  <p class="card-text">{{ $t('website.contact.address') }}</p>
                </div>
              </div>
            </n-grid-item>

            <!-- 电话信息卡片 -->
            <n-grid-item>
              <div class="contact-info-card modern-glass-card">
                <div class="card-icon-wrapper">
                  <div class="card-icon phone-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
                <div class="card-content">
                  <h3 class="card-title">{{ $t('website.contact.phone_title') }}</h3>
                  <p class="card-text">{{ $t('website.contact.phone') }}</p>
                </div>
              </div>
            </n-grid-item>

            <!-- 邮箱信息卡片 -->
            <n-grid-item>
              <div class="contact-info-card modern-glass-card">
                <div class="card-icon-wrapper">
                  <div class="card-icon email-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
                <div class="card-content">
                  <h3 class="card-title">{{ $t('website.contact.email_title') }}</h3>
                  <p class="card-text">{{ $t('website.contact.email') }}</p>
                </div>
              </div>
            </n-grid-item>
          </n-grid>
        </div>

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
                <!-- 百度地图容器 - 使用v-html完全隔离DOM操作 -->
                <div
                  v-show="shouldShowMap"
                  v-html="mapContainerHtml"
                  class="map-wrapper"
                ></div>
                <!-- 地图加载状态 -->
                <div v-if="mapLoading" class="map-loading">
                  <n-spin size="large">
                    <template #description>
                      {{ $t('website.contact.map_loading_text') }}
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
                        <n-button @click="retryMapInit" type="primary" :loading="mapLoading">
                          {{ $t('website.contact.retry_map') }}
                          <template v-if="mapRetryCount > 0" #icon>
                            <span style="font-size: 12px;">({{ mapRetryCount }}/{{ maxRetries }})</span>
                          </template>
                        </n-button>
                        <n-button @click="() => window.open('https://lbsyun.baidu.com/', '_blank')" type="default">
                          {{ $t('website.contact.apply_api_key') }}
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

                    <!-- 操作按钮 -->
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
                    {{ $t('website.contact.address') }}
                  </n-text>
                </n-space>
              </div>
            </n-space>
          </n-card>
        </div>
      </n-space>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// 百度地图相关状态
const mapLoading = ref(true)
const mapError = ref(false)
const baiduMap = ref(null)
const mapMarker = ref(null)
const shouldShowMap = ref(true) // 控制地图容器显示
const mapRetryCount = ref(0) // 重试计数器
const maxRetries = 3 // 最大重试次数
const mapContainerRef = ref(null) // 地图容器DOM引用
const isMapInitializing = ref(false) // 防止重复初始化标志
const mapContainerHtml = ref('<div id="baidu-map-container" class="map-container"></div>') // 地图容器HTML

// 公司位置坐标 (百度地图BD09坐标系)
const companyLocation = {
  lng: 120.6357, // 经度
  lat: 31.1515   // 纬度
}

// 等待DOM元素出现的工具函数
const waitForElement = (selector, timeout = 5000) => {
  return new Promise((resolve, reject) => {
    // 首先检查元素是否已经存在
    const element = document.querySelector(selector)
    if (element) {
      resolve(element)
      return
    }

    // 使用MutationObserver监听DOM变化
    const observer = new MutationObserver(() => {
      const element = document.querySelector(selector)
      if (element) {
        observer.disconnect()
        resolve(element)
      }
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true
    })

    // 设置超时
    setTimeout(() => {
      observer.disconnect()
      reject(new Error(`DOM元素 ${selector} 在 ${timeout}ms 内未找到`))
    }, timeout)
  })
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

// 初始化百度地图（带重试机制）
const initBaiduMap = async (retryCount = 0) => {
  // 防止重复初始化
  if (isMapInitializing.value) {
    console.log('地图正在初始化中，跳过重复请求')
    return
  }

  isMapInitializing.value = true

  try {
    mapLoading.value = true
    mapError.value = false

    // 检查API密钥是否配置
    const apiKey = import.meta.env.VITE_BAIDU_MAP_API_KEY
    console.log('读取到的API密钥:', apiKey, '长度:', apiKey?.length)

    if (!apiKey || apiKey === 'your_api_key_here' || apiKey === 'YOUR_ACTUAL_API_KEY') {
      shouldShowMap.value = false
      throw new Error(`请先配置百度地图API密钥。当前值: ${apiKey}`)
    }

    // 确保地图容器显示
    shouldShowMap.value = true

    // 加载百度地图API
    const BMap = await loadBaiduMapAPI()

    // 等待DOM完全渲染
    await nextTick()

    // 使用改进的DOM元素等待机制
    console.log('等待地图容器DOM元素...')
    const mapContainer = await waitForElement('#baidu-map-container', 3000)
    console.log('地图容器找到:', mapContainer)

    // 强制设置地图容器高度，确保地图正常显示
    mapContainer.style.height = '400px'
    mapContainer.style.minHeight = '400px'

    // 确保父容器也有正确的高度
    const mapWrapper = document.querySelector('.map-wrapper')
    if (mapWrapper) {
      mapWrapper.style.height = '400px'
      mapWrapper.style.minHeight = '400px'
    }

    // 确保容器没有被其他地图实例占用
    if (baiduMap.value) {
      try {
        baiduMap.value.clearOverlays()
        // 安全地清理DOM内容，避免与Vue的DOM管理冲突
        if (mapContainer && mapContainer.parentNode) {
          mapContainer.innerHTML = ''
        }
      } catch (e) {
        console.warn('清理旧地图实例时出错:', e)
      }
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
        <h4 style="margin: 0 0 8px 0; color: #1890ff;">${t('company.name')}</h4>
        <p style="margin: 0; color: #666; font-size: 13px;">${t('website.contact.address')}</p>
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
    isMapInitializing.value = false // 成功时重置初始化标志

  } catch (error) {
    console.error(`百度地图初始化失败 (尝试 ${retryCount + 1}/${maxRetries}):`, error)

    // 如果是DOM元素未找到且还有重试机会，则重试
    if (error.message.includes('DOM元素') && retryCount < maxRetries - 1) {
      mapRetryCount.value = retryCount + 1
      console.log(`将在 ${(retryCount + 1) * 1000}ms 后重试...`)

      // 重置初始化标志，允许重试
      isMapInitializing.value = false

      setTimeout(() => {
        initBaiduMap(retryCount + 1)
      }, (retryCount + 1) * 1000) // 递增延迟重试

      return
    }

    // 重试次数用完或其他错误，显示错误状态
    mapError.value = true
    mapLoading.value = false
    isMapInitializing.value = false // 失败时重置初始化标志
    mapRetryCount.value = 0

    // 根据错误类型显示不同的提示信息
    if (error.message.includes('API密钥')) {
      shouldShowMap.value = false
      window.$message?.warning('请先配置百度地图API密钥')
    } else if (error.message.includes('DOM元素')) {
      window.$message?.error('地图容器加载失败，请刷新页面重试')
    } else if (error.message.includes('超时')) {
      window.$message?.error('地图API加载超时，请检查网络连接')
    } else {
      window.$message?.error('地图加载失败，请检查网络连接或API密钥配置')
    }
  }
}

// 手动重试地图初始化
const retryMapInit = () => {
  mapRetryCount.value = 0
  isMapInitializing.value = false // 重置初始化标志
  initBaiduMap()
}

// 在地图中打开位置
const openInMap = () => {
  const addressText = t('website.contact.address')
  const baiduMapUrl = `https://map.baidu.com/search/${encodeURIComponent(addressText)}/@13515782.17,3665847.89,19z?querytype=s&da_src=shareurl&wd=${encodeURIComponent(addressText)}&c=224&src=0&pn=0&sug=0&l=19&b=(13515662,3665727;13515902,3665967)&from=webmap&biz_forward=%7B%22scaler%22:1,%22styles%22:%22pl%22%7D`
  window.open(baiduMapUrl, '_blank')
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

// 组件挂载时初始化地图
onMounted(() => {
  // 延迟初始化，确保DOM完全渲染
  nextTick(() => {
    setTimeout(() => {
      initBaiduMap()
    }, 200)
  })
})

// 组件卸载时清理资源
onUnmounted(() => {
  try {
    // 重置初始化标志
    isMapInitializing.value = false

    if (baiduMap.value) {
      // 清理地图事件监听器
      baiduMap.value.removeEventListener('click')
      baiduMap.value.clearOverlays()

      // 安全地销毁地图实例，避免DOM操作冲突
      const mapContainer = document.getElementById('baidu-map-container')
      if (mapContainer && mapContainer.parentNode) {
        // 使用try-catch包装DOM操作，防止insertBefore错误
        try {
          mapContainer.innerHTML = ''
        } catch (domError) {
          console.warn('清理地图容器DOM时出错:', domError)
        }
      }
      baiduMap.value = null
    }
    if (mapMarker.value) {
      mapMarker.value = null
    }
  } catch (error) {
    console.warn('地图清理时出现错误:', error)
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
  height: 200px; /* 使用固定高度而不是最小高度 */
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

/* 卡片悬停时的文字效果 */
.modern-glass-card:hover .card-title {
  color: var(--sipumtech-primary-blue, #1e40af);
}

.modern-glass-card:hover .card-text {
  color: var(--sipumtech-text-primary, #374151);
}

/* 大屏端确保3个卡片等宽等高 */
@media (min-width: 1024px) {
  .contact-info-section .n-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
  }

  .modern-glass-card {
    height: 240px; /* 固定高度，以地址卡片内容为基准 */
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

/* 地图包装器样式 - 确保高度正确 */
.map-wrapper {
  position: relative;
  width: 100%;
  height: 400px;
  min-height: 400px;
  border-radius: 12px;
  overflow: hidden;
  background: #f5f5f5;
  flex: 1;
}

/* 百度地图容器样式 */
.map-container {
  position: relative;
  width: 100%;
  height: 400px !important;
  min-height: 400px !important;
  border-radius: 12px;
  overflow: hidden;
  background: #f5f5f5;
  flex: 1;
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
  .map-wrapper {
    height: 300px;
    min-height: 300px;
  }

  .map-container {
    height: 100%;
    min-height: 100%;
  }

  .map-container-card {
    min-height: 400px;
  }

  .contact-info-card {
    min-height: 100px;
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
    height: 200px; /* 固定高度，确保平板端卡片高度一致 */
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

  .map-info-overlay {
    max-width: 280px;
  }

  .marker-pin {
    width: 45px;
    height: 45px;
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
    height: 180px; /* 固定高度，确保手机端卡片高度一致 */
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

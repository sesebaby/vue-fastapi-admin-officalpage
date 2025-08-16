/**
 * 图片资源管理工具
 * 提供图片加载错误处理、占位图片、资源验证等功能
 */

// 占位图片配置 - 使用实际存在的图片作为占位图
export const PLACEHOLDER_IMAGES = {
  // 新闻占位图
  news: '/images/business_office_scene.jpg',
  // 客户头像占位图
  avatar: '/images/business_office_scene.jpg',
  // 合作伙伴logo占位图
  logo: '/images/ISO9001质量管理体系认证证书.png',
  // 业务场景占位图
  business: '/images/business_office_scene.jpg',
  // 技术展示占位图
  technology: '/images/icon_advanced_packaging.jpg',
  // 案例展示占位图
  case: '/images/product_development_cycle_chart.jpg',
  // 认证证书占位图
  certificate: '/images/ISO9001质量管理体系认证证书.png'
}

// 图片资源映射表 - 基于实际存在的图片文件路径
export const IMAGE_RESOURCES = {
  // Hero轮播图片 - 使用原版图片+新增公司实景图片
  hero: {
    company_hero: '/images/hero_pictore_company.png',    // 第一张轮播 - 原版公司主图
    tech_background: '/images/科技背景图片.jpg',           // 第二张轮播 - 原版科技背景
    third_slide: '/images/company_scene_02.jpg',         // 第三张轮播 - 公司实景图2
    fourth_slide: '/images/company_scene_03.jpg',        // 第四张轮播 - 公司实景图3
    // 备用图片配置
    tech_concept: '/images/商务科技概念图.png',
    circuit_background: '/images/科技电路背景图.png',
    business_office: '/images/business_office_scene.jpg'
  },

  // 关于我们图片 - 使用新的公司场景图片
  about: {
    office_scene: '/images/company_scene_01.jpg',        // 办公环境实景 - 更新为company_scene_01.jpg
    team_photo: '/images/company_scene_05.jpg',          // 团队工作场景
    company_culture: '/images/company_scene_06.jpg'      // 公司文化展示
  },

  // 业务展示图片 - 使用新的业务相关图片
  business: {
    advanced_packaging: '/images/company_scene_07.jpg',  // 先进封装业务
    hardware_solution: '/images/company_scene_08.jpg',   // 硬件解决方案
    testing_service: '/images/company_scene_09.jpg',     // 测试服务
    production_line: '/images/company_scene_10.jpg'      // 生产线展示
  },

  // 技术能力图片 - 使用新的技术相关图片
  technology: {
    lab_equipment: '/images/business_office_scene.jpg', // 商务办公场景 - 更新为指定图片
    pcb_design: '/images/company_scene_12.jpg',         // PCB设计工艺
    testing_facility: '/images/icon_hardware_design.jpg', // 保留原有测试设施图
    advanced_tech: '/images/technical_chart_circuit.jpg'  // 技术电路图
  },

  // 案例展示图片 - 使用新的案例相关图片
  cases: {
    automotive: '/images/company_scene_07.jpg',         // 汽车电子案例
    consumer: '/images/company_scene_08.jpg',           // 消费电子案例
    industrial: '/images/company_scene_09.jpg',         // 工业控制案例
    communication: '/images/company_scene_10.jpg'       // 通信设备案例
  },

  // 新闻动态图片 - 使用新的公司活动图片
  news: {
    news_1: '/images/company_scene_04.jpg',             // 公司新闻1
    news_2: '/images/company_scene_05.jpg',             // 公司新闻2
    news_3: '/images/company_scene_06.jpg',             // 公司新闻3
    company_event: '/images/company_scene_11.jpg'       // 公司活动
  },

  // 认证证书图片 - 使用实际存在的图片路径
  certificates: {
    iso9001: '/images/ISO9001质量管理体系认证证书.png',
    military: '/images/武器装备质量管理体系证书.png'
  },

  // 客户头像图片 - 使用实际存在的图片路径（暂时使用现有图片）
  customers: {
    avatar_1: '/images/business_office_scene.jpg',
    avatar_2: '/images/modern_buildings_night_scene.jpg',
    avatar_3: '/images/product_development_cycle_chart.jpg',
    avatar_4: '/images/ISO9001质量管理体系认证证书.png'
  },

  // 合作伙伴logo - 使用正确的官方PNG logo
  partners: {
    huawei: '/images/logo_huawei.png',           // 华为官方logo
    zte: '/images/logo_zte.png',                 // 中兴官方logo
    xiaomi: '/images/logo_xiaomi.png',           // 小米官方logo
    lenovo: '/images/logo_lenovo.png',           // 联想官方logo
    hikvision: '/images/logo_hikvision.png',     // 海康威视官方logo
    dji: '/images/logo_dji.png'                  // 大疆官方logo
  }
}

/**
 * 获取图片资源路径，如果不存在则返回占位图
 * @param {string} category - 图片分类
 * @param {string} name - 图片名称
 * @param {string} fallbackType - 占位图类型
 * @returns {string} 图片路径
 */
export function getImagePath(category, name, fallbackType = 'business') {
  try {
    const categoryImages = IMAGE_RESOURCES[category]
    if (categoryImages && categoryImages[name]) {
      return categoryImages[name]
    }
    
    // 如果找不到指定图片，返回占位图
    return PLACEHOLDER_IMAGES[fallbackType] || PLACEHOLDER_IMAGES.business
  } catch (error) {
    console.warn(`图片资源获取失败: ${category}.${name}`, error)
    return PLACEHOLDER_IMAGES[fallbackType] || PLACEHOLDER_IMAGES.business
  }
}

/**
 * 图片预加载函数
 * @param {string} src - 图片路径
 * @returns {Promise<boolean>} 加载结果
 */
export function preloadImage(src) {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(true)
    img.onerror = () => resolve(false)
    img.src = src
  })
}

/**
 * 批量预加载图片
 * @param {string[]} srcList - 图片路径数组
 * @returns {Promise<{loaded: string[], failed: string[]}>} 加载结果
 */
export async function preloadImages(srcList) {
  const results = await Promise.allSettled(
    srcList.map(async (src) => {
      const loaded = await preloadImage(src)
      return { src, loaded }
    })
  )
  
  const loaded = []
  const failed = []
  
  results.forEach((result) => {
    if (result.status === 'fulfilled') {
      if (result.value.loaded) {
        loaded.push(result.value.src)
      } else {
        failed.push(result.value.src)
      }
    } else {
      failed.push('unknown')
    }
  })
  
  return { loaded, failed }
}

/**
 * 验证图片资源是否存在
 * @param {string} src - 图片路径
 * @returns {Promise<boolean>} 是否存在
 */
export async function validateImageResource(src) {
  try {
    const response = await fetch(src, { method: 'HEAD' })
    return response.ok
  } catch (error) {
    console.warn(`图片资源验证失败: ${src}`, error)
    return false
  }
}

/**
 * 获取响应式图片路径
 * @param {string} basePath - 基础路径
 * @param {string} size - 尺寸标识 (sm, md, lg)
 * @returns {string} 响应式图片路径
 */
export function getResponsiveImagePath(basePath, size = 'md') {
  const ext = basePath.split('.').pop()
  const pathWithoutExt = basePath.replace(`.${ext}`, '')
  return `${pathWithoutExt}-${size}.${ext}`
}

/**
 * 图片错误处理 Composable
 * 用于Vue组件中处理图片加载错误
 */
export function useImageErrorHandler() {
  const handleImageError = (event, fallbackSrc) => {
    const img = event.target
    if (img.src !== fallbackSrc) {
      img.src = fallbackSrc
    }
  }
  
  const getImageWithFallback = (src, fallbackType = 'business') => {
    return {
      src,
      fallbackSrc: PLACEHOLDER_IMAGES[fallbackType],
      onError: (event) => handleImageError(event, PLACEHOLDER_IMAGES[fallbackType])
    }
  }
  
  return {
    handleImageError,
    getImageWithFallback
  }
}

/**
 * 图片懒加载配置
 */
export const LAZY_LOAD_CONFIG = {
  // 提前加载距离
  rootMargin: '50px',
  // 可见度阈值
  threshold: 0.1,
  // 是否启用懒加载
  enabled: true
}

/**
 * 图片优化建议
 */
export const IMAGE_OPTIMIZATION_TIPS = {
  // 推荐的图片格式
  formats: ['webp', 'jpg', 'png'],
  // 推荐的图片尺寸
  sizes: {
    thumbnail: { width: 150, height: 150 },
    small: { width: 300, height: 200 },
    medium: { width: 600, height: 400 },
    large: { width: 1200, height: 800 },
    hero: { width: 1920, height: 1080 }
  },
  // 推荐的压缩质量
  quality: {
    thumbnail: 70,
    small: 75,
    medium: 80,
    large: 85,
    hero: 90
  }
}

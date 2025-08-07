/**
 * 图片资源管理工具
 * 提供图片加载错误处理、占位图片、资源验证等功能
 */

// 占位图片配置
export const PLACEHOLDER_IMAGES = {
  // 新闻占位图
  news: '/images/placeholders/news-placeholder.jpg',
  // 客户头像占位图
  avatar: '/images/placeholders/avatar-placeholder.png',
  // 合作伙伴logo占位图
  logo: '/images/placeholders/logo-placeholder.png',
  // 业务场景占位图
  business: '/images/placeholders/business-placeholder.jpg',
  // 技术展示占位图
  technology: '/images/placeholders/technology-placeholder.jpg',
  // 案例展示占位图
  case: '/images/placeholders/case-placeholder.jpg',
  // 认证证书占位图
  certificate: '/images/placeholders/certificate-placeholder.png'
}

// 图片资源映射表 - 确保所有引用的图片都有对应的文件
export const IMAGE_RESOURCES = {
  // Hero轮播图片
  hero: {
    tech_concept: '/images/hero/tech-concept.jpg',
    circuit_background: '/images/hero/circuit-background.jpg',
    business_office: '/images/hero/business-office.jpg'
  },
  
  // 关于我们图片
  about: {
    office_scene: '/images/about/office-scene.jpg',
    team_photo: '/images/about/team-photo.jpg'
  },
  
  // 业务展示图片
  business: {
    advanced_packaging: '/images/business/advanced-packaging.jpg',
    hardware_solution: '/images/business/hardware-solution.jpg',
    testing_service: '/images/business/testing-service.jpg'
  },
  
  // 技术能力图片
  technology: {
    lab_equipment: '/images/technology/lab-equipment.jpg',
    pcb_design: '/images/technology/pcb-design.jpg',
    testing_facility: '/images/technology/testing-facility.jpg'
  },
  
  // 案例展示图片
  cases: {
    automotive: '/images/cases/automotive-case.jpg',
    consumer: '/images/cases/consumer-case.jpg',
    industrial: '/images/cases/industrial-case.jpg'
  },
  
  // 新闻动态图片
  news: {
    news_1: '/images/news/iso-certification.jpg',
    news_2: '/images/news/new-production-line.jpg',
    news_3: '/images/news/tech-conference.jpg'
  },
  
  // 认证证书图片
  certificates: {
    iso9001: '/images/certificates/iso9001-cert.png',
    military: '/images/certificates/military-cert.png'
  },
  
  // 客户头像图片
  customers: {
    avatar_1: '/images/customers/customer-1.jpg',
    avatar_2: '/images/customers/customer-2.jpg',
    avatar_3: '/images/customers/customer-3.jpg',
    avatar_4: '/images/customers/customer-4.jpg'
  },
  
  // 合作伙伴logo
  partners: {
    huawei: '/images/partners/huawei-logo.png',
    zte: '/images/partners/zte-logo.png',
    xiaomi: '/images/partners/xiaomi-logo.png',
    lenovo: '/images/partners/lenovo-logo.png',
    hikvision: '/images/partners/hikvision-logo.png',
    dji: '/images/partners/dji-logo.png'
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

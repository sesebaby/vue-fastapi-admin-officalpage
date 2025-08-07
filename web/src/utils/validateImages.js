/**
 * 图片路径验证工具
 * 用于验证所有图片资源是否存在
 */

import { IMAGE_RESOURCES, PLACEHOLDER_IMAGES } from './imageUtils.js'

/**
 * 验证单个图片是否存在
 * @param {string} imagePath - 图片路径
 * @returns {Promise<boolean>} 是否存在
 */
export async function validateSingleImage(imagePath) {
  try {
    const response = await fetch(imagePath, { method: 'HEAD' })
    return response.ok
  } catch (error) {
    console.warn(`图片验证失败: ${imagePath}`, error)
    return false
  }
}

/**
 * 验证所有图片资源
 * @returns {Promise<Object>} 验证结果
 */
export async function validateAllImages() {
  const results = {
    valid: [],
    invalid: [],
    summary: {}
  }

  // 验证IMAGE_RESOURCES中的所有图片
  for (const [category, images] of Object.entries(IMAGE_RESOURCES)) {
    results.summary[category] = { valid: 0, invalid: 0, total: 0 }
    
    for (const [name, path] of Object.entries(images)) {
      results.summary[category].total++
      const isValid = await validateSingleImage(path)
      
      const imageInfo = {
        category,
        name,
        path,
        isValid
      }
      
      if (isValid) {
        results.valid.push(imageInfo)
        results.summary[category].valid++
      } else {
        results.invalid.push(imageInfo)
        results.summary[category].invalid++
      }
    }
  }

  // 验证PLACEHOLDER_IMAGES中的所有图片
  results.summary.placeholders = { valid: 0, invalid: 0, total: 0 }
  
  for (const [name, path] of Object.entries(PLACEHOLDER_IMAGES)) {
    results.summary.placeholders.total++
    const isValid = await validateSingleImage(path)
    
    const imageInfo = {
      category: 'placeholders',
      name,
      path,
      isValid
    }
    
    if (isValid) {
      results.valid.push(imageInfo)
      results.summary.placeholders.valid++
    } else {
      results.invalid.push(imageInfo)
      results.summary.placeholders.invalid++
    }
  }

  return results
}

/**
 * 打印验证结果
 * @param {Object} results - 验证结果
 */
export function printValidationResults(results) {
  console.group('🖼️ 图片资源验证结果')
  
  // 打印总体统计
  const totalValid = results.valid.length
  const totalInvalid = results.invalid.length
  const totalImages = totalValid + totalInvalid
  
  console.log(`📊 总体统计:`)
  console.log(`  ✅ 有效图片: ${totalValid}/${totalImages} (${((totalValid/totalImages)*100).toFixed(1)}%)`)
  console.log(`  ❌ 无效图片: ${totalInvalid}/${totalImages} (${((totalInvalid/totalImages)*100).toFixed(1)}%)`)
  console.log('')
  
  // 打印分类统计
  console.log(`📋 分类统计:`)
  for (const [category, stats] of Object.entries(results.summary)) {
    const percentage = stats.total > 0 ? ((stats.valid/stats.total)*100).toFixed(1) : '0.0'
    console.log(`  ${category}: ${stats.valid}/${stats.total} (${percentage}%)`)
  }
  console.log('')
  
  // 打印无效图片列表
  if (results.invalid.length > 0) {
    console.group('❌ 无效图片列表:')
    results.invalid.forEach(img => {
      console.log(`  ${img.category}.${img.name}: ${img.path}`)
    })
    console.groupEnd()
  }
  
  // 打印有效图片列表
  if (results.valid.length > 0) {
    console.group('✅ 有效图片列表:')
    results.valid.forEach(img => {
      console.log(`  ${img.category}.${img.name}: ${img.path}`)
    })
    console.groupEnd()
  }
  
  console.groupEnd()
}

/**
 * 获取缺失图片的建议
 * @param {Object} results - 验证结果
 * @returns {Array} 建议列表
 */
export function getMissingImageSuggestions(results) {
  const suggestions = []
  
  if (results.invalid.length === 0) {
    return ['🎉 所有图片都正常加载！']
  }
  
  // 按分类分组无效图片
  const invalidByCategory = {}
  results.invalid.forEach(img => {
    if (!invalidByCategory[img.category]) {
      invalidByCategory[img.category] = []
    }
    invalidByCategory[img.category].push(img)
  })
  
  // 生成建议
  for (const [category, images] of Object.entries(invalidByCategory)) {
    suggestions.push(`📁 ${category} 分类缺失 ${images.length} 张图片:`)
    images.forEach(img => {
      suggestions.push(`   - 需要添加: ${img.path}`)
    })
    suggestions.push('')
  }
  
  // 通用建议
  suggestions.push('💡 修复建议:')
  suggestions.push('1. 检查 web/public/images/ 目录下是否存在对应图片文件')
  suggestions.push('2. 确认图片文件名和路径拼写正确')
  suggestions.push('3. 考虑使用现有图片作为临时替代')
  suggestions.push('4. 更新 IMAGE_RESOURCES 映射表指向正确的图片路径')
  
  return suggestions
}

/**
 * 自动修复图片路径（使用现有图片作为替代）
 * @param {Object} results - 验证结果
 * @returns {Object} 修复建议
 */
export function generateAutoFixSuggestions(results) {
  const fixes = {}
  
  // 获取所有有效图片路径
  const validPaths = results.valid.map(img => img.path)
  
  // 为每个无效图片建议替代方案
  results.invalid.forEach(img => {
    // 根据分类选择合适的替代图片
    let suggestedPath = validPaths[0] // 默认使用第一个有效图片
    
    // 尝试找到同分类的有效图片
    const sameCategoryValid = results.valid.filter(validImg => validImg.category === img.category)
    if (sameCategoryValid.length > 0) {
      suggestedPath = sameCategoryValid[0].path
    }
    
    fixes[`${img.category}.${img.name}`] = {
      current: img.path,
      suggested: suggestedPath,
      reason: sameCategoryValid.length > 0 ? '同分类替代' : '通用替代'
    }
  })
  
  return fixes
}

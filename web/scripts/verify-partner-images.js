/**
 * 合作伙伴图片验证脚本
 * 验证所有合作伙伴图片的可访问性和基本属性
 */

import { IMAGE_RESOURCES } from '../src/utils/imageUtils.js'

const PARTNER_NAMES = [
  '上海交通大学',
  '浙江大学', 
  '福州大学',
  '西安电子科技大学',
  '中国科学院高能物理研究所',
  '中国兵器工业集团',
  '中国电子科技集团',
  '中国航天科技集团'
]

const PARTNER_KEYS = [
  'sjtu',
  'zju',
  'fzu', 
  'xidian',
  'ihep_cas',
  'norinco',
  'cetc',
  'casc'
]

/**
 * 验证图片URL是否可访问
 */
async function verifyImageUrl(url, name) {
  try {
    const response = await fetch(url, { method: 'HEAD' })
    return {
      name,
      url,
      accessible: response.ok,
      status: response.status,
      contentType: response.headers.get('content-type'),
      contentLength: response.headers.get('content-length')
    }
  } catch (error) {
    return {
      name,
      url,
      accessible: false,
      error: error.message
    }
  }
}

/**
 * 验证所有合作伙伴图片
 */
async function verifyAllPartnerImages() {
  console.log('🔍 开始验证合作伙伴图片...\n')
  
  const results = []
  
  for (let i = 0; i < PARTNER_KEYS.length; i++) {
    const key = PARTNER_KEYS[i]
    const name = PARTNER_NAMES[i]
    const imageUrl = IMAGE_RESOURCES.partners[key]
    
    if (!imageUrl) {
      console.log(`❌ ${name}: 映射缺失`)
      results.push({ name, accessible: false, error: '映射缺失' })
      continue
    }
    
    // 构建完整URL（假设在开发服务器上）
    const fullUrl = `http://localhost:3060${imageUrl}`
    const result = await verifyImageUrl(fullUrl, name)
    results.push(result)
    
    if (result.accessible) {
      const sizeKB = result.contentLength ? Math.round(result.contentLength / 1024) : 'Unknown'
      console.log(`✅ ${name}: ${result.status} (${sizeKB}KB, ${result.contentType})`)
    } else {
      console.log(`❌ ${name}: ${result.status || 'Error'} - ${result.error || 'Unknown error'}`)
    }
  }
  
  console.log('\n📊 验证结果汇总:')
  const accessible = results.filter(r => r.accessible).length
  const total = results.length
  console.log(`✅ 可访问: ${accessible}/${total}`)
  console.log(`❌ 不可访问: ${total - accessible}/${total}`)
  
  if (accessible === total) {
    console.log('\n🎉 所有合作伙伴图片验证通过！')
  } else {
    console.log('\n⚠️  部分图片验证失败，请检查文件路径和服务器状态')
  }
  
  return results
}

/**
 * 验证图片映射配置
 */
function verifyImageMapping() {
  console.log('🔍 验证图片映射配置...\n')
  
  let allValid = true
  
  for (let i = 0; i < PARTNER_KEYS.length; i++) {
    const key = PARTNER_KEYS[i]
    const name = PARTNER_NAMES[i]
    const imageUrl = IMAGE_RESOURCES.partners[key]
    
    if (!imageUrl) {
      console.log(`❌ ${name} (${key}): 映射缺失`)
      allValid = false
    } else {
      console.log(`✅ ${name} (${key}): ${imageUrl}`)
    }
  }
  
  console.log(`\n📊 映射配置: ${allValid ? '✅ 完整' : '❌ 不完整'}`)
  return allValid
}

// 如果直接运行此脚本
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log('🚀 合作伙伴图片验证工具\n')
  
  // 验证映射配置
  const mappingValid = verifyImageMapping()
  
  if (mappingValid) {
    console.log('\n' + '='.repeat(50))
    // 验证图片可访问性（需要开发服务器运行）
    verifyAllPartnerImages().catch(error => {
      console.error('\n❌ 验证过程中出现错误:', error.message)
      console.log('\n💡 提示: 请确保开发服务器正在运行 (npm run dev)')
    })
  }
}

export { verifyImageMapping, verifyAllPartnerImages }

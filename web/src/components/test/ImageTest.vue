<template>
  <!-- 图片测试组件 - 验证图片路径是否正确 -->
  <div class="image-test">
    <h2>图片路径测试</h2>

    <!-- 验证结果摘要 -->
    <div v-if="validationResults" class="validation-summary">
      <h3>📊 验证结果摘要</h3>
      <div class="summary-stats">
        <div class="stat-item">
          <span class="stat-label">总图片数:</span>
          <span class="stat-value">{{ validationResults.valid.length + validationResults.invalid.length }}</span>
        </div>
        <div class="stat-item success">
          <span class="stat-label">有效图片:</span>
          <span class="stat-value">{{ validationResults.valid.length }}</span>
        </div>
        <div class="stat-item error">
          <span class="stat-label">无效图片:</span>
          <span class="stat-value">{{ validationResults.invalid.length }}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">成功率:</span>
          <span class="stat-value">
            {{ ((validationResults.valid.length / (validationResults.valid.length + validationResults.invalid.length)) * 100).toFixed(1) }}%
          </span>
        </div>
      </div>

      <!-- 无效图片列表 -->
      <div v-if="validationResults.invalid.length > 0" class="invalid-images">
        <h4>❌ 需要修复的图片:</h4>
        <ul>
          <li v-for="img in validationResults.invalid" :key="`${img.category}.${img.name}`">
            <strong>{{ img.category }}.{{ img.name }}</strong>: {{ img.path }}
          </li>
        </ul>
      </div>
    </div>

    <div v-if="isValidating" class="validating">
      <p>🔍 正在验证图片资源...</p>
    </div>
    
    <div class="test-section">
      <h3>Hero轮播图片</h3>
      <div class="test-images">
        <div class="test-item">
          <p>商务科技概念图</p>
          <img :src="getImagePath('hero', 'tech_concept')" alt="商务科技概念图" />
          <p>路径: {{ getImagePath('hero', 'tech_concept') }}</p>
        </div>
        <div class="test-item">
          <p>科技电路背景图</p>
          <img :src="getImagePath('hero', 'circuit_background')" alt="科技电路背景图" />
          <p>路径: {{ getImagePath('hero', 'circuit_background') }}</p>
        </div>
      </div>
    </div>

    <div class="test-section">
      <h3>业务图标</h3>
      <div class="test-images">
        <div class="test-item">
          <p>先进封装</p>
          <img :src="getImagePath('business', 'advanced_packaging')" alt="先进封装" />
          <p>路径: {{ getImagePath('business', 'advanced_packaging') }}</p>
        </div>
        <div class="test-item">
          <p>硬件方案</p>
          <img :src="getImagePath('business', 'hardware_solution')" alt="硬件方案" />
          <p>路径: {{ getImagePath('business', 'hardware_solution') }}</p>
        </div>
      </div>
    </div>

    <div class="test-section">
      <h3>新闻图片</h3>
      <div class="test-images">
        <div class="test-item">
          <p>新闻1</p>
          <img :src="getImagePath('news', 'news_1')" alt="新闻1" />
          <p>路径: {{ getImagePath('news', 'news_1') }}</p>
        </div>
        <div class="test-item">
          <p>新闻2</p>
          <img :src="getImagePath('news', 'news_2')" alt="新闻2" />
          <p>路径: {{ getImagePath('news', 'news_2') }}</p>
        </div>
        <div class="test-item">
          <p>新闻3</p>
          <img :src="getImagePath('news', 'news_3')" alt="新闻3" />
          <p>路径: {{ getImagePath('news', 'news_3') }}</p>
        </div>
      </div>
    </div>

    <div class="test-section">
      <h3>认证证书</h3>
      <div class="test-images">
        <div class="test-item">
          <p>ISO9001认证</p>
          <img :src="getImagePath('certificates', 'iso9001')" alt="ISO9001认证" />
          <p>路径: {{ getImagePath('certificates', 'iso9001') }}</p>
        </div>
        <div class="test-item">
          <p>军工认证</p>
          <img :src="getImagePath('certificates', 'military')" alt="军工认证" />
          <p>路径: {{ getImagePath('certificates', 'military') }}</p>
        </div>
      </div>
    </div>

    <div class="test-section">
      <h3>占位图片测试</h3>
      <div class="test-images">
        <div class="test-item">
          <p>业务占位图</p>
          <img :src="PLACEHOLDER_IMAGES.business" alt="业务占位图" />
          <p>路径: {{ PLACEHOLDER_IMAGES.business }}</p>
        </div>
        <div class="test-item">
          <p>新闻占位图</p>
          <img :src="PLACEHOLDER_IMAGES.news" alt="新闻占位图" />
          <p>路径: {{ PLACEHOLDER_IMAGES.news }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getImagePath, PLACEHOLDER_IMAGES } from '@/utils/imageUtils'
import { validateAllImages, printValidationResults, getMissingImageSuggestions } from '@/utils/validateImages'

// 验证状态
const validationResults = ref(null)
const isValidating = ref(false)

// 组件挂载时验证图片
onMounted(async () => {
  isValidating.value = true
  try {
    const results = await validateAllImages()
    validationResults.value = results

    // 打印验证结果到控制台
    printValidationResults(results)

    // 打印修复建议
    const suggestions = getMissingImageSuggestions(results)
    console.group('💡 修复建议')
    suggestions.forEach(suggestion => console.log(suggestion))
    console.groupEnd()

  } catch (error) {
    console.error('图片验证失败:', error)
  } finally {
    isValidating.value = false
  }
})
</script>

<style scoped>
.image-test {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.test-section {
  margin-bottom: 40px;
  border: 1px solid #e5e7eb;
  padding: 20px;
  border-radius: 8px;
}

.test-section h3 {
  color: #1e3a8a;
  margin-bottom: 20px;
}

.test-images {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.test-item {
  border: 1px solid #d1d5db;
  padding: 15px;
  border-radius: 6px;
  text-align: center;
}

.test-item img {
  max-width: 100%;
  height: 150px;
  object-fit: cover;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  margin: 10px 0;
}

.test-item p {
  margin: 5px 0;
  font-size: 14px;
}

.test-item p:first-child {
  font-weight: bold;
  color: #1e3a8a;
}

.test-item p:last-child {
  color: #6b7280;
  font-family: monospace;
  font-size: 12px;
  word-break: break-all;
}

/* 验证结果样式 */
.validation-summary {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 30px;
}

.validation-summary h3 {
  color: #1e3a8a;
  margin-bottom: 15px;
}

.summary-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
  margin-bottom: 20px;
}

.stat-item {
  background: white;
  padding: 10px 15px;
  border-radius: 6px;
  border: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.stat-item.success {
  border-color: #10b981;
  background: #f0fdf4;
}

.stat-item.error {
  border-color: #ef4444;
  background: #fef2f2;
}

.stat-label {
  font-weight: 500;
  color: #374151;
}

.stat-value {
  font-weight: bold;
  color: #1f2937;
}

.success .stat-value {
  color: #059669;
}

.error .stat-value {
  color: #dc2626;
}

.invalid-images {
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 6px;
  padding: 15px;
}

.invalid-images h4 {
  color: #dc2626;
  margin-bottom: 10px;
}

.invalid-images ul {
  margin: 0;
  padding-left: 20px;
}

.invalid-images li {
  margin-bottom: 5px;
  color: #374151;
}

.validating {
  text-align: center;
  padding: 20px;
  background: #f0f9ff;
  border: 1px solid #bae6fd;
  border-radius: 6px;
  margin-bottom: 20px;
}

.validating p {
  color: #0369a1;
  font-weight: 500;
  margin: 0;
}
</style>

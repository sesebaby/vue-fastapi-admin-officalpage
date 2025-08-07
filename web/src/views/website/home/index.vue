<template>
  <div class="home-page">
    <!-- 滚动进度指示器 - 使用Naive UI原生组件 -->
    <n-affix :top="0" style="z-index: 1001;">
      <n-progress
        type="line"
        :percentage="scrollProgress"
        :show-indicator="false"
        :height="4"
        color="#1e3a8a"
        style="width: 100vw;"
      />
    </n-affix>

    <!-- 区域指示器 - 使用Naive UI原生组件 -->
    <n-affix :right="30" :top="50" style="z-index: 1000;">
      <n-space vertical :size="8">
        <n-button
          v-for="(section, index) in sections"
          :key="section"
          circle
          size="small"
          :type="currentSection === index ? 'primary' : 'default'"
          @click="scrollToSection(section)"
          :title="getSectionName(section)"
          style="width: 12px; height: 12px; min-width: 12px;"
        />
      </n-space>
    </n-affix>

    <!-- 侧边导航菜单 - 使用Naive UI原生组件 -->
    <n-drawer v-model:show="showSideNav" :width="280" placement="right">
      <n-drawer-content :title="$t('website.ui.navigation_menu')" closable>
        <n-menu
          :value="sections[currentSection]"
          :options="menuOptions"
          @update:value="handleMenuSelect"
        />
      </n-drawer-content>
    </n-drawer>

    <!-- 侧边导航触发按钮 -->
    <n-affix :right="30" :top="120" style="z-index: 1000;">
      <n-button
        circle
        type="primary"
        @click="showSideNav = true"
        style="width: 40px; height: 40px;"
      >
        ☰
      </n-button>
    </n-affix>

    <!-- Hero Banner 轮播区域 -->
    <HeroSection
      ref="heroRef"
      @scroll-to-section="scrollToSection"
    />

    <!-- 关于我们区域 -->
    <AboutSection />

    <!-- 核心业务展示 -->
    <BusinessSection
      @start-hover="startHover"
      @end-hover="endHover"
      @get-solution="handleGetSolution"
      @tech-consultation="handleTechConsultation"
    />

    <!-- 技术能力展示 -->
    <TechnologySection />

    <!-- 成功案例区域 -->
    <CasesSection />

    <!-- 信任建立区域 -->
    <TrustBuildingSection />

    <!-- 新闻动态 -->
    <NewsSection />

    <!-- 联系我们 -->
    <ContactSection />

    <!-- 回到顶部按钮 - 使用Naive UI原生组件 -->
    <n-back-top :right="30" :bottom="30" />
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import BusinessSection from '@/components/sections/BusinessSection.vue'
import TechnologySection from '@/components/sections/TechnologySection.vue'
import CasesSection from '@/components/sections/CasesSection.vue'
import TrustBuildingSection from '@/components/sections/TrustBuildingSection.vue'
import NewsSection from '@/components/sections/NewsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'

const { t } = useI18n()

// 滚动相关状态
const scrollProgress = ref(0)
const showBackToTop = ref(false)
const showSideNav = ref(false)

// 组件引用
const heroRef = ref(null)

// 轮播相关函数已移至HeroSection组件

// 滚动相关状态（简化版）
const currentSection = ref(0)
const sections = ref(['home', 'about', 'business', 'technology', 'cases', 'news', 'contact'])

// Naive UI菜单选项配置
const menuOptions = computed(() =>
  sections.value.map((section, index) => ({
    label: getSectionName(section),
    key: section,
    props: {
      onClick: () => scrollToSection(section)
    }
  }))
)

// 菜单选择处理
const handleMenuSelect = (key) => {
  scrollToSection(key)
  showSideNav.value = false
}

// 业务卡片悬停控制
const startHover = () => {
  if (heroRef.value && heroRef.value.startHover) {
    heroRef.value.startHover()
  }
}

const endHover = () => {
  if (heroRef.value && heroRef.value.endHover) {
    heroRef.value.endHover()
  }
}

// P1-5: CTA按钮事件处理
const handleGetSolution = (serviceType) => {
  console.log('获取方案:', serviceType)
  // 这里可以添加具体的业务逻辑，比如：
  // - 跳转到方案详情页
  // - 打开联系表单
  // - 发送埋点数据
  scrollToSection('contact')
}

const handleTechConsultation = (serviceType) => {
  console.log('技术咨询:', serviceType)
  // 这里可以添加具体的业务逻辑，比如：
  // - 打开在线客服
  // - 跳转到技术支持页面
  // - 显示联系方式弹窗
  scrollToSection('contact')
}

// 滚动功能
const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight

  // 更新滚动进度
  scrollProgress.value = (scrollTop / scrollHeight) * 100

  // 显示/隐藏回到顶部按钮
  showBackToTop.value = scrollTop > 300

  // 更新当前区域
  updateCurrentSection()
}

const updateCurrentSection = () => {
  const sectionElements = sections.value.map(id => document.getElementById(id)).filter(Boolean)
  const scrollTop = window.pageYOffset + window.innerHeight / 2

  for (let i = sectionElements.length - 1; i >= 0; i--) {
    const element = sectionElements[i]
    if (element && element.offsetTop <= scrollTop) {
      currentSection.value = i
      break
    }
  }
}

// 滚动劫持功能已移除，改用自然滚动

const scrollToTop = () => {
  scrollToSection('home')
}

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })

    // 更新当前区域索引
    const sectionIndex = sections.value.indexOf(sectionId)
    if (sectionIndex !== -1) {
      currentSection.value = sectionIndex
    }
  }
  showSideNav.value = false
}

const toggleSideNav = () => {
  showSideNav.value = !showSideNav.value
}

// 获取区域名称
const getSectionName = (sectionId) => {
  return t(`navigation.${sectionId}`) || sectionId
}

// 键盘导航功能已简化，移除滚动劫持

onMounted(() => {
  // 添加滚动监听
  window.addEventListener('scroll', handleScroll)

  // 初始化当前区域
  updateCurrentSection()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// 联系表单
const formRef = ref(null)
const contactForm = reactive({
  name: '',
  phone: '',
  email: '',
  message: ''
})

const formRules = computed(() => ({
  name: {
    required: true,
    message: t('website.form_validation.name_required'),
    trigger: 'blur'
  },
  phone: {
    required: true,
    message: t('website.form_validation.phone_required'),
    trigger: 'blur'
  },
  email: {
    required: true,
    message: t('website.form_validation.email_required'),
    trigger: 'blur'
  },
  message: {
    required: true,
    message: t('website.form_validation.message_required'),
    trigger: 'blur'
  }
}))

const submitForm = () => {
  formRef.value?.validate((errors) => {
    if (!errors) {
      // 这里可以调用API提交表单
      console.log('提交表单:', contactForm)
      // 显示成功消息
      window.$message?.success(t('website.contact.form.submit_success'))
      // 重置表单
      Object.keys(contactForm).forEach(key => {
        contactForm[key] = ''
      })
    }
  })
}
</script>

<style scoped>
/* 首页样式 - 华天科技风格 */
.home-page {
  width: 100%;
  font-family: "Microsoft YaHei", "PingFang SC", "Helvetica Neue", Arial, sans-serif;
}

/* 平滑滚动 */
html {
  scroll-behavior: smooth;
}

/* 区域过渡效果 */
section {
  transition: all 0.6s ease-in-out;
}

section.section-full,
section.section-half {
  opacity: 1;
  transform: translateY(0);
}

/*
 * 侧边导航样式已移除 - 现在使用Naive UI的n-drawer和n-affix组件
 * 原因：Naive UI提供了更好的原生抽屉和固定定位组件
 */

/*
 * 响应式设计已简化 - Naive UI组件自带响应式能力
 * 原因：n-drawer、n-affix等组件内置了响应式处理
 */

/* 组件相关的CSS已移至各自的组件文件中 */

/* 大量CSS样式已移至各个组件文件中，保持代码整洁 */
/* 区域分段样式 */
.section-full {
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.section-half {
  min-height: 80vh;
  padding: 100px 0;
}

/* Hero Banner相关样式已移至HeroSection组件 */

/* 所有Hero Banner相关样式已移至HeroSection组件 */

/* CTA按钮样式已移至各个组件 */

/* 轮播控制相关样式已移至HeroSection组件 */
/* 服务导航相关样式已移至BusinessSection组件 */
/* 通用样式已移至各个组件 */

/* 关于我们区域样式已移至AboutSection组件 */
/* 继续移除关于我们区域的CSS */
/* 主要服务展示相关样式已移至BusinessSection组件 */
/* 继续移除业务服务相关CSS */

/* 技术能力展示相关样式已移至TechnologySection组件 */

/* 继续移除技术相关CSS */
/* 大量组件相关CSS已移至各自的组件文件中 */

/*
 * 回到顶部按钮样式已移除 - 现在使用Naive UI的n-back-top组件
 * 原因：Naive UI提供了功能完整的原生回到顶部组件，包含平滑滚动和自动显示/隐藏
 */

/* 成功案例相关样式已移至CasesSection组件 */

/* 所有组件相关的CSS样式已移至各自的组件文件中，保持代码整洁和模块化 */
/* 新闻动态相关样式已移至NewsSection组件 */
/* 联系我们相关样式已移至ContactSection组件 */

/*
 * 移动端响应式设计已简化 - 主要依赖Naive UI组件的内置响应式能力
 * 保留必要的布局样式，其他交给Naive UI处理
 */
@media (max-width: 768px) {
  .section-half {
    min-height: 60vh;
    padding: 60px 0;
  }
}

/* 大量响应式CSS已移至各个组件 */
/* 所有响应式CSS已移至各个组件 */

/* 移动端响应式CSS已移至各个组件 */

/* 小屏幕响应式CSS已移至各个组件 */


</style>

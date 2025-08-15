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

    <!-- 右侧页面导航指示器 - 使用Intersection Observer API -->
    <n-affix
      :trigger-top="100"
      position="fixed"
      style="
        right: 30px;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1000;
      "
    >
      <n-space vertical :size="8">
        <n-button
          v-for="(section, index) in sections"
          :key="section"
          circle
          size="small"
          :type="currentSection === index ? 'primary' : 'default'"
          @click="scrollToSection(section)"
          :title="getSectionName(section)"
          style="
            width: 24px;
            height: 24px;
            min-width: 24px;
            padding: 6px;
          "
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

    <!-- 侧边导航触发按钮 - 使用正确的 n-affix 属性（仅小屏显示） -->
    <n-affix
      class="side-nav-trigger"
      :trigger-top="200"
      position="fixed"
      style="
        right: 16px;
        bottom: 24px;
        z-index: 1000;
      "
    >
      <n-button
        circle
        type="primary"
        aria-label="打开导航菜单"
        @click="showSideNav = true"
        style="width: 48px; height: 48px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);"
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
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import BusinessSection from '@/components/sections/BusinessSection.vue'
import TechnologySection from '@/components/sections/TechnologySection.vue'
import CasesSection from '@/components/sections/CasesSection.vue'
import TrustBuildingSection from '@/components/sections/TrustBuildingSection.vue'
import NewsSection from '@/components/sections/NewsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import { useActiveSection } from '@/views/website/_shared/useActiveSection'

const { t, locale } = useI18n()
const { activeSection, setActiveSection } = useActiveSection()

// 滚动相关状态
const scrollProgress = ref(0)
const showSideNav = ref(false)

// 组件引用
const heroRef = ref(null)

// 轮播相关函数已移至HeroSection组件

// 页面section配置和当前激活状态
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

// 语言切换时，为首页添加淡入过渡效果
watch(() => locale.value, async () => {
  const root = document.querySelector('.home-page')
  if (root) {
    root.classList.add('locale-switching')
    // 短暂等待下一帧再移除，触发过渡
    await nextTick()
    setTimeout(() => root.classList.remove('locale-switching'), 300)
  }
})

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
  scrollToSection('contact')
}

const handleTechConsultation = (serviceType) => {
  scrollToSection('contact')
}

// Intersection Observer API - 现代滚动检测方案
let intersectionObserver = null
const visibleSections = new Map() // 存储当前可见的sections

const initIntersectionObserver = () => {
  // 创建Intersection Observer实例
  intersectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.id
        const sectionIndex = sections.value.indexOf(sectionId)

        if (entry.isIntersecting) {
          // section进入视窗
          visibleSections.set(sectionId, {
            index: sectionIndex,
            intersectionRatio: entry.intersectionRatio,
            boundingRect: entry.boundingClientRect
          })
        } else {
          // section离开视窗
          visibleSections.delete(sectionId)
        }

        // 更新当前激活的section
        updateCurrentSection()
      })
    },
    {
      // 配置选项
      root: null, // 使用视窗作为根
      rootMargin: '-20% 0px -20% 0px', // 上下各留20%的边距，确保section充分进入视窗才激活
      threshold: [0, 0.1, 0.5, 0.9, 1.0] // 多个阈值，提供更精确的检测
    }
  )

  // 观察所有section元素
  sections.value.forEach(sectionId => {
    const element = document.getElementById(sectionId)
    if (element) {
      intersectionObserver.observe(element)
    }
  })
}

const updateCurrentSection = () => {
  if (visibleSections.size === 0) {
    return
  }

  // 如果只有一个可见section，直接激活它
  if (visibleSections.size === 1) {
    const [sectionData] = visibleSections.values()
    currentSection.value = sectionData.index
    setActiveSection(sections.value[currentSection.value])
    return
  }

  // 如果有多个可见section，选择最靠近视窗中心的
  let bestSection = null
  let bestScore = -1

  visibleSections.forEach((sectionData, sectionId) => {
    const rect = sectionData.boundingRect
    const viewportHeight = window.innerHeight
    const viewportCenter = viewportHeight / 2

    // 计算section中心点与视窗中心的距离
    const sectionCenter = rect.top + rect.height / 2
    const distanceFromCenter = Math.abs(sectionCenter - viewportCenter)

    // 综合考虑intersection ratio和距离中心的远近
    const score = sectionData.intersectionRatio * (1 - distanceFromCenter / viewportHeight)

    if (score > bestScore) {
      bestScore = score
      bestSection = sectionData
    }
  })

  if (bestSection) {
    currentSection.value = bestSection.index
    setActiveSection(sections.value[currentSection.value])
  }
}

// 简化的滚动功能 - 主要处理进度条和回到顶部按钮
const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight

  // 更新滚动进度
  scrollProgress.value = (scrollTop / scrollHeight) * 100
}

// 滚动劫持功能已移除，改用自然滚动


const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })

    // 手动更新当前section（点击时立即更新，不等待Intersection Observer）
    const sectionIndex = sections.value.indexOf(sectionId)
    if (sectionIndex !== -1) {
      currentSection.value = sectionIndex
      setActiveSection(sections.value[currentSection.value])
    }
  }
  showSideNav.value = false
}


// 获取区域名称
const getSectionName = (sectionId) => {
  return t(`navigation.${sectionId}`) || sectionId
}

// 键盘导航功能已简化，移除滚动劫持

onMounted(() => {
  // 添加滚动监听
  window.addEventListener('scroll', handleScroll)

  // 初始化Intersection Observer
  nextTick(() => {
    initIntersectionObserver()
  })


})

onUnmounted(() => {
  // 移除滚动监听
  window.removeEventListener('scroll', handleScroll)

  // 清理Intersection Observer
  if (intersectionObserver) {
    intersectionObserver.disconnect()
    intersectionObserver = null
  }

  // 清理可见sections记录
  visibleSections.clear()
})

</script>

<style scoped>
/* 首页样式 - 华天科技风格 */
.home-page {
  width: 100%;
  font-family: "Microsoft YaHei", "PingFang SC", "Helvetica Neue", Arial, sans-serif;
  transition: opacity 0.3s ease;
}
.home-page.locale-switching {
  opacity: 0;
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
/* 区域分段样式 - 统一间距管理 */
.section-full {
  min-height: 100vh;
  display: flex;
  align-items: center;
  /* Hero Section 不需要额外padding，由组件内部控制 */
}

.section-half {
  /* 移除重复的padding设置，由各个section组件内部统一管理 */
  /* padding: 100px 0; - 已移除，避免双重间距 */
  /* min-height: 80vh; - 移除固定高度，让内容自然撑开 */
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


/* 侧边导航触发按钮响应式显示：
 * - <=1024px 显示
 * - >1024px 隐藏
 */
.side-nav-trigger {
  display: block;
  position: fixed !important;
  right: 16px !important;
  bottom: 24px !important;
  left: auto !important;
  top: auto !important;
  z-index: 1000;
}

@media (min-width: 1025px) {
  .side-nav-trigger {
    display: none !important;
  }
}


</style>

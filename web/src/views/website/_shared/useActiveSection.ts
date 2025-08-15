import { ref } from 'vue'

// 官网域内的导航激活状态共享（避免改动全局 pinia）
const activeSection = ref<string>('home')

export function useActiveSection() {
  const setActiveSection = (key: string) => {
    if (typeof key === 'string' && key) {
      activeSection.value = key
    }
  }
  const getActiveSection = () => activeSection.value
  return { activeSection, setActiveSection, getActiveSection }
}


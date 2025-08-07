export * from './theme.json'
import themeConfig from './theme.json'

// 导出网站主题配置，提供默认值作为降级处理
export const websiteThemeOverrides = themeConfig.websiteThemeOverrides || {
  common: {
    primaryColor: "#1e3a8a",
    primaryColorHover: "#1e40af",
    primaryColorPressed: "#1e3a8a",
    textColorBase: "#374151",
    backgroundColor: "#ffffff",
    borderColor: "#e5e7eb",
    borderRadius: "6px",
    fontSize: "14px",
    lineHeight: "1.6"
  }
}

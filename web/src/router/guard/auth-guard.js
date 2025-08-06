import { getToken, isNullOrWhitespace } from '@/utils'

const WHITE_LIST = ['/login', '/404']
export function createAuthGuard(router) {
  router.beforeEach(async (to) => {
    const token = getToken()

    // 检查路由是否需要认证
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth !== false)

    /** 没有token的情况 */
    if (isNullOrWhitespace(token)) {
      // 如果在白名单中或者不需要认证，允许访问
      if (WHITE_LIST.includes(to.path) || !requiresAuth) return true
      // 否则跳转到登录页
      return { path: '/login', query: { ...to.query, redirect: to.path } }
    }

    /** 有token的情况 */
    if (to.path === '/login') {
      // 登录后跳转到管理系统
      return { path: '/admin/workbench' }
    }
    return true
  })
}

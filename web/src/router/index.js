import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import { setupRouterGuard } from './guard'
import { basicRoutes, EMPTY_ROUTE, NOT_FOUND_ROUTE } from './routes'
import { getToken, isNullOrWhitespace } from '@/utils'
import { useUserStore, usePermissionStore } from '@/store'

const isHash = import.meta.env.VITE_USE_HASH === 'true'
export const router = createRouter({
  history: isHash ? createWebHashHistory('/') : createWebHistory('/'),
  routes: basicRoutes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export async function setupRouter(app) {
  await addDynamicRoutes()
  setupRouterGuard(router)
  app.use(router)
}

export async function resetRouter() {
  const basicRouteNames = getRouteNames(basicRoutes)
  router.getRoutes().forEach((route) => {
    const name = route.name
    if (!basicRouteNames.includes(name)) {
      router.removeRoute(name)
    }
  })
}

export async function addDynamicRoutes() {
  const token = getToken()

  // 总是添加NOT_FOUND_ROUTE，确保404页面正常工作
  if (!router.hasRoute(NOT_FOUND_ROUTE.name)) {
    router.addRoute(NOT_FOUND_ROUTE)
  }

  // 没有token情况 - 只需要企业官网路由，不需要添加EMPTY_ROUTE
  if (isNullOrWhitespace(token)) {
    return
  }

  // 有token的情况 - 加载管理系统路由
  const userStore = useUserStore()
  const permissionStore = usePermissionStore()
  !userStore.userId && (await userStore.getUserInfo())
  try {
    const accessRoutes = await permissionStore.generateRoutes()
    await permissionStore.getAccessApis()
    accessRoutes.forEach((route) => {
      !router.hasRoute(route.name) && router.addRoute(route)
    })
    router.hasRoute(EMPTY_ROUTE.name) && router.removeRoute(EMPTY_ROUTE.name)
  } catch (error) {
    console.error('error', error)
    const userStore = useUserStore()
    await userStore.logout()
  }
}

export function getRouteNames(routes) {
  return routes.map((route) => getRouteName(route)).flat(1)
}

function getRouteName(route) {
  const names = [route.name]
  if (route.children && route.children.length) {
    names.push(...route.children.map((item) => getRouteName(item)).flat(1))
  }
  return names
}

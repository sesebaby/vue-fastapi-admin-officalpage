// import i18n from '~/i18n'
// const { t } = i18n.global

const Layout = () => import('@/layout/index.vue')
const WebsiteLayout = () => import('@/layout/website/index.vue')

export const basicRoutes = [
  {
    path: '/',
    name: 'Website',
    component: WebsiteLayout,
    children: [
      {
        path: '',
        component: () => import('@/views/website/home/index.vue'),
        name: 'Home',
        meta: {
          title: '苏州思普微电子科技有限公司 - 先进封装一站式服务',
          requiresAuth: false, // 不需要登录
        },
      },
      {
        path: 'news',
        component: () => import('@/views/website/news/index.vue'),
        name: 'NewsList',
        meta: {
          title: '新闻动态 - 苏州思普微电子科技有限公司',
          requiresAuth: false, // 不需要登录
        },
      },
    ],
    meta: { order: 0, requiresAuth: false },
  },
  {
    path: '/admin',
    redirect: '/admin/workbench', // 管理系统入口
    meta: { order: 0.5 },
  },
  {
    name: 'Workbench',
    path: '/admin/workbench',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/workbench/index.vue'),
        name: 'WorkbenchDefault',
        meta: {
          title: '工作台',
          icon: 'icon-park-outline:workbench',
          affix: true,
          requiresAuth: true, // 需要登录
        },
      },
    ],
    meta: { order: 1, requiresAuth: true },
  },
  {
    name: 'Profile',
    path: '/admin/profile',
    component: Layout,
    isHidden: true,
    children: [
      {
        path: '',
        component: () => import('@/views/profile/index.vue'),
        name: 'ProfileDefault',
        meta: {
          title: '个人资料',
          icon: 'user',
          affix: true,
          requiresAuth: true,
        },
      },
    ],
    meta: { order: 99, requiresAuth: true },
  },
  {
    name: 'ErrorPage',
    path: '/admin/error-page',
    component: Layout,
    redirect: '/admin/error-page/404',
    meta: {
      title: '错误页面',
      icon: 'mdi:alert-circle-outline',
      order: 99,
      requiresAuth: true,
    },
    children: [
      {
        name: 'ERROR-401',
        path: '401',
        component: () => import('@/views/error-page/401.vue'),
        meta: {
          title: '401',
          icon: 'material-symbols:authenticator',
        },
      },
      {
        name: 'ERROR-403',
        path: '403',
        component: () => import('@/views/error-page/403.vue'),
        meta: {
          title: '403',
          icon: 'solar:forbidden-circle-line-duotone',
        },
      },
      {
        name: 'ERROR-404',
        path: '404',
        component: () => import('@/views/error-page/404.vue'),
        meta: {
          title: '404',
          icon: 'tabler:error-404',
        },
      },
      {
        name: 'ERROR-500',
        path: '500',
        component: () => import('@/views/error-page/500.vue'),
        meta: {
          title: '500',
          icon: 'clarity:rack-server-outline-alerted',
        },
      },
    ],
  },
  {
    name: '403',
    path: '/403',
    component: () => import('@/views/error-page/403.vue'),
    isHidden: true,
  },
  {
    name: '404',
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    isHidden: true,
  },
  {
    name: 'Login',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    isHidden: true,
    meta: {
      title: '登录页',
    },
  },
]

export const NOT_FOUND_ROUTE = {
  name: 'NotFound',
  path: '/:pathMatch(.*)*',
  redirect: '/404',
  isHidden: true,
}

export const EMPTY_ROUTE = {
  name: 'Empty',
  path: '/:pathMatch(.*)*',
  component: null,
}

const modules = import.meta.glob('@/views/**/route.js', { eager: true })
const asyncRoutes = []
Object.keys(modules).forEach((key) => {
  asyncRoutes.push(modules[key].default)
})

// 加载 views 下每个模块的 index.vue 文件
const vueModules = import.meta.glob('@/views/**/index.vue')

export { asyncRoutes, vueModules }

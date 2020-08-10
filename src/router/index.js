import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/login'
// import Layout from '@/layout'

Vue.use(Router)
// const dashboard = resolve => require(['@/views/dashboard/index'], resolve)
// 使用了vue-router的[Lazy Loading Routes](https://router.vuejs.org/en/advanced/lazy-loading.html)

// 所有权限通用路由表
// 如首页和登录页和一些不用权限的公用页面
export const constantRouterMap = [
  { path: '/login', component: Login },
  {
    path: '/a', component: HelloWorld
  },
  {
    path: '/',
    // component: Layout,
    redirect: '/dashboard',
    name: '首页',
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      name: 'Dashboard',
      meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
    }]
  }
]

// 实例化vue的时候只挂载constantRouter
export default new Router({
  routes: constantRouterMap
})

// 异步挂载的路由
// 动态需要根据权限加载的路由表
export const asyncRouterMap = [
  {
    path: '/permission',
    // component: Layout,
    name: '权限测试',
    meta: { role: ['admin', 'super_editor'] }, // 页面需要的权限
    children: [
      {
        path: 'index',
        // component: Permission,
        name: '权限测试页',
        meta: { role: ['admin', 'super_editor'] } // 页面需要的权限
      }]
  },
  { path: '*', redirect: '/404', hidden: true }
]

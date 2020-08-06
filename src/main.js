// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import store from 'store'

// import { mockXHR } from '../mock'
// require('../mock')

if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  console.log('生产')
  mockXHR()
}
Vue.prototype.$axios = axios
Vue.config.productionTip = false

// main.js
router.beforeEach((to, from, next) => {
  console.log(store)
  console.log(store.getter)
  console.log(store.getter.token)
  if (store.getters.token) { // 判断是否有token
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息
        store.dispatch('GetInfo').then(res => { // 拉取info
          const roles = res.data.role
          store.dispatch('GenerateRoutes', { roles }).then(() => { // 生成可访问的路由表
            router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
            next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
          })
        }).catch(err => {
          console.log(err)
        })
      } else {
        next() // 当有用户权限的时候，说明所有可访问路由已生成 如访问没权限的全面会自动进入404页面
      }
    }
  } else {
    // if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
    //   next()
    // } else {
    next('/login') // 否则全部重定向到登录页
    // }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

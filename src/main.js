// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
// import { mockXHR } from '../mock'
// require('../mock')

if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  console.log('生产')
  mockXHR()
}
Vue.prototype.$axios = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

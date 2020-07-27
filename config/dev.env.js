'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://192.168.11.43:8066/"', //修改为'"https://api-prod"'就行了
  APP_ORIGIN: '"https://wallstreetcn.com"' //为公司打个广告 pc站为vue+ssr
})

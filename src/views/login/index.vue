<template>
  <div>
    用户名：<input type="text">
    密码：<input type="text">
    <button @click="gologin">登录</button>
  </div>
</template>
<script>
import Cookies from 'js-cookie'

export default{
  methods: {
    gologin () {
      Cookies.set('Token', '1111') // 登录成功后将token存储在cookie之中
      // commit('SET_TOKEN', data.token)
    }
  }
}
</script>

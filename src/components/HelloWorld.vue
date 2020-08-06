<template>
  <div class="hello">
    测试页面
  </div>
</template>

<script>
// import { get, post} from '@/utils/request'
import axios from 'axios'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created: function () {
    // get('/api/shopping-cart', {})
    axios
      .post('http://localhost:8090/mode2/DataOne', {

      })
      .then(res => {
        console.log('数据是:', res)
      })
      .catch((e) => {
        console.log('获取数据失败')
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

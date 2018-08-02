<template>
  <div id="footers">
    <h2>{{ msg }}</h2>
    <ul>
      <li v-for="item in items">
        {{ item.message }}
      </li>
    </ul>
    <button @click="clickP">点击发送到父级数据</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'my-footer', // 不能设定为 html 标签名
  data () {
    return {
      msg: 'footer',
      items: [
        { message: 'foo' },
        { message: 'bar' },
        { message: 'bar' }
      ],
      myP: '我要向父组件通信！'
    }
  },
  methods: {
    clickP: function () {
      this.$emit('tell-me', this.myP)

      axios.get('/?ID=12345')
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}

</script>

<style scoped>

</style>

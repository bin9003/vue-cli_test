<template>
  <div id="comp">
    <h3>{{ msg }}--- {{ myH }}</h3>
    <div v-if="myHOnOff">{{ myHvul}}</div>
  </div>
</template>

<script>
export default {
  name: 'my-header',
  data () {
    return {
      msg: 'header',
      myHvul: '内容是否显示',
      myHOnOff: true
    }
  },
  props: ['myH']
}
</script>

<style scoped>

</style>

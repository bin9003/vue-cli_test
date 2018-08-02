<template>
  <div id="hello">
    <div @click="reversedMessage(num)">{{ msg }}----- {{ num }}</div>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'App--------------2',
      num: 1,
      ok: true
    }
  },
  methods: {
    reversedMessage: function (v) {
      return v++
    }
  }
}

</script>

<style scoped>

</style>

<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <my-header :myH="myHVul"></my-header>
    <router-view/>
    <my-footer @tell-me="listenerMsg"></my-footer>
    <div>{{ msg }}</div>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>
    <br>
    <span>Checked names: {{ checkedNames }}</span>
  </div>
</template>

<script>
import myHeader from './components/my-header'
import myFooter from './components/my-footer'

export default {
  name: 'App',
  data () {
    return {
      msg: '1',
      myHVul: 'i am vuejss',
      checkedNames: []
    }
  },
  components: {
    'my-header': myHeader,
    'my-footer': myFooter
  },
  methods: {
    listenerMsg: function (w) {
      this.msg = w
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

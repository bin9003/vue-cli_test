import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'

import HelloWorld from '@/components/HelloWorld'
import comp from '@/components/comp'
import hello from '@/components/hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'comp',
      component: comp,
      children: [
        {
          path: 'comp',
          name: 'comp',
          component: comp,
          params: { userId: 123 }
        }
      ]

    },
    {
      path: '/',
      name: 'hello',
      component: hello,
      children: [
        {
          path: 'hello',
          name: 'hello',
          component: hello
        }
      ]

    }
  ]
})

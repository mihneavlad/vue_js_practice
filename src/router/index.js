import Vue from 'vue'
import Router from 'vue-router'
import Lumas from '@/components/Lumas'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'Lumas',
      component: Lumas
    }
  ]
})

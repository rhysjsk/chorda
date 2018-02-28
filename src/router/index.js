import Vue from 'vue'
import Router from 'vue-router'
import Workshop from '@/components/Workshop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Workshop',
      component: Workshop
    }
  ]
})

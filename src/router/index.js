import Vue from 'vue'
import Router from 'vue-router'
import ActivitiesList from '@/components/ActivitiesList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ActivitiesList',
      component: ActivitiesList
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import ActivitiesList from '@/components/ActivitiesList'
import AddActivity from '@/components/AddActivity'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ActivitiesList',
      component: ActivitiesList
    },
    {
      path: '/add',
      name: 'AddActivity',
      component: AddActivity
    },
    {
      path: '*',
      redirect: {
        name: '404'
      }
    },
    {
      path: '/404',
      name: '404',
      component: NotFound
    }
  ]
})

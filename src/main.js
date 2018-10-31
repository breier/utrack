// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VueIdb from 'vue-idb'

Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.use(VueIdb)

const idb = new VueIdb({
  version: 1,
  database: 'utrack',
  schemas: [
    { activities: '++id, type, uses, action, comment, datetime' },
    { types: '++id, text' },
    { uses: '++id, typeID, text' },
    { action: '++id, useID, text' }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  idb: idb,
  router,
  components: { App },
  template: '<App/>'
})

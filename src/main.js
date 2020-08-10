// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueGlide from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css'

import router from './router'

Vue.config.productionTip = false

Vue.use(VueGlide)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

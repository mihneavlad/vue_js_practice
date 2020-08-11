// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Lumas from './components/Lumas'
import VueGlide from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretLeft, faCaretRight, fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

library.add(faCaretLeft, faCaretRight, fas)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueGlide)

Vue.use(BootstrapVue)

Vue.use(IconsPlugin)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App, Lumas },
  template: '<App/>'
})

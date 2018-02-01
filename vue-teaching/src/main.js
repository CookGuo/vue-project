import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/base/border.css'
import '@/assets/base/reset.css'
import '@/assets/base/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'
import FastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from '@/pages/store/index.js'
import VueLazyload from 'vue-lazyload'

FastClick.attach(document.body)
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload, {
  preLoad: 1.2,
  error: '/src/assets/img/error.gif',
  loading: '/src/assets/img/error.gif',
  attempt: 1
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

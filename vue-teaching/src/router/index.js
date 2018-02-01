import Vue from 'vue'
import Router from 'vue-router'
import Detail from '@/pages/detail/index.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: () => import('@/pages/index/index.vue')
  }, {
    path: '/city',
    name: 'city',
    component: (resolve) => { require(['@/pages/city/index.vue'], resolve) }
  }, {
    path: '/detail/:id',
    name: 'detail',
    component: Detail
  }]
})

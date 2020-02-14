import Vue from 'vue'
import VueRouter from 'vue-router'
import A from '../views/A.vue'
import B from '../views/B.vue'
import C from '../views/C.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/A',
    name: 'A',
    component: A
  },
  {
    path: '/B',
    name: 'B',
    component: B
  },
  {
    path: '/C',
    name: 'C',
    component: C
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

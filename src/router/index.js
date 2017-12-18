import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import login from '../components/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      meta:{
        title:'欢迎'
      },
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      meta:{
        title:'登录页'
      },
      component: login
    }
  ]
})

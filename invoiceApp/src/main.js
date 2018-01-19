// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import axios from './lib/ajax'
import Util from './lib/util'
import VueRouter from 'vue-router'
import {routers} from './router'
import Cookies from 'js-cookie'
import Vuex from 'vuex';
import filters from './filters'
import App from './App'
import {AlertPlugin, ConfirmPlugin} from 'vux'
import {LoadingPlugin} from 'vux'

Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));
Vue.prototype.$http = axios;
Vue.use(VueRouter)
Vue.use(Vuex);
Vue.use(AlertPlugin);
Vue.use(ConfirmPlugin);
Vue.use(LoadingPlugin)


/*状态管理*/
const store = new Vuex.Store({
  state: {
    userInfo: {},
    netConfig: {
      timeOut: '5000',
      baseURL: '',
      headers: {
        contentType: "application/json;charset=utf-8",
        ticket: ""
      }
    }
  },
  getters: {},
  mutations: {
    initNetWork(state, obj) {
      obj.url ? state.netConfig.baseURL = obj.url : '';
      obj.ticket ? state.netConfig.headers.ticket = obj.ticket : '';
      axios.init(state.netConfig)
    },
    getTicket(state) {
      state.netConfig.headers.ticket = Cookies.get('ticket')
      axios.init(state.netConfig)
    },
    setName(state, name) {
      if (!Cookies.get('name') || Cookies.get('name') === 'undefined') {
        Cookies.set('name', name);
        state.userInfo.name = name;
      } else {
        state.userInfo.name = Cookies.get('name');
      }
    }
  }
});


//路由控制

const RouterConfig = {
  // mode: 'history',
  routes: routers
}

const router = new VueRouter(RouterConfig)


router.beforeEach((to, from, next) => {
  console.log(5555555,"show")
  Vue.$vux.loading.show({
    text: 'Loading'
  })


  Util.title(to.meta.title);
  if (!Cookies.get('ticket') && to.name !== 'login' && to.name !== 'signin') {  // 判断当前是否登录
    console.log(1)
    // setTimeout(MintUI.Indicator.close,100)
    next({
      name: 'login'
    });
  } else if (Cookies.get('ticket') && (to.name === 'login' || to.name === 'signin')) {
    // setTimeout(MintUI.Indicator.close,100)
    console.log(2)
    next({
      name: "home"
    });
  } else {
    // MintUI.Indicator.open({
    //   text: '加载中...',
    //   spinnerType: 'fading-circle'
    // });
    console.log(3)
    next()
  }
});

router.afterEach(() => {
  console.log(5555555,"hide")

  Vue.$vux.loading.hide()
  // setTimeout(MintUI.Indicator.close,100)
  window.scrollTo(0, 0);
});


document.addEventListener('deviceready', () => {
/*

  FastClick.attach(document.body);
  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
*/

})
FastClick.attach(document.body);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

/* eslint-disable no-new */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import iView from 'iview'
import Util from './lib/util'
import 'lib-flexible/flexible.js'
import Vuex from 'vuex';
import App from './App'
import Cookies from 'js-cookie'
import 'iview/dist/styles/iview.css'

/* eslint-disable no-new */
Vue.use(Vuex);
Vue.use(iView);
/*路由控制*/
router.beforeEach((to,from,next)=>{
  console.log(to.name)
  // iView.LoadingBar.start();
  Util.title(to.meta.title);
  if (!Cookies.get('user') && to.name !== 'login') {  // 判断当前是否登录
    // iView.LoadingBar.finish();
    console.log(1)
    next({
      name: 'login'
    });
  }else if (Cookies.get('user') && to.name === 'login') {
    console.log(2)
    next({
      name: 'HelloWorld'
    });
  }else{
    console.log(3)
    next()
  }

});

router.afterEach(() => {
  // iView.LoadingBar.finish();

  window.scrollTo(0, 0);
});

/*状态管理*/
const store = new Vuex.Store({
  state:{
    userInfo:{

    },
  },
  getters: {

  },
  mutations: {

  }
});


new Vue({
  el: '#app',
  router:router,
  store:store,
  render: h => h(App),
  data: {
    currentPageName: ''
  },
  mounted () {
    this.currentPageName = this.$route.name;
  },
  created () {
    Cookies.set('user','lrc')
  }
});

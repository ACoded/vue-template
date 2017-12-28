import Vue from 'vue'
import Router from 'vue-router'
import Util from '../lib/util'
import Cookies from 'js-cookie'
const login=resolve => { require(['@/components/login'], resolve);};
const signin=resolve => { require(['@/components/signin'], resolve);};
Vue.use(Router);

const router=new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta:{title:'首页'},
      component: login
    },
    {
      path: '/login',
      name: 'login',
      meta:{title:'登录'},
      component: login
    },
    {
      path: '/signin',
      meta:{title:'注册'},
      name: 'signin',
      component: signin
    }
  ]
});

/*路由控制*/
router.beforeEach((to,from,next)=>{
  console.log(to.name)
  // iView.LoadingBar.start();
  Util.title(to.meta.title);
  if (!Cookies.get('ticket')&& to.name !== 'login'&& to.name !== 'signin') {  // 判断当前是否登录
    // iView.LoadingBar.finish();
    console.log(1)
    next({
      name: 'login'
    });
  }else if (Cookies.get('ticket') && to.name === 'login'||Cookies.get('ticket') && to.name === 'signin') {
    console.log(2)
    next(/*{
      name:"home"
    }*/);
  }else{
    console.log(3)
    next()
  }

});

router.afterEach(() => {
  // iView.LoadingBar.finish();

  window.scrollTo(0, 0);
});

export default router;

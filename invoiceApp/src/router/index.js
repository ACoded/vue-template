export const home = [
  {
    path: '/',
    name: 'home1',
    meta: {title: '首页1'},
    component: resolve => {
      require(['@/views/home'], resolve);
    }
  },
  {
    path: '/home',
    name: 'home',
    meta: {title: '首页2'},
    component: resolve => {
      require(['@/views/home'], resolve);
    }
  }
];

export const login =
  [
    {
      path: '/login',
      name: 'login',
      meta: {title: '登录'},
      component: resolve => {
        require(['@/views/login/login'], resolve);
      }
    },
    {
      path: '/signin',
      meta: {title: '注册'},
      name: 'signin',
      component: resolve => {
        require(['@/views/login/signin'], resolve);
      }
    }
  ];
export const page404 = {
  path: '/*',
  name: 'error_404',
  meta: {
    title: '404-页面不存在'
  },
  component: resolve => {
    require(['@/views/errorPage/404.vue'], resolve);
  }
};

export const routers = [...home, ...login, page404];
// export const routers = [ {
//   path: '/',
//   name: 'HelloWorld',
//   component: resolve => {
//     require(['@/components/HelloFromVux'], resolve);
//   }
// }];

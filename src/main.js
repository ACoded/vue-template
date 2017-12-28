import Vue from 'vue'
import iview from 'iview'
import router from './router'
import Vuex from 'vuex';
import axios from './lib/ajax'
import flexible from 'lib-flexible'
import App from './App'
import Cookies from 'js-cookie'
import 'iview/dist/styles/iview.css'

Vue.use(flexible);
Vue.use(Vuex);
Vue.use(iview);
Vue.prototype.$http=axios;



/*状态管理*/
const store = new Vuex.Store({
  state:{
    userInfo:{

    },
    netConfig:{
      timeOut:'5000',
      baseURL:'',
      headers:{
        contentType:"application/json;charset=utf-8",
        ticket:""
      }
    }
  },
  getters: {

  },
  mutations: {
    initNetWork(state,obj){
      obj.url?state.netConfig.baseURL=obj.url:'';
      obj.ticket?state.netConfig.headers.ticket=obj.ticket:'';
      axios.init(state.netConfig)
    },
    getTicket(state){
      state.netConfig.headers.ticket=Cookies.get('ticket')
      axios.init(state.netConfig)
    }
  }
});



new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  beforeCreate(){
   this.$store.commit('getTicket')
  }
})

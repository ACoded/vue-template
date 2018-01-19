<style lang="less" scoped>
  @import 'login.less';
</style>
<template>
  <div id="sign" @click="register">
    <router-link to="/login">
      signin
    </router-link>
  </div>
</template>
<script>
  export default {

    data() {

      return {
        form: {yhid: '', yhmm: '', yhnc: "", yhmmqr: ""},

      }
    },
    created() {
      this.register()
    },
    methods: {
      register() {
        this.$http.post({
          url: 'http://10.254.2.68:8090/Dzpj/ClientActionServlet',
          actionHandler: "com.lanxum.dzpj.application.login.handler.RegisterHandler",
          actionMethod: "register",
          data: this.form
        }).then((res) => {
          console.log(res);
//              this.$vux.alert('注册成功，请前往登录！');
          this.$router.push({path: '/login', query: this.form});
        }).catch((err) => {
          this.$vux.alert.show({
            title: 'singin',
            content: err,
            onShow() {
              console.log('Plugin: I\'m showing')
            },
            onHide() {
              console.log('Plugin: I\'m hiding')
            }
          })
        })
        /*else {
         this.$Message.error('')
         }*/
      }
    }
  }
</script>

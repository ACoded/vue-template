<style lang="less" >
  @import 'login.less';
</style>
<template>
  <div class="login" @keydown.enter="login">
    <x-header id="header" :left-options="{backText: '',preventGoBack: false}">
      登录
    </x-header>
    <grid>
      <grid-item class="logoImg">
        <img  src="../../assets/logo.png">
      </grid-item>
    </grid>
    <grid>
      <grid-item class="userContainer">
        <group label-width="3em" label-margin-right="1.5em" label-align="right" class="userMsg">
          <x-input title="账号" placeholder="手机号/邮箱/会员名" v-model="form.yhid"></x-input>
          <x-input title="密码" type="password" placeholder="6+10位数字+英文密码" v-model="form.yhmm"></x-input>
        </group>
      </grid-item>
    </grid>
  </div>
  <!--
  网络请求方式
    this.$http.post({
    url:'',
    actionHandler: "",
    actionMethod: "",
    data: {},
    ContentType:""  //选填
    })
-->

</template>

<script>

  //http://10.254.2.17:8080/platform/frame/dmwh/dmAction.do?yhid=yangj&yhmm=f408e260b87a089b925516846cebe59c
  //<input type="hidden" name="msg" value="">
  //<input name="yhmm" type="password" class="text" value="" style="width: 90%;" onkeydown="keyDown(event);">

  //http://10.254.2.17:8080/platform/ClusterRemoteServlet  action_sso_ask_create_ticket

  //header:{FRAME_SSO_TICKET: ticket}
  import {Grid,GridItem, XHeader,GroupTitle, Group, XInput} from 'vux'
  import Cookies from "js-cookie"
  export default {
    components: {
      Grid,
      GridItem,
      Group,
      GroupTitle,
      XInput,
      XHeader
    },
    data() {
      return {
        form: {
            yhid: '',
            yhmm: '',
          showMenus: false
        },
      }
    },
    created() {

    },
    methods: {
      login() {
            if (!Cookies.get('ticket')) {
              this.$http.post({
                url: 'http://10.254.2.68:8090/Dzpj/ClientActionServlet',
                actionHandler: "com.lanxum.dzpj.application.login.handler.LoginHandler",
                actionMethod: "login",
                data: this.form
              }).then((res) => {
                Cookies.set('ticket', res.body.ticket);
                this.$store.commit('initNetWork', {ticket: res.body.ticket});
                this.$store.commit('setName', this.form.yhid);
                this.$router.push({path: '/home'})
              }).catch((err) => {
                this.$vux.alert.show({
                  title: 'login',
                  content:err,
                  onShow () {
                    console.log('Plugin: I\'m showing')
                  },
                  onHide () {
                    console.log('Plugin: I\'m hiding')
                  }
                })
              })
          }
          /*else {
            this.$Message.error('')
          }*/
      }
    }
  }
</script>



<style scoped>
  #login {
    padding-left: 200px;
  }

</style>

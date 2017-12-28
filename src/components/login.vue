<style lang="scss" scoped>
  @import 'login.scss';
</style>
<template>
  <div class="login" @keydown.enter="login">
    <div class="login-con">
      <Card :bordered="false">
        <p slot="title">
          <Icon type="log-in"></Icon>
          欢迎登录
        </p>
        <div class="form-con">
          <Form ref="loginForm" :model="form" :rules="rules"><!-- :rules="rules"-->
            <FormItem prop="yhid">
              <Input v-model="form.yhid">
              <span slot="prepend">
                  <Icon :size="16" type="person"></Icon>
              </span>
              </Input>
            </FormItem>
            <FormItem prop="yhmm">
              <Input v-model="form.yhmm">
              <span slot="prepend">
                <Icon :size="14" type="locked"></Icon>
              </span>
              </Input>
            </FormItem>
            <FormItem>
              <Button @click="login" type="primary" long>登录</Button>
            </FormItem>
          </Form>
          <p class="login-tip">输入用户名yangj和密码f408e260b87a089b925516846cebe59c，点击
            <router-link to="/signin">注册</router-link>
          </p>
        </div>
      </Card>
    </div>
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
  import Cookies from "js-cookie"

  export default {
    data() {
      return {
        form: {yhid: '', yhmm: ''},
        rules: {
          yhid: [
            {required: true, message: '账号不能为空', trigger: 'blur'}
          ],
          yhmm: [
            {required: true, message: '密码不能为空', trigger: 'blur'}
          ]
        }
      }
    },
    created() {

    },
    methods: {
      login() {
        this.$refs.loginForm.validate((valid) => {
          if (valid) {
            if (!Cookies.get('ticket')) {
              this.$http.post({
                url: '/api/Dzpj/ClientActionServlet',
                actionHandler: "com.lanxum.dzpj.application.login.handler.LoginHandler",
                actionMethod: "login",
                data: this.form
              }).then((res) => {
                Cookies.set('ticket', res.body.ticket);
                this.$store.commit('initNetWork', {ticket: res.body.ticket});
              }).catch((err) => {
                console.log(err, 222)
              })
            }
          }
          /*else {
            this.$Message.error('')
          }*/
        })
      }
    }
  }
</script>

<style scoped>
  #login {
    padding-left: 200px;
  }

</style>

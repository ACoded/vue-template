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

      }
    }})}}
  }
</script>

<style scoped>
  #login {
    padding-left: 200px;
  }

</style>

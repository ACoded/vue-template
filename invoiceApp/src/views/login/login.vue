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


</template>

<script>

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
           
      }
    }
  }
</script>



<style scoped>
  #login {
    padding-left: 200px;
  }

</style>

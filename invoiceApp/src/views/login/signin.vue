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
       
    }
    }
  }
</script>

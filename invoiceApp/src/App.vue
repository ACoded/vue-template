<template>
  <div id="app">
    <transition name="slide-left">

    <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted() {
    document.addEventListener(
      "backbutton",
      () => {
        this.$router.go(-1)
      },
      false);

/*
    navigator.app.overrideButton("menubutton", true);

    document.addEventListener(
      "menubutton",
      () => {
        //菜单键
      },
      false);*/

  },
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>

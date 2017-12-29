<template>
  <div id="app">
    <transition>
      <router-view/>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {}
    }
  }
</script>

<style>
  #app {
    font-size: 16px;

    height: 100%;
  }


  [data-dpr="2"] #app {
    font-size: 16px;
  }

  [data-dpr="3"] #app {
    font-size: 16px;
  }

</style>

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {

    }
  }
}
</script>

<style>
#app {
  font-size: 1rem;
  height: 100%;
}

[data-dpr="1"] #app {
  font-size: 16px;
}
[data-dpr="2"] #app {
  font-size: 16px;
}
[data-dpr="3"] #app {
  font-size: 16px;
}

</style>

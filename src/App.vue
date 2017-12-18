<template>
  <div id="contain">
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#contain{
  font-size: 16px;
}
[data-dpr="2"] #contain {
  font-size:16px;
}

[data-dpr="3"] #contain {
  font-size:16px;
}

</style>

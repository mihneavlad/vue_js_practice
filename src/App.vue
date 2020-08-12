<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Lumas/>
  </div>
</template>


<script>

import Lumas from "./components/Lumas";

export default {
  name: 'app',
  components: {
    Lumas
  }
}
</script>


















<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

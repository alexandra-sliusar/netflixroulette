<template>
  <div id="app">
    <HelloWorld msg="Welcome to Netflix Roulette App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFFFFF;

}

html {
  background-color: #555555;
  width: 100%;
  height: 100%;
}
</style>

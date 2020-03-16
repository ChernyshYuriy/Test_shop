<template>
  <div id="app">
    <main_wrapper></main_wrapper>
    <img src="" alt="">
  </div>
</template>

<script>
import main_wrapper from './components/main_wrapper'

export default {
  name: 'app',
  components:{
    main_wrapper
    }
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
  height: 100%;
}

</style>

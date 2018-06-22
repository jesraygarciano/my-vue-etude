<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <h1>Word Translate</h1>
    <h5>Powered by Vue.js</h5>
    <TranslateForm v-on:formSubmit="translateText"></TranslateForm>
  </div>
</template>

<script>
import TranslateForm from './components/TranslateForm'

export default {
  name: 'App',
  components: {
    TranslateForm
  },
  methods: {
    translateText: function(text){

    }
  }
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
</style>

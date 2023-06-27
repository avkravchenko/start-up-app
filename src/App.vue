<template>
  <div id="app">
    <AppHeader />
    <AppMain />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';


export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    AppFooter
  }
}
</script>

<style>
  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow: hidden;
  }
</style>

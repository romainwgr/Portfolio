<template>
  <div id="app">
    <Header />
    <RouterView />
  </div>
</template>

<script>
import Header from './components/sections/HeaderSection.vue';

export default {
  components: {
    Header
  },
};
</script>

<style>
@import './style.css';
</style>

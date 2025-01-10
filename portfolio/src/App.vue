<template>
  <div id="app">
    <Header />
    <main>
      <Presentation />
      <Competences />
      <Projet />
    </main>
  </div>
</template>

<script>
import Header from './components/sections/HeaderSection.vue';
import Presentation from './components/sections/PresentationSection.vue';
import Competences from './components/sections/CompetencesSection.vue';
import Projet from './components/sections/ProjetsSection.vue';

export default {
  components: {
    Header,
    Presentation,
    Competences,
    Projet,
  },
};
</script>

<style>
@import './style.css';
</style>

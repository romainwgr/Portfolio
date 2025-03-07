<template>
    <main>
      <Presentation />
      <Competences />
      <Projet />
      <Experience />
    </main>
  </template>
  
  <script>
  import Presentation from '../components/sections/PresentationSection.vue';
  import Competences from '../components/sections/CompetencesSection.vue';
  import Projet from '../components/sections/ProjetsSection.vue';
  import Experience from '../components/sections/ExperienceSection.vue';
  
  export default {
    components: {
      Presentation,
      Competences,
      Projet,
      Experience
    }
  };
  </script>
  
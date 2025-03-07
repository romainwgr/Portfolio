<template>
    <section class="projects-section container" id="projets">
      <h1 class="espacement">Mes Expériences</h1>
  
  
      <RouterLink to="/peuty" class="project-card">
            <ProjetComponent
                :title="'Peuty SAS'"
                :img="require('@/assets/img/peuty_logo.png')" 
                :description="'Stagiaire développeur d\'applications mobiles'"
                :techno="[
                { name: 'Flutter', img: require('@/assets/img/flutter.png') },
                { name: 'Dart', img: require('@/assets/img/dart.png') },
                { name: 'Firebase', img: require('@/assets/img/firebase.png') }
                ]"
            />
      </RouterLink>

    </section>
  </template>
  
  <script>
  import ProjetComponent from "@/components/components/ProjetComponent.vue";
  
  export default {
    components: {
      ProjetComponent,
    },
    data() {
      return {
        projects: [
          {
            title: "Peuty SAS",
            img: require('@/assets/img/peuty_logo.png'),
            description: "Stagiaire développeur d'applications mobiles",
            techno: [
              {
                name: "Flutter",
                img: require("@/assets/img/flutter.png"), 
              },
              {
                name: "Dart",
                img: require("@/assets/img/dart.png"), 
              },
              {
                name: "Firebase",
                img: require("@/assets/img/firebase.png"), 
              },
            ]
            }
        ],
      };
    },
    
  };
  </script>
  
  <style scoped>
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 100px; 
    justify-content: center;
    align-items: start; 
    padding: 50px; 
    max-width: 900px;
    margin: 0 auto; 
  }
  #projets {
    scroll-margin-top: 80px; /* Ajuste cette valeur à la hauteur de ta navbar */
  }
  
  
  
  </style>
  
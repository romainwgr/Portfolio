<template>
    <div class="projet-item">
      <a :href="link" target="_blank" rel="noopener noreferrer">
        <img :src="img" :alt="title" class="imgprojet" />
      </a>
  
      <h4>{{ title }}</h4>
      <p>{{ description }}</p>
  
      <h5>Technos utilisées :</h5>
      <div class="techno-list">
        <!-- Boucle sur les technologies -->
        <IconeComponent
          v-for="tech in techno"
          :key="tech.name"
          :src="tech.img"
          :alt="tech.name"
          :text="tech.name"
        />
      </div>
    </div>
  </template>
  
  <script>
  import IconeComponent from '@/components/components/IconeComponent.vue';
  
  export default {
    components: {
      IconeComponent,
    },
    props: {
      title: {
        type: String,
        required: true,
      },
      img: {
        type: String,
        required: true,
      },
      link: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      techno: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .projet-item {
    width: 400px;
    margin: 0 auto; /* Centre horizontalement */
    text-align: center;
    background-color: var(--body-color-darker);
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optionnel : ajout d'un effet de profondeur */
    display: flex; /* Ajout de flexbox */
    flex-direction: column; /* Aligne les éléments verticalement */
    justify-content: center; /* Centre le contenu verticalement */
    align-items: center; /* Centre le contenu horizontalement */
  }
  
  .imgprojet {
    width: 400px;
    border-radius: 10px 10px 0 0;
    transition: transform 0.3s;
  }
  
  .imgprojet:hover {
    transform: scale(1.05);
  }
  
  .techno-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    margin-top: 10px;
  }
  </style>
  
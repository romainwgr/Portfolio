<template>
    <div class="picture-container">
      <h2>{{ title }}</h2>
  
      <!-- Vérifie si une image est fournie -->
      <img v-if="imgSrc" :src="imgSrc" :alt="title" class="picture-image" />
  
      <p>{{ description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      imgSrc: { // ✅ Ajout de l'image
        type: String,
        required: false,
        default: null
      },
      description: {
        type: String,
        required: false,
        default: ""
      }
    }
  };
  </script>
  
  <style scoped>
  .picture-container {
    text-align: center;
    margin: 20px auto;
    padding: 15px;
    border: 1px solid grey;
    border-radius: 10px;
    max-width: 650px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .picture-image {
    width: 100%;
    max-width: 560px;
    height: auto; 
    max-height: 500px; 
    object-fit: cover;
    border-radius: 10px;
    margin-top: 10px;
}

  </style>
  
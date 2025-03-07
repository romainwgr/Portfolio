<template>
    <div class="video-container">
      <h2>{{ title }}</h2>
  
      <!-- Vérifie si une vidéo est fournie -->
      <video v-if="videoSrc" controls class="video-player">
        <source :src="videoSrc" type="video/mp4">
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>
  
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
      videoSrc: { // ✅ Ajout de la vidéo
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
  .video-container {
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
  
  .video-player {
    width: 100%;
    max-width: 700px;
    border-radius: 10px;
    margin-top: 10px;
  }
  </style>
  
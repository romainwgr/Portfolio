<template>
    <div class="audio-container">
      <h2>{{ title }}</h2>
      
      <img :src="imgSrc" :alt="title" class="audio-image" />
      <br>

      <audio controls class="audio-player">
        <source :src="audioSrc" type="audio/mpeg">
        Votre navigateur ne supporte pas l'élément audio.
      </audio>

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
    imgSrc: { 
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false,
      default: ""
    },
    audioSrc: {
      type: String,
      required: true
    }
  }
};
</script>
  
<style scoped>
.audio-container {
  text-align: center;
  margin: 20px auto; 
  padding: 15px;
  border: 1px solid grey;
  border-radius: 10px;
  display: block; 
  max-width: 650px; 
}


.audio-image {
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  margin: 10px 0;
}

.audio-player {
  margin-top: 10px;
  border-radius: 5px;
}
</style>

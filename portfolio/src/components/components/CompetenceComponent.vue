<template>
    <div class="competence">
      <div class="content">
        <img :src="src" :alt="alt" class="langage-image" />
        <h3 class="langage-text">{{ alt }}</h3>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      src: {
        type: String,
        required: true,
      },
      alt: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .competence {
  background-color: var(--body-color-darker);
  text-align: center;
  border-radius: 10px;
  padding: 10px;
  max-width: 300px;
  margin: 10px auto;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}

.langage-image {
  width: 50px;
  height: 50px;
  margin: 5px;
  border-radius: 5px;
  transition: transform 0.3s, width 0.3s, height 0.3s;
}

.langage-image:hover {
  transform: scale(1.1);
}

.langage-text {
  margin: 0;
  font-size: 1em;
  text-align: center;
}

@media (max-width: 768px) {
  .langage-image {
    width: 40px;
    height: 40px;
  }

  .langage-text {
    font-size: 0.9em;
  }

  .competence {
    padding: 8px;
  }
}

@media (max-width: 480px) {
  .content {
    flex-direction: column;
    gap: 5px;
  }

  .langage-text {
    font-size: 0.8em;
  }

  .langage-image {
    width: 35px;
    height: 35px;
  }
}
</style>
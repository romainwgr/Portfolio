<template>
    <nav class="mini-nav-bar">
      <button
        v-for="(section, index) in sections"
        :key="index"
        :class="{ active: section.title === activeSection }"
        @click="$emit('change-section', section.title)"
      >
        {{ section.title }}
      </button>
    </nav>
  </template>
  
  <script>
  export default {
    name: "MiniNavBar",
    props: {
      sections: {
        type: Array,
        required: true,
      },
      activeSection: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .mini-nav-bar {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .mini-nav-bar button {
    background: none;
    border: none;
    padding: 10px 20px;
    margin: 0 5px;
    cursor: pointer;
    font-size: 16px;
    color: var(--title-color);
    border-radius: 5px;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  .mini-nav-bar button:hover {
    color: 
    var( --first-color);
  }
  
  .mini-nav-bar .active {
  background-color: var(--body-color-darker);
  color: var(--title-color);
  font-weight: bold;
  border: 2px solid var(--primary-color); /* Bordure visible */
  border-radius: 5px; /* Coins arrondis pour un style moderne */
  padding: 5px 10px; /* Espacement interne pour agrandir l'élément */
}

  </style>
  
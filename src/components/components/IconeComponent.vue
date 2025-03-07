<template>
    <div class="icon-with-text">
      <img :src="src" :alt="alt" class="icon" />
      <span v-if="text" class="text">{{ text }}</span>
    </div>
  </template>
  
  <script>
  export default {
    name: "IconeComponent",
    props: {
      src: {
        type: String,
        required: true,
      },
      alt: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        default:''
      },
    },
  };
  </script>
  
  <style scoped>
  .icon-with-text {
    display: inline-flex;
    align-items: center;
    background-color: #f4f4f4;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 14px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .icon {
    width: 20px;
    height: 20px;
  }
  
  .text {
    margin-left: 4px;
    color: #333;
    font-weight: bold;
  }
  </style>
  
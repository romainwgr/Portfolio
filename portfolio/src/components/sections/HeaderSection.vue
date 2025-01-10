<template>
    <header class="header">
      <nav class="nav container">
        <div class="nav__data">
          <a href="#" class="nav__logo" id="nav-logo">
            Portfolio de Romain
          </a>
          <div class="nav__toggle" id="nav-toggle" @click="toggleMenu">
            <i class="fa-solid fa-bars nav__toggle-menu" v-show="!menuOpen"></i>
            <i class="fa-solid fa-xmark nav__toggle-close" v-show="menuOpen"></i>
          </div>
        </div>
        <div :class="['nav__menu', { 'show-menu': menuOpen }]" id="nav-menu">
          <ul class="nav__list">
            <li><a href="#" class="nav__link">Présentation</a></li>
            <li><a href="#competences" class="nav__link">Compétences</a></li>
            <li><a href="#projets" class="nav__link">Projets</a></li>
          </ul>
        </div>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.menuOpen = !this.menuOpen;
      },
    },
  };
  </script>
  
<template>
    <header class="header">
      <nav class="nav container">
        <div class="nav__data">
          <RouterLink to="/" class="nav__logo" id="nav-logo" @click="scrollToSection('presentation')">Portfolio de Romain
          </RouterLink>
          <div class="nav__toggle" id="nav-toggle" @click="toggleMenu">
            <i class="fa-solid fa-bars nav__toggle-menu" v-show="!menuOpen"></i>
            <i class="fa-solid fa-xmark nav__toggle-close" v-show="menuOpen"></i>
          </div>
        </div>
        <div :class="['nav__menu', { 'show-menu': menuOpen }]" id="nav-menu">
          <ul class="nav__list">
            <li><RouterLink to="/" class="nav__link" @click="scrollToSection('presentation')">Présentation</RouterLink></li>
            <li><RouterLink to="/" class="nav__link" @click="scrollToSection('competences')">
                    Compétences
                  </RouterLink></li>

            
            <li><RouterLink to="/" class="nav__link"  @click="scrollToSection('projets')">Projets</RouterLink>
              </li>
            <li><RouterLink to="/moi" class="nav__link">Moi</RouterLink></li>
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
      scrollToSection(id) {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    },
  };
  </script>
  
<template>
  <section class='container' id="competences">
    <h1 class="espacement">Mes compétences</h1>

    <!-- Navbar -->
    <MiniNavBar
      :sections="sections"
      :activeSection="activeSection"
      @change-section="updateActiveSection"
    />

    <!-- Grille des compétences -->
    <div class="competences-grid">
      <Competence
        v-for="skill in filteredSkills"
        :key="skill.alt"
        :src="skill.src"
        :alt="skill.alt"
        :size="20"
      />
    </div>
  </section>
</template>

<script>
import Competence from '@/components/components/CompetenceComponent.vue';
import MiniNavBar from '../components/MiniNavBar.vue';

export default {
  components: {
    Competence,
    MiniNavBar
  },
  data() {
    return {
      sections: [
        { title: 'Back-end' },
        { title: 'Front-end' },
        { title: 'Gestion de données' },
        { title: 'CI/CD' },
        {title: 'Services Back-end'}
      ],
      activeSection: 'Back-end',

      // Compétences
      skills: [
        // Front-End
       
        { src: require('@/assets/img/css.svg'), alt: 'CSS', category: 'Front-end' },
        { src: require('@/assets/img/js.png'), alt: 'JavaScript', category: 'Front-end' },
        { src: require('@/assets/img/vue.png'), alt: 'Vue.js', category: 'Front-end' },
        { src: require('@/assets/img/flutter.png') , alt: 'Flutter', category: 'Front-end' },

        // Back-End
        { src: require('@/assets/img/php.png'), alt: 'PHP', category: 'Back-end' },
        { src: require('@/assets/img/nodejs.webp'), alt: 'Node.js', category: 'Back-end' },
        { src: require('@/assets/img/java.png'), alt: 'Java', category: 'Back-end' },
        { src: require('@/assets/img/dart.png'), alt: 'Dart', category: 'Back-end' },




        // Gestion de Données
        { src: require('@/assets/img/mongodb.svg'), alt: 'MongoDB', category: 'Gestion de données' },
        { src: require('@/assets/img/pgsql.png'), alt: 'PostgreSQL', category: 'Gestion de données' },
        { src: require('@/assets/img/redis.svg'), alt: 'Redis', category: 'Gestion de données'},


        // CI/CD
        { src: require('@/assets/img/git.png'), alt: 'Git', category: 'CI/CD' },
        { src: require('@/assets/img/docker.webp'), alt: 'Docker', category: 'CI/CD' },

        // BaaS
        { src: require('@/assets/img/firebase.png'), alt: 'FireBase', category:'Services Back-end'}
      ],
    };
  },
  computed: {
    // Filtre les compétences en fonction de la section active
    filteredSkills() {
      return this.skills.filter(skill => skill.category === this.activeSection);
    },
  },
  methods: {
    updateActiveSection(newSection) {
      this.activeSection = newSection;
    },
  },
};
</script>

<style scoped>
/* Grille des compétences */
.competences-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 20px;
  justify-content: center;
}
#competences {
  scroll-margin-top: 80px; /* Ajuste cette valeur à la hauteur de ta navbar */
}

</style>

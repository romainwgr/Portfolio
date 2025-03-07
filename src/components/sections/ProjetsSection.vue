<template>
  <section class="projects-section container" id="projets">
    <h1 class="espacement">Mes Projets</h1>

    <MiniNavBar
      :sections="sections"
      :activeSection="activeSection"
      @change-section="updateActiveSection"

    />

    <!-- Grille des projets -->
    <div class="projects-grid">
      <ProjetComponent
        v-for="project in filteredProjects"
        :key="project.title"
        :title="project.title"
        :img="project.img"
        :link="project.link"
        :description="project.description"
        :techno="project.techno"
      />
    </div>
  </section>
</template>

<script>
import ProjetComponent from "@/components/components/ProjetComponent.vue";
import MiniNavBar from "../components/MiniNavBar.vue";

export default {
  components: {
    MiniNavBar,
    ProjetComponent,
  },
  data() {
    return {
      sections: [
        { title: 'Universitaires' },
        { title: 'Personnels' },
      ],
      activeSection: 'Universitaires', 
      projects: [
        {
          title: "InstantScore - en cours",
          img: require('@/assets/img/instantscore.png'),
          link: "https://github.com/romainwgr/instantscore",
          description: "Application web pour suivre le football en direct",
          category: "Personnels",
          techno: [
            {
              name: "Vue.js",
              img: require("@/assets/img/vue.png"), 
            },
            {
              name: "HTML",
              img: require("@/assets/img/html.png"), 
            },
            {
              name: "CSS",
              img: require("@/assets/img/css.svg"), 
            },
            {
              name: "API-Football",
              img: require("@/assets/img/api.jpg"), 
            },
          ]
        },
        {
          title: "Flixtaneuse - en cours",
          img: require('@/assets/img/sae501.png'),
          link: "https://github.com/romainwgr/Flixtaneuse",
          description: "Application web permettant aux utilisateurs de répertorier des films",
          category: "Universitaires",
          techno: [
            {
              name: "Vue.js",
              img: require("@/assets/img/vue.png"), 
            },
            {
              name: "MongoDB",
              img: require("@/assets/img/mongodb.svg"),
            },
            {
              name: "Node.js",
              img: require("@/assets/img/nodejs.webp"),
            },
            {
              name: "JWT",
              img: require("@/assets/img/jwt.svg"),
            },
          ]
        },
        {
          title: "Application web de prestation",
          img: require('@/assets/img/sae401.png'),
          link: "https://gitlab.sorbonne-paris-nord.fr/12311711/5-petales",
          description: "Site extranet pour les entreprises afin de gérer leurs missions",
          category: "Universitaires",
          techno: [
            {
              name: "PHP",
              img: require("@/assets/img/php.png"), // Assurez-vous que l'image est dans le bon chemin
            },
            {
              name: "PostgreSQL",
              img: require("@/assets/img/pgsql.png"), // Assurez-vous que l'image est dans le bon chemin
            },
            {
              name: "Javascript",
              img: require("@/assets/img/js.png"), // Assurez-vous que l'image est dans le bon chemin
            },
            {
              name: "Ajax",
              img: require("@/assets/img/ajax.png"), // Assurez-vous que l'image est dans le bon chemin

            },
            {
              name: "Bootstrap",
              img: require("@/assets/img/bootstrap.png"), // Assurez-vous que l'image est dans le bon chemin

            },
            {
              name: "CSS",
              img: require("@/assets/img/css.svg"), // Assurez-vous que l'image est dans le bon chemin
            },
            {
              name: "HTML",
              img: require("@/assets/img/html.png"), // Assurez-vous que l'image est dans le bon chemin
            },

          ]
        },
        {
          title: "Gestionnaire de personnels",
          img: require('@/assets/img/sae301.png'),
          link: "https://github.com/romainwgr/SAE-301",
          description: "Application web pour la gestion du personnel à l'IUT de Villetaneuse.",
          category: "Universitaires",
          techno: [
            {
              name: "PHP",
              img: require("@/assets/img/php.png"), 
            },
            {
              name: "PostgreSQL",
              img: require("@/assets/img/pgsql.png"), 
            },
            {
              name: "CSS",
              img: require("@/assets/img/css.svg"), 
            },
            {
              name: "HTML",
              img: require("@/assets/img/html.png"), 
            },
          ]

        },
        
      ],
    };
  },
  computed: {
    filteredProjects() {
      return this.projects.filter(
        (project) => project.category === this.activeSection
      );
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
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 100px; 
  justify-content: center;
  align-items: start; 
  padding: 50px; 
  max-width: 900px;
  margin: 0 auto; 
}
#projets {
  scroll-margin-top: 80px; /* Ajuste cette valeur à la hauteur de ta navbar */
}



</style>

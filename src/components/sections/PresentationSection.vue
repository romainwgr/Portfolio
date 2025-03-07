<template>
  <section id="presentation" class="container_grid_en_deux">
    <div class="avant">
      <h1>Romain Wagner</h1>
      <h2>Étudiant en BUT Informatique</h2>
      <p>
        Actuellement en troisième année de BUT Informatique à l'université
        Sorbonne Paris Nord, <strong>je recherche un stage dans le domaine
        du développement.</strong>
      </p>
      <!-- <p>
        Ce portfolio vous offre un aperçu de mes compétences, de ma
        formation et de mes réalisations. Mon objectif est de débuter ma
        carrière avec détermination, et je vous invite à explorer ce
        portfolio pour en savoir plus.
      </p> -->
      <h4>Mes liens:</h4>
      <p>
        <a href="https://linkedin.com/in/romain-wagner1" target="_blank"> 
          <IconeComponent
            :src="require('@/assets/img/LINDKIN.png')" 
            :alt="'LinkedIn'"
          />
        </a>
        <a href="https://github.com/romainwgr" target="_blank">
          <IconeComponent
          :src="require('@/assets/img/GitHub_Invertocat_Logo.svg.png')" 
          :alt="'GitHub'"
          />
        </a>
        
        <a href="https://www.canva.com/design/DAGWNL_uoSU/FSlbHrkTh0CifeulMFOGMg/view?utm_content=DAGWNL_uoSU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=haa3fc9dbcf" target="_blank">
        <IconeComponent
        :src="require('@/assets/img/pngtree-flat-file-image_1128024.jpg')" 
        :alt="'CV'"
        :text="'Mon CV'"
        />
      </a>
        
      </p>
    </div>
    <div class="droite apres">
      <img class="imgd" src="../../assets/img/IMG-20230928-WA0005.jpg" alt="moi" />
    </div>
  </section>
</template>
<script>
import IconeComponent from '@/components/components/IconeComponent.vue';
  export default {
    components:{
      IconeComponent
    },
  }
</script>
<style>
.container_grid_en_deux {
  display: flex;
  align-items: center;
  gap: 20px;
  height: 90vh; /* Prend toute la hauteur de l'écran */
  box-sizing: border-box; /* Inclut padding et bordures dans la hauteur totale */
}

.avant {
  flex: 1;
}

.droite {
  flex: 1;
  text-align: center;
}

.imgd {
  max-width: 100%;
  height: auto;
  border-radius: 50px;
}
</style>

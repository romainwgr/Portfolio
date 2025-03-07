<template>
    <main>
        <section class='container' id="competences">
            <h1>Mes actualités ...</h1>

            <AudioComponent 
                :title="'Podcast sur l\'informatique'"
                :imgSrc="require('@/assets/img/couverture_podcast.webp')" 
                :audioSrc="'/audio/audio_podcast_ppp.mp3'"
                :description="'Un podcast réalisé en groupe pour discuter...'"
            />

            

            


            <VideoComponent
                :title="'PSG - Girona'"
                :videoSrc="'/videos/psg.mp4'"
                :description="'Ma première fois au parc lors de la victoire du PSG contre Girona en ligue des champions'"
            />
            <PictureComponent
                :title="'Marché de Noël de Strasbourg'"
                :imgSrc="require('@/assets/img/strasbourg.jpg')" 
                :description="'Strasbourg et son marché de Noël, avec ses lumières et son ambiance chaleureuse'"
            />

            </section>
    </main>
</template>

<script>
import AudioComponent from "@/components/components/AudioComponent.vue";
import VideoComponent from "@/components/components/VideoComponent.vue";
import PictureComponent from "@/components/components/PictureComponent.vue";
export default {
  name: "MoiPage",
  components: {
    AudioComponent,
    VideoComponent,
    PictureComponent
  },
};
</script>

<style scoped>

</style>

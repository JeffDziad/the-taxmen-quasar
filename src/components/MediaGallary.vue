<script setup>
import {ref} from "vue";
import YoutubeVideo from "components/YoutubeVideo.vue";
const props = defineProps({
  items: {
    type: Array,
    default: [{name: 'none', label: "none", type: "image", source: ""}],
  },
});
const slide = ref(props.items[0].name);
const carousel = ref(null);
</script>

<template>
  <div style="height: 100%;">
    <q-carousel
      ref="carousel"
      infinite
      v-model="slide"
      transition-prev="scale"
      transition-next="scale"
      swipeable
      animated
      control-text-color="black"
      control-color="white"
      control-type="regular"
      height="95%"
      padding
    >
      <q-carousel-slide v-for="i in items" :name="i.name" class="column no-wrap flex-center">
        <q-img fit="contain" v-if="i.type==='image'" :src="i.source"/>
        <YoutubeVideo v-else-if="i.type==='video'" :title="i.label" :url="i.source"/>
      </q-carousel-slide>
    </q-carousel>

    <div class="q-gutter-xs q-mb-lg flex justify-center">
      <q-btn rounded dense color="black" text-color="white" @click="carousel.previous()"><q-icon name="arrow_left"></q-icon><span class="q-pr-sm">Back</span></q-btn>
      <q-btn rounded dense color="black" text-color="white" @click="carousel.next()"><span class="q-pl-sm">Next</span><q-icon name="arrow_right"></q-icon></q-btn>
    </div>
  </div>
</template>

<style scoped>

</style>

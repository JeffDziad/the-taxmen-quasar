<script setup>
import {ref} from "vue";

const images = ref([
  "/Slides/1.jpg",
  "/Slides/2.jpg",
  "/Slides/3.jpg",
  "/Slides/4.jpg",
  "/Slides/5.jpg",
  "/Slides/6.jpg",
  "/Slides/7.jpg",
  "/Slides/8.jpg",
  "/Slides/9.jpg",
]);
const slide = ref(1);
</script>

<template>
<div class="q-pa-md">
<!--  <q-carousel animated v-model="slide" infinite :autoplay="false">-->
<!--    <q-carousel-slide v-for="(i, index) in images" :name="index" style="overflow: hidden;">-->
<!--      <div>-->
<!--        <q-img :src="i" fit="contain" style="border-radius: 25px; position: absolute; height: 100%;"></q-img>-->
<!--      </div>-->
<!--    </q-carousel-slide>-->
<!--  </q-carousel>-->
</div>
</template>

<style scoped>

</style>

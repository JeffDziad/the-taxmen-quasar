<script setup>
import {onMounted, ref} from "vue";

const canvas = ref(null);
const ctx = ref(null);
const source = ref(null);
const updateInterval = ref(1000);
const lastUpdate = ref(0);
const images = ref([]);

function CreateImage(img, x, y) {
  this.img = img;
  this.x = x;
  this.y = y;
  this.alpha = 1;

  this.draw = function() {
    // ctx.value.globalAlpha = 0.2;
    // ctx.value.drawImage(this.img, 100, 10, 10, 10);

    // ctx.value.fillStyle = 'black';
    // ctx.value.fillRect(100, 10, 10, 20);
  }

  this.update = function() {
    // change alpha here
    this.draw();
  }
}

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}

function diff(a, b) {
  return Math.abs((a - b));
}

function randInRange(min, max) {
  return Math.random() * (max - min) + min;
}

function init() {
  ctx.value = canvas.value.getContext('2d');
  resize();
  animate();
}

function checkForUpdate() {
  if(diff(performance.now(), lastUpdate.value) > updateInterval.value) {
    // need to display
    images.value.push(new CreateImage(source.value, 500, 500));
    lastUpdate.value = performance.now();
    updateInterval.value = randInRange(2000, 10000);
  }
}

function updateImages() {
  for(let i = 0; i < images.value.length; i++) {
    images.value[i].update();
  }
}

function animate() {
  checkForUpdate();

  updateImages();

  requestAnimationFrame(animate);
}

onMounted(() => {
  init();
});
</script>

<template>
  <canvas ref="canvas" id="backgroundCanvas"></canvas>
  <div style="display:none;">
    <img ref="source" src="https://pngimg.com/d/music_notes_PNG37.png" width="100" alt="source"/>
  </div>
</template>

<style scoped>
#backgroundCanvas {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
</style>

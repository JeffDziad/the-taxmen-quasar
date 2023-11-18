<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
import CanvasBackground from "components/CanvasBackground.vue";

export default defineComponent({
  name: 'App',
  components: {CanvasBackground}
})
</script>

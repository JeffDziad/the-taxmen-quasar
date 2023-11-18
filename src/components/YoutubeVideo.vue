<script setup>
const props = defineProps({
  url: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <iframe height="100%" width="100%" :src="url" title="The Taxmen - LIVE at Mad Planet" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</template>

<style scoped>

</style>

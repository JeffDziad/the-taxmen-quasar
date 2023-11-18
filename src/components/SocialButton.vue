<script setup>
import {computed} from "vue";

const props = defineProps({
  label: {
    type: String,
    default: "Social"
  },
  color: {
    type: String,
    default: "blue",
  },
  img: {
    type: String,
  },
  link: {
    type: String,
    default: "https://www.google.com",
  }
});

const textColor = computed(() => {
  return 'text-'+props.color+'-8'
});
</script>

<template>
  <q-btn :href="link" outline class="q-ma-sm" style="border-radius: 20px;" :color="color">
    <div class="q-py-md">
      <div class="col-12 flex justify-center">
        <q-img width="75px" height="75px" :src="img" style="border-radius: 15px;"></q-img>
      </div>
      <div class="col-12 q-pt-sm">
        <span :class="'q-pt-md ' + textColor">{{ label }}</span>
      </div>
    </div>

  </q-btn>
</template>

<style scoped>

</style>

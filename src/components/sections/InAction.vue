<script setup>
import MediaGallary from "components/MediaGallary.vue";
import {computed, onMounted, ref} from "vue";

//! This is not future proof. Find a way to scan PREFERABLY the assets folder and index the images programmatically.
//! The current method requires that images are stored inside the public folder which is not advisable.
//? 1st - Add any videos by link.
let videos = ref([
  {
    name: 'taxmen-live-madplanet',
    label: 'The Taxmen - LIVE at Mad Planet',
    type: 'video',
    source: 'https://www.youtube.com/embed/b5R713fwjTY',
  },
]);

  //? 2nd - Define the image folder along with its image count. IMAGES NEED TO BE ITERABLE!
  //? 2nd 2.0 - If just adding new images to existing galleries - add image to folder (make sure to name it the next number)
  //?           and change the count property below of the corresponding folder.
let galleries = ref({
  '1-madplanet': {
    count: 4,
      images: [],
  },
  '2-madplanet': {
    count: 9,
      images: [],
  },
  '1-yardstock': {
    count: 4,
      images: [],
  },
  'misc': {
    count: 2,
      images: [],
  }
});

const inActionSliderMedia = computed(() => {
  let out = [];
  out = out.concat(videos.value);
  for (const [key, value] of Object.entries(galleries.value)) {
    out = out.concat(value.images);
  }
  return out;
});

function generateGalleries() {
  for (const [key, value] of Object.entries(galleries.value)) {
    let out = [];
    for (let i = 1; i < value.count + 1; i++) {
      out.push(
        {
          name: `${key}-${i}`,
          label: '',
          type: 'image',
          source: `/images/${key}/${i}.jpg`,
        }
      );
    }
    value.images = JSON.parse(JSON.stringify(out));
  }
}

onMounted(() => {
  generateGalleries();
});
</script>

<template>
  <h2 class="q-pa-none q-mb-sm q-mt-md text-center" style="font-variant-caps: small-caps;">In Action</h2>
  <div class="row">
    <div class="col-12 q-mb-md" style="height: 500px;">
      <MediaGallary :items="inActionSliderMedia"/>
    </div>
  </div>
</template>

<style scoped>

</style>

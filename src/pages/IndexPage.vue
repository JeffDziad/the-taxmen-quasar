<template>
  <q-page class="container flex justify-center text-center">
    <h2>Coming Soon!</h2>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import TaxmenLogo from "components/TaxmenLogo.vue";
import HeroSlides from "components/HeroSlides.vue";

export default defineComponent({
  name: 'IndexPage',
  components: {HeroSlides, TaxmenLogo}
});
</script>

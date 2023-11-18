<template>
  <q-layout view="lHh Lpr lff">
    <NavigationBar/>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-black text-center">
      <span>The Taxmen ©{{year}}</span>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import TaxmenLogo from "components/TaxmenLogo.vue";
import CanvasBackground from "components/CanvasBackground.vue";
import NavigationBar from "components/NavigationBar.vue";

export default defineComponent({
  name: 'MainLayout',

  components: {
    NavigationBar,
    CanvasBackground,
    TaxmenLogo,
  },

  computed: {
    year() {
      return new Date().getFullYear();
    }
  },

  setup () {

    return {

    }
  }
})
</script>

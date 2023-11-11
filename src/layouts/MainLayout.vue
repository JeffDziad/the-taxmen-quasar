<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-black flex justify-center q-pa-md">
      <TaxmenLogo/>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import TaxmenLogo from "components/TaxmenLogo.vue";

export default defineComponent({
  name: 'MainLayout',

  components: {
    TaxmenLogo,
  },

  setup () {

    return {

    }
  }
})
</script>

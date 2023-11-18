<template>
  <q-page class="container q-mb-lg">
    <CartoonLogo class="q-mt-lg"/>
    <AboutUs/>
    <UpcomingEvents :events="upcomingEvents"/>
    <InAction/>
    <Socials/>
  </q-page>
</template>

<script>
import {defineComponent} from 'vue'
import TaxmenLogo from "components/TaxmenLogo.vue";
import HeroSlides from "components/HeroSlides.vue";
import CartoonLogo from "components/CartoonLogo.vue";
import SocialButton from "components/SocialButton.vue";
import YoutubeVideo from "components/YoutubeVideo.vue";
import MediaGallary from "components/MediaGallary.vue";
import AboutUs from "components/sections/AboutUs.vue";
import InAction from "components/sections/InAction.vue";
import Socials from "components/sections/Socials.vue";
import UpcommingEvents from "components/sections/UpcomingEvents.vue";
import UpcomingEvents from "components/sections/UpcomingEvents.vue";

export default defineComponent({
  name: 'IndexPage',
  components: {UpcomingEvents, Socials, InAction, AboutUs, CartoonLogo},
  computed: {

  },
  methods: {

  },
  mounted() {

  },
  data() {
    return {
      upcomingEvents: [
        {
          name: "Linneman's",
          date: new Date("11/24/2023").toDateString(),
          description: `10PM - Beatles vs. Grateful Dead`,
        },
      ]
    }
  }
});
</script>

<script setup>

import SocialButton from "components/SocialButton.vue";
</script>

<template>
  <h2 class="q-pa-none q-mb-md q-mt-md text-center" style="font-variant-caps: small-caps;">Socials</h2>
  <div class="row">
    <div class="col-xs-12 col-md-6 q-mb-md">
      <div class="row" style="height: 100%;">
        <div class="col-12 flex items-center justify-center" style="height: 100%;">
          <SocialButton label="Instagram" color="purple" link="https://www.instagram.com/taxmen.mke/"
                        img="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png"/>
          <SocialButton label="Youtube" color="red" link="https://www.youtube.com/@taxmenmke"
                        img="https://seeklogo.com/images/Y/youtube-square-logo-3F9D037665-seeklogo.com.png"/>
          <SocialButton label="Facebook" color="blue" link="https://www.facebook.com/people/The-Taxmen/61550212585879/"
                        img="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png"/>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-md-6">
      <q-parallax :height="400" class="rounded-borders" src="/images/2-madplanet/8.jpg"></q-parallax>
    </div>
  </div>
</template>

<style scoped>

</style>

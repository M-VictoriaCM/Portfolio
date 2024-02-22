<template>
  <div class="home__container-home">
    <!--Redes sociales-->
    <home-social></home-social>
    <!--info-->
    <div class="home__container-presentation">
      <home-present></home-present>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import hea from '@/components/Header.vue'
import HomePresent from '@/components/HomePresent.vue'
import HomeSocial from '@/components/HomeSocial.vue'

export default {
  name: 'home',
  components: {
    HomePresent,
    HomeSocial,
  },
}
</script>

<style>
@import "../assets/css/home.css";
</style>


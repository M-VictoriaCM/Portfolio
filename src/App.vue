<template>
  <div class="grid__container">
    <!--Componente del header-->
      <header-section></header-section>

    <main class="content">
      <fondo-animado></fondo-animado>
      <section class="section" id="home">
        <!--vista de las opciones del menu-->
          <router-view></router-view>
      </section>
    </main>
  </div>
</template>
<script>

  import HeaderSection from "./components/Header";
  import FondoAnimado from "./components/FondoAnimado.vue";
  export default {
    components: 
      {HeaderSection},
      FondoAnimado,
  };

</script>
<style>
    @import "assets/css/style.css";
  
</style>
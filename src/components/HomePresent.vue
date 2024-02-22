<template>
     <div class="text-box">
        <p class="title">Hola! yo soy</p>
        <h1 class="text">Victoria</h1>
        <div class="contenedor-texto">
            <h3 class="titulo">
                <span class="typed"></span>
            </h3>
            <div class="" id="cadenas-texto">
                <p class="typed-text">Estudiante de una Técnicatura Universitaria en Desarrollo de Aplicaciones Informáticas</p>
            </div>
        </div>
    </div>
  
</template>

<script>
import { initializeTyped } from '../config-type.js';
export default {
  name: 'homePresent',
  mounted() {
    initializeTyped();
  },
}
</script>

<style  scoped="true">
    @import "../assets/css/components/homePresent.css";
</style>
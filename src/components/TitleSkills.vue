<template>
   <h1 class="skills__title">{{ name }}</h1>    
</template>

<script>
    export default {
         name: 'titleSkills',
        props:{
            name:String,
        }
    }
</script>

<style>
     @import "../assets/css/Skills.css";
    
</style>
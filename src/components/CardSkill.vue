<template>
    <div class="skills__info">
        <div class="skills__info_container">
            <img :src="skill.src" :key="skill.id" class="skills__img">
        </div>
        <p class="name__skills">{{ skill.name }}</p>
    </div>

</template>

<script>
    import {
        ref
    } from 'vue'
    export default {
        name: 'cardSkills',
        props: ['skill']

    }
</script>

<style>
    @import "../assets/css/components/cardSkills.css";
</style>
<template>
    <div class="skills__container">
       <!--------------- Skills: Frontend --------------->
        <div class="skills__header">
            <i class="fa-solid fa-laptop-code skills__icon"></i>
            <h1 class="skills__title">Frontend</h1>
        </div>
            <skills-frontend/> 
            
        <!--------------- Skills: Backend --------------->
        <div class="skills__header">
            <i class="fa-solid fa-server skills__icon"></i>
            <h1 class="skills__title">Backend</h1>
        </div>
        <skills-backend/>
        
        <!--------------- Skills: Database --------------->
        <div class="skills__header">
            <i class="fa-solid fa-database  skills__icon"></i>
            <h1 class="skills__title">DataBase</h1>
        </div>
        <skills-data-base/>
        
        <!--------------- Skills: Design --------------->
        <div class="skills__header">
            <i class="fa-solid fa-swatchbook  skills__icon"></i>
            <h1 class="skills__title">Design</h1>
        </div>
        <skills-design/>
        
        <!--------------- Skills:Tools --------------->
        <div class="skills__header">
           <i class="fa-solid fa-screwdriver-wrench skills__icon"></i>
           <h1 class="skills__title">Tools</h1>
        </div>
        <skills-tools/>
       
    </div>
</template>
<script>
import SkillsFrontend from '@/components/SkillsFrontend'
import SkillsBackend from '@/components/SkillsBackend'
import SkillsDataBase from '@/components/SkillsDataBase'
import SkillsDesign from '@/components/SkillsDesign'
import SkillsTools from '@/components/SkillsTools'
    
    export default {
        name: 'skills',
        components:{
            SkillsFrontend,
            SkillsBackend,
            SkillsDataBase,
            SkillsDesign,
            SkillsTools,
        }
        
    }
</script>
<style>
    @import "../assets/css/Skills.css";
</style>
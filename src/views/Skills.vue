<template>
    <div class="skills__container">
       <!--------------- Skills: Frontend --------------->
        <div class="skills__header">
            <i class="fa-solid fa-laptop-code skills__icon"></i>
            <title-skills
            name= "Frontend"
            />
            
        </div>
            <skills-frontend/> 
            
        <!--------------- Skills: Backend --------------->
        <div class="skills__header">
            <i class="fa-solid fa-server skills__icon"></i>
            <title-skills
            name= "Backend"
            />
        </div>
        <skills-backend/>
        
        <!--------------- Skills: Database --------------->
        <div class="skills__header">
            <i class="fa-solid fa-database  skills__icon"></i>
            <title-skills
            name= "DataBase"
            />
        </div>
        <skills-data-base/>
        
        <!--------------- Skills: Design --------------->
        <div class="skills__header">
            <i class="fa-solid fa-swatchbook  skills__icon"></i>
            <title-skills
            name="Design"
            />
        </div>
        <skills-design/>
        
        <!--------------- Skills:Tools --------------->
        <div class="skills__header">
           <i class="fa-solid fa-screwdriver-wrench skills__icon"></i>
           <title-skills
            name= "Tools"
            />
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
import TitleSkills from '@/components/TitleSkills'
    
    export default {
        name: 'skills',
        components:{
            SkillsFrontend,
            SkillsBackend,
            SkillsDataBase,
            SkillsDesign,
            SkillsTools,
            TitleSkills,
        }
        
    }
</script>
<style>
    @import "../assets/css/Skills.css";
</style>
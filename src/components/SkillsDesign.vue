<template>
   <div class="card_info_skills">
        <card-skills v-for="skill in skills" :key="id" :skill="skill" />
    </div>    
</template>

<script>
     import CardSkills from '@/components/CardSkill.vue'
    
     export default {
        name:'skillsDesign',
        data () {
            return {
                 skills: [{
                        id: 1,
                        name: 'Photoshop',
                        src: require('@/assets/img/photoshop_icon.png')
                    },
                    {
                        id: 2,
                        name: 'Figma',
                        src: require('@/assets/img/figma_icon.png')
                    },
                    {
                        id: 3,
                        name: 'Canva',
                        src: require('@/assets/img/canva_icon.png')
                    }
                ]
            }
        },
        components: {
             CardSkills,
        }
    }
</script>

<style>
    @import "../assets/css/Skills.css";
</style>
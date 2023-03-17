<template>
   <div class="card_info_skills">
        <card-skills v-for="skill in skills" :key="id" :skill="skill" />
    </div>    
</template>

<script>
     import CardSkills from '@/components/CardSkill.vue'
    export default {
        name: 'skillsTools',
        data () {            
            return {
               skills: [{
                        id: 1,
                        name: 'Git',
                        src: require('@/assets/img/git_icon.png')
                    },
                    {
                        id: 2,
                        name: 'GitHub',
                        src: require('@/assets/img/github_icon.png')
                    },
                    {
                        id: 3,
                        name: 'Confluence',
                        src: require('@/assets/img/confluence_icon.png')
                    },
                    {
                        id: 4,
                        name: 'Jira',
                        src: require('@/assets/img/jira_icon.png')
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
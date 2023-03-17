<template>
   <div class="card_info_skills">
        <card-skills v-for="skill in skills" :key="id" :skill="skill" />
    </div>    
</template>

<script>
    import CardSkills from '@/components/CardSkill.vue'
    export default {
        name: 'skillsDataBase',
        data () {
            return {
                 skills: [{
                        id: 1,
                        name: 'MySql',
                        src: require('@/assets/img/mysql_icon.png')
                    },
                    {
                        id: 2,
                        name: 'PostgreSql',
                        src: require('@/assets/img/postgresql_icon.png')
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
    
</style>
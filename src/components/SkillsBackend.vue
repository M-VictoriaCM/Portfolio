<template>
    <div class="card_info_skills">
        <card-skills v-for="skill in skills" :key="id" :skill="skill" />
    </div>

</template>

<script>
    import CardSkills from '@/components/CardSkill.vue'
    export default {
        name: 'skillsBackend',
        components: {
            CardSkills,
        },
        data() {
            return {
                skills: [{
                        id: 1,
                        name: 'Python',
                        src: require('@/assets/img/python_icon.png')
                    },
                    {
                        id: 2,
                        name: 'Java',
                        src: require('@/assets/img/java_icon.png')
                    },
                    {
                        id: 3,
                        name: 'PHP',
                        src: require('@/assets/img/php_icon.png')
                    },
                    {
                        id: 4,
                        name: 'Flask',
                        src: require('@/assets/img/flask_icon.png')
                    },
                    {
                        id: 5,
                        name: 'Django',
                        src: require('@/assets/img/django_icon.png')
                    },
                    {
                        id: 6,
                        name: 'Go',
                        src: require('@/assets/img/go_icon.png')
                    },
                    {
                        id: 7,
                        name: 'Spring Boot',
                        src: require('@/assets/img/spring_icon.png')
                    }
                ]
            }
        }
    }
    
</script>

<style>
    @import "../assets/css/Skills.css";

</style>
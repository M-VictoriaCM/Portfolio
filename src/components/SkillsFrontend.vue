<template>
    <div class="card_info_skills">
        <card-skills v-for="skill in skills" :key="id" :skill="skill" />
    </div>
</template>
<script>
    import CardSkills from '@/components/CardSkill.vue'
    export default {
        name: 'skillsFrontend',
        components: {
            CardSkills,
        },
        data() {
            return {
                skills: [{
                        id: 1,
                        name: 'HTML',
                        src: require('@/assets/img/html_icon.png')
                    },
                    {
                        id: 2,
                        name: 'Css',
                        src: require('@/assets/img/css_icon.png')
                    },
                    {
                        id: 3,
                        name: 'JavaScript',
                        src: require('@/assets/img/js_icon.png')
                    },
                    {
                        id: 4,
                        name: 'Vue',
                        src: require('@/assets/img/vue_icon.png')
                    }
                ]
            }
        }
    }

</script>
<style>
    @import "../assets/css/Skills.css";
</style>
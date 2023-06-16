<template>
    <div class="about__container">
        <div class="about__header">
            <title-skills name="Sobre mí" />
        </div>
        <div class="about__presentation">
            <div>
                <span>
                    <p>Hola! Soy Victoria y en la actualidad me encuentro cursando 
                        una Tecnicatura universitaria en Desarrollo de Aplicaciones Informáticas 
                        de la Facultad de Ciencias Exactas de la Universidad De Tandil.</p>
                </span>
                <span>
                        <p>
                            Ingrese en este mundo con un sueño, que es poder cambiar la vida de las personas a traves de la tecnologia.
                        </p>
                    </span>
                <span>
                    <p>
                       Me gusta los desafios. Amo el mundo de la programacion,  el full stacks y diseñar.
                    </p>
                </span>
            </div>
            <div class="about__buttons">
                <a download="" href="" class="button button--flex">Descargar CV
                    
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import TitleSkills from '@/components/TitleSkills'
    export default {
        name: 'aboutme',
        data() {
            return {}
        },
        components: {
            TitleSkills,
        }
    }
</script>

<style>
    @import "../assets/css/aboutMe.css";
</style>
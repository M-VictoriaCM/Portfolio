<template>
  <div class="about__container">
    <div class="about__header">
      <title-skills name="Sobre mí" />
    </div>
    <div class="about__presentation">
      <div>
        <span>
          <p>
            "¡Hola!👋 <br> Soy Victoria y actualmente estoy finalizando una Tecnicatura
            Universitaria en Desarrollo de Aplicaciones Informáticas en la
            Facultad de Ciencias Exactas de la Universidad De Tandil.<br> Ingresé a
            este emocionante mundo con un sueño: <em>cambiar la vida de las personas
            a través de la tecnología.</em>
          </p>
        </span>
        <span>
          <p>
            Me encantan los desafíos y tengo una pasión por la programación, el
            desarrollo full stack y el diseño. Cada día, me sumerjo en el
            fascinante universo de la tecnología con la esperanza de crear
            soluciones innovadoras y marcar la diferencia en el mundo digital.
          </p>
        </span>
      </div>
      <div class="about__buttons">
        <a download="" href="" class="button button--flex">
          <div class="info_btn">
            <p class="text_buttons">Descargar CV</p>
            <i class="fa-solid fa-download button__icon"></i>
          </div>
          <div class="info_btn">
            <p class="text_buttons">Login</p>
            <i class="fa-solid fa-download button__icon"></i>
          </div>
          <div class="info_btn">
            <p class="text_buttons">Registro</p>
            <i class="fa-solid fa-download button__icon"></i>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import TitleSkills from "@/components/TitleSkills";
export default {
  name: "aboutme",
  data() {
    return {};
  },
  components: {
    TitleSkills,
  },
};
</script>

<style>
@import "../assets/css/aboutMe.css";
</style>

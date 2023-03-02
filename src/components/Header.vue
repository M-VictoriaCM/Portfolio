<template>
    <header class="content header">
        <nav class="nav__content ">
            <div class="nav__header_icon">
                <img src="../../public/logo_sitio_web_victoria.png" alt="logo" class="nav_img">
                <a href="home.html" class="nav_logo">ictoria</a>
            </div>
            <btn-bar></btn-bar>
            <div class="container-menu">

                <div class="nav__menu" id="nav-menu">
                    <!--Componente Menu-->
                    <nav-bar></nav-bar>
                </div>

                <div>
                    <a href="#portfolio" class="nav__link">
                        <i class="fa-solid fa-briefcase nav__icon"></i>
                        <span class="nav__name">Portafolio</span>
                    </a>
                </div>

                <div>
                    <label for="checkbox" class="toggler">
                        <input type="checkbox" id="checkbox">
                        <span class="ball"></span>
                        <i class="fa-solid fa-sun sun "></i>
                        <i class="fa-solid fa-moon moon change-theme" id="theme-button"></i>
                    </label>
                </div>
            </div>

        </nav>
    </header>
</template>

<script>
    import NavBar from '@/components/NavBar'
    import BtnBar from '@/components/BtnBar'
   
 
    
    export default {
        name: 'Header',
        components:{
            NavBar, 
            BtnBar, 
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    @import "../assets/css/components/header.css";
</style>
<template>
    <header class="content header">
        <nav class="nav__content ">
            <router-link class="nav_logo" to="/">
                <div class="nav__header_icon">
                    <img src="../../public/logo_sitio_web_victoria.png" alt="logo" class="nav_img">
                    <p class="title_in">ictoria</p>
                </div>

            </router-link>
            <!--            <btn-bar></btn-bar>-->
            <div class="bars__menu" @click="toggleMenu">
                <span class="line1__bars-menu"></span>
                <span class="line2__bars-menu"></span>
                <span class="line3__bars-menu"></span>
            </div>
            <div class="container-menu" :class="{ 'container-menu__visible': isMenuVisible }">

                <div class="nav__menu" id="nav-menu">
                    <!--Componente Menu-->
                    <nav-bar></nav-bar>
                </div>
                <ul class="content nav__list">
                    <div>
                        <li class="nav__item">
                            <router-link class="nav__link" to="/porafolio">
                                <i class="fa-solid fa-briefcase nav__icon"></i>
                                <span class="nav__name">Portafolio</span>
                            </router-link>
                        </li>
                    </div>
                    <div>
                        <label for="checkbox" class="toggler">
                            <input type="checkbox" id="checkbox">
                            <span class="ball"></span>
                            <i class="fa-solid fa-sun sun "></i>
                            <i class="fa-solid fa-moon moon change-theme" id="theme-button"></i>
                        </label>
                    </div>
                </ul>

            </div>

        </nav>
    </header>
</template>

<script>
import { animateMenu } from '../animation.js';
import NavBar from '@/components/NavBar';


export default {
    name: 'Header',
    components: {
        NavBar,
    },
    data() {
        return {
            isMenuVisible: false,
        };
    },
    methods: {
        toggleMenu() {
            animateMenu();
            this.isMenuVisible = !this.isMenuVisible;
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/css/components/header.css";
@import "../assets/css/components/btnBar.css";
</style>
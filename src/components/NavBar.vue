<template>
    <div class="option__nav">
        <ul class="content nav__list" id="nav-list">
        <li class="nav__item">
            <router-link class="nav__link active" :to="{ name: 'home' }">
                <i class="fa-solid fa-house nav__icon"></i>
                <span class="nav__name">Inicio</span>
            </router-link>
        </li>

        <li class="nav__item">
            <router-link class="nav__link" :to="{ name: 'skills' }">
                <i class="fa-solid fa-book nav__icon"></i>
                <span class="nav__name">Skills</span>
            </router-link>
        </li>
        <li class="nav__item">
            <router-link class="nav__link" :to="{ name: 'contacto' }">
                <i class="fa-solid fa-paper-plane nav__icon"></i>
                <span class="nav__name">Contacto</span>
            </router-link>
        </li> 
        <li class="nav__item">
            <router-link class="nav__link" :to="{ name: 'aboutme' }">
                <i class="fa-solid fa-user nav__icon"></i>
                <span class="nav__name">Perfil</span>
            </router-link>
        </li>
        
    </ul>
    </div>
    
</template>
<script>
    export default {
        name: 'navBar',
    };
</script>

<style>
    @import "../assets/css/components/navBar.css";
</style>
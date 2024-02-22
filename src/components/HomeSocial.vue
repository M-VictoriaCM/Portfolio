<template>
    <div class="home__social-profile">
        <div class="home__social-profile-content">
            <div class="home__social">
                <a href="" class="nav__link-social">
                    <i class="fa-brands fa-linkedin icon__social"></i>
                </a>
                <a href="" class="nav__link-social">
                    <i class="fa-brands fa-github icon__social"></i>
                </a>
            </div>
            <!--perfil-->
            <div class="home__img">
                <div class="home__frame"></div>
                <div class="home__frame-img">
                    <img src="@/assets/img/hola.png" alt="avatar">
                </div>    
                
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'homeSocial',
    }
</script>
<style>
    @import "../assets/css/components/homeSocial.css";
</style>
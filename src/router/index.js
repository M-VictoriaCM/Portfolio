import {
    createRouter,
    createWebHashHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Auth/Login.vue'
import Register from '../views/Auth/Register.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
  },
    {
        path: '/skills',
        name: 'skills',
        component: () => import( /* webpackChunkName: "skills" */ '../views/Skills.vue')
  },
    {
        path: '/aboutme',
        name: 'aboutme',
        component: () => import( /* webpackChunkName: "aboutme" */ '../views/AboutMe.vue')
    },
    {
        path: '/contacto',
        name: 'contacto',
        component: () => import( /* webpackChunkName: "contacto" */ '../views/Contacto.vue')
    },
    ,
    {
        path: '/portafolio',
        name: '/portafolio',
        component: () => import( /* webpackChunkName: "portafolio" */ '../views/Contacto.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import( /* webpackChunkName: "login" */ '../views/Auth/Login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import( /* webpackChunkName: "register" */ '../views/Auth/Register.vue')
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
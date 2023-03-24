import {
    createRouter,
    createWebHashHistory
} from 'vue-router'
import Home from '../views/Home.vue'

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

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
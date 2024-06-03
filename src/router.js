//https://router.vuejs.org/

import { createRouter, createWebHistory } from 'vue-router'


import Formulario from './components/Formulario.vue'


const routes = [
    
    { path: '/formulario', component: Formulario },

    
]

const router = createRouter({
    history: createWebHistory(),
    routes,  // es igual a -> routes: routes
})

export default router
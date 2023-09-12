import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/jogo',
      name: 'Page Jogo',
      component: () => import('../views/JogoIndividual.vue')
    },
    {
      path: '/SearchGame',
      name: 'SearchGame',
      component: () => import('../views/pesquisaJogo.vue')
    }
    
  ]
})

export default router
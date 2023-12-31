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
      path: '/SearchGame',
      name: 'SearchGame',
      component: () => import('../views/pesquisaJogo.vue')
    },
    {
      path: '/game/:id',
      name: 'jogo',
      component: () => import('../views/JogoIndividual.vue'),
      props: true
    }

  ]
})

export default router
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: { owner: false }
    },
    {
      path: '/owner_playlist',
      name: 'owner_playlist',
      component: () => import('../views/OwnPlaylistView.vue'),
      meta: { owner: true }
    }
  ]
})

export default router

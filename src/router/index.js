import { createRouter, createWebHistory } from 'vue-router'
import SignInPage from '../pages/SignInPage.vue'
import ScanPage from '../pages/ScanPage.vue'
import RoastPage from '../pages/RoastPage.vue'

const routes = [
  { path: '/', redirect: '/sign-in' },
  { path: '/sign-in', component: SignInPage },
  { path: '/scan', component: ScanPage },
  { path: '/roast', component: RoastPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

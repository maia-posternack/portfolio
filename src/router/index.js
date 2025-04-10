import { createRouter, createWebHistory } from 'vue-router'
import SignInPage from '../pages/SignInPage.vue'
import ScanPage from '../pages/ScanPage.vue'
import RoastPage from '../pages/RoastPage.vue'
import Projects from '../pages/Projects.vue'
import Crimson from '../pages/Crimson.vue'



const routes = [
  { path: '/', redirect: '/sign-in' },
  { path: '/sign-in', component: SignInPage },
  { path: '/scan', component: ScanPage },
  { path: '/roast', component: RoastPage },
  { path: '/packet', component: Projects },
  { path: '/crimson', component: Crimson }


]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

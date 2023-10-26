import { createRouter, createWebHistory } from 'vue-router'

import MainPage from '@/components/MainPage.vue'
import LoginPage from '@/components/LoginPage.vue'
import NotFound from '@/components/NotFound.vue'


const routes = [
  { path: '/', name:'Home', component: MainPage },
  { path: '/login',name:'Login', component: LoginPage },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },

]
 
export default createRouter ({
  history: createWebHistory(),
  routes,
})
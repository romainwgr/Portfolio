import { createRouter, createWebHistory } from 'vue-router';
import PeutyPage from './vues/PeutyPage.vue'; 
import Home from './vues/HomePage.vue';
import MoiPage from './vues/MoiPage.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/peuty',
    name: 'Peuty',
    component: PeutyPage,
  },
  {
    path: '/moi',
    name:'moi',
    component: MoiPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

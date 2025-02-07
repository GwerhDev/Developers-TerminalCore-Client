import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import LoginPage from '../pages/LoginPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

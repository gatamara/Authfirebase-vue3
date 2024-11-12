import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import { useAuthStore } from '@/stores/authStore';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true }, // Ruta protegida
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
  ],
});


router.beforeEach((to, from, next) => {
  const store = useAuthStore();

  if (to.meta.requiresAuth && !store.isAuthenticated) {
    next('/login');
  }
  else if ((to.path === '/login' || to.path === '/register') && store.isAuthenticated) {
    next('/');
  } else {
    next();
  }
});


export default router;


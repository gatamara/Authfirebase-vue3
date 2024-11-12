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

// Agrega una guardia de navegación
router.beforeEach((to, from, next) => {
  const store = useAuthStore()

  // Verifica si la ruta requiere autenticación
  if (to.meta.requiresAuth && !store.isAuthenticated) {
    next('/login'); // Redirige a login si el usuario no está autenticado
  } else {
    next(); // Continua a la ruta deseada si está autenticado o no requiere autenticación
  }
});

export default router;


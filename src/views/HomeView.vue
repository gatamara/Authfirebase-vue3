<template>
  <main>
    <TheWelcome />
    {{ store.user?.email }}

    <button type="button" class="btn btn-success" @click="logout">Cerrar Sesion</button>
  </main>
</template>
<script setup>
import { useAuthStore } from '@/stores/authStore';
import TheWelcome from '../components/TheWelcome.vue'
import router from '@/router';

const store = useAuthStore()

const logout = async () => {
  await store.logout()
  router.push('/login')
}

</script>

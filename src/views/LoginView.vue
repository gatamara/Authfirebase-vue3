<template>
  <div class="about">
    <form @submit.prevent="onSubmit">
      <h1 class="mb-5"> {{ formTitle }} </h1>

      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" v-model="credentials.email" class="form-control" id="email" aria-describedby="emailHelp">
      </div>

      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" v-model="credentials.password" class="form-control" id="password">
      </div>

      <button type="submit" class="btn btn-success">Ingresar</button>
    </form>
  </div>
</template>

<script setup>
import router from '@/router';
import { useAuthStore } from '@/stores/authStore';
import { reactive } from 'vue';

const authStore = useAuthStore();

const credentials = reactive({
  email: '',
  password: ''
});

const formTitle = 'Login';

const onSubmit = async () => {
  if (!credentials.email || !credentials.password) {
    alert('Por favor ingrese el correo y la contraseña correctamente');
    return;
  }

  try {
    await authStore.login(credentials);
    router.push('/')
  } catch (error) {
    console.error("Error en el inicio de sesión:", error);
    alert("Error al iniciar sesión");
  }
}

</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

import { loginFirebase, logoutFirebase, registerFirebase } from "@/services/authService";
import { defineStore } from "pinia";

export const useAuthStore = defineStore('authStore',{
  state: () => ({
    user: null,
    isAuthenticated: false
  }),
  actions: {
    async register(credentials){

      this.user = await registerFirebase(credentials)
      this.isAuthenticated = true

    },
    async login(credentials){

      this.user = await loginFirebase(credentials)
      this.isAuthenticated = true

    },
    async logout(){

      await logoutFirebase()
      this.user = null
      this.isAuthenticated = false

    },
    setUser(user, isAuthenticated){
      this.user = user
      this.isAuthenticated = isAuthenticated
    }

  }
})

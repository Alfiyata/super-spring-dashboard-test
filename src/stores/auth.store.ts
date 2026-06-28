import { defineStore } from "pinia";
import { login } from "@/api/auth";

interface LoginPayload {
  username: string;
  password: string;
}

interface AuthUser {
  username: string;
  fullname: string;
  email: string;
  phone: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: localStorage.getItem("token") as string | null,
    user: null as AuthUser | null,
    isLoading: false,
    error: null as string | null,
  }),

  getters: {
    isLogin: (state) => !!state.token,
  },

  actions: {
    async loginUser(payload: LoginPayload) {
      this.isLoading = true;
      this.error = null;

      try {
        const response = await login(payload);
        const data = response.message.data;

        this.token = data.token;
        this.user = {
          username: data.username,
          fullname: data.fullname,
          email: data.email,
          phone: data.phone,
        };
        
        localStorage.setItem("token", data.token);

        return data;
      } catch (error: any) {
        this.error = error.response?.data?.message ?? "Login gagal. Silakan coba lagi.";
        throw error;
      } finally {
        this.isLoading = false;
      }
    },

    logout() {
      this.token = null;
      localStorage.removeItem("token");
    },
  },
});

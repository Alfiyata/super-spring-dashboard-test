import { defineStore } from "pinia";
import { login } from "@/api/auth";

interface LoginPayload {
  username: string;
  password: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: localStorage.getItem("token"),
    user: null as any,
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
        const data = await login(payload);

        this.token = data.token;
        this.user = data.user ?? null;
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

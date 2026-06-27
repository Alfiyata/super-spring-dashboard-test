import { defineStore } from "pinia";
import { login } from "@/api/auth";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: localStorage.getItem("token"),
    user: null as any,
  }),

  getters: {
    isLogin: (state) => !!state.token,
  },

  actions: {
    async loginUser(payload: any) {
      const data = await login(payload);
      this.token = data.token;
      localStorage.setItem("token", data.token);
    },

    logout() {
      this.token = null;
      localStorage.removeItem("token");
    },
  },
});

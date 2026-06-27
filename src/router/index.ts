import { createRouter, createWebHistory } from "vue-router";

import Login from "@/pages/Login.vue";
import Dashboard from "@/pages/Dashboard.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/",
      component: Dashboard,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to) => {
  const token = localStorage.getItem("token");

  if (to.meta.requiresAuth && !token) {
    return "/login";
  }

  if (to.path === "/login" && token) {
    return "/";
  }
});

export default router;

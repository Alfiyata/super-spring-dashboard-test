<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth.store";

import Button from "@/components/atoms/Button.vue";
import Input from "@/components/atoms/Input.vue";

const auth = useAuthStore();
const router = useRouter();

const username = ref("");
const password = ref("");

const submit = async () => {

  await auth.loginUser({
    username: username.value,
    password: password.value,
  });

  router.push("/dashboard");
};
</script>

<template>
  <main class="login-page">
    <div class="login-card">
      <h1>Login to <span class="title">GPS.ID TMS </span>Account</h1>
      <p>Please enter your email and password to continue</p>

      <form class="login-form" @submit.prevent="submit">
        <label>
          Email address:
          <Input v-model="username" type="text" placeholder="esteban_schiller@gmail.com" required />
        </label>

        <label>
          <span class="password-label">
            Password:
            <a href="#" class="forgot-password">Forget Password?</a>
          </span>
          <Input v-model="password" type="password" placeholder="**********" required />
        </label>

        <label class="remember-password">
          <input type="checkbox">
          Remember Password
        </label>

        <p v-if="auth.error" class="error-message">{{ auth.error }}</p>

        <Button class="sign-in-button" type="submit" :disabled="auth.isLoading">
          {{ auth.isLoading ? "Signing In..." : "Sign In" }}
        </Button>
        <p>Don’t have an account? <span class="title">Create Account</span></p>
      </form>
    </div>
  </main>
</template>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-color: var(--color-primary);
  background-image: url("/background/Shape.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.login-card {
  width: 516px;
  height: 635px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 0.3px solid #e5e7eb;
  background-color: #ffffff;
  opacity: 1;
}

.login-card h1 {
  margin: 0 0 8px;
  font-size: 28px;
  line-height: 1.25;
  text-align: center;
}

.login-card p {
  margin: 0 0 24px;
  color: #202224;
  text-align: center;
}

.login-form {
  width: min(100%, 418px);
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: #202224;
  margin-top: 16px;
}

.login-form label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-weight: 600;
}

.password-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  color: #202224;
  margin-top:12px;
}

.forgot-password {
  color: var(--color-primary);
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  color: #202224;
}

.login-form .remember-password {
  flex-direction: row;
  align-items: center;
  gap: 8px;
  font-weight: 400;
  color: #202224;
}

.remember-password input {
  appearance: none;
  display: grid;
  place-content: center;
  width: 16px;
  height: 16px;
  margin: 0;
  border: 1px solid #202224;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
}

.remember-password input::before {
  content: "";
  width: 2px;
  height: 6px;
  border: solid #656565;
  border-width: 0 1px 1px 0;
  opacity: 0;
  transform: rotate(45deg);
}

.remember-password input:checked {
  border-color: #656565;
  background-color: transparent;
}

.remember-password input:checked::before {
  opacity: 1;
}

.sign-in-button {
  align-self: center;
  width: min(90%, 418px);
}

.error-message {
  margin: 0 !important;
  color: #f01616 !important;
  font-size: 14px;
  font-weight: 600;
}

.title {
  color: var(--color-primary);
}
</style>

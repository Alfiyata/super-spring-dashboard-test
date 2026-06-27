<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: "button" | "submit" | "reset";
    fullWidth?: boolean;
    disabled?: boolean;
  }>(),
  {
    type: "button",
    fullWidth: false,
    disabled: false,
  },
);
</script>

<template>
  <button
    class="app-button"
    :class="{ 'app-button--full': fullWidth }"
    :type="type"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<style scoped>
.app-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  border: none;
  border-radius: 8px;
  padding: 12px 16px;
  background-color: var(--color-primary);
  color: #ffffff;
  font-weight: 700;
  cursor: pointer;
}

.app-button--full {
  width: 100%;
}

.app-button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}
</style>

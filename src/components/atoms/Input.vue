<script setup lang="ts">
import SearchIcon from "@/assets/icon/search.svg";

withDefaults(
  defineProps<{
    modelValue?: string;
    type?: "text" | "email" | "password" | "number";
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    icon?: "search";
  }>(),
  {
    modelValue: "",
    type: "text",
    placeholder: "",
    required: false,
    disabled: false,
    icon: undefined,
  },
);

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();
</script>

<template>
  <div class="app-input-wrapper">
    <img
      v-if="icon === 'search'"
      :src="SearchIcon"
      class="app-input-icon"
      alt=""
      aria-hidden="true"
    >
    <input
      class="app-input"
      :class="{ 'app-input--with-icon': icon }"
      :value="modelValue"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    >
  </div>
</template>

<style scoped>
.app-input-wrapper {
  position: relative;
  width: 100%;
}

.app-input-icon {
  position: absolute;
  top: 50%;
  left: 14px;
  width: 16px;
  height: 16px;
  pointer-events: none;
  transform: translateY(-50%);
}

.app-input {
  width: 100%;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 12px 14px;
  outline: none;
  background-color: #F1F4F9;
}

.app-input--with-icon {
  padding-left: 42px;
}

.app-input:focus {
  border-color: var(--color-primary);
}

.app-input:disabled {
  cursor: not-allowed;
  background-color: #f3f4f6;
}
</style>

<script setup lang="ts">
withDefaults(
  defineProps<{
    modelValue?: string;
    type?: "text" | "email" | "password" | "number";
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
  }>(),
  {
    modelValue: "",
    type: "text",
    placeholder: "",
    required: false,
    disabled: false,
  },
);

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();
</script>

<template>
  <input
    class="app-input"
    :value="modelValue"
    :type="type"
    :placeholder="placeholder"
    :required="required"
    :disabled="disabled"
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  >
</template>

<style scoped>
.app-input {
  width: 100%;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 12px 14px;
  outline: none;
  background-color: #F1F4F9;
}

.app-input:focus {
  border-color: var(--color-primary);
}

.app-input:disabled {
  cursor: not-allowed;
  background-color: #f3f4f6;
}
</style>

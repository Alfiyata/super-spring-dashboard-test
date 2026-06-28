<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string;
    subtitle?: string;
    padded?: boolean;
    bordered?: boolean;
    shadow?: boolean;
  }>(),
  {
    title: "",
    subtitle: "",
    padded: true,
    bordered: true,
    shadow: false,
  },
);
</script>

<template>
  <section
    class="app-card"
    :class="{
      'app-card--padded': padded,
      'app-card--bordered': bordered,
      'app-card--shadow': shadow,
    }"
  >
    <slot name="header">
      <header v-if="title || subtitle" class="app-card_header">
        <h2 v-if="title" class="app-card_title">{{ title }}</h2>
        <p v-if="subtitle" class="app-card_subtitle">{{ subtitle }}</p>
      </header>
    </slot>

    <div class="app-card_body">
      <slot />
    </div>

    <footer v-if="$slots.footer" class="app-card_footer">
      <slot name="footer" />
    </footer>
  </section>
</template>

<style scoped>
.app-card {
  width: 100%;
  border-radius: 8px;
  background-color: #ffffff;
}

.app-card--padded {
  padding: 16px;
}

.app-card--bordered {
  border: 1px solid #e5e7eb;
}

.app-card--shadow {
  box-shadow: 0 12px 30px rgb(15 23 42 / 8%);
}

.app-card_header {
  margin-bottom: 18px;
}

.app-card_title {
  margin: 0;
  color: #202224;
  font-size: 20px;
  font-weight: 800;
  line-height: 1.3;
}

.app-card_subtitle {
  margin: 6px 0 0;
  color: #6b7280;
  font-size: 14px;
  line-height: 1.5;
}

.app-card_body {
  min-width: 0;
}

.app-card_footer {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-top: 16px;
}
</style>

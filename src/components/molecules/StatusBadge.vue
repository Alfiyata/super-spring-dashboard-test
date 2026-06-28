<script setup lang="ts">
import ShopSearch from "@/assets/icon/shop-search.svg";

withDefaults(
  defineProps<{
    label?: string;
    value?: string;
    icon?: string;
  }>(),
  {
    label: "Status",
    value: "Dispatch",
    icon: ShopSearch,
  },
);

</script>

<template>
  <div class="status-badge">
    <span class="status-badge_label">{{ label }}:</span>
    <span class="status-badge_value">
      <img :src="icon" class="status-badge_icon" alt="">
      {{ value }}
    </span>
  </div>
</template>

<style scoped>
.status-badge {
  display: inline-flex;
  align-items: center;
  max-width: 100%;
  width: fit-content;
  gap: 16px;
  border: 1px solid #e5e7eb;
  border-bottom: 0;
  border-radius: 8px 8px 0 0;
  padding: 6px 12px;
  background-color: #ffffff;
  color: #202224;
  font-size: 14px;
  line-height: 1.3;
}

.status-badge_label,
.status-badge_value {
  white-space: nowrap;
}

.status-badge_value {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-weight: 700;
}

.status-badge_icon {
  width: 18px;
  height: 18px;
  flex: 0 0 auto;
}

@media (max-width: 640px) {
  .status-badge {
    width: 100%;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
}
</style>

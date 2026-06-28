<script setup lang="ts">
import { ref } from "vue";
import Navbar from "@/components/organisms/Navbar.vue";
import Sidebar from "@/components/organisms/Sidebar.vue";

const isSidebarCollapsed = ref(false);
const isMobileSidebarOpen = ref(false);
</script>

<template>
  <div class="app-layout">
    <Sidebar
      :mobile-open="isMobileSidebarOpen"
      @collapse-change="isSidebarCollapsed = $event"
      @close-mobile="isMobileSidebarOpen = false"
    />

    <button
      v-if="isMobileSidebarOpen"
      class="sidebar-backdrop"
      type="button"
      aria-label="Close sidebar menu"
      @click="isMobileSidebarOpen = false"
    />

    <div class="app-main" :class="{ 'app-main-expanded': isSidebarCollapsed }">
      <Navbar @toggle-sidebar="isMobileSidebarOpen = true" />

      <main class="app-content">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  min-height: 100vh;
}

.app-main {
  display: flex;
  flex: 1;
  min-width: 0;
  flex-direction: column;
  margin-left: 260px;
  transition: margin-left 160ms ease;
}

.app-main-expanded {
  margin-left: 76px;
}

.app-content {
  flex: 1;
  min-width: 0;
}

.sidebar-backdrop {
  display: none;
}

@media (max-width: 900px) {
  .app-layout {
    flex-direction: column;
  }

  .app-main {
    margin-left: 0;
  }

  .sidebar-backdrop {
    position: fixed;
    inset: 0;
    z-index: 15;
    display: block;
    border: 0;
    padding: 0;
    background-color: rgb(15 23 42 / 40%);
  }
}
</style>

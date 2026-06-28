<script setup lang="ts">
import Navbar from "@/components/organisms/Navbar.vue";
import Sidebar from "@/components/organisms/Sidebar.vue";
</script>

<template>
  <div class="app-layout">
    <Sidebar />

    <div class="app-main">
      <Navbar />

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
}

.app-content {
  flex: 1;
  min-width: 0;
}

@media (max-width: 900px) {
  .app-layout {
    flex-direction: column;
  }

  .app-main {
    margin-left: 0;
  }
}
</style>

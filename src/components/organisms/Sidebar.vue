<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth.store";
import DashboardIcon from "@/assets/icon/Dashboard-icon.svg";
import JobIcon from "@/assets/icon/job.svg";
import VehicleIcon from "@/assets/icon/List-icon.svg";
import SettingIcon from "@/assets/icon/Setting-icon.svg";
import LogoutIcon from "@/assets/icon/Logout-icon.svg";
import HamburgerIcon from "@/assets/icon/Hamburger-icon.svg";

interface SidebarItem {
  label: string;
  icon: string;
  to?: string;
  action?: () => void;
}

const route = useRoute();
const router = useRouter();
const auth = useAuthStore();

const mainMenu: SidebarItem[] = [
  { label: "Dashboard", icon: DashboardIcon, to: "/dashboard" },
  { label: "Job", icon: JobIcon, to: "/job" },
  { label: "Vehicle Lists", icon: VehicleIcon, to: "/vehicle" },
];

const bottomMenu: SidebarItem[] = [
  { label: "Setting", icon: SettingIcon },
  {
    label: "Logout",
    icon: LogoutIcon,
    action: () => {
      auth.logout();
      router.push("/login");
    },
  },
];

const isActive = (item: SidebarItem) => {
  return item.to ? route.path === item.to : false;
};
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar_logo">
      <span class="sidebar_logo-text">GPS.ID TMS</span>
      <button class="sidebar_menu-button" type="button" aria-label="Toggle sidebar menu">
        <img :src="HamburgerIcon" class="sidebar_menu-icon" alt="">
      </button>
    </div>

    <nav class="sidebar_nav" aria-label="Main navigation">
      <RouterLink
        v-for="item in mainMenu"
        :key="item.label"
        class="sidebar_item"
        :class="{ 'sidebar_item-active': isActive(item) }"
        :to="item.to ?? '#'"
      >
        <span class="sidebar_icon" aria-hidden="true">
          <img :src="item.icon" :alt="`${item.label} icon`">
        </span>
        <span>{{ item.label }}</span>
      </RouterLink>
    </nav>

    <nav class="sidebar_nav sidebar_nav-bottom" aria-label="Account navigation">
      <button
        v-for="item in bottomMenu"
        :key="item.label"
        class="sidebar_item sidebar_button"
        type="button"
        @click="item.action?.()"
      >
        <span class="sidebar_icon" aria-hidden="true">
          <img :src="item.icon" :alt="`${item.label} icon`">
        </span>
        <span>{{ item.label }}</span>
      </button>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  position: fixed;
  inset: 0 auto 0 0;
  display: flex;
  flex-direction: column;
  width: 260px;
  height: 100vh;
  padding: 24px 16px;
  border-right: 1px solid #e5e7eb;
  background-color: #ffffff;
  z-index: 20;
}

.sidebar_logo {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px 28px;
}

.sidebar_logo-text {
  color: var(--color-primary);
  font-size: 18px;
  font-weight: 800;
}

.sidebar_menu-button {
  position: absolute;
  right: 8px;
  top: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: 0;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
}

.sidebar_menu-icon {
  width: 18px;
  height: 18px;
  object-fit: contain;
}

.sidebar_nav {
  display: grid;
  gap: 8px;
}

.sidebar_nav:not(.sidebar_nav-bottom) {
  min-height: 0;
  margin-left: -16px;
  padding-left: 16px;
  overflow-y: auto;
  padding-right: 4px;
}

.sidebar_nav-bottom {
  flex: 0 0 auto;
  margin-top: auto;
  padding-top: 16px;
  background-color: #ffffff;
}

.sidebar_item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  min-height: 44px;
  border-radius: 8px;
  padding: 10px 12px;
  color: #202224;
  font-weight: 700;
  text-decoration: none;
  transition: background-color 160ms ease, color 160ms ease;
}

.sidebar_item:hover,
.sidebar_item-active {
  background-color: var(--color-primary);
  color: white;
}

.sidebar_item-active::before {
  content: "";
  position: absolute;
  left: -16px;
  top: 0px;
  bottom: 0px;
  width: 4px;
  border-radius: 0 4px 4px 0;
  background-color: var(--color-primary);
}

.sidebar_button {
  border: 0;
  background-color: transparent;
  cursor: pointer;
}

.sidebar_icon {
  display: inline-flex;
  width: 22px;
  height: 22px;
  flex: 0 0 auto;
}

.sidebar_icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: filter 160ms ease;
}

.sidebar_item:hover .sidebar_icon img,
.sidebar_item-active .sidebar_icon img {
  filter: brightness(0) invert(1);
}

@media (max-width: 900px) {
  .sidebar {
    position: static;
    inset: auto;
    width: 100%;
    height: auto;
    padding: 16px;
    border-right: 0;
    border-bottom: 1px solid #e5e7eb;
  }

  .sidebar_nav,
  .sidebar_nav-bottom {
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    overflow-x: auto;
  }

  .sidebar_nav:not(.sidebar_nav-bottom) {
    overflow-y: visible;
    padding-right: 0;
  }

  .sidebar_nav-bottom {
    margin-top: 12px;
  }
}
</style>

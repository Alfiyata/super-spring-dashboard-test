<script setup lang="ts">
import Card from "@/components/molecules/Card.vue";
import Input from "@/components/atoms/Input.vue";
import { useAuthStore } from "@/stores/auth.store";
import IconBurger from "@/assets/icon/Icon.svg";
import Notification from "@/assets/icon/Notification.svg";
import Flag from "@/assets/image/Flag.png";
import Profile from "@/assets/image/Profile.png";
import ArrowDown from "@/assets/icon/Arrow-down.svg";
import ArrowDownCircle from "@/assets/icon/Arrow-circle.svg";

const auth = useAuthStore();
</script>

<template>
  <nav class="navbar">
    <Card>
      <div class="navbar-grid">
        <div class="navbar-left">
          <img :src="IconBurger" class="button-icon" alt="Button Icon Burger">
          <Input class="input-search" placeholder="Search" />
        </div>

        <div class="navbar-right">
          <img :src="Notification" class="button-icon" alt="Button Icon Notification">
          <button class="language-select" type="button">
            <img :src="Flag" class="language-flag" alt="">
            <span>English</span>
            <img :src="ArrowDown" class="arrow-icon" alt="">
          </button>

          <button class="profile-menu" type="button" aria-label="Open profile menu">
            <img :src="Profile" class="profile-avatar" alt="">
            <span class="profile-info">
              <span class="profile-name">{{ auth.user?.username ?? "Username" }}</span>
              <span class="profile-role">Admin</span>
            </span>
            <img :src="ArrowDownCircle" class="profile-arrow" alt="">
          </button>
        </div>
      </div>
    </Card>
  </nav>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  background-color: #f8fafc;
}

.navbar-grid {
  display: grid;
  grid-template-columns: minmax(260px, 420px) 1fr;
  align-items: center;
  gap: 24px;
}

.navbar-left,
.navbar-right {
  display: flex;
  align-items: center;
}

.navbar-left {
  gap: 18px;
  min-width: 0;
}

.navbar-right {
  justify-content: flex-end;
  gap: 24px;
  color: #202224;
  font-weight: 600;
}

.navbar-right p {
  margin: 0;
  white-space: nowrap;
}

.button-icon {
  flex: 0 0 auto;
  cursor: pointer;
}

.language-select,
.profile-menu {
  display: inline-flex;
  align-items: center;
  border: 0;
  padding: 0;
  background-color: transparent;
  color: inherit;
  font: inherit;
  cursor: pointer;
}

.language-select {
  gap: 8px;
}

.language-flag {
  width: 28px;
  height: 20px;
  border-radius: 4px;
  object-fit: cover;
}

.arrow-icon {
  width: 10px;
  height: 10px;
  object-fit: contain;
}

.profile-menu {
  gap: 10px;
}

.profile-info {
  display: grid;
  gap: 2px;
  min-width: 0;
  text-align: left;
}

.profile-name {
  color: #202224;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.2;
  white-space: nowrap;
}

.profile-role {
  color: #6b7280;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.2;
}

.profile-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.profile-arrow {
  width: 18px;
  height: 18px;
  object-fit: contain;
}

.input-search {
  min-width: 0;
  border-radius: 20px;
}

@media (max-width: 768px) {
  .navbar {
    padding: 12px 16px;
  }

  .navbar-grid {
    grid-template-columns: 1fr;
  }

  .navbar-right {
    justify-content: flex-start;
    gap: 16px;
    overflow-x: auto;
  }
}
</style>

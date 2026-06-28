<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getVehicles, type Vehicle } from "@/api/vehicle";
import StatusBadge from "@/components/molecules/StatusBadge.vue";
import VehicleCard from "@/components/molecules/VehicleCard.vue";

const vehicles = ref<Vehicle[]>([]);
const isLoading = ref(false);
const errorMessage = ref("");

const fetchVehicles = async () => {
  isLoading.value = true;
  errorMessage.value = "";

  try {
    vehicles.value = await getVehicles();
  } catch (error: any) {
    errorMessage.value = error.response?.data?.message ?? "Gagal mengambil data vehicle.";
  } finally {
    isLoading.value = false;
  }
};

const getVehicleStatus = (acc?: string, speed?: string | number) => {
  const normalizedAcc = acc?.toUpperCase();
  const speedValue = Number(speed ?? 0);

  if (normalizedAcc === "ON" && speedValue > 0) {
    return "Running";
  }

  if (normalizedAcc === "OFF" && speedValue === 0) {
    return "Parking";
  }

  if (normalizedAcc === "ON" && speedValue === 0) {
    return "Stop";
  }

  return "Unknown";
};

onMounted(fetchVehicles);
</script>

<template>
  <div class="vehicle-page">
    <p v-if="isLoading" class="vehicle-page_message">Loading vehicle...</p>
    <p v-else-if="errorMessage" class="vehicle-page_error">{{ errorMessage }}</p>
    <p v-else-if="!vehicles.length" class="vehicle-page_message">Data vehicle belum tersedia.</p>

    <div v-else class="vehicle-page_grid">
      <div
        v-for="vehicle in vehicles"
        :key="vehicle.plate"
        class="vehicle-page_item"
      >
        <StatusBadge :value="getVehicleStatus(vehicle.acc, vehicle.speed)" />
        <VehicleCard
          :imei="vehicle.imei"
          :plate-number="vehicle.plate"
          :gsm-no="vehicle.gsm_no"
          :last_positioning="vehicle.last_positioning"
          :expired-gsm="vehicle.expired_gsm"
          :speed="vehicle.speed ?? '0km/h'"
          :odo="vehicle.odo ?? '0km'"
          :device_name="vehicle.device_name"
          :battery="vehicle.battery"
          :satellite="vehicle.satellite ?? 'N/A'"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.vehicle-page {
  width: 100%;
  padding: 24px;
}

.vehicle-page h1 {
  margin: 0 0 24px;
}

.vehicle-page_grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.vehicle-page_item {
  width: 100%;
  min-width: 0;
}

.vehicle-page_message,
.vehicle-page_error {
  margin: 0;
  font-weight: 600;
}

.vehicle-page_error {
  color: #f01616;
}

@media (max-width: 900px) {
  .vehicle-page {
    width: 100%;
    padding: 20px;
  }

  .vehicle-page_grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .vehicle-page {
    padding: 16px;
  }
}

@media (max-width: 420px) {
  .vehicle-page {
    padding: 12px;
  }
}
</style>

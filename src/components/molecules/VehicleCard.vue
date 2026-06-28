<script setup lang="ts">
import { computed } from "vue";
import Card from "@/components/molecules/Card.vue";

import IconBattery from "@/assets/icon/battery-4.svg";
import IconSatellite from "@/assets/icon/mdi_satellite-uplink.svg";
import IconEngine from "@/assets/icon/Engine.svg";
import Ellipse from "@/assets/image/Ellipse.png";
import TruckHitam from "@/assets/image/Truck-hitam.png";

interface IndicatorItem {
  label: string;
  icon: string;
  alt: string;
}

interface FooterItem {
  label: string;
}

const props = withDefaults(
  defineProps<{
    imei?: number | string;
    speed?: string;
    odo?: string;
    plateNumber?: string;
    device_name?: string;
    gsmNo?: string;
    last_positioning?: string;
    expiredGsm?: string;
    battery?: number | string;
    satellite?: number | string;
    indicators?: IndicatorItem[];
    footerItems?: FooterItem[];
  }>(),
  {
    imei: '-',
    speed: "40km/h",
    odo: "1000km",
    plateNumber: "123123",
    device_name: "Truck-001",
    gsmNo: "08111111111",
    last_positioning: "2024-02-22",
    expiredGsm: "2024-12-30",
    battery: 100,
    satellite:"N/AAA"
  },
);

const vehicleIndicators = computed(() => {
  if (props.indicators?.length) {
    return props.indicators;
  }

  return [
    { label: "ACC ON", icon: IconEngine, alt: "Engine" },
    { label: `${props.satellite}`, icon: IconSatellite, alt: "Satellite" },
    { label: `${props.battery}%`, icon: IconBattery, alt: "Battery" },
  ];
});

const vehicleFooterItems = computed(() => {
  if (props.footerItems?.length) {
    return props.footerItems;
  }

  return [
    { label: `Data Terakhir: ${props.last_positioning}` },
    { label: `No GSM: ${props.gsmNo}` },
    { label: `Expired: ${props.expiredGsm}` },
  ];
});
</script>

<template>
  <Card class="vehicle-card" :padded="false">
    <template #header>
      <div class="vehicle-card_header">
        <div class="vehicle-card_speed">
          <img :src="Ellipse" class="vehicle-card_speed-image" alt="">
          <div class="vehicle-card_speed-text">
            <p class="vehicle-card_speed-value">{{ speed }} km/h</p>
            <p class="vehicle-card_odo">Odo: {{ odo }}</p>
          </div>
        </div>

        <div class="vehicle-card_identity">
          <img :src="TruckHitam" class="vehicle-card_truck" alt="Truck">
          <div class="vehicle-card_identity-text">
            <p class="vehicle-card_shipment">
              Shipment Number: <span>{{ imei }}</span>
            </p>
            <p class="vehicle-card_plate">{{ plateNumber }} - {{ device_name }}</p>
          </div>
        </div>
      </div>
    </template>

    <div class="vehicle-card_indicators">
      <div
        v-for="(item, index) in vehicleIndicators"
        :key="item.label"
        class="vehicle-card_indicator"
        :class="`vehicle-card_indicator-${index + 1}`"
      >
        <img :src="item.icon" class="vehicle-card_indicator-icon" :alt="item.alt">
        {{ item.label }}
      </div>
    </div>

    <template #footer>
      <div class="vehicle-card_footer">
        <div
          v-for="item in vehicleFooterItems"
          :key="item.label"
          class="vehicle-card_footer-item"
        >
          {{ item.label }}
        </div>
      </div>
    </template>
  </Card>
</template>

<style scoped>
.vehicle-card {
  padding: 18px;
}

.vehicle-card :deep(.app-card_footer) {
  padding-top: 0;
}

.vehicle-card_header {
  display: flex;
  align-items: center;
  min-width: 0;
  gap: 24px;
  padding: 10px;
}

.vehicle-card_speed {
  position: relative;
  display: flex;
  align-items: center;
  flex: 0 0 auto;
}

.vehicle-card_speed-image {
  width: 96px;
  height: auto;
  display: block;
}

.vehicle-card_speed-text {
  position: absolute;
  left: 50%;
  top: 72%;
  width: 72px;
  text-align: center;
  transform: translate(-50%, -50%);
}

.vehicle-card_speed-value,
.vehicle-card_odo,
.vehicle-card_shipment,
.vehicle-card_plate {
  margin: 0;
}

.vehicle-card_speed-value {
  color: #4b465c;
  font-size: 10px;
  font-weight: 700;
}

.vehicle-card_odo {
  color: #9c9c9c;
  font-size: 10px;
  font-weight: 400;
}

.vehicle-card_identity {
  display: flex;
  align-items: center;
  min-width: 0;
  gap: 8px;
}

.vehicle-card_truck {
  width: 37px;
  height: auto;
  flex: 0 0 auto;
}

.vehicle-card_identity-text {
  min-width: 0;
}

.vehicle-card_shipment {
  color: #9c9c9c;
  font-size: 14px;
  font-weight: 400;
  overflow-wrap: anywhere;
}

.vehicle-card_shipment span {
  color: #000000;
}

.vehicle-card_plate {
  color: #202224;
  font-size: 18px;
  font-weight: 800;
  overflow-wrap: anywhere;
}

.vehicle-card_indicators,
.vehicle-card_footer {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: center;
  gap: 12px;
  padding: 10px;
}

.vehicle-card_indicator,
.vehicle-card_footer-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  text-align: center;
  font-size: small;
}

.vehicle-card_indicator {
  gap: 8px;
  font-weight: 700;
}

.vehicle-card_indicator-1 {
  justify-content: flex-start;
}

.vehicle-card_indicator-2 {
  justify-content: center;
}

.vehicle-card_indicator-3 {
  justify-content: flex-end;
}

.vehicle-card_indicator-icon {
  width: 20px;
  height: 20px;
  flex: 0 0 auto;
}

.vehicle-card_footer {
  width: 100%;
  background-color: #f5f6fa;
}

@media (max-width: 900px) {
  .vehicle-card_header {
    flex-wrap: wrap;
  }
}

@media (max-width: 640px) {
  .vehicle-card {
    padding: 14px;
  }

  .vehicle-card_header {
    gap: 16px;
    padding: 6px;
  }

  .vehicle-card_speed,
  .vehicle-card_identity {
    width: 100%;
  }

  .vehicle-card_identity {
    align-items: flex-start;
  }

  .vehicle-card_truck {
    width: 84px;
  }

  .vehicle-card_plate {
    font-size: 16px;
  }

  .vehicle-card_indicators,
  .vehicle-card_footer {
    grid-template-columns: 1fr;
    gap: 8px;
    padding: 8px;
  }

  .vehicle-card_indicator-1,
  .vehicle-card_indicator-2,
  .vehicle-card_indicator-3 {
    justify-content: flex-start;
  }
}

@media (max-width: 420px) {
  .vehicle-card_speed-image {
    width: 104px;
  }

  .vehicle-card_truck {
    width: 72px;
  }

  .vehicle-card_indicator {
    justify-content: flex-start;
    text-align: left;
  }

  .vehicle-card_footer-item {
    justify-content: center;
    text-align: center;
  }
}
</style>

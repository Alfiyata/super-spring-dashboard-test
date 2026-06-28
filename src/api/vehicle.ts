import api from "./axios";

export interface Vehicle {
  imei: number | string;
  plate: string;
  gsm_no: string;
  last_positioning: string;
  expired_gsm: string;
  speed?: string;
  odo?: string;
  status?: string;
  device_name: string;
  battery?: number | string;
  satellite?: number | string;
  acc?: string;
}

export const getVehicles = async (): Promise<Vehicle[]> => {
  const response = await api.get("/vehicle");
  const payload = response.data;
  const data = payload?.message?.data ?? payload?.data ?? payload;
  const vehicles = Array.isArray(data?.data) ? data.data : data;

  if (Array.isArray(vehicles)) {
    return vehicles;
  }

  return vehicles ? [vehicles] : [];
};

import api from "./axios";

export const getUsers = async () => {
  const response = await api.get("/vehicle");

  return response.data;
};

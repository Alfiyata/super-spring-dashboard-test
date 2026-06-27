import api from "./axios";

interface LoginPayload {
  username: string;
  password: string;
}

export const login = async (payload: LoginPayload) => {
  const response = await api.post("/login", payload);
  return response.data;
};

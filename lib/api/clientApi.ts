import type { RegisterRequest, User, LoginRequest } from "../../types/user"
import { nextServer as api } from "./api"

export const register = async (payload: RegisterRequest): Promise<User> => {
  const res = await api.post("/auth/register", payload)
  return res.data
}

export const login = async (payload: LoginRequest) => {
  const res = await api.post("/auth/login", payload)
  return res.data
}

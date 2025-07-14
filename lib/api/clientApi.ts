import type { User, RegisteredUser, CreateUserData } from "../../types/user"
import { nextServer as api } from "./api"

export const register = async (payload: CreateUserData) => {
  const { data } = await api.post<RegisteredUser>("/auth/register", payload)
  return data
}

export const login = async (payload: CreateUserData) => {
  const { data } = await api.post<User>("/auth/login", payload)
  return data
}

export const getUser = async () => {
  const { data } = await api.get<User>("/users/me")
  return data
}

export const editUser = async (updateUserData: RegisteredUser) => {
  const { data } = await api.patch<User>("/users/me", updateUserData)
  return data
}

// export const register = async (payload: CreateUserData) => {
//   const res = await api.post<RegisteredUser>("/auth/register", payload)
//   return res.data
// }
// export const Login = async (payload: LoginRequest): Promise<User> => {
//   const { data } = await api.post<User>("/auth/login", payload)
//   return data
// }

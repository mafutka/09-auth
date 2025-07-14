import type { User, RegisteredUser, CreateUserData } from "../../types/user"
import type { Note, NewNoteData } from "../../types/note"
import { nextServer as api } from "./api"

export const register = async (payload: CreateUserData) => {
  const { data } = await api.post<RegisteredUser>("/auth/register", payload)
  return data
}

export const login = async (payload: CreateUserData) => {
  const { data } = await api.post<User>("/auth/login", payload)
  return data
}

export const logout = async () => {
  await api.post("/auth/logout")
}

export const getUser = async () => {
  const { data } = await api.get<User>("/users/me")
  return data
}

export const editUser = async (updateUserData: RegisteredUser) => {
  const { data } = await api.patch<User>("/users/me", updateUserData)
  return data
}

export const createNote = async (note: NewNoteData): Promise<Note> => {
  const { data } = await api.post<Note>("/notes", note)
  return data
}

export const deleteNote = async (id: number): Promise<Note> => {
  const { data } = await api.delete<Note>(`/notes/${id}`)
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

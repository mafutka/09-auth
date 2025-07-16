import type { User, RegisteredUser, CreateUserData, SessionResponseData } from "../../types/user"
import type { Note, NewNoteData, FetchNotesResponse } from "../../types/note"
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

export const checkSession = async () => {
  const { data } = await api.get<SessionResponseData>("/auth/session")
  return data;
}

export const fetchNotes = async (
  page = 1,
  perPage = 12,
  search = "",
  tag = "",
): Promise<FetchNotesResponse> => {
  const params: Record<string, string | number> = { page, perPage }

  if (search.trim() !== "") {
    params.search = search.trim()
  }

  if (tag.trim().toLowerCase() !== "all" && tag.trim() !== "") {
    params.tag = tag.trim()
  }

  const { data } = await api.get<FetchNotesResponse>("/notes", {
    params,
  })

  return data
}

export const fetchNoteById = async (id: string): Promise<Note> => {
  const { data } = await api.get<Note>(`/notes/${id}`)
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



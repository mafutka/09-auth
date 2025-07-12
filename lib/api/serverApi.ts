import axios from "axios"
import type { Note } from "../../types/note"
import type { User, RegisterRequest } from "../../types/user"

const baseURL = process.env.NEXT_PUBLIC_API_URL + "/api"

export const nextServer = axios.create({
  baseURL,
  withCredentials: true,
})

export type FetchNotesResponse = {
  notes: Note[]
  total: number
  totalPages: number
  tag: string
}

export type NewNoteData = {
  title: string
  content: string
  tag: string
}

export type Category = {
  id: string
  name: string
}

export type LoginRequest = {
  email: string
  password: string
}

export const fetchNotes = async (
  page = 1,
  perPage = 12,
  search = "",
  tag = "",
): Promise<FetchNotesResponse> => {
  const params: Record<string, string | number> = { page, perPage }

  if (search.trim() !== "") params.search = search.trim()
  if (tag.trim().toLowerCase() !== "all" && tag.trim() !== "") {
    params.tag = tag.trim()
  }

  const res = await nextServer.get<FetchNotesResponse>("/notes", { params })
  return res.data
}

export const createNote = async (note: NewNoteData): Promise<Note> => {
  const res = await nextServer.post<Note>("/notes", note)
  return res.data
}

export const deleteNote = async (id: number): Promise<Note> => {
  const res = await nextServer.delete<Note>(`/notes/${id}`)
  return res.data
}

export const fetchNoteById = async (id: string): Promise<Note> => {
  const res = await nextServer.get<Note>(`/notes/${id}`)
  return res.data
}

export const register = async (payload: RegisterRequest) => {
  const res = await nextServer.post("/auth/register", payload)
  return res.data
}
export const Login = async (payload: LoginRequest): Promise<User> => {
  const { data } = await nextServer.post<User>("/auth/login", payload)
  return data
}

import axios from "axios"
import type { Note } from "../types/note"

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

export type User = {
  username: string
  email: string
  password: string
}

export type RegisterRequest = {
  username: string
  email: string
  password: string
}

export type LoginRequest = {
  email: string
  password: string
}

export const nextServer = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
})
const myToken = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN

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

  const res = await nextServer.get<FetchNotesResponse>("/notes", {
    headers: {
      Authorization: `Bearer ${myToken}`,
    },
    params,
  })

  return res.data
}

export const createNote = async (note: {
  title: string
  content: string
  tag: string
}): Promise<Note> => {
  const res = await nextServer.post<Note>("/notes", note, {
    headers: {
      Authorization: `Bearer ${myToken}`,
    },
  })

  return res.data
}

export const deleteNote = async (id: number): Promise<Note> => {
  const res = await nextServer.delete<Note>(`/notes/${id}`, {
    headers: {
      Authorization: `Bearer ${myToken}`,
    },
  })

  return res.data
}

export const fetchNoteById = async (id: string) => {
  const res = await nextServer.get<Note>(`/notes/${id}`, {
    headers: {
      Authorization: `Bearer ${myToken}`,
    },
  })
  return res.data
}

export const Register = async (payload: RegisterRequest) => {
  const { data } = await nextServer.post<User>("/auth/register", payload)
  return data
}

export const Login = async (payload: LoginRequest) => {
  const { data } = await nextServer.post<User>("/auth/login", payload)
  return data
}

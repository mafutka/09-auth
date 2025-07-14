import type { Note, FetchNotesResponse, NewNoteData } from "../../types/note"
// import type { User, RegisteredUser } from "../../types/user"
import { cookies } from "next/headers"
// import { CreateUserData} from
import { nextServer as api } from "./api"

export type Category = {
  id: string
  name: string
}

export const fetchNotes = async (
  page = 1,
  perPage = 12,
  search = "",
  tag = "",
): Promise<FetchNotesResponse> => {
  const cookieStore = await cookies()
  const params: Record<string, string | number> = { page, perPage }

  const headers = { Cookie: cookieStore.toString() }

  if (search.trim() !== "") params.search = search.trim()
  if (tag.trim().toLowerCase() !== "all" && tag.trim() !== "") {
    params.tag = tag.trim()
  }
  const { data } = await api.get<FetchNotesResponse>("/notes", {
    params,
    headers,
  })
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

export const fetchNoteById = async (id: string): Promise<Note> => {
  const cookieStore = await cookies()
  const { data } = await api.get<Note>(`/notes/${id}`, {
    headers: {
      Cookie: cookieStore.toString(),
    },
  })
  return data
}

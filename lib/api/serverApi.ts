import type { Note, FetchNotesResponse } from "../../types/note"
import type { User } from "../../types/user"
import { cookies } from "next/headers"
// import { CreateUserData} from
import { nextServer as api } from "./api"

export const getUser = async () => {
  const cookieStore = cookies()
  const { data } = await api.get<User>("/user/me", {
    headers: {
      Cookie: (await cookieStore).toString(),
    },
  })
  return data
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

export const fetchNoteById = async (id: string): Promise<Note> => {
  const cookieStore = await cookies()
  const { data } = await api.get<Note>(`/notes/${id}`, {
    headers: {
      Cookie: cookieStore.toString(),
    },
  })
  return data
}

import type { Note, FetchNotesResponse } from "../../types/note"
import {SessionResponseData} from "../../types/user"
import type { User } from "../../types/user"
import { cookies } from "next/headers"
// import { CreateUserData} from
import { nextServer } from "./api"

export const getUser = async () => {
  const cookieStore = cookies()
  console.log("🔍 [getUser] Cookie headers:", cookieStore.toString())

  try {
    const { data } = await nextServer.get<User>("/users/me", {
      headers: {
        Cookie: cookieStore.toString(),
      },
    })

    console.log("[getUser] Received user:", data)
    return data
  } catch (err) {
    console.error("[getUser] Failed to fetch user", err)
    throw new Error("Unauthorized")
  }
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
  const { data } = await nextServer.get<FetchNotesResponse>("/notes", {
    params,
    headers,
  })
  return data
}

export const fetchNoteById = async (id: string): Promise<Note> => {
  const cookieStore = await cookies()
  const { data } = await nextServer.get<Note>(`/notes/${id}`, {
    headers: {
      Cookie: cookieStore.toString(),
    },
  })
  return data
}

export const checkSession = async () => {
  const cookieStore = await cookies();
  const response = await nextServer.get<SessionResponseData>('/auth/session', {
    headers: {
      Cookie: cookieStore.toString(), 
    },
  });
  return response;
};
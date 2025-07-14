export type Note = {
  id: number
  title: string
  content: string
  createdAt: string
  updatedAt: string
  tag: string
}

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

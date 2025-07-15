import { create } from "zustand"
import { persist } from "zustand/middleware"
import { User } from "../../types/user"

type AuthStore = {
  user: User | null
  isAuthenticated: boolean
  setUser: (user: User) => void
  clearIsAuthificated: () => void
}

export const useAuthStore = create<AuthStore>()(
  persist(
(set) => ({
    user: null,
    isAuthenticated: false,
    setUser: (user:User) => {
      set(()=>({user, isAuthenticated: true}))
    },
    clearIsAuthificated: () => {
      set(()=> ({user: null, isAuthenticated: false}))
    }
}),
{
      name: "auth-storage", 
    }

  )
)

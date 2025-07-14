"use client"

import { useAuthStore } from "lib/store/userAuthStore"
import { logout } from "lib/api/clientApi"
import { useRouter } from "next/navigation"
import css from "./AuthNavigation.module.css"
import Link from "next/link"

export default function AuthNavigation() {
  const router = useRouter()

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const user = useAuthStore((state) => state.user)
  const clearIsAuthificated = useAuthStore((state) => state.clearIsAuthificated)

  const handleLogout = async () => {
    await logout()
    clearIsAuthificated()
    router.replace("/sign-in")
  }

  if (!isAuthenticated) {
    return (
      <>
        <li>
          <Link href="/sign-in">Login</Link>
        </li>
        <li>
          <Link href="/sign-up">Register</Link>
        </li>
      </>
    )
  }
  return (
    <>
      <li>
        <Link href="/profile">profile</Link>
      </li>
      <li>
        {user && <p>{user.username}</p>}
        <button className={css.logoutButton} onClick={handleLogout}>
          Logout
        </button>
      </li>
    </>
  )
}

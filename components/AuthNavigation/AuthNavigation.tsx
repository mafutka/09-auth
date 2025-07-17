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
  const clearIsAuthenticated = useAuthStore((state) => state.clearIsAuthenticated)

  const handleLogout = async () => {
    await logout()
    clearIsAuthenticated()
    router.replace("/sign-in")
  }

  if (!isAuthenticated || !user) {
    return (
      <>
        <li className={css.navigationItem}>
          <Link href="/sign-in" prefetch={false} className={css.navigationLink}>
            Login
          </Link>
        </li>
        <li className={css.navigationItem}>
          <Link href="/sign-up" prefetch={false} className={css.navigationLink}>
            Register
          </Link>
        </li>
      </>
    )
  }
  return (
    <>
      <li className={css.navigationItem}>
        {/* {user && <p>{user.username}</p>} */}
        {user && <p className={css.userEmail}>{user.email}</p>}
        <button className={css.logoutButton} onClick={handleLogout}>
          Logout
        </button>
      </li>
    </>
  )
}

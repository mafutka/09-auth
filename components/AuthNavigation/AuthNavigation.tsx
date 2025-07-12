"use client"

import css from "./AuthNavigation.module.css"
import Link from "next/link"

type Props = {
  isAuthenticated: boolean
  //   userEmail?: string
  onLogout: () => void
}

export default function AuthNavigation({ isAuthenticated, onLogout }: Props) {
  return (
    <ul>
      {isAuthenticated ? (
        <>
          <li className={css.navigationItem}>
            <Link
              href="/profile"
              prefetch={false}
              className={css.navigationLink}
            >
              Profile
            </Link>
          </li>
          <li className={css.navigationItem}>
            <button className={css.logoutButton} onClick={onLogout}>
              Logout
            </button>
          </li>
        </>
      ) : (
        <>
          <li className={css.navigationItem}>
            <Link
              href="/sign-in"
              prefetch={false}
              className={css.navigationLink}
            >
              Login
            </Link>
          </li>

          <li className={css.navigationItem}>
            <Link
              href="/sign-up"
              prefetch={false}
              className={css.navigationLink}
            >
              Register
            </Link>
          </li>
        </>
      )}
    </ul>
  )
}

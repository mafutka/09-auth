"use client"

import css from "./Header.module.css"
import Link from "next/link"
import TagsMenu from "../TagsMenu/TagsMenu"
import AuthNavigation from "components/AuthNavigation/AuthNavigation"
import { useAuthStore } from "../../lib/store/userAuthStore"

const Header = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const user = useAuthStore((state) => state.user)
  const clearIsAuthificated = useAuthStore((state) => state.clearIsAuthificated)

  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home">
        NoteHub
      </Link>
      <div>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
         <AuthNavigation
            isAuthenticated={isAuthenticated}
            userEmail={user?.email ?? ""}
            onLogout={clearIsAuthificated}
/>
</li>
<li>
          <TagsMenu />
          </li>
        </ul>
      </nav>
      </div>
    </header>
  )
}

export default Header

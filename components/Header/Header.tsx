"use client"

import css from "./Header.module.css"
import Link from "next/link"
import TagsMenu from "../TagsMenu/TagsMenu"
import AuthNavigation  from "../AuthNavigation/AuthNavigation"
import { useAuthStore } from "../../lib/store/userAuthStore"

const Header = () => {
const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
const user = useAuthStore((state) => state.user)
const clearIsAuthenticated = useAuthStore((state) => state.clearIsAuthenticated)

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
         <AuthNavigation />
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

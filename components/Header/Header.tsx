"use client"

import css from "./Header.module.css"
import Link from "next/link"
import TagsMenu from "../TagsMenu/TagsMenu"
import AuthNavigation from "components/AuthNavigation/AuthNavigation"

const Header = () => {
  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home">
        NoteHub
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <AuthNavigation
            isAuthenticated={false}
            // userEmail="user@example.com"
            onLogout={() => {
              console.log("Logging out")
            }}
          />
          <TagsMenu />
        </ul>
      </nav>
    </header>
  )
}

export default Header

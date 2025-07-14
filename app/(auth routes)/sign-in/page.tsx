"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { login } from "../../../lib/api/clientApi"
import type { User } from "../../../types/user"
import css from "./SignInPage.module.css"

export default function SignInPage() {
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const payload: LoginRequest = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    }

    try {
      await login(payload)
      router.push("/profile")
    } catch (err) {
      console.error("Login error", err)
      setError("Login failed. Please check your credentials.")
    }
  }

  return (
    <main className={css.mainContent}>
      <form className={css.form} onSubmit={handleSubmit}>
        <h1 className={css.formTitle}>Sign in</h1>

        <div className={css.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            className={css.input}
            required
          />
        </div>

        <div className={css.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            className={css.input}
            required
          />
        </div>

        <div className={css.actions}>
          <button type="submit" className={css.submitButton}>
            Log in
          </button>
        </div>

        {error && <p className={css.error}>{error}</p>}
      </form>
    </main>
  )
}

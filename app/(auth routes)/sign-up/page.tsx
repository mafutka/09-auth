"use client"

import type { RegisterRequest } from "lib/api"
import { Register as register } from "lib/api"
import css from "./SignUpPage.module.css"

const Register = () => {
  const handleRegister = async (formData: FormData) => {
    console.log("formData", formData)
    const payload = Object.fromEntries(formData) as RegisterRequest
    const res = await register(payload)

    console.log("res", res)
  }
  return (
    <form className={css.form} action={handleRegister}>
      <h2>Sign up</h2>
      <label htmlFor="username">Name</label>
      <input
        className={css.input}
        type="text"
        name="username"
        placeholder="Username"
        required
      />
      <label htmlFor="email">Email</label>
      <input
        className={css.input}
        type="email"
        name="email"
        placeholder="Email"
        required
      />
      <label htmlFor="Password">Password</label>
      <input
        className={css.input}
        type="password"
        name="password"
        placeholder="Password"
        required
      />
      <button className={css.submitButton} type="submit">
        Register
      </button>
    </form>
  )
}

export default Register

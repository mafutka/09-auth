"use client"

import type { RegisterRequest } from "lib/api"
import { Register as register } from "lib/api"

const Register = () => {
  const handleRegister = async (formData: FormData) => {
    console.log("formData", formData)
    const payload = Object.fromEntries(formData) as RegisterRequest
    const res = await register(payload)

    console.log("res", res)
  }
  return (
    <form action={handleRegister}>
      <input type="text" name="username" required />
      <br />
      <input type="email" name="email" required />
      <br />
      <input type="password" name="password" required />
      <br />
      <button type="submit">Register</button>
    </form>
  )
}

export default Register

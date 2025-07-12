"use client"
import css from "./SignInPage.module.css"

const Login = () => {
  const handleLogin = (formData: FormData) => {
    console.log("formData", formData)
  }
  return (
    <form action={handleLogin} className={css.form}>
      <h2 className={css.formTitle}>Sign in</h2>

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
        Login
      </button>
    </form>
  )
}

export default Login

"use client"

const Login = () => {
  const handleLogin = (formData: FormData) => {
    console.log("formData", formData)
  }
  return (
    <form action={handleLogin}>
      <input type="email" name="email" placeholder="Email" />
      <br />
      <input type="password" name="password" placeholder="Password" />
      <br />
      <button type="submit">Login</button>
    </form>
  )
}

export default Login

// "use client"

// // import { useState } from "react"
// import { useRouter } from "next/navigation"
// import { register } from "../../../lib/api/clientApi"
// // import type { RegisterRequest } from "../../../types/user"
// import { useAuthStore } from "../../../lib/store/userAuthStore"
// // import css from "./SignUpPage.module.css"

// // export default function SignUpPage() {
// //   const router = useRouter()

// //   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// //     e.preventDefault()
// //     const formData = new FormData(e.currentTarget)

// //     const payload: RegisterRequest = {
// //       username: formData.get("username") as string,
// //       email: formData.get("email") as string,
// //       password: formData.get("password") as string,
// //     }

// //     try {
// //       await register(payload)
// //       router.push("/profile")
// //     } catch (err) {
// //       console.error("Registration error", err)
// //       setError("Registration failed. Please try again.")
//     }
//   }

//   return (
//     <main className={css.mainContent}>
//       <h1 className={css.formTitle}>Sign up</h1>
//       <form className={css.form} onSubmit={handleSubmit}>
//         <div className={css.formGroup}>
//           <label htmlFor="username">Name</label>
//           <input id="username" name="username" className={css.input} required />
//         </div>

//         <div className={css.formGroup}>
//           <label htmlFor="email">Email</label>
//           <input
//             id="email"
//             type="email"
//             name="email"
//             className={css.input}
//             required
//           />
//         </div>

//         <div className={css.formGroup}>
//           <label htmlFor="password">Password</label>
//           <input
//             id="password"
//             type="password"
//             name="password"
//             className={css.input}
//             required
//           />
//         </div>

//         <div className={css.actions}>
//           <button type="submit" className={css.submitButton}>
//             Register
//           </button>
//         </div>

//         {error && <p className={css.error}>{error}</p>}
//       </form>
//     </main>
//   )
// }

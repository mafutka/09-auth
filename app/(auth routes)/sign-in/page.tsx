"use client"

import { useRouter } from "next/navigation"
import { login } from "../../../lib/api/clientApi"
import { useAuthStore } from "lib/store/userAuthStore"
import { CreateUserData } from "types/user"
import css from "./SignInPage.module.css"

export default function SignIn() {
    const setUser = useAuthStore((state)=> state.setUser)
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        const userData: CreateUserData = {
            email,
            password,
        };
        try {
            const user = await login(userData);
            setUser(user);
            router.replace("/profile")
        } catch(error) {
            console.log(error);
            
        }
    };
    return <main className={css.mainContent}>
 <form className={css.form} onSubmit={handleSubmit}>
    <h1 className={css.formTitle}>Sign in</h1>

    <div className={css.formGroup}>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email" className={css.input} required />
    </div>

    <div className={css.formGroup}>
      <label htmlFor="password">Password</label>
      <input id="password" type="password" name="password" className={css.input} required />
    </div>

    <div className={css.actions}>
      <button type="submit" className={css.submitButton}>
        Log in
      </button>
    </div>

    <p className={css.error}>Some error</p>
  </form>
</main>
}

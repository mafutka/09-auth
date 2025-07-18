'use client';

import { useAuthStore } from "../../../lib/store/authStore";
import Link from "next/link";
import css from "./ProfilePage.module.css";

export default function Profile() {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return <p>Loading user...</p>; 
  }

  return (
    <main className={css.mainContent}>
      <div className={css.profileCard}>
        <div className={css.header}>
          <h1 className={css.formTitle}>Profile Page</h1>
          <pre>{JSON.stringify(user, null, 2)}</pre>
          <Link href="/profile/edit" className={css.editProfileButton}>
            Edit Profile
          </Link>
        </div>
        <div className={css.profileInfo}>
          <p>Username: {user?.username || "your_username"}</p>
          <p>Email: {user?.email || "your_email@example.com"}</p>
        </div>
      </div>
    </main>
  );
}
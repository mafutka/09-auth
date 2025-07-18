"use client";

import { getUser, checkSession } from "../../lib/api/clientApi";
import React, { useEffect, useState } from "react";
import { useAuthStore } from "../../lib/store/authStore";

export type Props = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const setUser = useAuthStore((state) => state.setUser);
  const clearIsAuthenticated = useAuthStore((state) => state.clearIsAuthenticated);
  const isHydrated = useAuthStore((state) => state.isHydrated); 
  const user = useAuthStore((state) => state.user); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("[AuthProvider] Zustand hydrated:", isHydrated);

    const fetchUser = async () => {
      console.log("[AuthProvider] Fetching user...");

      try {
        await checkSession();
        console.log("SESSION OK PROVIDER");

        const user = await getUser();
        console.log("GETUSER OK PROVIDER", user);

        if (user) setUser(user);
      } catch (error) {
        console.error("[CHECK USER ERROR", error);
        clearIsAuthenticated();
      } finally {
        setLoading(false);
      }
    };

    if (isHydrated) {
      fetchUser();
    }
  }, [isHydrated, setUser, clearIsAuthenticated]);

  useEffect(() => {
    console.log("[AuthProvider] User state changed:", user);
  }, [user]);

  if (!isHydrated || loading) {
    return <div>Loading auth...</div>;
  }

  return children;
};

export default AuthProvider;
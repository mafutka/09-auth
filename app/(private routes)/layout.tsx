"use client";

import { useAuthStore } from "../../lib/store/authStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type PrivateLayoutProps = {
  children: React.ReactNode;
};

const PrivateLayout = ({ children }: PrivateLayoutProps) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const isHydrated = useAuthStore((state) => state.isHydrated);
  const router = useRouter();

  useEffect(() => {
    if (isHydrated && !isAuthenticated) {
      router.replace("/sign-in");
    }
  }, [isHydrated, isAuthenticated, router]);

  if (!isHydrated) return <div>Hydrating...</div>;
  if (!isAuthenticated) return null;

  return <>{children}</>;
};

export default PrivateLayout;
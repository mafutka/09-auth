"use client"

import {getUser, checkSession} from "../../lib/api/clientApi"
import React, { useEffect } from "react"
import { useAuthStore } from "../../lib/store/userAuthStore"


export type Props = {
children: React.ReactNode;
}

const AuthProvider = ({children}: Props) => {
const setUser = useAuthStore((state)=> state.setUser)
const clearIsAuthenticated = useAuthStore((state)=>state.clearIsAuthenticated)

useEffect(()=> {
    const fetchUser = async () => {
          const isAuthenticated = await checkSession();
      if (!isAuthenticated) {
        clearIsAuthenticated();
        return;
      } else {
        const user = await getUser();
        if (user) setUser(user);
      }
    }
    fetchUser()
}, [setUser, clearIsAuthenticated]);
return children;
}

export default AuthProvider;

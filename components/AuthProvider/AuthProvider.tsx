"use client"

import {getUser} from "../../lib/api/clientApi"
import React, { useEffect } from "react"
import { useAuthStore } from "lib/store/userAuthStore"
import { checkSession } from "lib/api/clientApi"

export type Props = {
children: React.ReactNode;
}

const AuthProvider = ({children}: Props) => {
const setUser = useAuthStore((state)=> state.setUser)
const clearIsAuthificated = useAuthStore((state)=>state.clearIsAuthificated)

useEffect(()=> {
    const fetchUser = async () => {
        try {
            const response = await checkSession();
            if (response.data.success) {
                const user = await getUser();
                if (user) setUser(user)
            } else {
        clearIsAuthificated()
    }
    }
    catch (error) {
clearIsAuthificated();
console.error("Authentification failed", error)
    }     
    }
    fetchUser()
}, [setUser, clearIsAuthificated]);
return children;
}

export default AuthProvider;

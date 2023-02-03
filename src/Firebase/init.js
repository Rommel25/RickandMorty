import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth , onAuthStateChanged} from "firebase/auth";
import {firebaseConfig} from "./firebase-config";
import { useState, useEffect, useContext, createContext } from 'react'


export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);

export const AuthContext = createContext()

export const AuthContextProvider = props => {
    const [user, setUser] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(getAuth(), setUser, setError)
        return () => unsubscribe()
    }, [])
    return <AuthContext.Provider value={{ user, error }} {...props} />
}

export const useAuthState = () => {
    const auth = useContext(AuthContext)
    return { ...auth, isAuthenticated: auth.user != null }
}

import { useEffect, useState } from "react"
import { Auth } from "../firebase/Firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext()

export function AuthProvider({childern}) {
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(Auth, initializeUser)
        return unsubscribe
    }, [])

    async function initializeUser(user) {
        if(user) {
            setCurrentUser({...user});
            setUserLoggedIn(true)
        } else {
            setCurrentUser(null);
            setUserLoggedIn(false)
        }
        setLoading(false)
    }

    const value= {
        currentUser,
        userLoggedIn,
        loading
    }
}
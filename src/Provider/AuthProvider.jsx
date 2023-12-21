import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useState } from "react";
import { useEffect } from "react";
import app from "../firebase.init";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const[user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)
    const auth = getAuth(app)
     
    const signUp =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const unSubScribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoader(false)
        });
        return () => {
            return unSubScribe()}
    },[auth])

    const authFunc = {user, signUp, loader}
    return (
        <AuthContext.Provider value={authFunc}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
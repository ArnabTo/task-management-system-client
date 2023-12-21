import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
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

    const signIn =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUser=(name, photo)=>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    useEffect(()=>{
        const unSubScribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoader(false)
        });
        return () => {
            return unSubScribe()}
    },[auth])

    const authFunc = {user, signUp, signIn, loader, updateUser}
    return (
        <AuthContext.Provider value={authFunc}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
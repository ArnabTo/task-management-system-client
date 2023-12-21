import { createContext } from "react";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {

    const 
    const authFunc = {}
    return (
        <AuthContext.Provider value={authFunc}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
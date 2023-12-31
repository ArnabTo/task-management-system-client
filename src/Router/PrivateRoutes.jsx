import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoutes = ({children}) => {
    const {user, loader} = useContext(AuthContext);
    if(loader){
        return(
            <div>
              loading....
            </div>
        )
    }
    if(user){
        return children
    } return <Navigate to='/login'></Navigate>

};

export default PrivateRoutes;
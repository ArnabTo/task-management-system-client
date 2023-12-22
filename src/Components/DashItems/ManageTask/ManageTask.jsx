import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const ManageTask = () => {
    const {user} = useContext(AuthContext);
    const [userTask, setUserTask] = useState([])
    useEffect(()=>{
        axios.get(`http://localhost:5000/usertasks/${user.email}`)
        .then(res=> setUserTask(res.data))
    },[user.email])
    return (
        <div>
            {
                userTask.map(userT => <div>asdfsd</div>)
            }
        </div>
    );
};

export default ManageTask;
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useOngoingTask = () => {
    const {user} = useContext(AuthContext);
    // console.log(user.email)
    const {data: ongoingTask=[], refetch: onGoingRefetch} = useQuery({
        queryKey: ['ongoingTask', {email: user.email}],
        queryFn: async()=>{
            const result = await axios.get(`http://localhost:5000/ongoing?email=${user.email}`)
            return result.data
        }
    })
    return {ongoingTask, onGoingRefetch}
};

export default useOngoingTask;

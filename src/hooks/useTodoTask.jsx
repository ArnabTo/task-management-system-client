import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useTodoTask = () => {
    const {data: todos=[], refetch} = useQuery({
        queryKey:['todos'],
        queryFn: async()=>{
            const result = await axios.get('http://localhost:5000/todotask')
            // console.log(result.data)
            return result.data
        } 
    })
    return [todos, refetch]
};

export default useTodoTask;
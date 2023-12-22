import axios from "axios";
import { Card, Toast } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';

const ManageTask = () => {
    const { user } = useContext(AuthContext);
    const [userTask, setUserTask] = useState([])
    useEffect(() => {
        axios.get(`https://task-management-server-henna-theta.vercel.app/usertasks/${user.email}`)
            .then(res => setUserTask(res.data))
    }, [user.email])

    const handleDelete = (id) => {
        axios.delete(`https://task-management-server-henna-theta.vercel.app/deletetask/${id}`)
            .then(res => {
                if (res.data.message === 'succeed') {
                    toast.success('Deleted, Please reload!')
                }
                console.log(res)
            })
    }
    return (
        <div className="mx-4">
            <h2 className="text-center text-3xl font-bold my-8">Manage Task</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                {
                    userTask.map(userT =>
                        <Card className="max-w-sm" id="customBG" key={userT._id} data-aos="flip-down">
                            <div>
                                <h5 className="text-2xl font-bold tracking-tight text-white">{userT.taskD}</h5>
                                <p className="font-normal text-white">{userT.date}</p>
                                <p className="font-normal text-white">Status - {userT.status}</p>
                            </div>
                            <button onClick={() => handleDelete(userT._id)}>Delete</button>
                        </Card>
                    )
                }
            </div>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </div>
    );
};

export default ManageTask;
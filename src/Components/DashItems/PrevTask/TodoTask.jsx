import { useDrag } from "react-dnd";
import { Card } from "flowbite-react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
const TodoTask = ({ todo }) => {
    const { _id, taskD, date, priority, title } = todo;


    const handleFinish = (id) => {
        axios.patch(`https://task-management-server-henna-theta.vercel.app/taskupdate/${id}`)
            .then(res => {
                if (res.data.message === 'succeed') {
                  toast.success('Task status updated!')
                }
                console.log(res)
            })
    }
    return (
        <Card className="max-w-sm" id="customBG" data-aos="flip-left">
            <div>
                <h5 className="text-2xl font-bold tracking-tight text-white">Title - {title}</h5>
                <p>Task - {taskD}</p>
                <p className="font-normal text-white">Priority - {priority}</p>
                <p className="font-normal text-white">Deadline - {date}</p>
            </div>
            <button onClick={() => handleFinish(_id)}>Finish</button>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </Card>
    );
};

export default TodoTask;

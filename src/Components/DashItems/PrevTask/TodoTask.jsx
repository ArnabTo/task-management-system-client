import { useDrag } from "react-dnd";
import { Card } from "flowbite-react";
import axios from "axios";

const TodoTask = ({ todo }) => {
    const { _id, taskD, date, priority, title } = todo;


    const handleFinish=(id)=>{
          axios.patch(`http://localhost:5000/taskupdate/${id}`)
    }
    return (
        <Card className="max-w-sm" id="customBG">
            <div>
                <h5 className="text-2xl font-bold tracking-tight text-white">Title - {title}</h5>
                <p>Task - {taskD}</p>
                <p className="font-normal text-white">Priority - {priority}</p>
                <p className="font-normal text-white">Deadline - {date}</p>
            </div>
            <button onClick={()=>handleFinish(_id)}>Finished</button>
        </Card>
    );
};

export default TodoTask;

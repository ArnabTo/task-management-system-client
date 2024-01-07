import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from 'flowbite-react';
import { useDrag, useDrop } from "react-dnd";
import TodoTask from "./todoTask";
import { useQuery } from "@tanstack/react-query";
import useTodoTask from "../../../hooks/useTodoTask";
import useOngoingTask from "../../../hooks/useOngoingTask";

const PrevTask = () => {
    const [todos, refetch] = useTodoTask();
    // console.log(todos)
    const { ongoingTask, onGoingRefetch } = useOngoingTask();

    const [finishedData, setFinishedData] = useState([]);
    const [loading, setLoading] = useState(true);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'div',
        drop: (task) => addTaskToOngoing(task.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }))

    const addTaskToOngoing = async (id) => {
       await axios.patch(`http://localhost:5000/ongointask/${id}`)
      
    }
    useEffect(() => {
        axios.get('https://task-management-server-henna-theta.vercel.app/finishedtask')
            .then(res => {
                setFinishedData(res.data)
                setLoading(false)
            })
    }, [])
    useEffect(() => {
        if (todos) {
            refetch();
        }
    })
    useEffect(()=>{
        if(ongoingTask){
            onGoingRefetch();
        }
    })


    return (
        <div className="mx-4">
            <h2 className="text-center text-3xl font-bold my-8">All Previous Taks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div>
                    <h3 className="text-2xl font-bold mb-4">To-Do</h3>
                    <div className="grid grid-cols-1 gap-4">
                        {
                            todos.map(todo => <TodoTask key={todo._id} todo={todo}></TodoTask>)
                        }
                    </div>
                </div>
                <div ref={drop}>
                    <h3 className="text-2xl font-bold mb-4">On Going</h3>
                    {
                        ongoingTask.map(ongoingTask =>
                            <Card className="max-w-sm" id="customBG" key={ongoingTask._id} data-aos="flip-right">
                                <div>
                                    <h5 className="text-2xl font-bold tracking-tight text-white">{ongoingTask.taskD}</h5>
                                    <p className="font-normal text-white">{ongoingTask.date}</p>
                                </div>
                                <button>Finished</button>
                            </Card>)
                    }
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-4">Finished Task</h3>
                    <div className="grid grid-cols-1 gap-4">
                        {
                            finishedData.map(finished =>
                                <Card className="max-w-sm" id="customBG" key={finished._id} data-aos="flip-right">
                                    <div>
                                        <h5 className="text-2xl font-bold tracking-tight text-white">{finished.taskD}</h5>
                                        <p className="font-normal text-white">{finished.date}</p>
                                    </div>
                                    <button>Finished</button>
                                </Card>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrevTask;
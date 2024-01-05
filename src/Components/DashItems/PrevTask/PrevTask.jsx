import axios from "axios";
import { useEffect, useState } from "react";
import { Avatar, Card } from 'flowbite-react';
import { useDrag, useDrop } from "react-dnd";
import TodoTask from "./todoTask";

const PrevTask = () => {

    const [todoData, setTodoData] = useState([]);
    const [finishedData, setFinishedData] = useState([]);
    useEffect(() => {
        axios.get('https://task-management-server-henna-theta.vercel.app/todotask')
            .then(res => setTodoData(res.data))
    }, [])
    useEffect(() => {
        axios.get('https://task-management-server-henna-theta.vercel.app/finishedtask')
            .then(res => setFinishedData(res.data))
    }, [])

    return (
        <div className="mx-4">
            <h2 className="text-center text-3xl font-bold my-8">All Previous Taks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div>
                    <h3 className="text-2xl font-bold mb-4">To-Do</h3>
                    <div className="grid grid-cols-1 gap-4">
                        {
                            todoData.map(todo => <TodoTask key={todo._id} todo={todo}></TodoTask>)
                        }
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-4">On-Going</h3>
                    <div></div>
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
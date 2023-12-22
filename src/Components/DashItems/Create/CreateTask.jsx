import axios from 'axios';
import { Label, Select, Textarea, TextInput } from 'flowbite-react';
import { useContext } from 'react';
import { useForm } from "react-hook-form"
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../../Provider/AuthProvider';
const CreateTask = () => {
    const { user } = useContext(AuthContext);
    const date = new Date();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        const taskData = {
            email: user.email,
            title: data.title,
            taskD: data.task,
            priority: data.priority,
            date: data.date,
            status: 'todo'
        }
        // console.log(taskData)
        axios.post('http://localhost:5000/tasks', taskData)
            .then(res => {
                if (res.data === 'succeed') {
                    toast.success('Task Created')
                }
                // console.log(res)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h2 className="text-3xl text-center font-bold my-8">Create Your Task Here</h2>
            <div className="max-w-md mx-auto">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="title" value="Your email" className='text-white' />
                        </div>
                        <TextInput id="Title" type="Text" {...register('title')} placeholder="title" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="date" value="Date" className='text-white' />
                        </div>
                        <TextInput id="date" type="date" {...register('date')} required />
                    </div>
                    <div className="max-w-md">
                        <div className="mb-2 block">
                            <Label htmlFor="level" value="Priority" />
                        </div>
                        <Select id="level" required {...register('priority')}>
                            <option>High</option>
                            <option>Medium</option>
                            <option>low</option>
                        </Select>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="comment" value="Your message" className='text-white' />
                        </div>
                        <Textarea id="comment" {...register('task')} placeholder="Create your todo..." required rows={4} />
                    </div>
                    <button type='submit' className='bg-white text-black my-4 rounded px-8 py-2 uppercase'>Add</button>
                </form>
            </div>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </div>
    );
};

export default CreateTask;
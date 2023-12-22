import axios from 'axios';
import { Label, Textarea } from 'flowbite-react';
import { useForm } from "react-hook-form"
import toast, { Toaster } from 'react-hot-toast';
const CreateTask = () => {
 
    const date = new Date();

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {
        // console.log(data)
        const taskData = {
            taskD: data.task,
            date: date.toLocaleDateString()
        }
        // console.log(taskData)
        axios.post('http://localhost:5000/tasks', taskData)
        .then(res =>{
            if(res.data === 'succeed'){
                toast.success('Task Created')
            }
            // console.log(res)
        })
        .catch(err => console.log(err) )
    }
    
    return (
        <div>
            <h2 className="text-3xl text-center font-bold my-8">Create Your Task Here</h2>
            <div className="max-w-md mx-auto">
                <div className="mb-2 block">
                    <Label htmlFor="comment" value="Your message" className='text-white' />
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Textarea id="comment" {...register('task')} placeholder="Create your todo..." required rows={4} />
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
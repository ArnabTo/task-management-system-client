import axios from 'axios';
import { Label, Textarea } from 'flowbite-react';
import { useForm } from "react-hook-form"
const CreateTask = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {
        console.log(data)
    
        axios.post('http://localhost:5000/tasks', data)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    
    return (
        <div>
            <h2 className="text-3xl text-center font-bold my-8">Create Your Task Here</h2>
            <div className="max-w-md mx-auto">
                <div className="mb-2 block">
                    <Label htmlFor="comment" value="Your message" />
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Textarea id="comment" {...register('task')} placeholder="Leave a comment..." required rows={4} />
                    <button type='submit' className='bg-white text-black my-4 rounded px-8 py-2 uppercase'>Add</button>
                </form>
            </div>
        </div>
    );
};

export default CreateTask;
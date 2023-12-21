import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
const Register = () => {

  const { signUp, user } = useContext(AuthContext)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  console.log(user)
  
  const onSubmit = (data) => {
    console.log(data)
    signUp(data.email, data.password)
      .then(res => {
        console.log(res)
        if(user){
          toast.success('Successfully Registered!')
        }
      })
  }
  return (
    <div className='max-w-6xl mx-auto'>
      <Card className="max-w-sm m-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your Name" />
            </div>
            <TextInput id="name" type="text" {...register('displayName')} placeholder="name" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="image" value="Your Image" />
            </div>
            <TextInput id="image" type="text" {...register('photoURL')} placeholder="photoURL" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput id="email1" type="email" {...register('email')} placeholder="name@flowbite.com" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" {...register('password')} type="password" required />
          </div>
          <Button type="submit">Sign Up</Button>
        </form>
      </Card>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </div>
  );
};

export default Register;
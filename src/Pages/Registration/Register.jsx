import { Button, Card, Label, TextInput } from 'flowbite-react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
const Register = () => {

  const { signUp, user, updateUser } = useContext(AuthContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  
  // console.log(user)
  
  const onSubmit = (data) => {
    console.log(data)
    signUp(data.email, data.password)
      .then(res => {
        // console.log(res)
        updateUser(data.displayName, data.photoURL)
        if(user){
          toast.success('Successfully Registered!')
        }

      })
  }
  return (
    <div className='max-w-6xl mx-auto'>
      <Card className="max-w-sm m-auto" id='customBG'>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your Name" className='text-white' />
            </div>
            <TextInput id="name" type="text" {...register('displayName')} placeholder="name" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="image" value="Your Image"  className='text-white' />
            </div>
            <TextInput id="image" type="text" {...register('photoURL')} placeholder="photoURL" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email"   className='text-white'/>
            </div>
            <TextInput id="email1" type="email" {...register('email')} placeholder="name@flowbite.com" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password"   className='text-white'/>
            </div>
            <TextInput id="password" {...register('password')} type="password" required />
          </div>
          <Button type="submit">Sign In</Button>
        </form>
        <Link className='text-white' to='/login'>Already a user? Sign In</Link>
      </Card>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </div>
  );
};

export default Register;
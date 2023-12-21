import { Button, Card, Label, TextInput } from 'flowbite-react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Login = () => {
    const { signIn, user } = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      
      // console.log(user)
      
      const onSubmit = (data) => {
        console.log(data)
        signIn(data.email, data.password)
          .then(res => {
            // console.log(res)
            if(user){
              toast.success('Successfully Loged In!')
            }
          })
      }

    return (
        <div className='max-w-6xl mx-auto'>
        <Card className="max-w-sm m-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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
          <Link to='/reg'>New User? Create Account.</Link>
        </Card>
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
      </div>
    );
};

export default Login;
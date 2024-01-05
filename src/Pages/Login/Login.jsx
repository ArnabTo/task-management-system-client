import { Button, Card, Label, TextInput } from 'flowbite-react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import '../../App.css'
const Login = () => {
    const { signIn, user } = useContext(AuthContext)
  
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      
      // console.log(user)
      
      const onSubmit = (data) => {
        // console.log(data)
        signIn(data.email, data.password)
        .then(res =>{
              toast.success('Logged In')
              navigate('/dash')
          })
      }
 
      
    return (
        <div className='max-w-6xl mx-auto' >
        <Card className="max-w-sm m-auto" id='customBG'>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" className='text-white' />
              </div>
              <TextInput id="email1" type="email" {...register('email')} placeholder="name@flowbite.com" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Your password" className='text-white'/>
              </div>
              <TextInput id="password1" {...register('password')} type="password" required />
            </div>
            <Button type="submit">Sign in</Button>
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
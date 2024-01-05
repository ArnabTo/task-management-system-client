import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const Nav = () => {
    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
        toast.success('Loged Out!')
    }
    return (
        <div className='max-w-6xl mx-auto'>
            <Navbar fluid rounded className='bg-[#000] my-4'>
                <Navbar.Brand href="https://flowbite-react.com">
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">ExecuFlow</span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            user ? <Avatar alt="User settings" img={user?.photoURL} rounded /> : ''

                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                {user ? user?.displayName : ''}
                            </span>
                            <span className="block truncate text-sm font-medium">
                                {user ? user?.email : ''}
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>
                            <Link to='/dash'>Dashboard</Link>
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item><button onClick={handleSignOut}>Sign out</button></Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Link to='/'><Navbar.Link href="#" className='text-white'>Home</Navbar.Link></Link>
                    <Link><Navbar.Link href="#" className='text-white'>Our Users</Navbar.Link></Link>
                    <Link><Navbar.Link href="#" className='text-white'>Explore</Navbar.Link></Link>
                    {
                        user ? <button onClick={handleSignOut}>Sign out</button> : <Link to='/login'><button>Sign In</button></Link>
                    }
                </Navbar.Collapse>
            </Navbar>
            <Toaster
            position="top-right"
            reverseOrder={false}
          />
        </div>
    );
};

export default Nav;
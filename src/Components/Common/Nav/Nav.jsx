import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Nav = () => {
    const {user, signOutUser} = useContext(AuthContext);

    const handleSignOut=()=>{
        signOutUser()
    }
    return (
        <div className='max-w-6xl mx-auto'>
        <Navbar fluid rounded className='bg-[#000] my-4'>
        <Navbar.Brand href="https://flowbite-react.com">
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Manage Task</span>
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
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
           <Link to='/'><Navbar.Link href="#" className='text-white'>Home</Navbar.Link></Link>
           <Link><Navbar.Link href="#" className='text-white'>About</Navbar.Link></Link>
           {
            user ?  <button onClick={handleSignOut}>Sign Out</button> : <Link to='/login'><button>Sign In</button></Link>
           }
        </Navbar.Collapse>
    </Navbar>
        </div>
    );
};

export default Nav;
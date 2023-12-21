import { Avatar, Dropdown, Navbar } from 'flowbite-react';

const Nav = () => {
    return (
        <div className='max-w-6xl mx-auto'>
        <Navbar fluid rounded className='bg-[#000]'>
        <Navbar.Brand href="https://flowbite-react.com">
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Manage Task</span>
        </Navbar.Brand>
        <div className="flex md:order-2">
            <Dropdown
                arrowIcon={false}
                inline
                label={
                    <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                }
            >
                <Dropdown.Header>
                    <span className="block text-sm">Bonnie Green</span>
                    <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                </Dropdown.Header>
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
            <Navbar.Link href="#" className='text-white'>Home</Navbar.Link>
            <Navbar.Link href="#" className='text-white'>About</Navbar.Link>
            <Navbar.Link href="#" className='text-white'>Services</Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
        </div>
    );
};

export default Nav;
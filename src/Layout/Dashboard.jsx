import { Sidebar } from 'flowbite-react';
import { FilePlus2, GalleryHorizontalEnd, Home, Settings2 } from 'lucide-react';
import { HiChartPie } from 'react-icons/hi';
import { Link, Outlet } from 'react-router-dom';
import './Dash.css'
const Dashboard = () => {
    return (
        <div className='flex flex-col md:flex-row'>
            <div>
                <Sidebar aria-label="Sidebar with logo branding" className='w-full bg-black'>
                    <Sidebar.Logo href="#" img="/favicon.svg" imgAlt="Flowbite logo">
                        ExecuFlow
                    </Sidebar.Logo>
                    <Sidebar.Items>
                        <Sidebar.ItemGroup>
                            <Link to='/dash/create'>
                                <Sidebar.Item href="#" className='text-white hover:text-black'>
                                    <span className='flex gap-2'>
                                        <FilePlus2 /> Create Task
                                    </span>
                                </Sidebar.Item>
                            </Link>
                            <Link to='/dash/prev'>
                                <Sidebar.Item href="#" className='text-white hover:text-black'>
                                    <span className='flex gap-2'>
                                        <GalleryHorizontalEnd />Previous Tasks
                                    </span>
                                </Sidebar.Item>
                            </Link>
                            <Link to='/dash/manage'>
                                <Sidebar.Item href="#" className='text-white hover:text-black'>
                                    <span className='flex gap-2'>
                                    <Settings2 />Manage Tasks
                                    </span>
                                </Sidebar.Item>
                            </Link>
                        </Sidebar.ItemGroup>
                        <hr></hr>
                        <Sidebar.ItemGroup>
                            <Link to='/'>
                                <Sidebar.Item href="#" className='text-white hover:text-black' >
                                <span className='flex gap-2'>
                                <Home/>Home
                                </span>
                                </Sidebar.Item>
                            </Link>
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>
                </Sidebar>
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
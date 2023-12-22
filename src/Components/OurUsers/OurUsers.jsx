import axios from "axios";
import { useState, useEffect } from "react";
import { Card } from 'flowbite-react';

const OurUsers = () => {
    const [userData, setUserData] = useState([]);
    

    useEffect(()=>{
        axios.get('http://localhost:5000/users')
        .then(res => setUserData(res.data))
    },[])

    return (
        <div className="max-w-6xl mx-auto my-12">
            <h2 className="text-center text-3xl font-extrabold">Our Users</h2>
            <div>
                <Card href="#" className="max-w-sm">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                </Card>
            </div>
        </div>
    );
};

export default OurUsers;
import axios from "axios";
import { useState, useEffect } from "react";
import { Avatar, Card } from 'flowbite-react';

const OurUsers = () => {
    const [userData, setUserData] = useState([]);


    useEffect(() => {
        axios.get('https://task-management-server-henna-theta.vercel.app/users')
            .then(res => setUserData(res.data))
    }, [])
    console.log(userData)
    return (
        <div className="max-w-6xl mx-auto my-12">
            <h2 className="text-center text-3xl font-extrabold my-8">Our Users</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    userData.map(data =>
                        <Card href="#" className="max-w-sm" key={data._id} id='customBG' data-aos="zoom-in-up">
                            <div className="flex justify-between">
                                <Avatar img={data.image} alt="avatar of Jese" rounded />

                                <div>
                                    <h5 className="text-2xl font-bold tracking-tight text-white">
                                        {data.name}
                                    </h5>
                                    <p className="font-normal text-white">
                                        {data.occupation}
                                    </p>
                                </div>
                            </div>
                        </Card>)
                }
            </div>
        </div>
    );
};

export default OurUsers;
import { useContext } from "react";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
const Hero = () => {
    const { user } = useContext(AuthContext);
    return (
        <Parallax
            blur={10}
            bgImage='/src/assets/bg1.png'
            strength={200}
            className='h-[80vh]'>
            <div className="max-w-6xl mx-auto">
                <div className="pt-[25%] mx-4">
                    <h2 className=" md:text-center text-3xl font-extrabold mb-4">Elevate Your Productivity with ExecuFlow</h2>
                    <p className="md:text-center mb-5">
                        Discover a new level of efficiency with [Your Task Management System Name]. Our intuitive platform simplifies task management, allowing you to effortlessly organize projects, assign tasks, and monitor progress in real-time. Experience seamless collaboration, smart task allocation, and powerful analytics—all in one centralized hub. Whether you're a startup or a large enterprise, [Your Task Management System Name] is your key to streamlined workflow and success. Join us and elevate your productivity today.
                    </p>
                    <Link className="md:flex justify-center" to='/dash'>
                        <button className="bg-white text-black px-12 py-2 rounded border-white border-2 hover:bg-transparent hover:text-white transition-all">Let's Explore</button>
                    </Link>
                </div>
            </div>
        </Parallax>
    );
};

export default Hero;
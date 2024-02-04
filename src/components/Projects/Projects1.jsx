import "./Projects.css"
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Projects1 = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <div>
            <div className="flex items-center flex-col lg:flex-row justify-between gap-10 my-10">
                <div className="text-white lg:w-[50%]">
                    <div className="mt-4" data-aos="zoom-in-right">
                        <div className="flex items-center">
                            <hr className="inline-block w-6 mr-1 border-[#28e98c]" />
                            <p className="text-lg text-[#bebebe] font-semibold">Full Stack</p>
                        </div>
                        <h1 className="text-3xl font-semibold mt-3">SPORTS WORLD FOR EVERYONE</h1>
                        <p className="font-semibold text-lg mt-2">It is an online school related website where a student can login, an instructor can login
                            and an admin will be there. There are payment options for students.</p>
                            <p className="font-semibold mt-2 text-[#28e98c] text-xl underline">Used Technologies Are:</p>
                        <div className="flex gap-3 flex-wrap mb-5 mt-1">
                            <p className="bg-[#38383838] py-1 px-6 rounded-full">HTML</p>
                            <p className="bg-[#38383838] py-1 px-6 rounded-full">CSS</p>
                            <p className="bg-[#38383838] py-1 px-6 rounded-full">Tailwind</p>
                            <p className="bg-[#38383838] py-1 px-6 rounded-full">Javascript</p>
                            <p className="bg-[#38383838] py-1 px-6 rounded-full">ReactJs</p>
                            <p className="bg-[#38383838] py-1 px-6 rounded-full">NodeJS</p>
                            <p className="bg-[#38383838] py-1 px-6 rounded-full">ExpressJs</p>
                            <p className="bg-[#38383838] py-1 px-6 rounded-full">MongoDB</p>
                        </div>
                        <div className="flex lg:gap-5 gap-2">
                            <a href="https://summer-camp-7b372.web.app/" className="bg-[#28e98c] lg:w-auto text-center w-1/3 py-1 lg:px-4 font-semibold hover:bg-white lg:py-2 hover:text-[#28e98c] hover:scale-105 duration-100">Live Site</a>
                            <a href="https://github.com/A2N426/Sports-world-client" className="bg-[#28e98c] lg:w-auto text-center w-1/3 py-1 lg:px-4 font-semibold hover:bg-white lg:py-2 hover:text-[#28e98c] hover:scale-105 duration-100">Github Client</a>
                            <a href="https://github.com/A2N426/sports-world-server" className="bg-[#28e98c] lg:w-auto text-center w-1/3 py-1 lg:py-2 lg:px-4 font-semibold hover:bg-white hover:text-[#28e98c] hover:scale-105 duration-100">Github Server</a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[50%]" data-aos="zoom-in-left">
                    <div className="img-container img1 rounded-lg">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects1;
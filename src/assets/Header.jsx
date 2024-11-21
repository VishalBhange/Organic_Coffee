import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="BG2 p-2 text-white shadow-lg w-auto">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
               

                <div className="hidden md:flex space-x-14 mr-10 ml-auto">
                    <a href="#home" className=" text-black font-normal mt-1 hover:text-red-700">HOME</a>
                    <a href="#about" className="text-black font-normal mt-1 hover:text-red-700">ABOUT US </a>
                    <a href="#blogs" className="text-black font-normal mt-1 hover:text-red-700">BLOGS</a>
                    <a href="#products" className="text-black font-normal mt-1 hover:text-red-700">OUR PRODUCTS  </a>
                    <a href="#contact" className="text-black font-normal mt-1   hover:text-red-700">CONTACT US
                    </a>
                </div>


                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}>
                    <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">

                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}/>
                    </svg>
                </button>

                {/* <button className=" bg-white "> */}
                    <a href="#contact" className=" text-black font-normal  hover:text-red-700"> <FaCartPlus className="text-3xl"/></a>
                    {/* </button> */}
            </div>


            {isOpen && (
                <div className="md:hidden bg-white-700 ">
                    <a href="#home" className="block px-4 py-2 hover:bg-blue-800 text-black hover:text-gray-300">Home</a>
                    <a href="#about" className="block px-4 py-2 hover:bg-blue-800 text-black hover:text-gray-300">About</a>
                    <a href="#services" className="block px-4 py-2 hover:bg-blue-800 text-black hover:text-gray-300">Blogs</a>
                    <a href="#services" className="block px-4 py-2 hover:bg-blue-800 text-black hover:text-gray-300">Products</a>
                    <a href="#contact" className="block px-4 py-2 hover:bg-blue-800 text-black hover:text-gray-300">Contact</a>

                    
                </div>
            )}
        </nav>
    );
};

export default Navbar;

import React, { useState } from "react";
import { FaFacebook,FaLinkedin,FaYoutube,FaInstagram } from "react-icons/fa";

const Navbar = () => {

    return (
        <nav className="BG text-white   shadow-lg w-auto">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <div className="ml-10 hidden md:block">E-Mail: Organiccoffee@gmail.com / Contact:+91 7887302333</div>

                <div className="flex space-x-2 mr-4 ml-auto">
                    <a href="#home" className=" text-white hover:text-blue-500"><FaFacebook /></a>
                    <a href="#about" className="text-white hover:text-blue-500"><FaLinkedin /> </a>
                    <a href="#services" className="text-white hover:text-blue-500"><FaYoutube /></a>
                    <a href="#contact" className="text-white hover:text-blue-500"><FaInstagram /></a>
                    
                </div>               
            </div>
        </nav>
    );
};

export default Navbar;


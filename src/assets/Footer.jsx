import React from 'react';
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";

// Importing images from the public/img folder
import amazonLogo from '/public/img/Amazon_3-removebg-preview.png';
import flipkartLogo from '/public/img/Screenshot_2024-11-20_230054-removebg-preview.png';

export default function Footer() {
  return (
    <div className="Footer p-6 text-white">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
        
          <div className="w-full md:w-1/3 p-4 hidden lg:block">
            <h1 className="text-lg font-semibold ml-16">Nidlay Foods</h1>
            <p className="mt-6 text-sm md:ml-16">
              Lorem Ipsum is simply dummy text of the <br />
              printing and typesetting industry.<br />
              Lorem Ipsum has been the industry's<br />
              standard dummy text ever
            </p>
            <div className="flex space-x-4 mt-6 md:ml-16">
              <a href="#home" className="text-white hover:text-red-500">
                <FaFacebook size={20} />
              </a>
              <a href="#about" className="text-white hover:text-red-500">
                <FaLinkedin size={20} />
              </a>
              <a href="#services" className="text-white hover:text-red-500">
                <FaYoutube size={20} />
              </a>
              <a href="#contact" className="text-white hover:text-red-500">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          
          <div className="w-full md:w-1/3 p-4 ">
            <h1 className="text-lg font-semibold md:ml-16">Quick Links</h1>
            <ul className="mt-6 space-y-4 md:ml-16">
              <li>
                <a href="#home" className="text-white hover:text-yellow-500">HOME</a>
              </li>
              <li>
                <a href="#about" className="text-white hover:text-yellow-500">ABOUT US</a>
              </li>
              <li>
                <a href="#products" className="text-white hover:text-yellow-500">PRODUCTS</a>
              </li>
              <li>
                <a href="#contact" className="text-white hover:text-yellow-500">CONTACT US</a>
              </li>
            </ul>
          </div>

          
          <div className="w-full md:w-1/3 p-4">
            <h1 className="text-lg font-semibold sm:ml-36">Buy Now</h1>
            <div className="mt-6 ">
              <a href='https://www.amazon.com/'>
                <img
                  src={amazonLogo} // Use the imported image
                  alt="Amazon Logo"
                  className=" h-14 w-36 mx-auto"
                />
              </a>
            </div>
            <div className="mt-6">
              <a href='https://www.flipkart.com/'>
                <img
                  src={flipkartLogo} // Use the imported image
                  alt="Flipkart Logo"
                  className="h-14 w-36 mx-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function () {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <div className='bg-white C' id='blogs'>
      <div className='text-center' data-aos="fade-down">
        <br /><br /><br />
        <h1 className='font-serif text-4xl text-black'>Key Features</h1>
      </div>
      <br />

      <div className='flex flex-wrap justify-center'>
        <div className='flex items-center w-full sm:w-1/2 md:w-1/2 p-4' data-aos="zoom-in">
          <div className='flex justify-end w-1/2'>
            <img src='img/Coffee Icon 2.png' className='h-24 md:place-content-start-start sm:place-items-start' />
          </div>

          <div className='w-1/2'>
            <h1 className='mt-11 text-3xl font-serif ml-5 md:place-content-start-start sm:place-items-start'>Quality</h1>
          </div>
        </div>

        <div className='flex items-center w-full sm:w-1/2 md:w-1/2 p-4 md:items-center sm:items-center' data-aos="zoom-in">
          <div className='flex justify-end w-1/2'>
            <img src='img/Coffee Icon 2.png' className='h-24' />
          </div>

          <div className='w-1/2'>
            <h1 className='mt-11 text-3xl font-serif ml-5'>Integrity</h1>
          </div>
        </div>
      </div>

      <div className='flex flex-wrap mt-10 justify-center'>
        <div className='flex items-center w-full sm:w-1/2 md:w-1/2 p-4' data-aos="zoom-in">
          <div className='flex justify-end w-1/2'>
            <img src='img/Coffee Icon 2.png' className='h-24' />
          </div>

          <div className='w-1/2'>
            <h1 className='mt-11 text-3xl font-serif ml-5'>Ethical Sourcing</h1>
          </div>
        </div>

        <div className='flex items-center w-full sm:w-1/2 md:w-1/2 p-4' data-aos="zoom-in">
          <div className='flex justify-end w-1/2'>
            <img src='img/Coffee Icon 2.png' className='h-24' />
          </div>

          <div className='w-1/2'>
            <h1 className='mt-11 text-3xl font-serif ml-5'>Customer Focus</h1>
          </div>
        </div>
      </div>

      <div className='flex flex-wrap mt-10 justify-center'>
        <div className='flex items-center w-full sm:w-1/2 md:w-1/2 p-4' data-aos="zoom-in">
          <div className='flex justify-end w-1/2'>
            <img src='img/Coffee Icon 2.png' className='h-24' />
          </div>

          <div className='w-1/2'>
            <h1 className='mt-11 text-3xl font-serif ml-5'>Innovation</h1>
          </div>
        </div>

        <div className='flex items-center w-full sm:w-1/2 md:w-1/2 p-4' data-aos="zoom-in">
          <div className='flex justify-end w-1/2'>
            <img src='img/Coffee Icon 2.png' className='h-24' />
          </div>

          <div className='w-1/2'>
            <h1 className='mt-11 text-3xl font-serif ml-5'>Passion</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

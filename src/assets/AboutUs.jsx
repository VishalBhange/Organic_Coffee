import React, { useEffect } from 'react';
import 'aos/dist/aos.css';

export default function AboutUs() {
 

  return (
    <div className='bg-white C' id='about'>
      <div
        className='text-center font-semibold'
       
      >
        <br /><br /><br />
        <h1 className='font-serif text-4xl text-black '>About Us</h1>
        <p className='mt-7'>“It All Started with a Dream”</p>
        <p>
          A dream to bring the best organic coffee to the world while supporting sustainable farming <br />
          practices.
        </p>
        <p>- “Ethically Sourced, Carefully Crafted” </p>
        <p>
          Our beans are sourced from organic farms where the soil is rich, and the farmers are paid <br />
          fairly
        </p>

        <button
          className='btn1 px-4 fs-5 mt-7 rounded-full bg-opacity-100 font-normal bg-white'
          style={{ border: '1px solid #f2ac2b' }}
        >
          KNOW MORE
        </button>
      </div>
      <br /><br />

      <div
         
      >
        <img
          src='img/coffe.png'
          className="w-full h-auto object-cover max-h-[500px] mx-auto"
          alt="Coffee"
        />
      </div>
    </div>
  );
}

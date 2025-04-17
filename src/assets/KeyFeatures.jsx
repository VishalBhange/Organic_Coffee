import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Importing images from assets folder
import coffeeIcon from '/public/img/Coffee Icon 2.png';

export default function KeyFeatures() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className='bg-white C' id='blogs'>
      {/* Title Section */}
      <div className='text-center' data-aos="fade-down">
        <br /><br /><br />
        <h1 className='font-serif text-4xl text-black'>Key Features</h1>
      </div>
      <br />

      {/* Features Section */}
      <div className='flex flex-wrap justify-center'>
        {[
          { title: "Quality", image: coffeeIcon },
          { title: "Integrity", image: coffeeIcon },
          { title: "Ethical Sourcing", image: coffeeIcon },
          { title: "Customer Focus", image: coffeeIcon },
          { title: "Innovation", image: coffeeIcon },
          { title: "Passion", image: coffeeIcon },
        ].map((feature, index) => (
          <div className='flex items-center w-full sm:w-1/2 md:w-1/2 p-4' data-aos="zoom-in" key={index}>
            <div className='flex justify-end w-1/2'>
              <img src={feature.image} className='h-24' alt={feature.title} />
            </div>
            <div className='w-1/2'>
              <h1 className='mt-11 text-3xl font-serif ml-5'>{feature.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
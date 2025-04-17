import React from 'react'
import { Button } from 'react-bootstrap'
import coffeeImage from '/public/img/360_F_639672982_BBycKIvrACFKRWmCfEU1MubhWE2gR99Y.jpg'

export default function () {
<<<<<<< HEAD
  return (
    <div>
      <div 
        className="relative h-[500px] bg-cover bg-center" 
        style={{ backgroundImage: `url(${coffeeImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h1 className="text-3xl lg:text-5xl font-medium font-serif">“Experience the Art of Organic Coffee”</h1>
          <p className="mt-4 text-base lg:text-2xl">
            Sourced from nature, roasted with care, <br />
            delivered fresh to your door
          </p>
          <button className="btn1 fs-5 rounded-full bg-opacity-100 mt-6 px-6 py-3 hover:bg-yellow-600 transition" style={{ border: '1px solid #f7f706' }}>
            Shop Coffee
          </button>
=======
    return (
        <div className=''>
            <div className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('img/exeperience.jpg')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
                  
                    <h1 className="text-3xl lg:text-5xl font-medium font-serif"> “Experience the Art of Organic Coffee”   </h1>


                    <p className="mt-4 text-base lg:text-2xl"> Sourced from nature, roasted with care, <br />
                        delivered fresh to your door   </p>

                    <button className="btn1 fs-5  rounded-full bg-opacity-100'  mt-6 px-6 py-3   hover:bg-yellow-600 transition" style={{ border: '1px solid #f7f706' }}> Shop Coffee   </button> </div>
            </div>

>>>>>>> 7ca5133 (Updated Experience.jsx and added new image)
        </div>
      </div>
    </div>
  )
}

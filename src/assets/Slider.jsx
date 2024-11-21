import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

const testimonials = [
  {
    name: "SUNDER PICHAI",
    title: "CEO at Google",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7hDt4ZJd0er1C-KxCbpdjJiYV7lf-TtiSTA&s", 
    text: "Pichai Sundararajan, better known as Sundar Pichai, is an Indian-born American business executive. He is the chief executive officer of Alphabet Inc. and its subsidiary Google. Pichai began his career as a materials engineer. ",
  },
  {
    name: "MARK ZUCKERBERG",
    title: "CEO at Facebook",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4FrQ7wR3y9JfcC2nCWO5_PpxOfDrQqx9QhA&s", //
    text: "Mark Elliot Zuckerberg is an American businessman who co-founded the social media service Facebook and its parent company Meta Platforms, of which he is the chairman, chief executive officer, and controlling shareholder. ",
  },
  {
    name: "ADAM MOSSERI",
    title: "CEO at Instagram",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9_weTU6mlB7CH4PRbt9GcYCTG0siG7aAQLdiLLAYv_EijWfoJkEQYe9dUSABGRsRsFcA&usqp=CAU", 
    text: "Adam Mosseri is an American businessman and the head of Instagram. He formerly was an executive at Facebook, which owns Instagram. ",
  },
];

const SimpleSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-white">
    <div className="max-w-6xl mx-auto py-10 bg-white w-5/5 it">

    <button  onClick={handlePrev} className="btn2 absolute mt-44 left-0 bg-brown-700 text-white p-2 rounded-full focus:outline-none" > &lt;</button>


      <div className="relative flex items-center w-ful">   
        
        
        <div className="flex flex-col items-center mx-auto text-center p-6 border border-gray-200 rounded-lg  w-full max-w-8xl">
        <div className="grid grid-cols-12 gap-4"> 
          <div className="col-span-6 ">
          <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name}         className="md:w-80 h-80 object-cover im p-4 rounded-3xl mb-4"/>
          </div>

          <div className="col-span-6 items-center content-center ">
          <h3 className="text-lg font-bold text-gray-800  mr-48">
            {testimonials[currentIndex].name}</h3>
          <p className="text-sm text-gray-600  mr-48">{testimonials[currentIndex].title}</p>
          <p className="mt-4 text-gray-700  p-4 hidden lg:block  mr-32">{testimonials[currentIndex].text}</p>
          <div className="mt-4  space-x-1 text-yellow-500   mr-48"> ★★★★★</div>
          </div>  
          </div>        
        </div>               
      </div>


      <button
          onClick={handleNext}
          className="btn2 absolute -mt-56 right-0 bg-brown-700 text-white p-2 rounded-full focus:outline-none"
        >
          &gt;
        </button>
    </div>
    </div>
  );
};

export default SimpleSlider;

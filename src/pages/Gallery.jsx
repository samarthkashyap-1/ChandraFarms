import React from 'react'
import img1 from "../assets/venue-4.jpg"
import img2 from "../assets/chan.png"
import img3 from "../assets/chan2.png"
import img4 from "../assets/im5.jpg"
import img5 from "../assets/im6.jpg"
import img6 from "../assets/im3.jpg"
import img7 from "../assets/img.png"
import img8 from "../assets/sangeet.png"
import img9 from "../assets/wed.jpg"
import img10 from "../assets/co op3.png"
import img11 from "../assets/bday1.png"
import img12 from "../assets/chan3.png"
import { Fade } from "react-awesome-reveal";

function Gallery() {
  return (
    <div>
      <div className="bg-gray-100">
        {/* Header Section */}
        <header className=" py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-semibold">
              Explore Our {"  "}
              <span className="text-5xl text-[#ffcc7b] font-bold">Gallery</span>
            </h1>
            <p className="mt-4 text-xl">
              Capture Timeless Moments in Our Breathtaking Farm
            </p>
          </div>
        </header>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-2 gap-4 mx-auto my-20 w-3/4 md:w-[90%]">
        <Fade triggerOnce delay={100}>

      
        <div className="grid gap-4">
          <div className=' object-contain'>
            <img
              className="h-auto  max-w-full rounded-lg  hover:filter-none hover:scale-105  cursor-pointer transition-all duration-300 ease-in-out"
              src={img1}
              alt=""
            />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg  hover:filter-none hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out" src={img4} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg  hover:filter-none hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out" src={img3} alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg  hover:filter-none hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out" src={img5} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg  hover:filter-none hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out" src={img2} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg  hover:filter-none hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out" src={img9} alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg  hover:filter-none hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out" src={img7} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg  hover:filter-none hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out" src={img8} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg  hover:filter-none hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out" src={img6} alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg  hover:filter-none hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out" src={img11} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg  hover:filter-none hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out" src={img12} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg  hover:filter-none hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out" src={img10} alt="" />
          </div>
        </div>
        </Fade>
      </div>
    </div>
  );
}

export default Gallery

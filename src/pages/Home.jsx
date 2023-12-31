import React from 'react'
import { useState, useEffect } from "react";


import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";
import bg4 from "../assets/bg4.jpg";  
import bg5 from "../assets/bg5.jpg";
import bg6 from "../assets/bg6.jpg";


import call from "../assets/call.png";
import location from "../assets/location.png";
import mail from "../assets/mail.png";
import Navbar from '../components/Navbar';
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-scroll';

function Home() {
    
const [bg, setBg] = useState(1);

     const [isVisible, setIsVisible] = useState(false);

     // Function to scroll to the top of the page
     const scrollToTop = () => {
       window.scrollTo({
         top: 0,
         behavior: "smooth",
       });
     };

     // Show/hide the button based on scroll position
     const handleScroll = () => {
       if (window.scrollY > 100) {
         
         setIsVisible(true);
       } else {
         setIsVisible(false);
       }
     };

     //background change afetr 5 seconds
      const imageUrls = [bg1, bg2, bg3, bg4, bg5, bg6];

      useEffect(() => {
        const interval = setInterval(() => {
          // Increment bg with wrapping (cycling) behavior
          setBg((bg) => (bg % 6) + 1);
        }, 5000);

        return () => clearInterval(interval);
      }, [bg]);

      // Preload the next image
      useEffect(() => {
        const nextBg = (bg % 6) + 1;
        const img = new Image();
        img.src = imageUrls[nextBg - 1];
      }, [bg]);

     // Add a scroll event listener
     useEffect(() => {
       window.addEventListener("scroll", handleScroll);
       return () => {
         window.removeEventListener("scroll", handleScroll);
       };
     }, []);
  return (
    <div className="w-screen">
      <button
        onClick={scrollToTop}
        className={`${
          isVisible ? "block" : "hidden"
        } z-50 fixed bottom-5 right-5 bg-[#ffcc7b] text-white rounded-full p-2 transition duration-300 ease-in-out`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
      <Fade triggerOnce delay={100}>
        <header
          className="bg-center bg-cover bg-fixed bg-no-repeat h-screen transition-all ease-in-out duration-1000"
          style={{
            backgroundImage: `url(
              ${imageUrls[bg - 1]}
            )`,
          }}
        >
          <div className=" h-full backdrop-brightness-50 ">
            <Navbar />
            <div className="mt-24 flex flex-col gap-10">
              <p className="border-y-4 mx-auto w-fit py-4 text-white font-bold text-4xl text-center sm:text-2xl">
                Welcome to Chandra Farms
              </p>
              <p className="mx-auto w-fit p-2  text-white font-bold text-6xl sm:text-4xl text-center">
                Let Us Make Your Events Perfect
              </p>
              <button className="w-fit mx-auto sm:mt-20 text-white rounded-xl border sm:p-2 sm:text-lg text-xl bg-[#ffcc7b]  hover:bg-opacity-90 transition-colors duration-300 ease-in-out h-fit py-3 font-semibold px-4 mt-10">
                <Link to="contact" smooth={true} duration={500}>
                  Contact Us
                </Link>
              </button>
              <div className="flex bg-black bg-opacity-60 text-white gap-5 justify-around mt-10 opacity-80 sm:hidden">
                <div className="flex w-fit ">
                  <img className="scale-50 w-12" src={location} alt="" />
                  <a
                    href="https://www.google.com/maps/place/26%C2%B053'50.3%22N+81%C2%B004'05.3%22E/@26.8973122,81.065559,17z/data=!3m1!4b1!4m4!3m3!8m2!3d26.8973122!4d81.0681339?entry=ttu"
                    target="_blank"
                    className="text-center my-auto hover:text-[#ffcc7b]  transition-colors duration-300 ease-in-out"
                  >
                    Tiwari Ganj, Lucknow
                  </a>
                </div>
                <div className=" flex w-fit">
                  <img className="scale-50 w-12" src={mail} alt="" />
                  <a
                    href="mailto: farmschandra@gmail.com"
                    className="text-center my-auto hover:text-[#ffcc7b]  transition-colors duration-300 ease-in-out"
                  >
                    farmschandra@gmail.com
                  </a>
                </div>
                <div className=" flex w-fit ">
                  <img className="scale-50 w-12" src={call} alt="" />
                  <div className="flex gap-2">
                    <a
                      href="tel:+916389895959"
                      className="text-center my-auto hover:text-[#ffcc7b]  transition-colors duration-300 ease-in-out"
                    >
                      +91 6389895959
                    </a>
                    <a
                      href="tel:+917007505863"
                      className="text-center my-auto hover:text-[#ffcc7b]  transition-colors duration-300 ease-in-out"
                    >
                      +91 7007505863
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </Fade>
    </div>
  );
}

export default Home

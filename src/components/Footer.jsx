import React from 'react'
import call from "../assets/call.png";
import location from "../assets/location.png";
import mail from "../assets/mail.png";
import logo from "../assets/logo.png";
import fb from "../assets/fb.png";
import insta from "../assets/insta.png";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";


function Footer() {
  return (
    <div className="bg-black text-white py-10 ">
      <div className=" flex justify-evenly md:flex-col md:items-start md:gap-10 ">

        <Link to="home" smooth={true} duration={500}>
          
        <div className="w-40 cursor-pointer my-auto md:mx-auto">
          <img src={logo} alt="" />
        </div>
        </Link>

        <div className="md:ml-5">
          <p className="text-lg font-semibold"> Navigations</p>
          <div className="mt-5 flex flex-col gap-2">
            <Link to="services" smooth={true} duration={500}>
              <p className=" cursor-pointer hover:text-[#ffcc7b]">Home</p>
            </Link>

            <Link to="services" smooth={true} duration={500}>
            <p className=" cursor-pointer hover:text-[#ffcc7b]">Services</p>
            </Link>

            <Link to="gallery" smooth={true} duration={500}>

            <p className=" cursor-pointer hover:text-[#ffcc7b]">Gallery</p>
            </Link>

            <Link to="about" smooth={true} duration={500}>

            <p className=" cursor-pointer hover:text-[#ffcc7b]">About Us</p>
            </Link>

            <Link to="contact" smooth={true} duration={500}>


            <p className=" cursor-pointer hover:text-[#ffcc7b]">Contact Us</p>
            </Link>
          </div>
        </div>
        <div className="md:ml-5">
          <p className="text-lg font-semibold"> Contacts</p>

          <div>
            <div className="bg-black text-white mt-5">
              <div className="flex ">
                <img className="scale-50 w-12" src={location} alt="" />
                <a
                  href="https://www.google.com/maps/place/26%C2%B053'50.3%22N+81%C2%B004'05.3%22E/@26.8973122,81.065559,17z/data=!3m1!4b1!4m4!3m3!8m2!3d26.8973122!4d81.0681339?entry=ttu"
                  target="_blank"
                  className="text-center my-auto hover:text-[#ffcc7b]  transition-colors duration-300 ease-in-out"
                >
                  Tiwari Ganj, Lucknow
                </a>
              </div>
              <div className=" flex ">
                <img className="scale-50 w-12" src={mail} alt="" />
                <a
                  href="mailto: farmschandra@gmail.com"
                  className="text-center my-auto hover:text-[#ffcc7b]  transition-colors duration-300 ease-in-out"
                >
                  farmschandra@gmail.com
                </a>
              </div>
              <div className=" flex">
                <img className="scale-50 w-12" src={call} alt="" />
                <a
                  href="tel:+916389895959"
                  className="text-center my-auto hover:text-[#ffcc7b]  transition-colors duration-300 ease-in-out"
                >
                  +91 6389895959
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="md:ml-5">
          <p className="text-lg font-semibold">Social Media</p>

          <div className="flex">
            <a
              href="https://www.facebook.com/profile.php?id=61550657502094"
              target="_blank"
            >
              <img src={fb} className="scale-75" alt="" />
            </a>
            <a href="https://www.instagram.com/farmschandraa/" target="_blank">
              <img src={insta} className="scale-75" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <p className="text-center text-lg sm:text-sm">
          ©2023{" "}
          <span className="text-[#ffcc7b] font-semibold">Chandra Farms</span>{" "}
          all right reserved
        </p>
      </div>
    </div>
  );
}

export default Footer

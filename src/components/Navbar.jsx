import React from "react";
import { useState } from "react";
import logo from "../assets/logo.png";
import cut from "../assets/cut.png";
import ham from "../assets/hamburger.svg";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    
  };
  const closeMenu = () => {
    setIsOpen(false);
    
  };
  return (
    <>
      <div className="relative">
        <img
          className="w-32  h-32 sm:h-28 sm:w-28 absolute"
          src={logo}
          alt=""
        />
      </div>
      <nav className="bg-black text-white bg-opacity-40 flex md:justify-center w-screen sm:h-28 h-32 shadow">
        <div className="m-auto md:flex md:justify-end md:w-full">
          <div className="md:flex hidden mr-5 ">
            <button
              className="text-black ml-auto focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0,0,256,256"
                width="50px"
                height="50px"
              >
                <g
                  fill="#ffffff"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                  style={{ mixBlendMode: "normal" }}
                >
                  <g transform="scale(5.12,5.12)">
                    <path d="M3,9c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h44c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587zM3,24c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h44c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587zM3,39c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h44c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587z"></path>
                  </g>
                </g>
              </svg>
            </button>
          </div>
          <ul
            className={`flex gap-16 text-xl font-bold md:absolute md:w-[100%] md:right-0  md:py-10 md:bg-black md:bg-opacity-90 md:flex-col md:items-center box-border   ${
              isOpen ? "md:top-0" : "md:-top-[150%]"
            } md:transition-all md:duration-500 md:ease-in-out md:shadow}`}
          >
            <div className="md:block hidden">
              <img
                src={cut}
                alt=""
                onClick={closeMenu}
                className="absolute text-white right-5 scale-90 top-5"
              />
            </div>

            <Link to="home" smooth={true} duration={500}>
              {" "}
              <a
                onClick={closeMenu}
                href=""
                className="hover:text-[#ffcc7b]  my-auto transition-colors duration-300 ease-in-out"
              >
                <li>Home</li>
              </a>
            </Link>

            <Link to="services" smooth={true} duration={500}>
              <a
                onClick={closeMenu}
                href=""
                className="hover:text-[#ffcc7b] my-auto  transition-colors duration-300 ease-in-out"
              >
                <li>Services</li>
              </a>
            </Link>

            <Link to="gallery" smooth={true} duration={500}>
              <a
                onClick={closeMenu}
                href=""
                className="hover:text-[#ffcc7b] my-auto  transition-colors duration-300 ease-in-out"
              >
                <li>Gallery</li>
              </a>
            </Link>

            <Link to="about" smooth={true} duration={500}>
              <a
                onClick={closeMenu}
                href=""
                className="hover:text-[#ffcc7b] my-auto  transition-colors duration-300 ease-in-out"
              >
                <li>About Us</li>
              </a>
            </Link>

            <Link to="contact" smooth={true} duration={500}>
              <a
                onClick={closeMenu}
                href=""
                className="hover:text-[#ffcc7b] my-auto  transition-colors duration-300 ease-in-out"
              >
                <li>Contact Us</li>
              </a>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

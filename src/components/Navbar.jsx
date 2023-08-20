import React from 'react'
import logo from "../assets/logo.png"

function Navbar() {
  return (
    <div>
      <nav className="flex bg-black text-white ">
        <div className='ml-5'>
          <img className='w-28 h-28' src={logo} alt="" />
        </div>
        <div className='ml-auto my-auto mr-10'>
          <ul className="flex gap-5 text-xl font-bold">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar

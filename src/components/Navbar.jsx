import React from 'react'
import logo from "../assets/logo.png"

function Navbar() {
  return (
    <div>
        <nav className='flex '>
            <div>
                <img src={logo} alt="" />
            </div>
            <div>

            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>Contact Us</li>
            </ul>
            </div>
        </nav>
      
    </div>
  )
}

export default Navbar

import React from 'react'
import './navbar.css'

import Djimg from '../../assets/navbar/Djimg.png'

function Navbar() {
  return (
    <div className='w-full h-full absolute'>

      <header className='hidden lg:flex text-white py-6 px-8 md:ml-9 md:px-32 Nav-Container'>
        <ul className='flex gap-12'>
          <li>About Us</li>
          <li>Use Cases</li>
          <li>Events</li>
          <div className='relative'></div>
          <div className='relative'></div>
          <li>Web App</li>
          <li>FAQ</li>
          <li>Contact Us</li>
        </ul>
      </header>

      {/* Dj-Icon */}

      <div className='NavDj-Icon hidden lg:flex fixed'>
        <img src={Djimg} alt="/" className='absolute top-4 left-7' />
      </div>

    </div>
  )
}

export default Navbar
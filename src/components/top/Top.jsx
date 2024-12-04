import React from 'react'
import './top.css';

import { FaWhatsapp, FaPhoneAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { IoMailOutline, IoLogInOutline  } from "react-icons/io5";

function Top() {
  return (
    <>
    <div className='hidden lg:flex gap-3 pl-5 Top-container'>
      <div className='text-[#BCBCBC] contact-box'><FaWhatsapp /> <span className='pl-1'>WhatsApp Support</span></div>
      <div className='text-[#BCBCBC] contact-box'><IoMailOutline /> <span className='pl-1'>team@djfyapp.com</span></div>
      <div className='text-[#BCBCBC] contact-box'><FaPhoneAlt  /> <span className='pl-1'>+001 2345 6789 90</span></div>

      <p className='text-[#BCBCBC] login'>Login / Register</p>

      {/* ICON */}

      <div className='text-[#BCBCBC] Icon'><FaFacebookF /></div>
      <div className='text-[#BCBCBC] Icon'><FaTwitter /></div>
      <div className='text-[#BCBCBC] Icon'><FaLinkedinIn /></div>
      <div className='text-[#BCBCBC] Icon'><FaInstagram /></div>
    </div>

    {/* responsive */}

    <div className='flex lg:hidden gap-3 pl-5 Top-container'>
      <div className='text-[#BCBCBC] contact-box'><FaWhatsapp /></div>
      <div className='text-[#BCBCBC] contact-box'><IoMailOutline /></div>
      <div className='text-[#BCBCBC] contact-box'><FaPhoneAlt  /></div>

      <p className='text-[#BCBCBC] login'>Login / Register</p>

      {/* ICON */}

      <div className='text-[#BCBCBC] Icon'><FaFacebookF /></div>
      <div className='text-[#BCBCBC] Icon'><FaTwitter /></div>
      <div className='text-[#BCBCBC] Icon'><FaLinkedinIn /></div>
      <div className='text-[#BCBCBC] Icon'><FaInstagram /></div>
    </div>

    </>
  )
}

export default Top
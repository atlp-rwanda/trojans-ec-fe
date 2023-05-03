import React from 'react'
import { FaInstagram,FaFacebook,FaTiktok } from 'react-icons/fa'
import facebook from '../images/facebookIcon.png';
import instagram from '../images/instagramIcon.png';
import tiktok from '../images/tiktokIcon.png';
function Footer() {
  return (
    <div className=' flex border border-t-2 border-b-0 border-black bg-purple-50 w-full h-28'>
 
    <div className='flex-1 flex flex-col items-center text-justify'>
        <p>
    <h4 className='font-black'>
        <u>
    Company Info
    </u>
    </h4>
    <h6>
    About Us
    </h6>
    <h6>
    Contact Us
    </h6>
    <h6>Terms & Condition</h6>
    </p>
    </div>
      <div className='w-full flex-1 flex items-center gap-3 justify-center pr-8'>
        <p>Follow us on: </p>
        <img className='h-10' src={facebook} />
        <img className='h-10'  src={instagram} />
        <img className='h-10'  src={tiktok} />
   {/* <FaFacebook/>
   <FaTiktok/>
   <FaInstagram/> */}
      </div>
    </div>
  )
}

export default Footer

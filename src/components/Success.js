import React from 'react';
import '../styles/success.scss';
import okay from '../assets/images/okay.png'
import { useNavigate } from "react-router-dom";
const Success = () => {
    const navigate = useNavigate()

    const handleButton  = ()=>{
      navigate('/user/profile')
      location.reload()
    }
  return (
    <div className='success w-full h-[100vh] flex justify-center items-center'>
      <div className='relative flex items-center justify-center bg-white w-[350px] h-[350px] shadow-sm rounded-sm px-10' > 

      <div>
        <div className='absolute top-[-25px] left-[40%] okay-icon w-[60px] h-[60px] overflow-hidden' >
            <img src={okay} alt="" className='w-full'/>
        </div>
        <h1 className='text-5xl text-center font-bold my-7'>Thank You!</h1>
        <p className='text-center font-medium my-7'>Update profile successful</p>
        <button className='okay w-full text-white font-bold text-xl py-1 rounded-sm' onClick={handleButton}>ok</button>
      </div>
      </div>
    </div>
  )
}

export default Success

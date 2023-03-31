import React, { useState } from 'react'
import showPwdImg from '../assets/images/showPassword.svg';
import hidePwdImg from '../assets/images/hidePassword.svg';
const Input = ({type,placeHolder,onChange,errorText,name}) => {
  const [show,setShow]=useState(false);
  return (

    <div className='flex flex-col'>
      <div className='flex justify-between' >
       <input
                type={show?'text':type}
                id="first_name"
                class="input text-sm rounded-lg block w-full p-3 bg-black bg-opacity-0 placeholder-black md:mt-0 mt-5 "
                placeholder={placeHolder}
                onChange={onChange}
                name={name}
       
              />
      
        <img
         className={type=='password'?"showImg left-2":"hidden"}
          src={ !show? hidePwdImg:showPwdImg }
          onClick={() => setShow(show => !show)}
        />
        
        </div>

              <div>
  <p className='text-red-800 text-sm'>{errorText}</p>
              </div>
    </div>
  )
}

export default Input

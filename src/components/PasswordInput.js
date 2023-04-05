import React,  { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

// eslint-disable-next-line react/prop-types
const PasswordInput = ({ placeholder, name, register, errors } ) =>{
    const [ open, setOpen ] = useState(false);
    const toggle = () =>{
        setOpen(!open)
    }
 return(
 <div>
     <div className="w-full mx-auto mt-2 relative">
          <div className='w-full mx-auto  '>
              <input type={(open === false)?'password':'text'} placeholder={placeholder}
              name={name}
              {...register}
                className="w-full h-12 rounded-lg outline-0 border pl-5 "

              />
          </div>
          <div className="text-2xl absolute top-3  right-5">
           { ( open === false)? <AiFillEye onClick={toggle} />
           :<AiFillEyeInvisible onClick={toggle} />
            
            }
          </div>
     </div>
     {errors && <p className="text-red-800 text-sm">{errors.message}</p> }
     
 </div>
 );
};

export default PasswordInput;
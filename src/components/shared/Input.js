/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import ProTypes from 'prop-types'
import showPwdImg from '../../assets/images/showPassword.svg'
import hidePwdImg from '../../assets/images/hidePassword.svg'
const Input = ({
  type,
  placeHolder,
  onChange,
  errorText,
  name,
  register,
  value,
  testId,
}) => {
  const [show, setShow] = useState(false)
  return (
    <div className="flex flex-col">
      <div className="relative">
        <input
          type={show ? 'text' : type}
          className={
            type == 'password'
              ? ' signup-input  w-full bg-transparent outline-none w-full'
              : ' signup-input  bg-transparent outline-none w-full'
          }
          placeholder={placeHolder}
          onChange={onChange}
          name={name}
          {...register}
          value={value}
          data-testid={testId || ""}
        />
 
                <button
          type="button"
          onClick={() => setShow((show) => !show)}
          className="absolute inset-y-0 right-2 top-3 pr-0 flex items-center text-sm leading-5"
        >
          <img
            className={type == 'password' ? 'showImg' : 'hidden'}
            src={!show ? hidePwdImg : showPwdImg}
        
          />
          </button>
      
      </div>
  

      <div>
        <p className="text-red-800 text-sm">{errorText}</p>
      </div>
    </div>
  )
}

Input.ProTypes = {
  name: ProTypes.string,
}

export default Input

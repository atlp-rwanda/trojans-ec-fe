/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import ProTypes from 'prop-types'
import showPwdImg from '../assets/images/showPassword.svg'
import hidePwdImg from '../assets/images/hidePassword.svg'
const Input = ({
  type,
  placeHolder,
  onChange,
  errorText,
  name,
  register,
  value,
}) => {
  const [show, setShow] = useState(false)
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <input
          type={show ? 'text' : type}
          className={
            type == 'password'
              ? ' inputPassword text-sm rounded-lg block w-full p-3 bg-black bg-opacity-0 placeholder-black md:mt-0 mt-5 '
              : ' input ' +
                'text-sm rounded-lg block w-full p-3 bg-black bg-opacity-0 placeholder-black md:mt-0 mt-5 '
          }
          placeholder={placeHolder}
          onChange={onChange}
          name={name}
          {...register}
          value={value}
        />
        <div
          className={
            type != 'password'
              ? ''
              : ' pass border-black  md:h-auto md:mt-auto md:px-5 md:p-4 rounded-xl rounded-ss-none rounded-bl-none border-l-0 border-2 mt-5 p-4 h-full px-5'
          }
        >
          <img
            className={type == 'password' ? 'showImg left-2' : 'hidden'}
            src={!show ? hidePwdImg : showPwdImg}
            onClick={() => setShow((show) => !show)}
          />
        </div>
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

import React from 'react'

const Button = ({text,className,id,onclick,type}) => {
  return (
    <div>
      <button  className={className} id={id} onClick={onclick} type={type}>{text}</button>
    </div>
  )
}

export default Button

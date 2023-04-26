import React from 'react'

// eslint-disable-next-line react/prop-types
const Button = ({ text, className, id, onclick, type }) => {
  return (
    <div>
      <button className={className} id={id} onClick={onclick} type={type}>
        {text}
      </button>
    </div>
  )
}

export default Button

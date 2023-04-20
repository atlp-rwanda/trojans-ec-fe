import React from 'react'

// eslint-disable-next-line react/prop-types
const Button = ({ text, className, id, onclick, type, disable }) => {
  return (
    <div>
      <button
      type={type}
      className={className} id={id || ""}
      onClick={onclick}
      disabled={disable? disable: false}
      >
        {text}
      </button>
    </div>
  )
}

export default Button

import React from 'react'
import Spinner from '../products/viewProducts/spinner'

// eslint-disable-next-line react/prop-types
const Button = ({ text, className, id, onclick,loading, type, disable }) => {
  return (
    <div>
      <button
      type={type}
      className={className} id={id || ""}
      onClick={onclick}
      disabled={disable? disable: false}
      >
        {loading?(
          <Spinner withoutText={true}/>
        ):(<span>{text}</span>)}
      </button>
    </div>
  )
}

export default Button

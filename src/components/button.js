import React from 'react'
import { PropTypes } from "prop-types";
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
Button.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button

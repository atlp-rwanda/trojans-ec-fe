import React, { useState } from "react";
import close from "../images/icons8-multiply-64.png";
import template from "../images/iphone14 pro 3.jpeg"

function ImageCard(props) {
  const [view, setView]= useState(false)
  const handleDisplay = ()=>{
    setView(true)
  }
  const handleUnDisplay = ()=>{
    setView(false)
  }

  return (
    <div className="relative" onMouseEnter={handleDisplay} onMouseLeave={handleUnDisplay}>
      <span className="text-white hidden">{props.id}</span>
      {view && <img src={close} alt="" className={`w-3 h-3 absolute `} onClick={props.click} />}
      <img alt="" src={props.src} className="w-20 h-20 object-contain px-4" />
    </div>
  );
}

export default ImageCard;

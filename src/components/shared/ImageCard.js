/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import close from "../../assets/images/icons8-multiply-64.png";

function ImageCard(props) {
  const [view, setView]= useState(false);
  const { id, src, click, removeTestId, imageCardTestId, uploaded } = props;
  const handleDisplay = ()=>{
    setView(true)
  }
  /* istanbul ignore next */
  const handleUnDisplay = ()=>{
    setView(false)
  }

  return (
    <div data-testid={imageCardTestId || ""} className="relative" onMouseEnter={handleDisplay} onMouseLeave={handleUnDisplay}>
      <span className="text-white hidden">{id}</span>
      {view && uploaded && <img src={close} alt="" className={`w-5 h-5 absolute top-0 left-2 cursor-pointer`} onClick={click} />}
      <img data-testid={removeTestId || ""} alt="" src={src} className="upload-image-preview" />
    </div>
  );
}

export default ImageCard;

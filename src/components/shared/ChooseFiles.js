/* eslint-disable react/prop-types */
import React from "react";
import gallery from "../../assets/images/icons8-image-gallery-64.png";

const ChooseFiles = ({message}) => {
    return(
        <>
        <img src={gallery} alt="" className="w-6 h-6 cursor-pointer" />
        <p className="text-white pl-2 cursor-pointer">{message}</p>
        </>
    );
}

export default ChooseFiles;

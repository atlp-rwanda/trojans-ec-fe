/* eslint-disable react/prop-types */
import React from "react";
import Logo from "./Logo";
import Vector from "../twoFactor/Vector";
import Circles from "../twoFactor/Circles";

const PageDesign = ({className}) => {
    return (
        <div className={`${className || ""}`}>
            <Logo/>
            <Circles/>
            <Vector/>
        </div>
    );
}

export default PageDesign;
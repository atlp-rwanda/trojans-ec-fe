/* eslint-disable react/prop-types */
import React from "react";
import logo from "../../assets/images/LOGO.svg";

const Logo = ({className}) => {
    return (
        <div data-testid="logo-2fa" className={`logo-image ${className || ""}`}>
            <img src={logo} alt="logo" />
        </div>
    );
}

export default Logo;
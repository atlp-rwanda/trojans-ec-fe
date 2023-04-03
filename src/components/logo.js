import React from "react";
import logo from "../assets/images/LOGO.svg";

const Logo = () => {
    return (
        <div data-testid="logo-2fa" className="logo-image">
            <img src={logo} alt="logo" />
        </div>
    );
}

export default Logo;
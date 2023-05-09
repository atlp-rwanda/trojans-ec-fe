import React from "react";
import logo from "../assets/images/logo-image.png";

const Logo = () => {
  return (
    <div data-testid="logo-2fa" className="">
      <span className="text-2xl cursor-pointer font-semibold">
        <img className="w-9 mr-3 inline" src={logo} alt="logo-image" />
        Trojans Store
      </span>
    </div>
  );
};

export default Logo;

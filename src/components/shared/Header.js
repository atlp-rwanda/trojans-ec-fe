/* eslint-disable react/prop-types */
import React from "react";

const Header = ({textContent, className, headerClassName}) => {
  return (
    <div className={headerClassName}>
      <h1 className={className || ""}>
        {textContent}
      </h1>
    </div>
  );
};

export default Header;

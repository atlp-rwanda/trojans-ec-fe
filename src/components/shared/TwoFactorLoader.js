/* eslint-disable react/prop-types */
import React from "react";

const Loader = ({className, data_testid}) => {
    return (
        <div data-testid={data_testid || "loader-2fa"} className={`loader-2fa ${className || ""}`}></div>
    );
}

export default Loader;
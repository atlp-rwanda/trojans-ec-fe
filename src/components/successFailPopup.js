/* eslint-disable react/prop-types */
import React from "react";
import crossIcon from "../assets/images/icons8-cancel-208.png"
import succesIcon from "../assets/images/success_icon.png"

const SuccessFailPopup = ({ message, handleClick, success, statusMessage }) => {
    return (
        <div className="success-fail-popup">
           {success && (
            <>
            <img className="cross-icon" src={succesIcon} alt="success icon" />
            <h1><b>{statusMessage}</b></h1>
            </>
           )}
           {!success && (
            <>
            <img className="cross-icon" src={crossIcon} alt="fail icon" />
            <h1><b>{statusMessage}</b></h1>
            </>
           )}
           <p>{message}</p>
           <button className="button two-fact-btn" onClick={handleClick}>ok</button>
        </div>
    );
}

export default SuccessFailPopup;
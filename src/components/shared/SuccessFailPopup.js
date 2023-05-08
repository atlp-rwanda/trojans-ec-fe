/* eslint-disable react/prop-types */
import React from "react";
import crossIcon from "../../assets/images/icons8-cancel-208.png"
import succesIcon from "../../assets/images/success_icon.png"

const SuccessFailPopup = (props) => {
    const { message, handleClick, success, statusMessage, className, data_testid } = props;
    return (
        <div className={className} data-testid={data_testid || ""}>
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
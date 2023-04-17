/* eslint-disable react/prop-types */
import React from "react";

const ComfirmPopup = ({ message, handleDelete, handleClick, comfirmMessage }) => {
    return (
        <div data-testid="comfirm-delete-popup" className="fail-popup comfirm-popup">
           <p>{message}</p>
           <div>
                <button className="button comfirm-btn" onClick={handleDelete}>{comfirmMessage}</button>
                <button className="button comfirm-btn" onClick={handleClick}>Cancel</button>
           </div>
        </div>
    );
}

export default ComfirmPopup;
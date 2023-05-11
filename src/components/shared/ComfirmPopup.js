/* eslint-disable react/prop-types */
import React from "react";

const ComfirmPopup = (props) => {
    const {
        message,
        handleAction,
        handleCancel,
        comfirmActionMessage,
        actionType,
        className,
        data_testid,
        cancelMessage,
    } = props;
    return (
        <div data-testid={data_testid} className={className}>
            {actionType && <h1><b>{actionType}</b></h1>}
           {message && <p>{message}</p>}
           <div>
                <button className="button comfirm-btn" onClick={handleAction}>{comfirmActionMessage}</button>
                <button className="button comfirm-btn" onClick={handleCancel}>{cancelMessage}</button>
           </div>
        </div>
    );
}

export default ComfirmPopup;
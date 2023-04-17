/* eslint-disable react/prop-types */
import React from "react";

const EmailReceived = ({ onClick }) => {
    return (
        <div className="got-email">
            <p>We sent you a verification code on your email! Please check your email and provide the verification code to proceed login</p>
            <button onClick={onClick} type="button" className="button two-fact-btn">Got it</button>
        </div>
    );
}

export default EmailReceived;
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from 'react-router-dom';
import TwoFactorForm from "./twoFactorForm";
import EmailReceived from "./emailReceived";

const FormContainerTwoFact = ({ onLinkClick , gotEmail, formatTime, onClick }) => {
    return (
        <div className="two-factor-form-div">
            <h1><b>Enter verification code</b> </h1>
            <h2>Expires In: {formatTime}</h2>
            {!gotEmail && <EmailReceived onClick={onClick}/>}
            {gotEmail && <TwoFactorForm/>}
            <p className="try-loggin-auth">Did not receive the verification code? <b><Link onClick={onLinkClick} to="/login">try again</Link></b></p>
        </div>
    );
}

export default FormContainerTwoFact;
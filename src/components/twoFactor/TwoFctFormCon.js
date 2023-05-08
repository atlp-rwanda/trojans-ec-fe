/* eslint-disable react/prop-types */
import React from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import TwoFactorForm from "./TwoFactorForm";
import EmailReceived from "./EmailReceived";
import { getLoginUser, setOtpErrors } from "../../redux/features/slices/user";
import authThunk from '../../redux/features/actions/auth';

const FormContainerTwoFact = ({ onLinkClick , gotEmail, formatTime, onClick }) => {
    const { otp } = useSelector(getLoginUser);
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(otp.length < 5){
            if(otp.length === 0){
                dispatch(setOtpErrors({ type: "SET_REQUIRED_ERR", isRequiredError: "Verification code is required" }));
            }
            return dispatch(setOtpErrors({ type: "SET_LENGTH_ERR", exactLengthError: "Verification code must be exactly 5 numbers" }));
        }
        if(parseInt(otp[0], 10) < 1){
            return dispatch(setOtpErrors({ type: "SET_FIRST_ERR", firstDigitError: "The first digit must be greater than 0" }));
        }
        dispatch(authThunk(otp));
    };

    return (
        <div className="two-factor-form-div">
            <h1><b>Enter verification code</b> </h1>
            <h2>Expires In: {formatTime}</h2>
            {!gotEmail && <EmailReceived onClick={onClick}/>}
            {gotEmail && <TwoFactorForm handleSubmit={handleSubmit}/>}
            <p className="try-loggin-auth">Did not receive the verification code? <b><Link onClick={onLinkClick} to="/login">try again</Link></b></p>
        </div>
    );
}

export default FormContainerTwoFact;
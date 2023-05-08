/* eslint-disable react/prop-types */
import React from "react";
import OTPInput from 'react-otp-input';
import { setOtp, setOtpErrors } from "../../redux/features/slices/user";
import { useDispatch } from "react-redux";

const OtpInput = ({ otp }) => {
    const dispatch = useDispatch();
    const handleInputOtpChange = (value) => {
        if(parseInt(otp[0], 10) < 1){
            dispatch(setOtpErrors({ type: "SET_FIRST_ERR", firstDigitError: "The first digit must be greater than 0" }));
        }
        dispatch(setOtp({ otp: value }));
        if(value.length > 0){
            dispatch(setOtpErrors({ type: "SET_REQUIRED_ERR", isRequiredError: null }));
        }
        if(value.length === 5){
            dispatch(setOtpErrors({ type: "SET_LENGTH_ERR", exactLengthError: null }));
        }
        if(parseInt(value[0], 10) >= 1){
            dispatch(setOtpErrors({ type: "SET_FIRST_ERR", firstDigitError: null }));
        }
      };

    return(
        <OTPInput
                numInputs={5}
                shouldAutoFocus={true}
                value={otp}
                renderSeparator={<span>-</span>}
                onChange={handleInputOtpChange}
                containerStyle={{ justifyContent: "center" }}
                inputStyle="otp-input-style"
                inputType="tel"
                placeholder="12345"
                renderInput={(props) => <input {...props} />}
            />
    );
}

export default OtpInput;
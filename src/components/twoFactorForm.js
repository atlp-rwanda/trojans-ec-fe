import React  from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from './twoFactorLoader';
import { getLoginUser, setOtpErrors } from "../redux/features/slices/user";
import authThunk from '../redux/features/actions/auth';
import OtpInput from "./otpInput"

const TwoFactorForm = () => {
    const { loading, otp, otpErrors } = useSelector(getLoginUser);
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(otp.length < 5){
            if(otp.length === 0){
                dispatch(setOtpErrors({ type: "SET_REQUIRED_ERR", isRequiredError: "Verification code is required" }));
            }
            dispatch(setOtpErrors({ type: "SET_LENGTH_ERR", exactLengthError: "Verification code must be exactly 5 numbers" }));
            return;
        }
        if(parseInt(otp[0], 10) < 1){
            return dispatch(setOtpErrors({ type: "SET_FIRST_ERR", firstDigitError: "The first digit must be greater than 0" }));
        }
        dispatch(authThunk(otp));
    };

    return (
        <form data-testid="two-factor-form" onSubmit={handleSubmit}>
            <OtpInput otp={otp}/>
            {otpErrors.isRequiredError && <p className='is-error'>{otpErrors.isRequiredError}</p>}
            {otpErrors.firstDigitError && <p className='is-error'>{otpErrors.firstDigitError}</p>}
            {otpErrors.exactLengthError && <p className='is-error'>{otpErrors.exactLengthError}</p>}
            <br />
            {loading && <button disabled={true} className="button two-fact-btn"><Loader/></button>}
            {!loading && <button type="submit" className="button two-fact-btn">Verify</button>}
        </form>
    );
}

export default TwoFactorForm;

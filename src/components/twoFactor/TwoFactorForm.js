import React  from "react";
import { useSelector } from "react-redux";
import Loader from '../shared/TwoFactorLoader';
import { getLoginUser } from "../../redux/features/slices/user";
import OtpInput from "./OtpInput"

const TwoFactorForm = ({ handleSubmit }) => {
    const { loading, otp, otpErrors } = useSelector(getLoginUser);
    
    return (
        <form data-testid="two-factor-form" onSubmit={handleSubmit}>
            <OtpInput otp={otp}/>
            {otpErrors.isRequiredError && <p className='is-error'>{otpErrors.isRequiredError}</p>}
            {otpErrors.firstDigitError && <p className='is-error'>{otpErrors.firstDigitError}</p>}
            {otpErrors.exactLengthError && <p className='is-error'>{otpErrors.exactLengthError}</p>}
            <br />
            <button disabled={loading ? true : false} className="button two-fact-btn">{ loading ? <Loader data_testid="loader-2fa"/> : "Verify"}</button>
        </form>
    );
}

export default TwoFactorForm;

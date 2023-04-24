import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PageDesign from "../components/twoFactorPageDesign";
import SuccessFailPopup from "../components/successFailPopup";
import FormContainerTwoFact from "../components/twoFctFormCon";
import {
  getLoginUser,
  setGotEmail,
  setSuccessAuth,
  setError,
  setTwoFactorAuthToken,
} from "../redux/features/slices/user";
import formatTime from "../helpers/timeFormat";

const TwoFactorAuth = () => {
  const { error, successAuth, gotEmail, user, twoFactorAuthToken, loading } =
    useSelector(getLoginUser);
  const [seconds, setSeconds] = useState(300);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onClick = () => dispatch(setGotEmail({ gotEmail: true }));
  const onLinkClick = () => dispatch(setTwoFactorAuthToken());
  const handleClick = useCallback(() => {
    dispatch(setSuccessAuth({ successAuth: false }));
    dispatch(setError({ error: null }));
  }, [dispatch, navigate, setSuccessAuth, setError]);

  useEffect(() => {
    if (!loading && user && !twoFactorAuthToken) {
      window.location.href = window.location.href.split("/auth")[0];
    }
    if (!twoFactorAuthToken) {
      return navigate("/login");
    }
  }, [twoFactorAuthToken, user, loading, navigate]);

  useEffect(() => {
    if (seconds === 0) {
      localStorage.removeItem("userAuth");
      dispatch(setTwoFactorAuthToken());
      dispatch(setError({ error: null }));
      return navigate("/login");
    }
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds, dispatch, setTwoFactorAuthToken, navigate]);

  return (
    twoFactorAuthToken && (
      <div data-testid="two-factor-auth" className="two-factor-container">
        <PageDesign />
        {error && (
          <SuccessFailPopup
            handleClick={handleClick}
            message={error}
            success={successAuth}
            statusMessage="Failed!"
          />
        )}
        {!error && (
          <FormContainerTwoFact
            formatTime={formatTime(seconds)}
            gotEmail={gotEmail}
            onLinkClick={onLinkClick}
            onClick={onClick}
          />
        )}
      </div>
    )
  );
};

export default TwoFactorAuth;

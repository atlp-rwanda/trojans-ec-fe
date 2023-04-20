/* eslint-disable react/prop-types */
import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PageDesign from "../shared/TwoFactorPageDesign";
import FormContainerTwoFact from "./TwoFctFormCon";
import {
  getLoginUser,
  setGotEmail,
  setSuccessAuth,
  setError,
  setTwoFactorAuth,
} from "../../redux/features/slices/user";
import formatTime from "../../helpers/timeFormat";
import { ToastContainer, toast } from "react-toastify";

const TwoFactor = () => {
  const { error, successAuth, gotEmail } = useSelector(getLoginUser);
  const [seconds, setSeconds] = useState(300);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onClick = () => dispatch(setGotEmail({ gotEmail: true }));
  const onLinkClick = () => dispatch(setTwoFactorAuth());
  const handleClick = useCallback(() => {
    dispatch(setSuccessAuth({ successAuth: false }));
    dispatch(setError({ error: null }));
  }, [dispatch, navigate, setSuccessAuth, setError]);
  useEffect(() => {
    if (seconds === 0) {
      localStorage.removeItem("userAuth");
      dispatch(setTwoFactorAuth());
      dispatch(setError({ error: null }));
      return navigate("/login");
    }
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds, dispatch, setTwoFactorAuth, navigate]);

  useEffect(() => {
    if (successAuth) {
      toast.success("Success", { onClose: handleClick });
      return;
    }
    if (error) {
      toast.error(error, { onClose: handleClick });
      return;
    }
  }, [successAuth, error]);

  return (
    <div>
      <ToastContainer />
      <PageDesign />
      <FormContainerTwoFact
        formatTime={formatTime(seconds)}
        gotEmail={gotEmail}
        onLinkClick={onLinkClick}
        onClick={onClick}
      />
    </div>
  );
};

export default TwoFactor;

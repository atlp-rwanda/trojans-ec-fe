import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getLoginUser } from "../redux/features/slices/user";
import logo from "../images/LOGO.svg";
import vector from "../images/Vector.png";
import { loginThunk } from "../redux/features/actions/userLogin";
import "../styles/login.scss";
import GoogleButton from "./googleButton";
import loginSchema from "../schema/loginSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SpinnerLoader from "./spinnerLoader";

export default function LoginInputs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, user } = useSelector(getLoginUser);
  const [userObj, setUserObj] = useState({
    email: "",
    password: "",
  });
  const submitHandler = (data) => {
    dispatch(loginThunk(data));
  };
  if (loading === false && user !== null) {
    localStorage.setItem("token", user);
    navigate("/");
    window.location.reload();
  }

  return (
    <div className="login-container">
      <img className="logo-image" src={logo} alt="logo" />
      <div className="div-design-one"></div>
      <div className="div-design-two"></div>
      <img className="vector-image" src={vector} alt="vector" />
      <div className="login-form-div">
        <h2> Please Login Here!</h2>
        {error && <p className="ml-3 text-red-500 text-sm">{error}</p>}
        <form onSubmit={handleSubmit(submitHandler)} className="form-div">
          <div className="w-80">
            <input
              className="login-input bg-transparent outline-none w-full"
              placeholder="User Email"
              {...register("email")}
              name="email"
              type="text"
            />
            {errors.email && (
              <p className="ml-3 text-red-500 text-sm">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="w-80">
            <input
              className="login-input bg-transparent outline-none w-full"
              {...register("password")}
              name="password"
              placeholder="User Password"
              type="password"
            />
            {errors.password && (
              <p className="ml-3 text-red-500 text-sm">
                {errors.password.message}
              </p>
            )}
          </div>
          <button className="button login-btn relative" type="submit">
            Login
            <SpinnerLoader loading={loading} />
          </button>
          <h6 className="forgot">Forgot Password?</h6>
        </form>
        <GoogleButton />
      </div>
    </div>
  );
}

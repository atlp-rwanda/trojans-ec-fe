/* eslint-disable no-undef */
import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setGotEmail } from "../redux/features/slices/user";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getLoginUser } from "../redux/features/slices/user";
import logo from "../assets/images/LOGO.svg";
import vector from "../assets/images/Vector.png";
import { loginThunk } from "../redux/features/actions/userLogin";
import "../styles/login.scss";
import GoogleButton from "./shared/GoogleButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Loader from "./shared/TwoFactorLoader";
import loginSchema from "../validations/loginSchema";
import Logo from "./logo";
import Spinner from "./products/viewProducts/spinner";

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
  const { loading, error, user, twoFactorAuth } = useSelector(getLoginUser);
  const submitHandler = (data) => {
    dispatch(loginThunk(data));
  };

  useEffect(() => {
    if (!loading && twoFactorAuth) {
      dispatch(setGotEmail({ gotEmail: false }));
      return navigate("/auth");
    }
    if (loading === false && user !== null && !twoFactorAuth) {
      localStorage.setItem("token", user.token);
      localStorage.setItem("name", user.name);
      localStorage.setItem("user", JSON.stringify(user));
      window.location.href = window.location.href.split("/login")[0];
    }
  }, [loading, user, twoFactorAuth]);

  return (
    <div className="login-container overflow-hidden">
      <div className="m-5 lg:my-6 lg:mx-8 w-[90vw]">
        <Logo />
      </div>
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
          <button
            className="button login-btn relative"
            type="submit"
            data-testid="loginbtn"
          >
            <span className={`${loading ? "hidden" : ""}`}>Login</span>
            {loading ? <Spinner withoutText={true} /> : null}
          </button>
          <h6 className="forgot" onClick={() => navigate("/sendEmail")}>
            Forgot Password?
          </h6>
          <h6 className="forgot">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-primary font-semibold"
            >
              Sign up
            </span>
          </h6>
        </form>
        <GoogleButton />
      </div>
    </div>
  );
}

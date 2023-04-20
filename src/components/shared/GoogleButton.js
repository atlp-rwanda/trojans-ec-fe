// components in this folder
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/login.scss";
import googleIcon from "../../assets/images/googleIcon.svg";

export default function GoogleButton() {
  return (
    <div>
      <Link to="http://trojans-ec-bn-staging.onrender.com/api/v1/users/auth/google">
        <div className="google-btn">
          <img className="google-image" src={googleIcon} alt="google_icon" />
          <h6>Sign in with Google</h6>
        </div>
      </Link>
    </div>
  )
}

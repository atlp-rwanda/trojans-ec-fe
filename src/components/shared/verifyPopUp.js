/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import crossIcon from "../../assets/images/icons8-cancel-208.png"

import succesIcon from "../../assets/images/success_icon.png"

const SuccessVerifyPopup = (props) => {
    const { message, success} = props;
    return (
           <div className="m-auto py-40 px-20 ">
      <div className="border rounded-xl   bg-white p-12">
        <img src={success?succesIcon:crossIcon} className="w-16 m-auto" />
        <div className="pt-4 m-auto ">
          <h1 className="font-black text-center text-3xl md:text-2xl">
          {success?"Success":"Fail"}
          </h1>
          <p className="py-2 text-center w-full">
           {message}
          </p>
          <button className="bg-primary-color text-white w-full rounded-lg mt-4 text-base py-2 ">
            <Link to="/login">Login</Link>
          </button>
        </div>
    </div>
        </div>
    );
}

export default SuccessVerifyPopup;
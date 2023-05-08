import React from "react";
import check from "../assets/images/icons8-checkmark-512.png";
import { Link } from "react-router-dom";

function SendSuccessfull() {
  return (
    <div className="m-auto lg:w-4/12 py-40 w-10/12">
      <div className="border rounded-xl   bg-white p-12">
        <img src={check} className="w-16 m-auto" />
        <div className="pt-4 m-auto w-8/12 sm:w-full">
          <h1 className="font-black text-center text-3xl md:text-2xl">
            Thank You!
          </h1>
          <p className="py-2 text-center w-full">
            your item is successfully added to your collection
          </p>
          <button className="bg-primary-color text-white w-full rounded-lg mt-4 text-base py-2 ">
            <Link to="/dashboard/seller/products">View collection</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SendSuccessfull;

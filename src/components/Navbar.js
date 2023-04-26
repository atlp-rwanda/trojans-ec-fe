import React, { useState } from "react";
import CartIcon from "./cart/CartIcon";
import logo from "@assets/images/logo-image.png";
import parseJwt from "../helpers/parseJwt";
import { useNavigate } from "react-router";
import SearchInput from "@components/searchProduct/searchInput";
import "@styles/navbar.scss";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { data } = parseJwt(token);
  const [open, setOpen] = useState(true);
  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <div className="navbar">
      <nav className="p-5 bg-whiteColor hidden lg:flex lg:justify-between lg:items-center mt-[-6px] mx-10">
        <span
          onClick={() => navigate("/")}
          className="text-2xl cursor-pointer font-semibold"
        >
          <img className="w-9 mr-3 inline" src={logo} alt="logo-image" />
          Trojans Store
        </span>
        <SearchInput />
        <CartIcon />

        <div className="flex justify-around items-center">
          <div className="mr-2 font-semibold">
            <p className="text-primary">Hello,</p>
            <p>{data.name}</p>
          </div>
          <div
            onClick={() => navigate("/dashboard/buyer")}
            className="rounded-full"
          >
            <img src={data.profilePic} alt="profile-image" className="w-11" />
          </div>
        </div>
      </nav>
      <nav className="lg:hidden my-3">
        <div className="">
          <div className="mx-3 mb-3 w-[100vw] flex justify-between items-center">
            <span
              onClick={() => navigate("/")}
              className="text-2xl cursor-pointer font-semibold flex justify-center items-center"
            >
              <img className="w-9 inline mx-3" src={logo} alt="logo-image" />
              Trojans Store
            </span>
            <CartIcon />
            <div onClick={toggleMenu}>
              {open ? (
                <i
                  className="fa fa-bars fa-2xl fixed right-5 text-primary transition-all duration-500 ease-in"
                  aria-hidden="true"
                ></i>
              ) : (
                <i
                  className="fa fa-times fa-2xl fixed right-5 text-primary transition-all duration-500 ease-in"
                  aria-hidden="true"
                ></i>
              )}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <SearchInput />
          </div>
          <ul
            className={`nav-pop transition-all duration-500 ease-in text-white bg-primary py-5 w-full h-[40vh] flex flex-col justify-center items-center text-2xl font-bold absolute z-10 ${
              open
                ? "invisible translate-y-[-100%] z-0 animate"
                : "visible translate-y-0"
            }`}
          >
            <li className="my-3 text-center w-[50%] h-12 rounded py-2 hover:text-primary hover:bg-whiteColor hover:cursor-pointer flex items-center justify-center">
              <CartIcon /> <span>Cart</span>
            </li>
            <li className="my-3 text-center w-[50%] rounded py-2 hover:text-primary hover:bg-whiteColor hover:cursor-pointer">
              Notications
            </li>
            <li className="my-3 text-center w-[50%] rounded py-2 hover:text-primary hover:bg-whiteColor hover:cursor-pointer">
              Profile
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

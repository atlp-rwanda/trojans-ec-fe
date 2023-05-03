import React, { useState, useEffect } from "react";
import CartIcon from "./cart/CartIcon";
import logo from "../assets/images/logo-image.png";
import SearchInput from "./products/searchProduct/searchInput";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { userProfileUpdate } from "../redux/features/slices/profileUpdate";
import { getUserProfile } from "../redux/features/actions/getProfile";
import whiteTrojan from "../assets/images/whiteTrojan.png";
import Logo from "./logo";
import jwtDecode from "jwt-decode";
import Notification from "./notification/notification";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userProfile } = useSelector(userProfileUpdate);
  useEffect(() => {
    if (userProfile.length === 0) {
      dispatch(getUserProfile());
    }
  }, [dispatch]);
  const [open, setOpen] = useState(true);
  const toggleMenu = () => {
    setOpen(!open);
  };
  const handleDashboard = () => {
    const { data } = jwtDecode(localStorage.getItem("token"));
    if (data.role === "seller") navigate("/dashboard/seller");
    if (data.role === "buyer") navigate("/products/wishlist");
    if (data.role === "admin") navigate("/dashboard/admin/users");
  };
  return (
    <div className="navbar">
      <nav className="shadow-sm mb-8 px-10 pb-3 pt-4 bg-whiteColor hidden lg:flex lg:justify-between lg:items-center mt-[-6px]">
        <div onClick={() => navigate("/")}>
          <Logo />
        </div>
        <SearchInput />
        <div className="mt-[7px]">
          <CartIcon />
        </div>
        {/* <div className="w-[6vw] flex justify-between items-center"> */}
        <div onClick={handleDashboard} className="relative dashboard-icon">
          <span className="absolute p-1 bg-[#4C4349] text-white text-xs bottom-[-20px]">
            Dashboard
          </span>
          <span>
            <ion-icon name="albums-outline"></ion-icon>
          </span>
        </div>
        <Notification/>
        {/* </div> */}

        <div className="flex flex-col justify-around items-center">
          <div
            onClick={() => navigate("/user/profile")}
            className="rounded-full overflow-hidden w-10 h-10 flex justify-center items-center"
          >
            <img
              src={userProfile?.profilePic}
              alt="profile-image"
              className="w-10 h-10"
            />
          </div>
          <p className="max-w-[100px] text-center text-xs">
            {userProfile?.name}
          </p>
        </div>
      </nav>
      <nav className="lg:hidden my-3 nav-small max-h-[300px]">
        <div className="">
          <div className="mx-3 mt-3 w-[90vw] flex justify-between items-center">
            <div className="flex flex-col justify-around items-center">
              <div
                onClick={() => navigate("/user/profile")}
                className="rounded-full overflow-hidden w-10 h-10 flex justify-center items-center"
              >
                <img
                  src={userProfile?.profilePic}
                  alt="profile-image"
                  className="w-10 h-10"
                />
              </div>
              <p className="text-xs text-center max-w-[100px]">
                {userProfile?.name}
              </p>
            </div>
            <div
              className="z-20 fixed right-[3vw] top-[20px]"
              onClick={toggleMenu}
            >
              {open ? (
                <i
                  className="fa fa-bars fa-2xl text-primary transition-all duration-300 ease-in"
                  aria-hidden="true"
                ></i>
              ) : (
                <i
                  className="fa fa-times fa-2xl text-white transition-all duration-300 ease-in"
                  aria-hidden="true"
                ></i>
              )}
            </div>
          </div>
          <div className="flex justify-around items-center py-3 shadow-lg w-100vw mb-[5vw] mx-[3vw]">
            <div className="max-w-[70vw] ml-[3vw]">
              <SearchInput />
            </div>
            <div className="flex justify-between items-center w-[30vw]  sm:w-[15vw] mr-[3vw]">
              <CartIcon />
              {/* <ion-icon name="notifications-outline"></ion-icon> */}
              <Notification/>
            </div>
          </div>
          <div
            className={`nav-pop text-white py-5 bg-dark flex flex-col items-start z-10 ${
              open
                ? "invisible translate-x-[100vw] z-0 animate"
                : "visible translate-x-[0vw]"
            }`}
          >
            <div className="top-bar absolute top-0 w-full h-[70px] shadow-sm shadow-black">
              <div className="absolute top-[15px] left-[5%] md:left-[10%] max-w-[75vw]">
                <div className="flex justify-around items-center">
                  <img
                    src={whiteTrojan}
                    alt="logo-icon"
                    className="inline w-9 ml-9"
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-[60px] w-full">
              <div className="h-[200px] mt-10 nav-links">
                <ul className="h-full flex flex-col justify-around items-center">
                  <li onClick={() => navigate("/")}>
                    <a href="#" className="flex items-center justify-start">
                      <ion-icon name="home-outline"></ion-icon>
                      <span className="ml-3 text-lg">Home</span>
                    </a>
                  </li>
                  <li onClick={() => navigate("/products/wishlist")}>
                    <a href="#" className="flex items-center justify-start">
                      <ion-icon name="albums-outline"></ion-icon>
                      <span className="ml-3 text-lg">Dashboard</span>
                    </a>
                  </li>
                  <li onClick={() => navigate("/user/profile")}>
                    <a href="#" className="flex items-center justify-start">
                      <ion-icon name="person-outline"></ion-icon>
                      <span className="ml-3 text-lg">Profile</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import React from "react";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import facebook from "../images/facebookIcon.png";
import instagram from "../images/instagramIcon.png";
import tiktok from "../images/tiktokIcon.png";
import { Link } from "react-router-dom";
import Logo from "./logo";

function Footer({ products }) {
  return (
    <div className=" flex flex-col mt-8 w-full h-auto footer">
      <div className="flex text-white md:items-center p-2 items-start h-full flex-col md:flex-row py-2">
        <div className="flex-1 flex flex-col items-center text-justify">
          <Logo />

          <p className="mb-5">
            <h6>trojans@gmail.com</h6>
            <h6>+25079899879</h6>
          </p>
        </div>
        <div className="flex-1 flex flex-col items-center text-justify">
          <p>
            <h4 className="font-black">
              <u>About Us</u>
            </h4>
            <h6>information</h6>
            <h6>contact Us</h6>
            <h6>terms & condition</h6>
          </p>
        </div>
        <div className="flex-1 flex flex-col items-center text-justify">
          <p>
            <h4 className="font-black">
              <u>QUICK</u>
            </h4>
            <h6>
              <Link to="/login">register/login</Link>
            </h6>

            <h6>
              <Link to="/products/wishlist">wishlist</Link>
            </h6>
            <h6>
              <Link to="/products/cart">cart</Link>
            </h6>
          </p>
        </div>
        <div className="w-full flex-1 flex flex-col items-center gap-3 justify-center pr-8">
          <h4 className="font-black">
            <u>Social Media</u>
          </h4>
          <div className="w-full flex-1 flex flex-col items-center gap-3 justify-center pr-8">
            <p>follow us on: </p>
            <div className="flex justify-around gap-5">
              <img className="h-6" src={facebook} />
              <img className="h-6" src={instagram} />
              <img className="h-6" src={tiktok} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center text-white p-5">
        &copy; 2023 Developed by andela trojans
      </div>

      <div></div>
    </div>
  );
}

export default Footer;

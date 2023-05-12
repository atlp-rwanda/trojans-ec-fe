import React from "react";
import whiteTrojan from "@assets/images/whiteTrojan.png";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
const MainNavbar = ({ active, setActive, links }) => {
  const token = localStorage.getItem("token");
  const { data } = jwtDecode(token);
  const navigate = useNavigate();
  const handleHome = () => {
    if (data.role === "buyer") navigate("/");
  };
  const { innerWidth: width } = window;
  let onMouseOutHandler;
  let onMouseOverHandler;
  if (width > 768) {
    onMouseOverHandler = () => setActive(false);
    onMouseOutHandler = () => setActive(true);
  }
  return (
    <div
      className={`${active ? "active" : ""} navigation`}
      onMouseOver={onMouseOverHandler}
      onMouseOut={onMouseOutHandler}
    >
      <ul className="hover:cursor-pointer">
        <li data-testid="home-link" className="top-head">
          <a onClick={handleHome} href="#" className="">
            <span className="icon flex justify-center items-center">
              <img src={whiteTrojan} alt="" className="mt-[-10px] w-9 inline" />
            </span>
            <span className="title">Trojans Store</span>
          </a>
        </li>
        {links}
      </ul>
    </div>
  );
};

export default MainNavbar;

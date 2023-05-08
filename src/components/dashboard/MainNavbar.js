import React from "react";
import whiteTrojan from "@assets/images/whiteTrojan.png";
import { useNavigate } from "react-router-dom";
const MainNavbar = ({ active, setActive, links }) => {
  const navigate = useNavigate();
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
        <li
          onClick={() => navigate("/")}
          data-testid="home-link"
          className="top-head"
        >
          <a href="#" className="">
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

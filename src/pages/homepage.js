import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div data-testid='home'>
      <p>This is Homepage Page</p>
    <div>
      <div className="pt-4 mx-10">
        <span className="button border py-2 px-4 rounded-xl text-white ">
          Login
        </span>
      <Link to="/register"><span className="border rounded-xl py-2 px-4 signup mx-2 border-2 drop-shadow-xl">
          Sign Up
        </span></Link>  
      </div>
    </div>
    </div>
  );
};

export default Homepage;

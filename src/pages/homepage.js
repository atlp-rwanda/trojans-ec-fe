import React, { useEffect } from "react";

const Homepage = () => {
  useEffect(()=>{
 if(window.location.href.includes("token")){
const token = window.location.href.split("token=")[1]
localStorage.setItem("token",token)

 }
  },[])
  return (
    <div data-testid='home'>
      <p>This is Homepage Page</p>
    <div>
      <div className="pt-4 mx-10">
        <span className="button border py-2 px-4 rounded-xl text-white ">
          Login
        </span>
        <span className="border rounded-xl py-2 px-4 signup mx-2 border-2 drop-shadow-xl">
          Sign Up
        </span>
      </div>
    </div>
    </div>
  );
};

export default Homepage;

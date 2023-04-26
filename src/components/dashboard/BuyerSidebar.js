import React from "react";
import { useNavigate } from "react-router-dom";

const BuyerSidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[50vh] w-[15vw] bg-[#DBD2EA] border border-gray-400 rounded-xl my-16 mx-32 flex justify-center items-center">
      <div className="flex flex-col justify-between items-center">
        <h2 className="text-lg font-bold h-[10vh]">My Account</h2>
        <ul className="font-semibold text-gray-600 flex flex-col justify-between items-start h-[30vh]">
          <li className="transition-all ease-in duration-300 hover:text-black hover:cursor-pointer border-b border-dashed w-full border-black p-1">
            Orders
          </li>
          <li className="transition-all ease-in duration-300 hover:text-black hover:cursor-pointer border-b border-dashed w-full border-black p-1">
            Wishes
          </li>
          <li
            onClick={() => navigate("/user/profile")}
            className="transition-all ease-in duration-300 hover:text-black hover:cursor-pointer border-b border-dashed w-full border-black p-1"
          >
            Account details
          </li>
          <li
            onClick={() => navigate("/login")}
            className="transition-all ease-in duration-300 hover:text-black hover:cursor-pointer border-b border-dashed w-full border-black p-1"
          >
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BuyerSidebar;

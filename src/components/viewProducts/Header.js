import React from "react";
import { useNavigate } from "react-router-dom";
const Header = () => {
  return (
    <div className="header mb-4 flex justify-between items-center px-2 sm:px-8">
      <h1 className="p-title font-semibold text-3xl text-primary">
        All Products
      </h1>
      <div className="add-product-btn">
        <button className="rounded-md bg-primary px-3 py-1 text-white flex items-center transition-all ">
          <ion-icon name="add-outline"></ion-icon>
          <span>
            Add <span className="hidden sm:inline">Product</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Header;

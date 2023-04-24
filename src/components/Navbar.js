import React from "react";
import CartIcon from "./cart/CartIcon";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <p>This is Homepage Page</p>
      <div>
        <div className="pt-4 mx-10">
          <Link
            to="/login"
            data-testid="navigate-to-login"
            className="button border py-2 px-4 rounded-xl text-white "
          >
            Login
          </Link>
          <Link to="/register">
            <span className="rounded-xl py-2 px-4 signup mx-2 border-2 drop-shadow-xl">
              Sign Up
            </span>
          </Link>
          <Link to="/dashboard/seller/products">
            <button className="m-2 p-1">Go to seller dashboard</button>
          </Link>
          <Link to="/dashboard/seller/product/create">Add Product</Link>
        </div>
      </div>
      <CartIcon />
    </div>
  );
};

export default Navbar;

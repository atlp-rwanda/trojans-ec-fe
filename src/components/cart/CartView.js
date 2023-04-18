import React from "react";
import CartIcon from "./CartIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCartThunk,
  getCartThunk,
} from "../../redux/features/actions/cart";
import CartCard from "./CartCard";
import CartSummary from "./CartSummary";

const CartView = ({ numberOfItems, cart, total, sellers }) => {
  const dispatch = useDispatch();
  const clearCartHandler = () => {
    dispatch(clearCartThunk()).then(() => dispatch(getCartThunk()));
  };
  return (
    <div className="w-full h-full">
      <CartIcon />
      <div className="flex flex-col-reverse px-24 lg:flex-row justify-between items-start w-full h-full">
        <div className="w-full h-full lg:w-[62%]">
          <div className="m-7 flex justify-between w-full lg:w-full ">
            <h1 className="ml-4 font-semibold text-2xl">
              Cart({numberOfItems})
            </h1>
            <button
              onClick={clearCartHandler}
              className={`${
                cart.length > 0 ? "block" : "hidden"
              } mr-[12%] bg-primary text-white px-4 py-2 rounded-xl text-xl leading-5 transition-all ease-in duration-300 hover:bg-dark hover:outline hover:outline-dark`}
            >
              Clear
            </button>
          </div>
          {cart.length > 0 && sellers.length > 0 ? (
            <div className="w-full">
              {cart.map((item) => (
                <CartCard sellers={sellers} item={item} key={item.id} />
              ))}
            </div>
          ) : (
            <div className="m-7 lg:w-full h-[60vh] flex flex-col justify-center items-center text-right rounded-xl border border-gray-300">
              <h1 className="font-bold text-lg text-primary mb-4">
                No products in the cart yet!
              </h1>
              <p className="font-bold text-base opacity-60 w-">
                You need to add products to your cart first
              </p>
            </div>
          )}
        </div>
        <CartSummary total={total} />
      </div>
    </div>
  );
};

export default CartView;

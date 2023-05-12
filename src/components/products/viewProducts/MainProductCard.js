/* eslint-disable react/prop-types */
import React from "react";
import StarRating from "./StarRating.js";
import Categorize from "./Categorize.js";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCartThunk,
  getCartThunk,
} from "../../../redux/features/actions/cart.js";
import { getCart } from "../../../redux/features/slices/cart.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CrossedRating from "./CrossedRating.js";
import { discount } from "../../../helpers/Discount.js";
/* istanbul ignore next */
const MainProductCard = ({ product, categories }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartError = useSelector(getCart).error;
  const addToCartHandler = (e, id) => {
    dispatch(addToCartThunk(id)).then(() => dispatch(getCartThunk()));
    e.stopPropagation();
    if (cartError.status) {
      if (cartError.payload === 401) {
        toast.error("You need a buyer's account for cart operations");
      } else if (cartError.payload === "Network Error") {
        return (
          <Error
            code="Error"
            title="Internet connection error"
            description="There is a problem with your internet connection, check it and reload again"
            to="reload"
          />
        );
      } else {
        return <Error />;
      }
    }
  };

  return (
    <div
      onClick={() => navigate(`/products/${product.id}`)}
      className="m-4 main-p-card bg-whiteColor border border-gray-200 rounded-xl shadow-sm w-full sm:w-[280px] h-[320px] hover:scale-[1.02] transition-all ease-linear duration-300 hover:cursor-pointer"
    >
      <div className=" relative w-full h-[65%] p-3">
        <img
          src={product.images[0]}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
        {product.bonus !== 0 && (
          <span className="absolute bottom-[-5px] right-[20%] bg-[#FF2D55] py-2 px-3 text-white font-[500]">
            {discount(product.bonus, product.price)}
          </span>
        )}
      </div>
      <div className="flex justify-between items-center px-4 pb-3">
        <div className=" flex flex-col justify-between h-[35%] w-full">
          <div className="flex justify-between items-center w-full">
            <div>
              <p className="font-[500] text-xl leading-2">{product.name}</p>
              <p className="font-[400] text-md text-gray-600 mt-[-4px]">
                {<Categorize id={product.categoryId} categories={categories} />}
              </p>
            </div>
            {product.message && <CrossedRating width="90px" />}
            {product.average != 0 && <StarRating rating={product.average} />}
          </div>
          <div className="flex justify-between items-center w-full">
            <p className="text-xl text-primary font-[500]">${product.price}</p>
            <button
              onClick={(e) => addToCartHandler(e, product.id)}
              className="relative w-[40px] mr-3 h-[40px] add-btn transition-all duration-300 ease-in bg-primary text-white px-1 pb-1 ml-5 rounded-lg text-base leading-7 invisible hover:bg-dark"
            >
              <i className="fa fa-shopping-cart"></i>
              <div className="p-1 w-20 hidden absolute text-sm top-9 right-[-16px] bg-secondary rounded-sm text-white">
                Add to cart
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainProductCard;

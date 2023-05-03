/* eslint-disable react/prop-types */
import React from "react";
import StarRating from "./StarRating.js";
import Categorize from "./Categorize.js";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCartThunk,
  getCartThunk,
} from "../../redux/features/actions/cart.js";
import { getCart } from "../../redux/features/slices/cart.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      className="w-[200px] mx-auto flex flex-col justify-center hover:cursor-pointer"
      onClick={() => navigate(`/products/${product.id}`)}
    >
      <div className="h-14 overflow-hidden p-1 bg-whiteColor rounded-xl flex justify-center items-center w-1/2 mx-auto">
        <img src={product.images[0]} alt="product-image" className="w-24" />
      </div>
      <div className="flex justify-between font-semibold text-sm mt-2">
        <h3 className="max-w-[150px]">{product.name}</h3>
        <h3 className="">${product.price}</h3>
      </div>
      <div className="flex justify-around my-1">
        <div className=" ">
          <span className="font-light">
            <Categorize id={product.categoryId} categories={categories} />
          </span>
          <div>
            {product.message && (
              <span className={`font-bold text-sm mr-1`}>
                {product.message}
              </span>
            )}

            {product.average != 0 && (
              <div>
                <span className={`font-bold" mr-1`}>{product.average}</span>
                <StarRating rating={product.average} />
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={(e) => addToCartHandler(e, product.id)}
            className="relative w-[35px] max-h-[40px] add-btn transition-all duration-300 ease-in bg-primary text-white px-1 pb-1 ml-5 rounded-lg text-base leading-7 invisible hover:bg-dark"
          >
            <i className="fa fa-shopping-cart"></i>
            <div className="p-1 w-20 hidden absolute text-sm top-9 right-[-16px] bg-secondary rounded-sm text-white">
              Add to cart
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainProductCard;

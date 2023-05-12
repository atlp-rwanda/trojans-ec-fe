/* eslint-disable react/prop-types */
import React from "react";
import StarRating from "./StarRating";
import Categorize from "./Categorize";
import emptyHeart from "../../../assets/images/heart-empty.png";
import Spinner from "./spinner";
import { LoadingSingleMain } from "../../skeleton/LoadingSingleMain";
import CrossedRating from "./CrossedRating";
import { discount } from "../../../helpers/Discount";

export default function SingleProductDetail({
  addToCartHandler,
  loading,
  addedWish,
  addWishlist,
  categories,
  selectedProduct,
  wishLoading,
}) {
  return (
    <div className="my-8 relative flex flex-col justify-start h-full">
      <div className="w-full flex justify-end items-center">
        {selectedProduct.bonus !== 0 && (
          <div className="rounded-full bg-[#FF2D55] w-20 h-20 mb-10 flex flex-col justify-center items-center">
            <span className="text-lg font-semibold text-white">
              {discount(selectedProduct.bonus, selectedProduct.price)}
            </span>
            <span className="text-lg text-white">OFF</span>
          </div>
        )}
      </div>
      <h1 className="font-[500] text-4xl text-primary lg:mb-5">
        {selectedProduct.name}
      </h1>
      <p className="text-lg">
        {selectedProduct.average != 0 ? (
          selectedProduct.average
        ) : (
          <CrossedRating />
        )}
        {selectedProduct.average != 0 && (
          <StarRating rating={selectedProduct.average} />
        )}
      </p>
      <div className="my-6">
        <p className="text-lg">
          <span className="text-dark">Category: </span>
          <span className="text-primary font-[500]">
            <Categorize
              id={selectedProduct.categoryId}
              categories={categories}
            />
          </span>
        </p>
        <p className="text-lg">
          <span className="text-dark">Price: $</span>
          <span className="font-[500] text-primary">
            {selectedProduct.price}
          </span>
        </p>
      </div>
      <button className="bg-primary border-none font-[500] py-1 rounded-sm hover:bg-dark w-[170px] flex justify-between pl-3 pr-5 items-center ">
        <i className="fa fa-cart-shopping fa-sm text-white"></i>
        <span
          onClick={() => addToCartHandler(selectedProduct)}
          className="text-white text-md "
        >
          ADD TO CART
        </span>
      </button>
      <button
        className="flex justify-around font-[500] rounded-sm items-center border border-primary w-[170px] py-1 mt-3 hover:bg-secondary"
        onClick={() => addWishlist(selectedProduct)}
      >
        {loading ? (
          <Spinner withoutText={true} />
        ) : (
          <span className="flex justify-between pl-5 pr-8 items-center w-full">
            {addedWish.includes(selectedProduct.id) ? (
              <i className="fa fa-heart text-primary"></i>
            ) : (
              <img src={emptyHeart} className="w-5 h-5"></img>
            )}
            <span className="text-primary text-sm">
              {`${
                addedWish.includes(selectedProduct.id) ? "REMOVE" : "ADD"
              } WISH`}
            </span>
          </span>
        )}
      </button>
    </div>
    // <button className="bg-primary flex justify-around items-center border-none w-60 h-10 sm:w-72 sm:h-12  hover:bg-dark ">
    //   <i className="fa fa-cart-shopping fa-xl text-white"></i>
    //   <span
    //     onClick={() => addToCartHandler(selectedProduct)}
    //     className="text-white font-semibold text-xl mr-10"
    //   >
    //     ADD TO CART
    //   </span>
    // </button>
    // <button
    //   className="flex justify-around items-center border border-primary w-60 h-10 sm:w-72 sm:h-12  mt-3 hover:bg-secondary"
    //   onClick={() => addWishlist(selectedProduct)}
    // >
    //   {wishLoading ? (
    //     <Spinner withoutText={true} />
    //   ) : (
    //     <span className="flex justify-around items-center">
    //       {addedWish.includes(selectedProduct.id) ? (
    //         <i className="fa fa-heart fa-xl text-primary"></i>
    //       ) : (
    //         <img src={emptyHeart} className="w-8 h-8 ml-8 "></img>
    //       )}
    //       <span className="text-primary font-semibold text-xl m-10">
    //         {`${
    //           addedWish.includes(selectedProduct.id) ? "REMOVE" : "ADD"
    //         } WISH`}
    //       </span>
    //     </span>
    //   )}
    // </button>
  );
}

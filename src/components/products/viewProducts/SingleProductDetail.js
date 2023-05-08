/* eslint-disable react/prop-types */
import React from 'react'
import StarRating from "./StarRating";
import Categorize from "./Categorize";
import emptyHeart from "../../../assets/images/heart-empty.png";
import Spinner from "./spinner";

export default function SingleProductDetail({addToCartHandler,loading, addedWish, addWishlist, categories, selectedProduct}) {
  return (
    <div className="my-8 flex flex-col justify-between">
        <h1 className="font-bold text-4xl text-primary">
          {selectedProduct.name}
        </h1>
        <div className="my-6">
          <p className="text-lg">
            <span className="font-semibold">Category: </span>
            <Categorize
              id={selectedProduct.categoryId}
              categories={categories}
            />
          </p>
          <p className="text-lg">
            <span className="font-semibold">Price: $</span>
            {selectedProduct.price}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Ratings: </span>{selectedProduct.average != 0 ? selectedProduct.average : selectedProduct.message}
            {selectedProduct.average !=0 && <StarRating rating={selectedProduct.average} />}
          </p>
        </div>
        <button className="bg-primary flex justify-around items-center border-none w-60 h-10 sm:w-72 sm:h-12  hover:bg-dark ">
          <i className="fa fa-cart-shopping fa-xl text-white"></i>
          <span
            onClick={() => addToCartHandler(selectedProduct)}
            className="text-white font-semibold text-xl mr-10"
          >
            ADD TO CART
          </span>
        </button>
        <button className="flex justify-around items-center border border-primary w-60 h-10 sm:w-72 sm:h-12  mt-3 hover:bg-secondary"onClick={() => addWishlist(selectedProduct)}>
          {loading ? (
            <Spinner withoutText={true} />
          ) : (
            <span className="flex justify-around items-center">
              {addedWish.includes(selectedProduct.id) ? (
                <i className="fa fa-heart fa-xl text-primary"></i>
              ) : (
                <img src={emptyHeart} className="w-8 h-8 ml-8 "></img>
              )}
              <span className="text-primary font-semibold text-xl m-10">
                {`${
                  addedWish.includes(selectedProduct.id) ? "REMOVE" : "ADD"
                } WISH`}
              </span>
            </span>
          )}
        </button>
      </div>
  )
}

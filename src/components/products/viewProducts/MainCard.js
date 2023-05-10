import React from "react";
import shoe from "../../../assets/images/shoe.jpeg";
import CrossedRating from "./CrossedRating";
const MainCard = () => {
  return (
    <div
      onClick={() => navigate(`/products/${product.id}`)}
      className="m-4 bg-whiteColor border border-gray-200 rounded-xl shadow-lg w-[280px]"
    >
      <div className=" relative w-full h-[65%] p-3">
        <img
          src={product.images[0]}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
        <span className="absolute bottom-0 right-[20%] bg-[#FF2D55] py-2 px-3 text-white font-[500] z-20">
          {product.bpnus}
        </span>
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
            <p className="text-xl text-primary font-[600]">${product.price}</p>
            <button
              onClick={(e) => addToCartHandler(e, product.id)}
              className="relative w-[40px] mr-3 h-[40px] add-btn transition-all duration-300 ease-in bg-primary text-white px-1 pb-1 ml-5 rounded-lg text-base leading-7 hover:bg-dark"
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

export default MainCard;

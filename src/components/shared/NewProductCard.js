import React from "react";
import { useNavigate } from "react-router-dom";
import { getSeller } from "../../helpers/getSeller";
const NewProductCard = ({ product, sellers }) => {
  const navigate = useNavigate();
  const goTo = () => {
    navigate(`/products/${product.id}`);
  };
  return (
    <div
      onClick={goTo}
      className="max-w-[100%] hover:scale-[1.02] hover:cursor-pointer h-96 mb-3 rounded-lg transition-all duration-200 ease-linear border shadow-md bg-whiteColor border-purple-100 flex flex-col justify-between items-center"
    >
      <div className="w-full p-2 hover:p-0 transition-all duration-200 ease-in bg-transparent h-[68%] flex justify-center overflow-hidden">
        <img
          src={product.images[0]}
          alt=""
          className="w-full h-full rounded-md"
        />
      </div>
      <div className="px-3 py-2 flex flex-col justify-between items-center w-full h-[32%]">
        <h1 className="font-[600] text-2xl text-dark">{product.name}</h1>
        <div className="flex justify-around items-center w-[90%]">
          <p className="font-[600] w-[75%]">
            <span className="font-light  text-gray-600"> Seller:</span>{" "}
            {getSeller(sellers, product.sellerId).name}
          </p>
          <p className="w-[25%] flex justify-end italic text-sm">In Stock</p>
        </div>
        <div className="flex justify-between items-center w-full px-3">
          <button
            onClick={goTo}
            className="px-3 py-1 rounded-sm bg-primary text-white hover:bg-dark transition-all duration-200 ease-linear hover:cursor-pointer"
          >
            See Product
          </button>
          <span className="text-lg font-semibold">${product.price}</span>
        </div>
      </div>
    </div>
  );
};

export default NewProductCard;

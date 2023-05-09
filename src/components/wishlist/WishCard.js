import React from "react";
import { useNavigate } from "react-router-dom";
import { getSeller } from "../../helpers/getSeller";

export default function WishCard({ product, sellers }) {
  const navigate = useNavigate();
  const goTo = () => {
    navigate(`/products/${product.id}`);
  };
  return (
    <div
      onClick={goTo}
      className="m-7 p-5 flex justify-around items-center shadow-sm border-2 hover:cursor-pointer rounded-xl lg:w-full"
    >
      <div>
        <img
          src={product.images[0]}
          alt="product-image"
          className="w-16 rounded-2xl sm:w-24"
        />
      </div>
      <div className="m-3 w-[110px] sm:w-1/2 flex flex-col justify-between">
        <h1 className="text-md font-bold mb-3 lg:text-2xl">{product.name}</h1>
        <div className="text-sm font-light">
          <p>
            Seller:{" "}
            <span className="font-bold">
              {getSeller(sellers, product.sellerId).name}
            </span>
          </p>
          <p>In stock</p>
        </div>
      </div>
      <div className="">
        <p className="text-center mb-2 font-bold text-xl">{product.price}</p>
      </div>
    </div>
  );
}

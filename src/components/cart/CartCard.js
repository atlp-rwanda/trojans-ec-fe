import React, { useState } from "react";
import { getSeller } from "../../helpers/getSeller";

const CartCard = ({
  item,
  sellers,
  dispatchDeleteItem,
  dispatchUpdateItem,
  loading,
}) => {
  const [requestQuantity, setRequestQuantity] = useState(1);
  const increaseQuantity = () => {
    if (requestQuantity < 1000) {
      setRequestQuantity(requestQuantity + 1);
    } else {
      setRequestQuantity(1);
    }
  };
  const decreaseQuantity = () => {
    if (requestQuantity > 1) {
      setRequestQuantity(requestQuantity - 1);
    } else {
      setRequestQuantity(1);
    }
  };
  const { id, image, name, price, quantity, sellerId } = item;
  const clearSingleCart = (id) => {
    dispatchDeleteItem(id);
  };
  const updateCart = (id, quantity) => {
    dispatchUpdateItem(id, quantity);
  };
  return (
    <div className="flex justify-center items-center w-full">
      <div className="mr-2 mb-7 p-5 flex flex-col sm:flex-row justify-around items-center shadow-sm border-2 rounded-xl w-[95vw] sm:w-[90%]">
        <div className="flex justify-center items-center">
          <img
            src={image}
            alt="product-image"
            className="w-24 rounded-2xl sm:w-24"
          />
        </div>
        <div className="m-3 w-[100%] sm:w-1/2 flex flex-col justify-between items-center">
          <h1 className="text-md font-bold mb-3 lg:text-2xl">{name}</h1>
          <div className="text-sm font-light">
            <p>
              Seller:{" "}
              <span className="font-bold">
                {loading ? "..." : getSeller(sellers, sellerId).name}
              </span>
            </p>
            <p>In stock</p>
            <p>
              Quantity: <span>{quantity}</span>
            </p>
            <p className="text-base">
              Total: <span className="font-semibold">{quantity * price}</span>
            </p>
          </div>
        </div>
        <div className="">
          <p className="text-center mb-2 font-bold text-xl">{price}</p>
          <div className="flex flex-col justify-center items-center">
            <div className="text-center shadow-md border-[1px] rounded-md font-light mb-2">
              <button
                onClick={decreaseQuantity}
                className="text-center shadow-md border-[1px] rounded-md font-light px-1 sm:px-3"
              >
                -
              </button>
              <span data-testid="cartQuantity" className="px-1 sm:px-3 mx-1">
                {requestQuantity}
              </span>
              <button
                onClick={increaseQuantity}
                className="text-center shadow-md border-[1px] rounded-md font-light px-1 sm:px-3"
              >
                +
              </button>
            </div>
            <button
              onClick={() => updateCart(id, requestQuantity)}
              className="text-sm bg-primary text-white px-2 py-1 rounded-lg transition-all ease-in duration-300 hover:bg-dark"
            >
              Update quantity
            </button>
          </div>
        </div>
      </div>
      <button onClick={() => clearSingleCart(id)}>
        <i className="fa fa-trash fa-xl transition-all ease-in duration-200 text-secondary hover:scale-105 hover:text-dark"></i>
      </button>
    </div>
  );
};

export default CartCard;

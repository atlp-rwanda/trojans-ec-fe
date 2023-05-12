/* eslint-disable no-constant-condition */
import React from "react";
import Spinner from "../products/viewProducts/spinner";
const SellerOrderCard = ({
  status,
  product,
  onAccept,
  onDecline,
  onDeliver,
  isLoading,
  statusLoading,
  updated,
  id,
}) => {
  const { images, name, price } = product;

  return (
    <div className="max-w-[100%] hover:scale-[1.02] hover:cursor-pointer h-96 mb-3 rounded-lg transition-all duration-200 ease-linear border shadow-md bg-whiteColor border-purple-100 flex flex-col justify-between items-center">
      <div className="w-full p-2 hover:p-0 transition-all duration-200 ease-in bg-transparent h-[68%] flex justify-center overflow-hidden">
        <img src={images[0]} alt="" className="w-full h-full rounded-md" />
      </div>
      <div className="px-3 py-2 flex flex-col justify-around items-center w-full h-[32%]">
        <div className="w-full flex justify-between items-center">
          <p className="text-xl text-primary">{name}</p>
          <p className="text-dark text-xl font-[500]">${price}</p>
        </div>
        <div className="flex justify-around items-center w-[90%]">
          <p className="font-[400] w-[75%] text-center flex justify-around items-center">
            <span className="font-regular  text-gray-600"> Status:</span>
            {statusLoading && updated === id ? (
              <Spinner withoutText={true} />
            ) : (
              <span
                className={`ml-3 px-2 py-1 rounded-md  text-white ${
                  "delivered" === "delivered"
                    ? "bg-[#177E89]"
                    : status === "complete"
                    ? "bg-green-500"
                    : "bg-yellow-600"
                }`}
              >
                {status}
              </span>
            )}
          </p>
        </div>
        <div className="flex text-sm justify-around items-center w-full">
          <button
            className="px-3 py-1 rounded-sm bg-yellow-900 text-white hover:bg-yellow-700 transition-all duration-200 ease-linear hover:cursor-pointer"
            onClick={() => onAccept()}
          >
            Approve
          </button>
          <button
            className="px-3 py-1 rounded-sm bg-red-900 text-white hover:bg-red-700 transition-all duration-200 ease-linear hover:cursor-pointer"
            onClick={() => onDecline()}
          >
            Decline
          </button>
          <button
            className="px-3 py-1 rounded-sm bg-green-900 text-white hover:bg-green-700 transition-all duration-200 ease-linear hover:cursor-pointer"
            onClick={() => onDeliver()}
          >
            Delivered
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellerOrderCard;

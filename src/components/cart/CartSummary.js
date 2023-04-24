import React from "react";

const CartSummary = ({ total }) => {
  return (
    <div
      className={`${
        total === 0 ? "hidden" : null
      } mt-[10%] p-5 flex justify-around flex-col items-center shadow-sm border-2 rounded-xl h-[200px] w-[90%] lg:w-[30%]`}
    >
      <h1 className=" text-3xl font-semibold">Cart Summary</h1>
      <div className="font-semibold text-xl flex justify-between items-center w-full px-2">
        <h1>Total:</h1>
        <h1>${total}</h1>
      </div>
      <button className="bg-primary text-white rounded-md px-4 py-2 transition-all ease-in duration-300 font-semibold hover:bg-dark hover:outline outline-dark">
        Proceed Checkout
      </button>
    </div>
  );
};

export default CartSummary;

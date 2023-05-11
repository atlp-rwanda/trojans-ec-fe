import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux"
import { getCart, setCheckOutError, setCheckOutData } from "../../redux/features/slices/cart";
import checkoutThunk from "../../redux/features/actions/checkout";
import Loader from "../shared/TwoFactorLoader";

const CartSummary = ({ total }) => {
  const { checkOutData, checkOutError, checkingOut } = useSelector(getCart);
  const dispatch = useDispatch();
  const handleCheckout = () =>{
    return dispatch(checkoutThunk());
  }

  useEffect(() => {
    if(checkOutData){
       toast.success("Checkout Success! click on proceed payment button to make a payment");
       return;
     }
     /* istanbul ignore next */
     if(checkOutError){
       toast.error(checkOutError, {onClose: () => dispatch(setCheckOutError())});
       return;
     }
   }, [checkOutData, checkOutError]);
  return (
    <div
      className={`${
        total === 0 ? "hidden" : null
      } mt-[10%] p-5 flex justify-around flex-col items-center shadow-sm border-2 rounded-xl h-[200px] w-[100%] lg:w-[30%]`}
    >
      <h1 className=" text-3xl font-[500]">Cart Summary</h1>
      <div className="font-[500] text-xl flex justify-between items-center w-full px-2">
        <h1>Total:</h1>
        <h1>${total}</h1>
      </div>
      <button onClick={handleCheckout} disabled={checkingOut || checkOutData ? true: false } className="bg-primary text-white rounded-md px-4 py-2 transition-all ease-in duration-300 font-semibold w-[200px]">
        {checkingOut ? <Loader/>: "Proceed Checkout"}
      </button>
      {checkOutData && (
        <div className="proceed-cancel-payment">
      <a href={checkOutData.url} target="_blank" rel="noreferrer">Proceed Payment</a>
      <button onClick={() => dispatch(setCheckOutData())}>
        Cancel
      </button>
      </div>
      )}
    </div>
  );
};

export default CartSummary;

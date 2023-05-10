import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCartThunk, getSellersThunk } from "../redux/features/actions/cart";
import { getCart } from "../redux/features/slices/cart";
import CartView from "../components/cart/CartView";
import ErrorHandler from "../components/shared/ErrorHandler";
import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/footer";

/* istanbul ignore next */
const Cart = () => {
  const dispatch = useDispatch();
  const {
    loading,
    error,
    cart,
    numberOfItems,
    total,
    sellers,
    sellerLoading,
    response,
  } = useSelector(getCart);
  useEffect(() => {
    if (!response) {
      dispatch(getCartThunk()).then(() => dispatch(getSellersThunk()));
    } else {
      dispatch(getSellersThunk());
    }
  }, [dispatch]);
  return (
    <div className="w-[100vw]">
      <ToastContainer />
      <ErrorHandler
        error={error}
        loading={loading}
        message={"You need a buyer's account to perform any cart operations"}
        to={"home"}
      />
      {!error.status && (
        <>
          <Navbar />
          <CartView
            numberOfItems={numberOfItems}
            cart={cart}
            total={total}
            sellers={sellers}
            loading={loading}
            sellerLoading={sellerLoading}
            response={response}
          />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Cart;

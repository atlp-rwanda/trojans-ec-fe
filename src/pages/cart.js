import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCartThunk, getSellersThunk } from "../redux/features/actions/cart";
import { getCart } from "../redux/features/slices/cart";
import Spinner from "../components/products/viewProducts/spinner";
import CartView from "../components/cart/CartView";
import ErrorHandler from "../components/shared/ErrorHandler";

/* istanbul ignore next */
const Cart = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartThunk()).then(() => dispatch(getSellersThunk()));
  }, [dispatch]);
  const { loading, error, cart, numberOfItems, total, sellers } =
    useSelector(getCart);

  return (
    <>
      {loading && <Spinner />}
      <ErrorHandler
        error={error}
        loading={loading}
        message={"You need a buyer's account to perform any cart operations"}
        to={"home"}
      />
      {!loading && !error.status && (
        <CartView
          numberOfItems={numberOfItems}
          cart={cart}
          total={total}
          sellers={sellers}
        />
      )}
    </>
  );
};

export default Cart;

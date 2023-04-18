import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartCard from "../components/cart/CartCard";
import {
  clearCartThunk,
  getCartThunk,
  getSellersThunk,
} from "../redux/features/actions/cart";
import { getCart } from "../redux/features/slices/cart";
import CartIcon from "../components/cart/CartIcon";
import Spinner from "../components/viewProducts/spinner";
import emptySet from "../assets/images/empty.png";
import { useNavigate } from "react-router-dom";
import Error from "../components/shared/Error";
import CartView from "../components/cart/CartView";

/* istanbul ignore next */
const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getCartThunk()).then(() => dispatch(getSellersThunk()));
  }, [dispatch]);
  const { loading, error, cart, numberOfItems, total, sellers } =
    useSelector(getCart);
  return (
    <>
      {loading && <Spinner />}

      {error.status && error.payload === 401 && (
        <Error
          code={401}
          title={"Not authorized"}
          description={
            "You need a buyer's account to perform any cart operations"
          }
          to={"home"}
        />
      )}
      {error.status && error.payload === "Network Error" && (
        <Error
          code="Error"
          title="Internet connection error"
          description="There is a problem with your internet connection, check it and reload again"
          to="reload"
        />
      )}
      {error.status &&
        error.payload !== 401 &&
        error.payload !== "Network Error" && <Error />}
      {!error.status && (
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

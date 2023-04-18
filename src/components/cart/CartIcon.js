import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartThunk } from "../../redux/features/actions/cart";
import { getCart } from "../../redux/features/slices/cart";
import { useNavigate } from "react-router-dom";
import cart from "../../assets/images/cart.png";
import Spinner from "../viewProducts/spinner";

const CartIcon = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, numberOfItems } = useSelector(getCart);
  // useEffect(() => {
  //   dispatch(getCartThunk());
  // }, []);

  const [cartNumber, setCartNumber] = useState(numberOfItems);
  if (numberOfItems !== cartNumber) {
    setCartNumber(numberOfItems);
  }

  return (
    <div onClick={() => navigate("/products/cart")} className="relative m-5">
      {loading ? (
        <div className="absolute bottom-8 ml-5">
          <Spinner withoutText={true} />
        </div>
      ) : (
        <div className="w-5 text-center absolute bottom-8 ml-5 rounded-full bg-primary text-white font-semibold">
          <span className="hover:scale-105" data-testid="cartNo">
            {cartNumber}
          </span>
        </div>
      )}
      <img
        src={cart}
        alt="cart-image"
        className="hover:cursor-pointer hover:scale-105"
      />
    </div>
  );
};

export default CartIcon;

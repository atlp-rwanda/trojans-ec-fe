import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductsThunk } from "../redux/features/actions/products";
import { getProduct } from "../redux/features/slices/products";
import MainProductView from "../components/viewProducts/MainProductView";
import { getCategoriesThunk } from "../redux/features/actions/products";
import Spinner from "../components/viewProducts/spinner";
import { useNavigate } from "react-router-dom";
import CartIcon from "../components/cart/CartIcon";
import { getCartThunk } from "../redux/features/actions/cart";
import { getCart } from "../redux/features/slices/cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Error from "../components/shared/Error";
import Navbar from "../components/Navbar";

const Homepage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (window.location.href.includes("token")) {
      const token = window.location.href.split("token=")[1];
      localStorage.setItem("token", token);
    }
  }, []);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(getCategoriesThunk())
        .then(() => {
          dispatch(getProductsThunk());
        })
        .then(() => dispatch(getCartThunk()));
    } else {
      navigate("/login");
    }
  }, [dispatch]);
  const { products, loading, error, categories } = useSelector(getProduct);
  if(loading){
    return <Spinner/>
  }
  return (
    <div data-testid="home">
      {error.status && error.payload === 401 && (
        <Error
          code="401"
          title="Unauthorized"
          description="You need to sign in"
          to="login"
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
        error.payload !== "Network error" && <Error />}
      {!error.status && (
        <>
          <ToastContainer />
          <Navbar />
          <MainProductView products={products} categories={categories} />
        </>
      )}
    </div>
  );
};

export default Homepage;

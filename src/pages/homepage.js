/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React, { useEffect } from "react";
import ErrorHandler from "../components/shared/ErrorHandler";
import { useDispatch, useSelector } from "react-redux";
import { getProductsThunk } from "../redux/features/actions/products";
import { getProduct } from "../redux/features/slices/products";
import MainProductView from "../components/viewProducts/MainProductView";
import { getCategoriesThunk } from "../redux/features/actions/products";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";
import ChatModel from "../components/chatModel";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getCartThunk } from "../redux/features/actions/cart";

const Homepage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (window.location.href.includes("token")) {
      const token = window.location.href.split("token=")[1];
      localStorage.setItem("token", token);
      window.location.href = window.location.href.split("?token=")[0];
    }
  }, []);
  const { products, loading, error, categories } = useSelector(getProduct);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      if (products.length === 0) {
        dispatch(getCategoriesThunk()).then(() => dispatch(getProductsThunk()));
        dispatch(getCartThunk());
      }
    } else {
      navigate("/login");
    }
  }, [dispatch]);

  return (
    <div data-testid="home">
      <ErrorHandler loading={loading} error={error} />
      {!error.status && (
        <>
          <ToastContainer />
          <Navbar />
          <MainProductView
            products={products}
            categories={categories}
            loading={loading}
          />
        </>
      )}
      <div id="modal">
        <ChatModel />
      </div>
    </div>
  );
};

export default Homepage;

/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import chatIcon from "../assets/images/chat.svg";
import ErrorHandler from "../components/shared/ErrorHandler";
import { useDispatch, useSelector } from "react-redux";
import { getProductsThunk } from "../redux/features/actions/products";
import { getProduct } from "../redux/features/slices/products";
import MainProductView from "../components/viewProducts/MainProductView";
import { getCategoriesThunk } from "../redux/features/actions/products";
import Spinner from "../components/viewProducts/spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
const Homepage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    if (window.location.href.includes('token')) {
      const token = window.location.href.split('token=')[1]
      localStorage.setItem('token', token)
    }
  }, [])
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(getCategoriesThunk()).then(() => {
        dispatch(getProductsThunk());
      });
    } else {
      navigate('/login')
    }
  }, [dispatch])
  const { products, loading, error, categories } = useSelector(getProduct)

  return (
    <div data-testid="home">
      {loading && <Spinner />}
      <ErrorHandler loading={loading} error={error} />
      {!loading && !error.status && (
        <>
          <ToastContainer />
          <Navbar />
          <MainProductView products={products} categories={categories} />
        </>
      )}
    </div>
  )
}

export default Homepage;


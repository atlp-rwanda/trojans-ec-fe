/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React, { useEffect } from "react";
import ErrorHandler from "../components/shared/ErrorHandler";
import { useDispatch, useSelector } from "react-redux";
import { getProductsThunk } from "../redux/features/actions/products";
import { getProduct } from "../redux/features/slices/products";
import MainProductView from "../components/viewProducts/MainProductView";
import { getCategoriesThunk } from "../redux/features/actions/products";
import Spinner from "../components/viewProducts/spinner";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";
import ChatModel from "../components/chatModel";
import { Link } from "react-router-dom";

const Homepage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    if (window.location.href.includes("token")) {
      const token = window.location.href.split("token=")[1];
      localStorage.setItem("token", token);
      window.location.href = window.location.href.split("?token=")[0]
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
          <p>This is Homepage Page</p>
          <div>
            <div className="pt-4 mx-10">
             <Link to="/login" data-testid="navigate-to-login" className="button border py-2 px-4 rounded-xl text-white ">
              Login
             </Link >
              <Link to="/register">
                <span className="rounded-xl py-2 px-4 signup mx-2 border-2 drop-shadow-xl">
                  Sign Up
                </span>
              </Link>
              <Link to="/dashboard/seller/products">
                <button className="m-2 p-1">Go to seller dashboard</button>
              </Link>
              <Link to="/dashboard/seller/product/create">Add Product</Link>
              <Link to="/user/profile">
              <button className="m-2 p-1">Profile Update</button>
              </Link>
              <Link to="/dashboard/users">
              <button className="m-2 p-1">Users</button>
              </Link>
            </div>
          </div>
          <MainProductView products={products} categories={categories} />
        </>
      )}
         <div id="modal">
    <ChatModel/>
    </div>
    </div>
  )
}

export default Homepage;


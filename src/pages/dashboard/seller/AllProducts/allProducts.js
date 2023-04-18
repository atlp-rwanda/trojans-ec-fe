import React, { useEffect } from "react";
import ProductsTable from "../../../../components/viewProducts/ProductsTable.js";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategoriesThunk,
  getProductsThunk,
} from "../../../../redux/features/actions/products.js";
import { getProduct } from "../../../../redux/features/slices/products.js";
import Spinner from "../../../../components/viewProducts/spinner.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import parseJwt from "../../../../helpers/parseJwt.js";
import Error from "../../../../components/shared/Error.js";

const AllProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { loading, error, products, categories } = useSelector(getProduct);
  useEffect(() => {
    if (token) {
      const { data } = parseJwt(token);
      if (data.role !== "seller") {
        navigate("/");
      }
    }
  }, [token]);
  useEffect(() => {
    if (token) {
      dispatch(getCategoriesThunk()).then(() => {
        dispatch(getProductsThunk(token));
      });
    } else {
      navigate("/login");
    }
  }, [token]);
  return (
    <div className="all-products">
      <ToastContainer />
      {loading && <Spinner />}
      {error.status && error.payload === 401 && (
        <Error
          code={401}
          title={"Not authorized"}
          description={
            "You need a buyer's account to perform any cart operations"
          }
          to={"login"}
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
        <ProductsTable products={products} categories={categories} />
      )}
    </div>
  );
};

export default AllProducts;

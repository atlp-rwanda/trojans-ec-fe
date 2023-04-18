import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneProductThunk } from "../../../../redux/features/actions/products.js";
import SingleProductView from "../../../../components/viewProducts/SingleProductView.js";
import {
  getProduct,
  removeSelectedProduct,
} from "../../../../redux/features/slices/products.js";
import Spinner from "../../../../components/viewProducts/spinner.js";
import ErrorHandler from "../../../../components/shared/ErrorHandler.js";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { productID } = useParams();

  useEffect(() => {
    dispatch(getOneProductThunk(productID));
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [dispatch, productID]);
  const { selectedProduct, loading, error, categories } =
    useSelector(getProduct);
  return (
    <div className="product-details">
      {loading && <Spinner />}
      <ErrorHandler loading={loading} error={error} />
      {!loading && !error.status && (
        <SingleProductView product={selectedProduct} categories={categories} />
      )}
    </div>
  );
};

export default ProductDetail;

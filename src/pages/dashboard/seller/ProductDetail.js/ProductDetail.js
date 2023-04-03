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

  if (error) {
    return <div>Error Fetching</div>;
  }
  return (
    <div className="product-details">
      {loading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <SingleProductView product={selectedProduct} categories={categories} />
      )}
    </div>
  );
};

export default ProductDetail;
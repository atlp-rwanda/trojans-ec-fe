import React from "react";
import ProductCard from "./ProductCard.js";
import BackArrow from "./BackArrow.js";
import LoadingCard from "../../skeleton/LoadingCard.js";

const SingleProductView = ({ product, categories, loading }) => {
  return (
    <div className="box-border w-[100%] min-h-[80vh] bg-white px-8 py-8 rounded-2xl relative lg:w-full">
      <BackArrow to="/dashboard/seller/products" />
      {loading ? (
        <LoadingCard />
      ) : (
        <ProductCard product={product} categories={categories} />
      )}
    </div>
  );
};

export default SingleProductView;

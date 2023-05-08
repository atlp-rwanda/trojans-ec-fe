/* eslint-disable react/prop-types */
import React from "react";
import MainProductCard from "./MainProductCard";
import { LoadingMainCards } from "../../skeleton/loadingMainCards";

const MainProductView = ({ products, categories, loading }) => {
  return (
    <>
      <h1 className="text-primary text-2xl font-bold ml-[7%]">For Sale</h1>
      {loading ? (
        <LoadingMainCards count={10} />
      ) : (
        <div className="mx-10 grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
          {products.map((product) => (
            <div
              key={product.id}
              className="p-container shadow-sm m-5 py-5 px-3 flex justify-center border-2 rounded-3xl relative"
            >
              <MainProductCard product={product} categories={categories} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};
export default MainProductView;

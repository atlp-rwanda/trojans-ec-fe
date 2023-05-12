/* eslint-disable react/prop-types */
import React from "react";
import MainProductCard from "./MainProductCard";
import { LoadingMainCards } from "../../skeleton/loadingMainCards";

const MainProductView = ({ products, categories, loading, response }) => {
  return (
    <>
      <h1 className="text-primary text-2xl font-bold ml-[7%]">For Sale</h1>
      {loading || !response ? (
        <LoadingMainCards count={8} />
      ) : (
        <div className="mx-10 grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {products.map((product) => (
            <MainProductCard
              key={product.id}
              product={product}
              categories={categories}
            />
          ))}
        </div>
      )}
    </>
  );
};
export default MainProductView;

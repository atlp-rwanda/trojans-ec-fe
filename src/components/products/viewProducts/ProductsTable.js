import React, { useState } from "react";
import Table from "./Table.js";
import emptySet from "../../../assets/images/empty.png";
import { LoadingTable } from "../../skeleton/LoadingTable.js";
import Header from "../../shared/Header.js";
import AddProduct from "../addProduct/addProduct.js";
const ProductsTable = ({ products, categories, loading, response }) => {
  const [addProduct, setAddProduct] = useState(false);
  return (
    <div className="products-table box-border w-[100%] min-h-[80vh] bg-white px-8 py-4 rounded-2xl relative lg:w-full">
      <div className="w-full flex justify-between items-center">
        {products.length > 0 && (
          <Header
            textContent="All Products"
            headerClassName="header mt-2 mb-4 ml-8"
            className="p-title mt-4 font-semibold text-3xl text-primary"
          />
        )}
        <button
          onClick={() => setAddProduct(true)}
          className="bg-primary px-3 py-1 text-white flex justify-center items-center rounded-md mr-3"
        >
          <ion-icon name="add-outline"></ion-icon>
          <span>Add Product</span>
        </button>
      </div>
      {loading && <LoadingTable />}
      {products.length > 0 && !loading && response && (
        <Table
          products={products}
          categories={categories}
          addProduct={addProduct}
          setAddProduct={setAddProduct}
        />
      )}
      {products.length === 0 && !loading && response && (
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="flex justify-end w-full">
            <button
              onClick={() => setAddProduct(true)}
              className="bg-primary px-3 py-1 text-white flex justify-center items-center rounded-md mr-2 "
            >
              <ion-icon name="add-outline"></ion-icon>
              <span>Add Product</span>
            </button>
          </div>

          <img
            src={emptySet}
            alt="empty-set-icon"
            className="w-52 h-52 opacity-70"
          />
          <h1 className="font-bold text-5xl text-primary mb-4">
            No products yet
          </h1>
          <p className="font-bold text-xl opacity-60">
            You need to add products first
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductsTable;

import React, { useState } from "react";
import Pagination from "./Pagination.js";
import TableRow from "./TableRow.js";
import Header from "../../shared/Header.js";
import { getProduct } from "../../../redux/features/slices/products.js";
import UpdateProductForm from "../updateProduct/UpdateProduct.js";
import { useSelector } from "react-redux";
import AddProduct from "../addProduct/addProduct.js";

const Table = ({ products, categories }) => {
  const [addProduct, setAddProduct]= useState(false)
  const { productToUpdate } = useSelector(getProduct);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);
  const numberOfPages = Math.ceil(products.length / itemsPerPage);
  const paginate = (number) => setCurrentPage(number);
  const paginateNext = () => {
    if (currentPage < numberOfPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const paginatePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div className="relative">
      <div className="w-full flex justify-between items-center">
        <Header
          textContent="All Products"
          headerClassName="header mt-2 mb-4 ml-8"
          className="p-title mt-4 font-semibold text-3xl text-primary"
        />
        <button
          onClick={() => setAddProduct(true)}
          className="bg-primary px-3 py-1 text-white flex justify-center items-center rounded-md mr-3"
        >
          <ion-icon name="add-outline"></ion-icon>
          <span>Add Product</span>
        </button>
      </div>
      <table className="w-full table overflow-x-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-3 text-base tracking-wide text-center">Product</th>
            <th className="hidden sm:table-cell p-3 text-base tracking-wide text-center">
              Available
            </th>
            <th className="hidden sm:table-cell p-3 text-base tracking-wide text-center">
              Price
            </th>
            <th className="hidden sm:table-cell p-3 text-base tracking-wide text-center">
              Expiry Date
            </th>
            <th className="hidden sm:table-cell p-3 text-base tracking-wide text-center">
              Expired
            </th>
            <th className=" p-3 text-base tracking-wide text-center">
              Category
            </th>
            <th className="p-3 text-base tracking-wide text-center"> Action</th>
          </tr>
        </thead>
        <tbody>
          <TableRow products={currentProducts} categories={categories} />
        </tbody>
      </table>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={products.length}
        paginate={paginate}
        paginateNext={paginateNext}
        paginatePrev={paginatePrev}
        currentPage={currentPage}
      />
      {productToUpdate && <UpdateProductForm />}
      {addProduct && <AddProduct handleCancel={()=> setAddProduct(false)} />}
    </div>
  );
};

export default Table;

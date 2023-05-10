/* eslint-disable react/prop-types */
import React from "react";
import Categorize from "./Categorize.js";
import { formatDate, formatString } from "../../../helpers/Format.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  getProduct,
  setProductIdToDel,
  setProductNameToDel,
  setProductToUpdate,
  setPages,
} from "../../../redux/features/slices/products.js";
import { getCategoriesThunk } from "../../../redux/features/actions/products";
import Loader from "../../shared/TwoFactorLoader.js";
import UpdateDeletePopup from "../updateProduct/UpdateDeletePopup";

const TableRow = ({ products, categories }) => {
  const { deleting, productNameToDel, productIdToDel } =
    useSelector(getProduct);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onDeleteClick = (event, productId, productName) => {
    event.stopPropagation();
    dispatch(setProductNameToDel({ productNameToDel: productName }));
    dispatch(setProductIdToDel({ productIdToDel: productId }));
    dispatch(setProductToUpdate({ productToUpdate: null }));
    return;
  };
  const handleEdit = (event, product) => {
    event.stopPropagation();
    dispatch(setProductToUpdate({ productToUpdate: { ...product } }));
    dispatch(getCategoriesThunk());
    dispatch(setPages({ firstPage: true, secondPage: false }));
    dispatch(setProductIdToDel({ productNameToDel: null }));
    dispatch(setProductIdToDel({ productIdToDel: null }));
    return;
  };
  return (
    <>
      {products.map((product) => (
        <tr
          key={product.id}
          onClick={() => navigate(`/dashboard/seller/products/${product.id}`)}
          className={`transition-all ease-in duration-75 hover:cursor-pointer hover:bg-gray-200 ${
            products.indexOf(product) % 2 != 0 ? `bg-gray-100` : `bg-white`
          }`}
        >
          <td className="p-3 text-sm tracking-wide text-center flex ml-3">
            <img
              src={product.images[0]}
              alt=""
              className="w-6 rounded-lg mr-3 h-6"
            />{" "}
            <span>{product.name}</span>
          </td>
          <td className="hidden sm:table-cell p-3 text-sm tracking-wide text-center">
            {formatString(product.available.toString())}
          </td>
          <td className="hidden sm:table-cell p-3 text-sm tracking-wide text-center">
            ${product.price}
          </td>
          <td className="hidden sm:table-cell p-3 text-sm tracking-wide text-center">
            {formatDate(product.expiryDate)}
          </td>
          <td className="hidden sm:table-cell p-3 text-sm tracking-wide text-center">
            {formatString(product.expired.toString())}
          </td>
          <td className="p-3 text-sm tracking-wide text-center">
            <Categorize id={product.categoryId} categories={categories} />
          </td>
          <td className="p-3 text-sm tracking-wide text-center flex justify-evenly">
            <i
              data-testid={`edit-${product.id}`}
              onClick={(e) => handleEdit(e, product)}
              className="fa fa-edit fa-lg text-[#1976D2] hover:scale-125 pr-2"
            ></i>
            {deleting && productIdToDel === product.id ? (
              <Loader className="loader-delete opacity-75" />
            ) : (
              <>
                <i
                  data-testid={`delete-${product.id}`}
                  onClick={(e) => onDeleteClick(e, product.id, product.name)}
                  className="fa fa-trash fa-lg text-[#D23D4F] hover:scale-125"
                ></i>
                {productNameToDel && productIdToDel === product.id && (
                  <UpdateDeletePopup />
                )}
              </>
            )}
          </td>
        </tr>
      ))}
    </>
  );
};

export default TableRow;

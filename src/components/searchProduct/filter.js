import React from "react";
import { OnChangeSelectOption } from "../addProduct/selectOption";
import adjust from "../../images/icons8-adjust-96.png";
import { priceOption } from "./price.option";
import { OnChangeInputField } from "../inputField";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCategories } from "../../redux/features/product-redux/categoriesAction";
import { searchThunk } from "../../redux/features/actions/product";
import { updateSearchForm } from "../../redux/features/slices/product";
import { getSellersThunk } from "../../redux/features/actions/seller";

function Filter() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.cat);
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getSellersThunk());
  }, [dispatch]);

  const { search, Sellers } = useSelector((state) => state);
  const { searchForm } = search;
  const handlePriceChange = (event) => {
    const { name, value } = event.target;
    dispatch(updateSearchForm({ [name]: value }));
  };
  const handleCategoryChange = (event) => {
    const { name, value } = event.target;
    dispatch(updateSearchForm({ [name]: value }));
  };
  const handleDateChange = (event) => {
    const { name, value } = event.target;
    dispatch(updateSearchForm({ [name]: value }));
  };
  const handleSeller = (event) => {
    const { name, value } = event.target;
    dispatch(updateSearchForm({ [name]: value }));
  };
  useEffect(() => {
    dispatch(searchThunk(searchForm));
  }, [searchForm]);
  return (
    <div className=" w-full flex  items-center my-4 screen-base:inline-block">
      <div className="flex items-center">
        <img src={adjust} className="w-8 h-8" />
        <p className="text-lg font-bold mx-4">More Filters</p>
      </div>
      <div className="flex items-center justify-around screen-base:w-full screen-base:inline-block">
        <OnChangeSelectOption
          name="price"
          default="Price"
          options={priceOption}
          className="filter-inputs"
          onChange={handlePriceChange}
          data-testid="price"
          value={searchForm.price}
        />
        <OnChangeSelectOption
          name="categoryId"
          options={categories}
          onChange={handleCategoryChange}
          className="filter-inputs"
          default="All Categories"
          data-testid="category-search"
        />
        <OnChangeSelectOption
          name="seller"
          options={Sellers.response}
          className="filter-inputs"
          default="seller"
          onChange={handleSeller}
          data-testid="sellerId"
        />
        <OnChangeInputField
          type="date"
          name="expiryDate"
          className="filter-inputs"
          onChange={handleDateChange}
          data-testid="expiryDate"
        />
      </div>
    </div>
  );
}

export default Filter;

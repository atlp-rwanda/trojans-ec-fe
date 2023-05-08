import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateSearchForm } from "../../../redux/features/slices/product";
import { useNavigate } from "react-router-dom";
import { getCategories } from "../../../redux/features/product-redux/categoriesAction";
import { InputField } from "../../shared/InputField";

function SearchInput() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  const { register, handleSubmit } = useForm();
  const submitSearch = (data) => {
    dispatch(updateSearchForm(data));
    navigate("/view-search");
  };

  return (
    <form
      onSubmit={handleSubmit(submitSearch)}
      className="border border-primary-color rounded-xl flex  items-center overflow-hidden screen-base:hidden"
    >
      <InputField
        type="text"
        placeholder="search Here"
        name="name"
        register={register("name")}
        className="bg-transparent px-4 py-2 outline-none col-span-2  w-96 screen-base:w-48"
        data_testid="search-input"
      />
      <button
        className="bg-primary-color text-white py-2 px-3 rounded-lg h-full screen-base:py-3"
        data-testid="button-search"
      >
        search
      </button>
    </form>
  );
}

export default SearchInput;

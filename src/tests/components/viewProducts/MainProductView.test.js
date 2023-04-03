import React from "react";
import { render } from "../../jest.setup";
import "@testing-library/jest-dom";
import { products } from "../../mocks/product.mock";
import { categories } from "../../mocks/categories.mock";
import MainProductView from "../../../components/viewProducts/MainProductView";

const regExp = (str) => new RegExp(str, "i");
describe("Product main view component", () => {
  it("Should render all elements", async () => {
    const { getByText } = render(
      <MainProductView products={products} categories={categories} />
    );
    expect(getByText(/add to cart/i)).toBeInTheDocument();
    expect(getByText(regExp(products[0].name))).toBeInTheDocument();
    expect(getByText(regExp(products[0].price))).toBeInTheDocument();
  });
});

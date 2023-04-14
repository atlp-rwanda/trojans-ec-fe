import React from "react";
import { render } from "../../jest.setup";
import "@testing-library/jest-dom";
import { products } from "../../mocks/product.mock";
import { categories } from "../../mocks/categories.mock";
import SingleMainView from "../../../components/viewProducts/SingleMainView";

const regExp = (str) => new RegExp(str, "i");
describe("Product main single view component", () => {
  it("Should render all elements", async () => {
    const { getByText } = render(
      <SingleMainView selectedProduct={products[0]} categories={categories} />
    );
    expect(getByText(/add to cart/i)).toBeInTheDocument();
    expect(getByText(regExp(products[0].name))).toBeInTheDocument();
    expect(getByText(regExp(products[0].price))).toBeInTheDocument();
  });
});

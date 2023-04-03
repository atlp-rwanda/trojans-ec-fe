import React from "react";
import { render } from "../../jest.setup";
import "@testing-library/jest-dom";
import MainProductCard from "../../../components/viewProducts/MainProductCard";
import { products } from "../../mocks/product.mock";
import { categories } from "../../mocks/categories.mock";

const regExp = (str) => new RegExp(str, "i");

describe("Product main card component", () => {
  it("Should render all text", async () => {
    const { getByText } = render(
      <MainProductCard product={products[0]} categories={categories} />
    );
    expect(getByText(/add to cart/i)).toBeInTheDocument();
    expect(getByText(regExp(products[0].name))).toBeInTheDocument();
    expect(getByText(regExp(products[0].price))).toBeInTheDocument();
  });
});

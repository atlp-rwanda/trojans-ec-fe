import Categorize from "../../../components/products/viewProducts/Categorize";
import React from "react";
import { render } from "../../jest.setup";
import "@testing-library/jest-dom";
import { categories } from "../../mocks/categories.mock";
import { products } from "../../mocks/product.mock";

describe("Categorize component", () => {
  it("Should render all text", async () => {
    const { getByText } = render(
      <Categorize id={products[0].categoryId} categories={categories} />
    );
    expect(getByText(/Shoes/i)).toBeInTheDocument();
  });
});

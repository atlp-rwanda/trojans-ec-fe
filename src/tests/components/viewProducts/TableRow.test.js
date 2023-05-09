import TableRow from "../../../components/products/viewProducts/TableRow";
import React from "react";
import { render } from "../../jest.setup";
import "@testing-library/jest-dom";
import { products, productState } from "../../mocks/product.mock";
import { categories } from "../../mocks/categories.mock";
describe("Testing table row", () => {
  test("Should render rows", () => {
    const { getByText } = render(
      <TableRow categories={categories} products={products} />,
      {
        preloadedState: {
          product: productState,
        },
      }
    );
    expect(getByText(products[0].name)).toBeInTheDocument();
    expect(getByText(`$${products[0].price}`)).toBeInTheDocument();
    expect(getByText("Shoes")).toBeInTheDocument();
    expect(getByText("1/1/2027")).toBeInTheDocument();
  });
});

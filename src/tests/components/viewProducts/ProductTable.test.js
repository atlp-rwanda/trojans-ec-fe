import React from "react";
import { render } from "../../jest.setup";
import "@testing-library/jest-dom";
import { products } from "../../mocks/product.mock";
import { categories } from "../../mocks/categories.mock";
import ProductsTable from "../../../components/viewProducts/ProductsTable";

const regExp = (str) => new RegExp(str, "i");
describe("Product table component", () => {
  it("Should render all text", async () => {
    const { getByText } = render(
      <ProductsTable
        products={products}
        categories={categories}
        loading={false}
        response={true}
      />
    );
    expect(getByText(regExp(products[0].name))).toBeInTheDocument();
    expect(getByText(regExp(products[0].price))).toBeInTheDocument();
  });
});

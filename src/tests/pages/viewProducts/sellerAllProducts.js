import AllProducts from "../../../pages/dashboard/seller/AllProducts/allProducts";
import React from "react";
import "@testing-library/jest-dom";
import { render } from "../../jest.setup";
import { productState } from "../../mocks/product.mock";

describe("Testing all products view from seller dashboard", () => {
  it("Shows No products", () => {
    const { getByText } = render(<AllProducts />);
    expect(getByText(/No products yet/i)).toBeInTheDocument();
  });
  it("Should render a product", () => {
    const { getByText } = render(<AllProducts />, {
      preloadedState: {
        product: productState,
      },
    });
    expect(getByText(/All/i)).toBeInTheDocument();
  });
});

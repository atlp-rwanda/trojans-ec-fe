import NewProductCard from "../../components/shared/NewProductCard";
import React from "react";
import { render, screen, fireEvent } from "../jest.setup";
import "@testing-library/jest-dom";
import { sellers } from "../mocks/seller.mock";
import { products } from "../mocks/product.mock";

describe("Testing the new product card component", () => {
  test("Should render the card", () => {
    render(<NewProductCard product={products[0]} sellers={sellers} />);
    expect(screen.getByText(products[0].name)).toBeInTheDocument();
  });
});

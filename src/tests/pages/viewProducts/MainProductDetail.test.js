import MainProductDetail from "../../../pages/MainProductDetail";
import React from "react";
import { render } from "../../jest.setup";
import "@testing-library/jest-dom";

describe("Main product detail view page", () => {
  it("Should render all text", () => {
    const { getByText } = render(<MainProductDetail />);
    expect(getByText(/Loading.../i)).toBeInTheDocument();
  });
});

import BuyerMain from "../../../pages/dashboard/buyer/BuyerMain";
import React from "react";
import { render, screen } from "../../jest.setup";
import "@testing-library/jest-dom";

describe("Testing admin main component", () => {
  it("should render admin", () => {
    render(<BuyerMain element={<span>Test</span>} />);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});

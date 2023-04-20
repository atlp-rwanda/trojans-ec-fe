import NotFound from "../pages/notFound";
import React from "react";
import { render, screen } from "./jest.setup";
import "@testing-library/jest-dom";

describe("Not Found", () => {
  it("Should render not found", () => {
    render(<NotFound />);
    const notFoundElement = screen.getByText(/404/i);
    expect(notFoundElement).toBeInTheDocument();
  });
});

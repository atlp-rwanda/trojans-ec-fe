import AdminMain from "../../../pages/dashboard/admin/AdminMain";
import React from "react";
import { render, screen } from "../../jest.setup";
import "@testing-library/jest-dom";

describe("Testing admin main component", () => {
  it("should render admin", () => {
    render(<AdminMain element={<span>Test</span>} />);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});

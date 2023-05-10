import BuyerMain from "../../../pages/dashboard/buyer/BuyerMain";
import React from "react";
import { render, screen } from "../../jest.setup";
import "@testing-library/jest-dom";
import jwtDecode from "jwt-decode";

jest.mock("jwt-decode");
describe("Testing admin main component", () => {
  it("should render admin", () => {
    const mockDecode = jest
      .fn()
      .mockReturnValue({ data: { data: { role: "seller" } } });
    jwtDecode.mockImplementation(mockDecode);
    render(<BuyerMain element={<span>Test</span>} />);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});

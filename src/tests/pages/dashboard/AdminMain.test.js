import AdminMain from "../../../pages/dashboard/admin/AdminMain";
import React from "react";
import "setimmediate";
import { render, screen } from "../../jest.setup";
import "@testing-library/jest-dom";
import jwtDecode from "jwt-decode";

jest.mock("jwt-decode");
describe("Testing admin main component", () => {
  it("should render admin", () => {
    const mockDecode = jest
      .fn()
      .mockReturnValue({ data: { data: { role: "admin" } } });
    jwtDecode.mockImplementation(mockDecode);
    render(<AdminMain element={<span>Test</span>} />);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});

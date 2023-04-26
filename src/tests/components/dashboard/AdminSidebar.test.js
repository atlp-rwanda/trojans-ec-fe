import AdminSidebar from "../../../components/dashboard/AdminSidebar";
import React from "react";
import { render, screen, fireEvent } from "../../jest.setup";
import "@testing-library/jest-dom";

describe("Testing admin sidebar component", () => {
  it("Should render the sidebar", () => {
    render(<AdminSidebar />);
    expect(screen.getByText(/Admin/i)).toBeInTheDocument();
    expect(screen.getByText(/Protect/i)).toBeInTheDocument();
    expect(screen.getByText(/Your Site/i)).toBeInTheDocument();
  });
});

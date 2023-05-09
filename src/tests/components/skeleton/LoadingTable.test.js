import { LoadingTable } from "../../../components/skeleton/LoadingTable";
import React from "react";
import { render, screen } from "../../jest.setup";
import "@testing-library/jest-dom";

describe("Loading table skeleton", () => {
  it("Should render the skeleton", () => {
    render(<LoadingTable />);
    const tableSkel = screen.getByTestId("skel-table");
    expect(tableSkel).toBeInTheDocument();
  });
});

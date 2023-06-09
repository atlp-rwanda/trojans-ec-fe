import Navbar from "../../components/Navbar";
import React from "react";
import "setimmediate";
import { render, fireEvent, screen } from "../jest.setup";
import "@testing-library/jest-dom";

describe("Testing navbar", () => {
  it("Should render the navbar", () => {
    render(<Navbar />);
    expect(screen.getAllByText(/Trojans Store/i).length).toBe(1);
  });
});

import Navbar from "../../components/Navbar";
import React from "react";
import { render, fireEvent, screen } from "../jest.setup";
import "@testing-library/jest-dom";

describe("Testing navbar", () => {
  it("Should render the navbar", () => {
    render(<Navbar />);
    expect(screen.getAllByText(/Trojans Store/i).length).toBe(1);
    expect(screen.getAllByText(/Hello,/i).length).toBe(2);
  });
});

import Homepage from "../../pages/homepage";
import React from "react";
import 'setimmediate';
import { getByTestId, render,screen } from "../jest.setup";
import "@testing-library/jest-dom";


describe("Testing the home page", () => {
  it("should render all text", () => {
    render(<Homepage />);
    expect(screen.getByTestId('home')).toBeInTheDocument();
  });
});

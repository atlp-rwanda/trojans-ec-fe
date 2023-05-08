import React from "react";
import 'setimmediate';
import { render,screen } from "../jest.setup";
import "@testing-library/jest-dom";
import Homepage from "../../pages/homepage";

describe("Testing the home page", () => {
  it("should render all text", () => {
    render(<Homepage />);
    expect(screen.getByTestId('home')).toBeInTheDocument();
  });
});

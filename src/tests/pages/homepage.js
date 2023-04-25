import Homepage from "../../pages/homepage";
import React from "react";
import { render } from "../jest.setup";
import "@testing-library/jest-dom";

describe("Testing the home page", () => {
  
it("should render all text", () => {
    const { getByText } = render(<Homepage />);
    expect(getByText(/This/i)).toBeInTheDocument();
  });
});

import Success from "../../components/Success";
import React from "react";
import { render } from "../jest.setup";
import "@testing-library/jest-dom";

describe("Testing error component", () => {
  it("Without props", () => {
    const { getByText } = render(<Success />);
    expect(getByText("Thank You!")).toBeInTheDocument();
  });
});
import React from "react";
import { render } from "../../jest.setup";
import "@testing-library/jest-dom";
import Spinner from "../../../components/products/viewProducts/spinner";

describe("Spinner component", () => {
  it("Should render the loading text text", async () => {
    const { getByText } = render(<Spinner />);
    expect(getByText("Loading...")).toBeInTheDocument();
  });
});

import Error from "../../components/shared/Error";
import React from "react";
import { render } from "../jest.setup";
import "@testing-library/jest-dom";

describe("Testing error component", () => {
  it("Without props", () => {
    const { getByText } = render(<Error />);
    expect(getByText("Error")).toBeInTheDocument();
  });
  it("With props", () => {
    const { getByText } = render(
      <Error
        code="Error"
        title="Internet connection error"
        description="There is a problem with your internet connection, check it and reload again"
        to="reload"
      />
    );
    expect(getByText("Internet connection error")).toBeInTheDocument();
  });
});

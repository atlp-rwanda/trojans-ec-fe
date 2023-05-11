import React from "react";
import { render, screen } from "../jest.setup";
import "@testing-library/jest-dom";
import PaymentComfirmation from "../../pages/PaymentComfirmation";

describe("Testing payment confirmation page", () => {
  it("Should render error payment component", () => {
   render(
      <PaymentComfirmation/>
    );
    expect(screen.getByText(/unauthorized/i)).toBeInTheDocument();
  });
});

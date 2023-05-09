import LoadingCard from "../../../components/skeleton/LoadingCard";
import React from "react";
import { render, screen } from "../../jest.setup";
import "@testing-library/jest-dom";

describe("Loading card skeleton", () => {
  it("Should render the skeleton", () => {
    render(<LoadingCard />);
    const cardSkel = screen.getByTestId("skel-card");
    expect(cardSkel).toBeInTheDocument();
  });
});

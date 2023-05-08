import LoadingNewCard from "../../../components/skeleton/LoadingNewCard";
import { render, screen } from "../../jest.setup";
import "@testing-library/jest-dom";
import React from "react";

describe("Loading new card skeleton", () => {
  it("Should render the skeleton", () => {
    render(<LoadingNewCard count={1} />);
    const cardSkel = screen.getByTestId("skel-newCard");
    expect(cardSkel).toBeInTheDocument();
  });
});

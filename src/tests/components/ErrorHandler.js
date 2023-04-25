import ErrorHandler from "../../components/shared/ErrorHandler";
import React from "react";
import { render, fireEvent, screen } from "../jest.setup";
import "@testing-library/jest-dom";

describe("Testing error handling component", () => {
  it("testing 401", () => {
    const error = { payload: 401, status: true };
    const { getByText } = render(
      <ErrorHandler error={error} loading={false} />
    );
    expect(getByText("401")).toBeInTheDocument();
  });
  it("testing Connection error", () => {
    const error = { payload: "Network Error", status: true };
    const { getByText } = render(
      <ErrorHandler error={error} loading={false} />
    );
    expect(getByText("Connection error")).toBeInTheDocument();
  });
  it("testing something else went wrong", () => {
    const error = { payload: 400, status: true };
    const { getByText } = render(
      <ErrorHandler error={error} loading={false} />
    );
    expect(getByText("Something went wrong")).toBeInTheDocument();
  });
  it("testing with to and message props", () => {
    const error = { payload: 401, status: true };
    const { getByText } = render(
      <ErrorHandler
        error={error}
        loading={false}
        to={"home"}
        message={"You need a buyer's account"}
      />
    );
    expect(getByText("You need a buyer's account")).toBeInTheDocument();
  });
});

import AllUsers from "../../../pages/dashboard/admin/users/allUsers";
import React from "react";
import "setimmediate";
import { render, screen } from "../../jest.setup";
import "@testing-library/jest-dom";
import { getUsersState } from "../../mocks/users.mock";
import jwtDecode from "jwt-decode";
jest.mock("jwt-decode");
describe("Testing admin main component", () => {
  it("should render admin", () => {
    const mockDecode = jest
      .fn()
      .mockReturnValue({ data: { data: { role: "admin" } } });
    jwtDecode.mockImplementation(mockDecode);
    render(<AllUsers />, {
      preloadedState: {
        users: getUsersState,
      },
    });
    expect(screen.getByText("Admin")).toBeInTheDocument();
  });
});

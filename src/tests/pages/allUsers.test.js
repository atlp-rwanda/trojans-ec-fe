import React from "react";
import {
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "../jest.setup";
import "@testing-library/jest-dom";
import instance from "../../redux/axiosinstance";
import { Users } from "../mocks/user.mock";
import { act } from "react-dom/test-utils";
import UserTable from "../../components/UserTable";

instance.get.mockResolvedValue({ data: { users: Users } });
instance.patch.mockResolvedValue({ data: { message: "role assigned" } });

describe("test for get users and assign role", () => {
  test("testing for user table", async () => {
    const { getByTestId, container, getByRole } = render(<UserTable />);

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });

    //testing table
    expect(getByTestId("table")).toBeInTheDocument();

    const prev = getByRole("button", { name: /Prev/i });
    expect(prev).toBeInTheDocument();
    act(() => {
      fireEvent.click(prev);
    });

    const next = getByRole("button", { name: /Next/i });
    expect(next).toBeInTheDocument();
    act(() => {
      fireEvent.click(next);
    });
    //testing window onclick and hide dropdown content
    const dropdown = container.querySelector(".dropdown");
    expect(dropdown).toBeInTheDocument();

    const outside = container.querySelector(".outside");
    outside.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect(container.querySelector(".drop-content")).not.toBeInTheDocument();

    const dropBtn = screen.getByTestId("drop-btn");
    expect(dropBtn).toBeInTheDocument();

    act(() => {
      fireEvent.click(dropBtn);
    });

    const roleBtn = screen.getByText(/Make buyer/i);
    expect(roleBtn).toBeInTheDocument();

    act(() => {
      fireEvent.click(roleBtn);
    });
  });
});

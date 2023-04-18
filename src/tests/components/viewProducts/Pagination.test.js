import React from "react";
import { render } from "../../jest.setup";
import "@testing-library/jest-dom";
import Pagination from "../../../components/viewProducts/Pagination";

const mockFunction = () => {
  return "something";
};
describe("Spinner component", () => {
  it("Should render the loading text text", async () => {
    const { getByText } = render(
      <Pagination
        itemsPerPage={3}
        totalItems={5}
        paginate={mockFunction}
        paginateNext={mockFunction}
        paginatePrev={mockFunction}
        currentPage={1}
      />
    );
    expect(getByText("Prev")).toBeInTheDocument();
  });
});

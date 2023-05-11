import React from "react";
import { render, screen } from "../../jest.setup";
import "@testing-library/jest-dom";
import TableWithErrorHandler from "../../../components/payment/TableWithErrorHandler";

describe("Testing table renderering", () => {
  it("Should render error component", () => {
   render(
      <TableWithErrorHandler
        error="something went wrong"
        loading={false}
        sellerLoading={false}
        productLoading={false}
      />
    );
    expect(screen.getByText(/An error occured in the process/i)).toBeInTheDocument();
  });
  it("Should render error in geting products", () => {
   render(
      <TableWithErrorHandler
      getProductsError="something went wrong"
        loading={false}
        sellerLoading={false}
        productLoading={false}
      />
    );
    expect(screen.getByText(/An error occured in the process/i)).toBeInTheDocument();
  });
  it("Should render error in getting sellers", () => {
   render(
      <TableWithErrorHandler
        sellerError="something went wrong"
        loading={false}
        sellerLoading={false}
        productLoading={false}
      />
    );
    expect(screen.getByText(/An error occured in the process/i)).toBeInTheDocument();
  });
});

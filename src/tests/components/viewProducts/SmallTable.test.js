import React from "react";
import { render, screen } from "../../jest.setup";
import "@testing-library/jest-dom";
import { products } from "../../mocks/product.mock";
import SmallTable from "../../../components/products/viewProducts/SmallTable";

const regExp = (str) => new RegExp(str, "i");
describe("Product table component", () => {
  it("Should render all text", async () => {
    const { getByText } = render(
      <SmallTable
        headers={["Created At", "Last Update", "Date Of Expiration"]}
        data={[
          {
            one: products[0].createdAt,
            two: products[0].updatedAt,
            three: products[0].expiryDate,
          },
        ]}
      />
    );
    expect(screen.getAllByText(regExp(products[0].createdAt))).toHaveLength(2);
    expect(getByText(regExp(products[0].expiryDate))).toBeInTheDocument();
  });
});

import React from "react";
import { render } from "../../jest.setup";
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
    expect(getByText(regExp(products[0].createdAt))).toBeInTheDocument();
    expect(getByText(regExp(products[0].expiryDate))).toBeInTheDocument();
    expect(getByText(regExp(products[0].updatedAt))).toBeInTheDocument();
  });
});

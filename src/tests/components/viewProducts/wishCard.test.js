import React from "react";
import { render } from "../../jest.setup";
import "@testing-library/jest-dom";
import { sellers } from "../../mocks/seller.mock";
import { products } from "../../mocks/product.mock";
import WishCard from "../../../components/wishlist/WishCard";

describe("Tests for displaying the wishlist page",()=>{
    it("should render the wish card",()=>{
const { getByText } = render(<WishCard product={products[0]} sellers={sellers}/>)
      expect(getByText(/In stock/i)).toBeInTheDocument();
 })
})


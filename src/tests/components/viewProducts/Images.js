import React from "react";
import { render } from "../../jest.setup";
import "@testing-library/jest-dom";
import { products } from "../../mocks/product.mock";
import Images from "../../../components/viewProducts/Images";

describe("Product Images component", () => {
  it("Should render all images", async () => {
    const { getAllByAltText } = render(<Images images={products[0].images} />);
    const images = getAllByAltText("product-image");
    expect(images.length).toBe(products[0].images.length);
    images.forEach((image) => {
      expect(image).toBeInTheDocument();
      expect(image.src).toMatch(products[0].images[images.indexOf(image)]);
    });
  });
});

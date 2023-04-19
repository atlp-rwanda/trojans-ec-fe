import { formatExpired, formatDate, formatString } from "../../helpers/Format";

describe("Testing formatting functions", () => {
  it("Testing format date function", () => {
    expect(formatDate("2023-03-26T12:42:09.697Z")).toBe("3/26/2023");
  });
  it("Testing format string function", () => {
    expect(formatString("hello world")).toBe("Hello World");
  });
  it("Testing formatExpired function with true as parameter", () => {
    expect(formatExpired(true)).toBe("Expired");
  });
  it("Testing formatExpired function with false as parameter", () => {
    expect(formatExpired(false)).toBe("Not expired");
  });
});

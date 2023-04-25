import parseJwt from "../../helpers/parseJwt";
export const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Im5hbWUiOiJ0ZXN0QnV5ZXIiLCJlbWFpbCI6InRlc3RCdXllckBleGFtcGxlLmNvbSIsImlkIjo2LCJyb2xlIjoiYnV5ZXIiLCJzdGF0dXMiOiJhY3RpdmUiLCJwcm9maWxlUGljIjoiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZG1qeHVreDA5L2ltYWdlL3VwbG9hZC92MTY3NTg0NDY5Mi9wcm9maWxlcy9Qcm9maWxlLUF2YXRhci1QTkctRnJlZS1Eb3dubG9hZF9wYXFmcmYucG5nIiwibGFzdFRpbWVQYXNzd29yZFVwZGF0ZWQiOiIyMDIzLTAzLTE3VDA4OjE3OjI3LjEyNFoifSwiaWF0IjoxNjgxNjYxNjI0fQ.s4hVT-bNIjWiklhnJ2DNcpTcsyTq4Q3V4oQDyS4PZNk";

describe("Testing jwt decoding function", () => {
  it("Expecting the object to be decoded", () => {
    expect(Object.keys(parseJwt(token))[0]).toBe("data");
  });
});

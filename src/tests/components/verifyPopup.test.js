import React from "react";
import { render, fireEvent, screen } from "../jest.setup";
import "@testing-library/jest-dom";
import SuccessVerifyPopup from "../../components/shared/verifyPopUp";


test("render success", () =>{
    render(<SuccessVerifyPopup message="successifully updated!" success={true} statusMessage="Success" />);
    expect(screen.getByText("Success")).toBeInTheDocument();
    expect(screen.getByText(/successifully updated!/i)).toBeInTheDocument();
})
test("render fail", () =>{
    render(<SuccessVerifyPopup message="Failed to update!"/>);
    expect(screen.getByText("Fail")).toBeInTheDocument();
    expect(screen.getByText(/Failed to update!/i)).toBeInTheDocument();
})
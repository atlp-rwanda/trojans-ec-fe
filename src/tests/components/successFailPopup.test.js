import React from "react";
import { render, fireEvent, screen } from "../jest.setup";
import "@testing-library/jest-dom";
import SuccessFailPopup from "../../components/shared/SuccessFailPopup"

test("render success", () =>{
    render(<SuccessFailPopup message="successifully updated!" success={true} statusMessage="Success" data_testid="success-pop" className="success-pop"/>);
    expect(screen.getByTestId("success-pop")).toBeInTheDocument();
    expect(screen.getByTestId("success-pop").className).toBe("success-pop");
    expect(screen.getByText("Success")).toBeInTheDocument();
    expect(screen.getByText(/successifully updated!/i)).toBeInTheDocument();
})
test("render fail", () =>{
    render(<SuccessFailPopup message="Failed to update!" success={false} statusMessage="Failed!" data_testid="fail-pop"/>);
    expect(screen.getByTestId("fail-pop")).toBeInTheDocument();
    expect(screen.getByText(/Failed!/i)).toBeInTheDocument();
    expect(screen.getByText(/Failed to update!/i)).toBeInTheDocument();
})
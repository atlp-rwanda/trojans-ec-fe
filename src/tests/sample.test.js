import React from "react";
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import 'jest-environment-jsdom'
import Homepage from "../pages/homepage";

test('sample test for home page', ()=>{
    render(<Homepage/>);
    const homeElement = screen.getByTestId('home');
    expect(homeElement).toBeInTheDocument();
})
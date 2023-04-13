import React from "react";
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import '@testing-library/jest-dom'
import 'jest-environment-jsdom'
import Homepage from "../pages/homepage";

test('sample test for home page', ()=>{
    render(<BrowserRouter><Homepage/></BrowserRouter>);
    const homeElement = screen.getByTestId('home');
    expect(homeElement).toBeInTheDocument();
})



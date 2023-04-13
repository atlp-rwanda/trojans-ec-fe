import React from "react";
import { render, fireEvent,screen } from './jest.setup';
import { BrowserRouter } from "react-router-dom"
import '@testing-library/jest-dom'
import 'jest-environment-jsdom'
import Login from "../pages/login";

test('sample test for home page', ()=>{
    render(<Login/>);
    const homeElement = screen.getByTestId('login');
    expect(homeElement).toBeInTheDocument();
})

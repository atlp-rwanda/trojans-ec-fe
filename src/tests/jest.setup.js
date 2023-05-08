/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from "react";
import "regenerator-runtime/runtime";
import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { reducers } from "../redux/store";

jest.mock("../redux/axiosinstance");

function render(
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: { ...reducers }, preloadedState }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <React.Fragment>{children}</React.Fragment>
        </Provider>
      </BrowserRouter>
    )
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

let store = {}

beforeAll(() => {
  global.Storage.prototype.setItem = jest.fn((key, value) => {
    store[key] = value;
  });
  global.Storage.prototype.getItem = jest.fn((key) => store[key]);

});

beforeEach(() => {
  store = {}
})

afterAll(() => {
})
export * from '@testing-library/react';
export { render }

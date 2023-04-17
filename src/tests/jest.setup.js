/* eslint-disable react/prop-types */
import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import "regenerator-runtime/runtime";
import 'regenerator-runtime/runtime';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import "@testing-library/jest-dom";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {reducers} from '../redux/store';


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
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

let store = {};


beforeAll(() => {
  // Mock local storage
  global.Storage.prototype.setItem = jest.fn((key, value) => {
    store[key] = value;
  });
  global.Storage.prototype.getItem = jest.fn((key) => store[key]);
  // const mockDispatch = jest.fn();
});
jest.mock("../redux/axiosinstance");


beforeEach(() => {
  store = {};
});

afterEach(()=>{
  jest.clearAllMocks();
})

afterAll(() => {
  // global.Storage.prototype.setItem.mockReset();
  // global.Storage.prototype.getItem.mockReset();
});

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };

import React from "react";
import 'setimmediate';
import { render, screen } from './jest.setup';
import '@testing-library/jest-dom'
import 'jest-environment-jsdom'
import AdminDashboard from "../pages/dashboard/admin/AdminDashboard"
// import mockAxios from "../redux/axiosinstance";
// import { act } from "react-dom/test-utils";

test("should render the admin dashboard component",() => {
    render(<AdminDashboard/>);
    const adminComp = screen.getByTestId("admin-dashboard");
  expect(adminComp).toBeInTheDocument();
});



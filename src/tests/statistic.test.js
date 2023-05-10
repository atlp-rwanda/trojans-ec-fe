import React from "react";
import { render, waitFor, screen } from "./jest.setup";
import "@testing-library/jest-dom";
import "jest-environment-jsdom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import SellerStatisticPage from "../pages/statistic";
import instance from "../redux/axiosinstance.js";

const mockStore = configureStore([]);
instance.get.mockResolvedValue({
  orders: {
    message: [
      { createdAt: "2022-01-01T", sales: 10 },
      { createdAt: "2022-01-02T", sales: 20 },
      { createdAt: "2022-01-03T", sales: 30 },
    ],
  },
});
instance.patch.mockResolvedValue({
  orders: {
    message: [
      { createdAt: "2022-01-01T", sales: 10 },
      { createdAt: "2022-01-02T", sales: 20 },
      { createdAt: "2022-01-03T", sales: 30 },
    ],
  },
});
describe("SellerStatisticPage", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      statistic: {
        loading: false,
        response: {
          stats: {
            totalProductsAmount: 1000,
            SalesNumber: 50,
            totalLoss: 200,
            expiredProducts: 10,
          },
        },
        error: null,
        success: null,
        orders: {
          message: [
            { createdAt: "2022-01-01T", sales: 10 },
            { createdAt: "2022-01-02T", sales: 20 },
            { createdAt: "2022-01-03T", sales: 30 },
          ],
        },
        isFetchingOrder: false,
      },
    });
  });

  test("renders the component with the correct title", async () => {
    render(
      //   <Provider store={store}>
      <SellerStatisticPage />
      //   </Provider>
    );

    // await waitFor(() => {
    expect(screen.getByText("Statistics")).toBeInTheDocument();
    // });
  });

  //   test("displays loading skeleton while fetching data", async () => {
  //     store = mockStore({
  //       statistic: {
  //         loading: true,
  //         response: null,
  //         error: null,
  //         success: null,
  //         orders: null,
  //         isFetchingOrder: false,
  //       },
  //     });

  //     const { getByTestId } = render(
  //       <Provider store={store}>
  //         <SellerStatisticPage />
  //       </Provider>
  //     );

  //     await waitFor(() => {
  //       expect(getByTestId("loading-statistic")).toBeInTheDocument();
  //     });
  //   });

  //   test("displays error component if response status is 401", async () => {
  //     store = mockStore({
  //       statistic: {
  //         loading: false,
  //         response: { status: 401 },
  //         error: null,
  //         success: null,
  //         orders: null,
  //         isFetchingOrder: false,
  //       },
  //     });
  //     render(
  //       <Provider store={store}>
  //         <SellerStatisticPage />
  //      </Provider>
  //     );

  //     await waitFor(() => {
  //       expect(screen.getByText("Unauthorized")).toBeInTheDocument();
  //       expect(screen.getByText("You need to sign in")).toBeInTheDocument();
  //     });
  //   });

  //   test("displays statistic cards and chart with correct data", async () => {
  //     render(
  //       <Provider store={store}>
  //         <SellerStatisticPage />
  //    </Provider>
  //     );

  //     // await waitFor(() => {
  //       expect(screen.getByText("Total Sales")).toBeInTheDocument();
  //       expect(screen.getByText("1000")).toBeInTheDocument();
  //       expect(screen.getByText("Orders Shipped")).toBeInTheDocument();
  //       expect(screen.getByText("Orders Shipped")).toBeInTheDocument();
  //       expect(screen.getByText("50")).toBeInTheDocument();
  //       expect(screen.getByText("Customers")).toBeInTheDocument();
  //       expect(screen.getByText("8")).toBeInTheDocument();
  //       expect(screen.getByText("Loss")).toBeInTheDocument();
  //       expect(screen.getByText("200")).toBeInTheDocument();
  //       expect(screen.getByText("Expired Products")).toBeInTheDocument();
  //       expect(screen.getByText("10")).toBeInTheDocument();
  //       expect(screen.getByText("Orders Chart")).toBeInTheDocument();
  //     // });
  //   });
});

import React from "react";
import { render, screen, fireEvent } from "./jest.setup";
import 'setimmediate';
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Chat from "../components/chatModel";
import { setData } from "../redux/features/slices/chat";
import '@testing-library/jest-dom'
import 'jest-environment-jsdom'
import { act } from "react-dom/test-utils";
import { waitFor } from "@testing-library/react";

const mockStore = configureStore([]);


describe("Chat", () => {
  let store;
  
  beforeEach(async () => {
    store = mockStore({
      chat: {
        loading: false,
        data: [
          {
            User: {
              email: "testBuyer@example.com",
              name: "John Doe",
              profilePic:
                "https://res.cloudinary.com/dmjxukx09/image/upload/v1675844692/profiles/Profile-Avatar-PNG-Free-Download_paqfrf.png",
              role: "buyer",
            },
            createdAt: new Date(),
            message: "Hello",
          },
        ],
        error: null,
        success:  null,
      },

  })
    jest.useFakeTimers();
  });
  afterEach(async() => {
    jest.useRealTimers();
  });

  it("renders chat messages", async () => {
    const mockScrollIntoView = jest.fn();
  const messagesEndRef = { current: { scrollIntoView: mockScrollIntoView } };
   render(
      <Provider store={store}>
        <Chat messageEndRef={messagesEndRef} />
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText(/chat/i)).toBeInTheDocument();
      expect(screen.getByText(/John/i)).toBeInTheDocument();
      expect(screen.getByText(/Hello/i)).toBeInTheDocument();
    });
  });

  it("allows sending new chat messages", () => {
    const mockScrollIntoView = jest.fn();
 const messagesEndRef = { current: { scrollIntoView: mockScrollIntoView } };
    render(
      <Provider store={store}>
        <Chat messageEndRef={messagesEndRef} />
      </Provider>
    );
    jest.runOnlyPendingTimers();

    const input = screen.getByPlaceholderText(/Type a message.../i);
    const sendButton = screen.getByTestId("send message");

    fireEvent.change(input, { target: { value: "Hi there" } });
    fireEvent.click(sendButton);

    expect(input.value).toBe("");
    expect(store.getActions()).toEqual([
      setData([
        ...store.getState().chat.data,
        {
          User: {
            email: "testBuyer@example.com",
            name: "",
            profilePic:
              "https://res.cloudinary.com/dmjxukx09/image/upload/v1675844692/profiles/Profile-Avatar-PNG-Free-Download_paqfrf.png",
            role: "buyer",
          },
          createdAt: expect.any(Date),
          message: "Hi there",
        },
      ]),
    ]);
  });
});
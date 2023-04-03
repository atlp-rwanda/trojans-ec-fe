import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./styles/index.scss";


export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

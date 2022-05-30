import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Dashboard from "./Components/ui/Dashboard";
import { Provider } from "react-redux";
import configStore from "./Components/store/configStore";
import NoInternetConnection from "./Components/ui/NoInternetConnection";
const root = ReactDOM.createRoot(document.getElementById("root"));
let { store } = configStore();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <NoInternetConnection>
        <Dashboard />
      </NoInternetConnection>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

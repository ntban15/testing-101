import React from "react";
import ReactDOM from "react-dom";
import "todomvc-common/base.css";
import "todomvc-app-css/index.css";
import { Provider } from "react-redux";

import App from "./App";
import store from "./redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

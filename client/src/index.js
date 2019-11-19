import React from "react";
import ReactDOM from "react-dom";
import { DrizzleProvider } from "@drizzle/react-plugin";
import drizzleOptions from "./drizzleOptions";
import App from "./app";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <DrizzleProvider options={drizzleOptions}>
    <App />
  </DrizzleProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

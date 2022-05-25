import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CoingeckoPricesProvider } from "coingecko-prices-provider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CoingeckoPricesProvider>
      <App />
    </CoingeckoPricesProvider>
  </React.StrictMode>
);



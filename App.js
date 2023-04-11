import store  from "./store";
import { Home } from "./src/pages/Home";
import { Provider } from "react-redux";

import React from "react";

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

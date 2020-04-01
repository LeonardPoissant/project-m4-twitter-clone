import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import UserProvider from "../src/components/CurrentUser/CurrentUserContext";
import FeedProvider from "../src/components/FeedContext/FeedContext";

ReactDOM.render(
  <FeedProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </FeedProvider>,
  document.getElementById("root")
);

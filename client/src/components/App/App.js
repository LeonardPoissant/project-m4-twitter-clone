import React from "react";
import styled from "styled-components";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyles from "../GlobalStyles";

import SideBar from "../Sidebar/Sidebar";
import { CurrentUserContext } from "../CurrentUser/CurrentUserContext";

import Profile from "../Profile/Profile";
import HomeFeed from "../HomeFeed/HomeFeed";

function App() {
  const { status } = React.useContext(CurrentUserContext);
  console.log(status);
  return (
    <>
      <GlobalStyles />
      <Page>
        <Router>
          <SideBar />
          <Switch>
            <Route exact path="/">
              <HomeFeed />
            </Route>
            <Route path="/notifications">Notifications</Route>
            <Route path="/bookmarks">Bookmarks</Route>
            <Route path="/tweet/:tweetId">TweetDetails</Route>
            <Route path="/profile/:profile">
              <Profile />
            </Route>
          </Switch>
        </Router>
      </Page>
    </>
  );
}

const Page = styled.div`
  display: flex;
`;

export default App;

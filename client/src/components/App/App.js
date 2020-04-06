import React from "react";
import styled from "styled-components";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyles from "../GlobalStyles";

import SideBar from "../Sidebar/Sidebar";
import { CurrentUserContext } from "../CurrentUser/CurrentUserContext";

import Profile from "../Profile/Profile";
import HomeFeed from "../HomeFeed/HomeFeed";
import { FeedContext } from "../FeedContext/FeedContext";
import TweetDetails from "../TweetDetails/TweetDetails";
import Tweet from "../Tweet/Tweet";

function App() {
  const { status } = React.useContext(CurrentUserContext);
  const { tweets, tweetsStatus } = React.useContext(FeedContext);
  React.useCallback(Tweet);
  console.log("IN APPP", tweets);

  //React.useEffect(() => {
  //  console.log("USEEFFECT");
  // }, [HomeFeed]);
  return (
    <>
      <GlobalStyles />
      <Page>
        <Router>
          <SideBar />
          <Switch>
            <Route exact path="/">
              <HomeFeed tweets={tweets} tweetsStatus={tweetsStatus} />
            </Route>
            <Route path="/notifications">Notifications</Route>
            <Route path="/bookmarks">Bookmarks</Route>
            <Route path={`/tweet/:tweetId`}>
              <TweetDetails />
            </Route>
            <Route path="/:profileId">
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

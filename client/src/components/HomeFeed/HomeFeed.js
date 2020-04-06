import React from "react";

import styled from "styled-components";

import CircularProgress from "@material-ui/core/CircularProgress";

import { CurrentUserContext } from "../CurrentUser/CurrentUserContext";
import { FeedContext } from "../FeedContext/FeedContext";
import Tweet from "../Tweet/Tweet";

import styledAvatar from "../StyledAvatar/styledAvatar";

import { COLORS } from "../../constants";
//
//const getTweets = tweets.tweetIds.map(tweet => tweets.tweetsById[tweet]);

const HomeFeed = () => {
  const { currentUser, status } = React.useContext(CurrentUserContext);
  const  {
     tweets, 
     tweetsStatus,
    actions:{addTweet}
   } = React.useContext(FeedContext);
  const [tweetInput, setTweetInput] = React.useState({});

  console.log(tweetsStatus);

  if (!status) {
    return <CircularProgress />;
  }

  if (!tweetsStatus) {
    return <CircularProgress />;
  }
  const getTweets =
    Object.keys(tweets).length !== 0
      ? Object.values(tweets.tweetIds).map((tweet) => tweets.tweetsById[tweet])
      : [];

  //React.useEffect(() => {
  // console.log("USEEFFECT");
  //}, []); Trouver oz est la list ajouter le tweet à la liste dans la réponse

  return (
    <Wrapper>
      <Title>Home</Title>
      <TweetBox
        onSubmit={(ev) => {
          ev.preventDefault();
          fetch(`/api/tweet`, {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              status: tweetInput,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              addTweet();
            });
        }}
      >
        <Avatar src={`${currentUser.avatarSrc}`} />

        <TweetInput
          placeholder="Time to Moew"
          maxLength="280"
          onChange={(ev) => setTweetInput(ev.currentTarget.value)}
        />
        <MeowButton>Moew</MeowButton>
      </TweetBox>

      {getTweets.map((tweet) => {
        return <Tweet tweet={tweet} />;
      })}
    </Wrapper>
  );
};

export default HomeFeed;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  display: flex;
  flex-direction: column;
`;

const TweetBox = styled.form`
  display: flex;
  flex-direction: column;
`;

const TweetInput = styled.textarea`
  border: none;
  width: 100px;
  height: 60px;
  text-decoration: none;
`;

const Avatar = styled(styledAvatar)`
  display: flex;
  align-items: left;
`;

const MeowButton = styled.button`
  display: block;
  color: white;
  border-radius: 15px;
  background: ${COLORS.background};
  border: none;
  margin: 0;
  padding: 0;
`;

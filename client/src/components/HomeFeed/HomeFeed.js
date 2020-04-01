import React from "react";

import styled from "styled-components";

import { CurrentUserContext } from "../CurrentUser/CurrentUserContext";
import { FeedContext } from "../FeedContext/FeedContext";
import Tweet from "../Tweet/Tweet";

import styledAvatar from "../StyledAvatar/styledAvatar";

import { COLORS } from "../../constants";

const HomeFeed = () => {
  const { currentUser } = React.useContext(CurrentUserContext);
  const { tweets } = React.useContext(FeedContext);
  console.log(tweets);

  const tweetId = Object.values(tweets);

  console.log("tweetId", tweetId);

  return (
    <Wrapper>
      <Title>Home</Title>
      <TweetBox>
        <Avatar src={`${currentUser.avatarSrc}`} />
        <TweetInput placeholder="Time to Moew" />
      </TweetBox>
      <MeowButton>Moew</MeowButton>
      <Tweet />
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

const TweetInput = styled.input`
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

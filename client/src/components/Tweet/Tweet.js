import React from "react";

import styled from "styled-components";

import StyledAvatar from "../StyledAvatar/styledAvatar";

import FeedContext from "../FeedContext/FeedContext";

const Tweet = () => {
  const { tweets } = React.useContext(FeedContext);

  //const tweetId = tweets.tweetsbyId
  const tweetId = Object.values(tweets);
  console.log("INtTWEET", tweets);

  return (
    <Wrapper>
      <StyledAvatar />
      <TweetParagraph />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const TweetParagraph = styled.div``;

export default Tweet;

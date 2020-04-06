import React from "react";

import styled from "styled-components";
import styledAvatar from "../StyledAvatar/styledAvatar";

import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

import Retweet from "../Retweet/Retweet";
import IconsBar from "../IconsBar/IconsBar";

import { NavLink } from "react-router-dom";

//onClick={history.push({ tweetId })}

//<NavLink to={`/${tweet.author.handle}`}>
//    <Avatar src={tweetAuthor.avatarSrc} />
//   </NavLink>

// <NavLink to={`/tweet/${tweet.id}`}>
//    {twitPic.length > 0 ? <Picture src={twitPic[0].url} /> : <></>}
//  </NavLink>

import TweetDetails from "../TweetDetails/TweetDetails";

const initialState = {
  isLiked: false,
  isRetweeted: false,
};
function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "toggle-like":
      const isAlreadyLiked = state.isLiked;
      return {
        ...state,
        isLiked: !isAlreadyLiked,
        numOfLikes: isAlreadyLiked
          ? state.numOfLikes - 1
          : state.numOfLikes + 1,
      };

    case "toggle-retweet":
      const isAlreadyRetweeted = state.isRetweeted;
      return {
        ...state,
        isRetweeted: !isAlreadyRetweeted,
        numOfRetweets: isAlreadyRetweeted
          ? state.numOfRetweets - 1
          : state.numOfRetweets + 1,
      };

    default:
      throw new Error("Unrecognized action");
  }
}

const Tweet = ({ tweet }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const history = useHistory();
  const { tweetId } = useParams();

  const toggleLike = () => dispatch({ type: "toggle-like" });
  const toggleRetweet = () => dispatch({ type: "toggle-retweet" });

  const tweetMessage = tweet.status;

  const retweetOrigin = tweet.retweetFrom;

  const tweetAuthor = tweet.author;

  const twitPic = tweet.media;

  return (
    <Wrapper onClick={() => history.push(`/tweet/${tweet.id}`)}>
      {tweet.retweetFrom ? <Retweet retweetOrigin={retweetOrigin} /> : <></>}
      <DisplayUser>
        <Avatar src={tweetAuthor.avatarSrc} />

        <UserName></UserName>
      </DisplayUser>

      <TweetParagraph> {tweetMessage}</TweetParagraph>

      {twitPic.length > 0 ? <Picture src={twitPic[0].url} /> : <></>}

      <IconsBar
        tweet={tweet}
        handleToggleLike={toggleLike}
        handleToggleRetweet={toggleRetweet}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: black;
`;

const Avatar = styled(styledAvatar)`
  display: flex;
  align-items: left;
`;

const TweetParagraph = styled.div``;

const Picture = styled.img`
  text-decoration: none;
  color: black;
`;

const UserName = styled.div``;

const DisplayUser = styled.div``;

export default Tweet;

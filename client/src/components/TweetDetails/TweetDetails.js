import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import styledAvatar from "../StyledAvatar/styledAvatar";
import IconsBar from "../IconsBar/IconsBar";
//{media.length >= 0 ? <Picture src={`${media.url}`} /> : <> </>}

const TweetDetails = () => {
  const [bigTweet, setBigtweet] = React.useState({});
  const [tweetAuthor, setTweetAuthor] = React.useState({});
  const [media, setMedia] = React.useState([]);
  const { tweetId } = useParams();

  React.useEffect(() => {
    fetch(`/api/tweet/${tweetId}`)
      .then((res) => res.json())
      .then((data) => {
        setBigtweet(data.tweet);
        setTweetAuthor(data.tweet.author);
        setMedia(data.tweet.media[0]);
      });
  }, []);

  return (
    <Wrapper>
      <DisplayUser>
        <Avatar src={`${tweetAuthor.avatarSrc}`} />
        <UserName>{`${tweetAuthor.handle}`}</UserName>
      </DisplayUser>

      <TweetParagraph>{`${bigTweet.status}`}</TweetParagraph>

      {media.length ? <Picture src={`${media.url}`} /> : <></>}

      <IconsBar />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Avatar = styled(styledAvatar)`
  display: flex;
  align-items: left;
`;

const UserName = styled.div``;

const DisplayUser = styled.div``;

const TweetParagraph = styled.div``;

const Picture = styled.img`
  text-decoration: none;
  color: black;
`;

export default TweetDetails;

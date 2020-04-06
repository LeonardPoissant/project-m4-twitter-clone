import React from "react";

export const TweetDetailsContext = React.createContext();

const TweetDetailsProvider = ({ children }) => {
  const [currentTweet, setCurrentTweet] = React.useState({});
  React.useEffect(() => {
    fetch(`/api/tweet/:tweetId`)
      .then(res => res.json())
      .then(data => {
        setCurrentTweet(data);

        console.log("TWEETDETAILS", data);
      });
  }, []);

  return (
    <TweetDetailsContext.Provider value={currentTweet}>
      {children}
    </TweetDetailsContext.Provider>
  );
};

export default TweetDetailsProvider;

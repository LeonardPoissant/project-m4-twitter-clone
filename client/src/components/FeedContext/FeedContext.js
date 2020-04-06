import React from "react";

export const FeedContext = React.createContext();

const initialState = {
  tweetadded: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "Tweet_Added":
      return {
        ...state,
        tweetadded: true, 
      };
  }
}

const FeedProvider = ({ children }) => {
  const [tweets, setTweets] = React.useState({});
  const [tweetsStatus, setTweetsStatus] = React.useState("loadingTweets");
  const [tweetadded, dispatch] = React.useReducer(reducer, initialState);

  const addTweet =()=>{
    dispatch({type: "Tweet_Added"})
  }

  React.useEffect(() => {
    fetch("api/me/home-feed")
      .then((res) => res.json())
      .then((data) => {
        setTweets(data);
        setTweetsStatus("loaded");
      });
  }, [tweetadded]);

  return (
    <FeedContext.Provider value={{ tweets, tweetsStatus, actions:{addTweet} }}>
      {children}
    </FeedContext.Provider>
  );
};

export default FeedProvider;

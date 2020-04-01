import React from "react";

export const FeedContext = React.createContext();

const FeedProvider = ({ children }) => {
  const [tweets, setTweets] = React.useState({});

  React.useEffect(() => {
    fetch("api/me/home-feed")
      .then(res => res.json())
      .then(data => {
        setTweets({ data });
        console.log("DATAINFEEDCONTEXT", data);
      });
  }, []);

  return (
    <FeedContext.Provider value={{ tweets }}>{children}</FeedContext.Provider>
  );
};
export default FeedProvider;

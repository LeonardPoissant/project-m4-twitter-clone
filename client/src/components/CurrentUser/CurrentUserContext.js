import React from "react";

export const CurrentUserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState({});
  const [status, setStatus] = React.useState("loadingUser");

  React.useEffect(() => {
    fetch("/api/me/profile")
      .then((res) => res.json())
      .then((data) => {
        setCurrentUser(data.profile);
        setStatus("idle");
      });
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser, status }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default UserProvider;

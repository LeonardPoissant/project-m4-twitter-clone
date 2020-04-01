import React from "react";

import { Icon } from "react-icons-kit";

import { mapPin } from "react-icons-kit/feather/mapPin";
import { calendar } from "react-icons-kit/feather/calendar";

import { CurrentUserContext } from "../CurrentUser/CurrentUserContext";
const Profile = () => {
  const { currentUser } = React.useContext(CurrentUserContext);
  console.log(currentUser);
  return (
    <>
      <div>
        <img src={`${currentUser.bannerSrc}`}></img>
        <img src={`${currentUser.avatarSrc}`}></img>
      </div>
      <div>
        <div>{`${currentUser.displayName}`}</div>
        <div>@{`${currentUser.handle}`}</div>
      </div>
      <p>{`${currentUser.bio}`}</p>
      <div>
        <Icon icon={mapPin}>{`${currentUser.location}`}</Icon>
        <Icon icon={calendar}>{`${currentUser.joined}`}</Icon>
      </div>

      <div>
        <div>{`${currentUser.numFollowing}`} Following</div>
        <div>{`${currentUser.numFollowers}`} Followers</div>
      </div>
    </>
  );
};

export default Profile;

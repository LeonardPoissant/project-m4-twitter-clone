import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { Icon } from "react-icons-kit";
import { mapPin } from "react-icons-kit/feather/mapPin";
import { calendar } from "react-icons-kit/feather/calendar";

import styledAvatar from "../StyledAvatar/styledAvatar";

import { CurrentUserContext } from "../CurrentUser/CurrentUserContext";
const Profile = () => {
  //const { currentUser } = React.useContext(CurrentUserContext);
  const [userProfile, setUserProfile] = React.useState({});
  //const [loggedInUser, setLoggedInUser] = React.useState({ profileId });
  const [state, setState] = React.useState(false);
  const { profileId } = useParams();

  console.log(userProfile);

  React.useEffect(() => {
    fetch(`/api/${profileId}/profile`)
      .then((res) => res.json())
      .then((data) => {
        setUserProfile(data.profile);
        setState(true);
        return fetch(`/api/${profileId}/profile`);
      })
      .then((res) => res.json())
      .then((data) => {
        setUserProfile(data.profile);
      });
  }, [profileId]);

  return (
    <Wrapper>
      <div>
        <img src={`${userProfile.bannerSrc}`}></img>
        <Avatar src={`${userProfile.avatarSrc}`} />
      </div>
      <div>
        <div>{`${userProfile.displayName}`}</div>
        <div>@{`${userProfile.handle}`}</div>
      </div>
      <p>{`${userProfile.bio}`}</p>
      <div>
        <Icon icon={mapPin}>{`${userProfile.location}`}</Icon>
        <Icon icon={calendar}>{`${userProfile.joined}`}</Icon>
      </div>

      <div>
        <div>{`${userProfile.numFollowing}`} Following</div>
        <div>{`${userProfile.numFollowers}`} Followers</div>
      </div>
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

export default Profile;

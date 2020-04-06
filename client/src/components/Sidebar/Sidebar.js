import React from "react";

import { NavLink } from "react-router-dom";

import styled from "styled-components";
import Logo from "../App/logo";
import { Icon } from "react-icons-kit";
import { briefcase } from "react-icons-kit/feather/briefcase";
import { clipboard } from "react-icons-kit/feather/clipboard";
import { twitter } from "react-icons-kit/feather/twitter";
import { alertOctagon } from "react-icons-kit/feather/alertOctagon";
import { COLORS } from "../../constants";

import { CurrentUserContext } from "../CurrentUser/CurrentUserContext";

const Sidebar = () => {
  const { currentUser } = React.useContext(CurrentUserContext);

  return (
    <StyledSidebar>
      <Logo />
      <Link to="/">
        <Icon icon={twitter}></Icon>
        Home
      </Link>
      <Link to={`/${currentUser.handle}`}>
        <Icon icon={briefcase}></Icon>
        Profile
      </Link>
      <Link to="/notifications">
        <Icon icon={alertOctagon}></Icon>
        Notifications
      </Link>
      <Link to="/bookmarks">
        <Icon icon={clipboard}></Icon>
        Bookmarks
      </Link>
    </StyledSidebar>
  );
};

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;

  a {
    text-decoration: none;
    color: black;
    font-size: 20px;
    padding: 5px 0px;
  }

  a:hover {
    color: ${COLORS.primary};
    background: ${COLORS.background};
    border-radius: 15px;
    opacity: 10;
  }
`;

const Link = styled(NavLink)``;

export default Sidebar;

import React from "react";

import styled from "styled-components";

import { IoMdRepeat, IoIosArrowDropup } from "react-icons/io";
import { TiMessage, TiHeartOutline, TiUploadOutline } from "react-icons/ti";

import Action from "../Action/Action";

const IconsBar = ({ handleToggleLike, handleToggleRetweet }) => {
  return (
    <Wrapper>
      <Action color="rgb(34,99,22)" size={40}>
        <TiMessage />
      </Action>
      <Action color="rgb(23, 191, 99)" size={40} onClick={handleToggleRetweet}>
        <IoMdRepeat />
      </Action>
      <Action color="rgb(224, 36, 94)" size={40} onClick={handleToggleLike}>
        <TiHeartOutline />
      </Action>
      <Action color="rgb(2,2,2)" size={40}>
        <IoIosArrowDropup />
      </Action>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: fit-content;
`;

export default IconsBar;

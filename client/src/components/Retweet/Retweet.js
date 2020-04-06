import React from "react";

import styled from "styled-components";

import { IoMdRepeat } from "react-icons/io";

const Retweet = ({ retweetOrigin }) => {
  return (
    <Wrapper>
      <IoMdRepeat />

      <div>{retweetOrigin.displayName} GavePaw</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;
export default Retweet;

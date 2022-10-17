import { Container } from "@mui/material";
import React from "react";
import Profile from "./Profile";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  && {
    padding-top: 30px;
  }
`;

function Template() {
  return (
    <StyledContainer>
      <Profile />
    </StyledContainer>
  );
}

export default Template;

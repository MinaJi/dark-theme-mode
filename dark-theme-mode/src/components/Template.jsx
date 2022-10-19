import { Container, Grid } from "@mui/material";
import React from "react";
import Profile from "./Profile";
import Contents from "./Contents";
import styled from "styled-components";
import Menu from "./Menu";
import Header from "./Header";
import Footer from "./Footer";
import ToggleBtn from "./ThemeToggle";
import { useTheme } from "@emotion/react";

const StyledContainer = styled(Container)`
  && {
    padding-top: 30px;
  }
`;

const StyledProfile = styled(Grid)`
  && {
    width: 350px;
  }
`;

const StyledContents = styled(Grid)`
  && {
    margin: 0 auto;
    width: 750px;
    height: 100%;
  }
`;

function Template() {
  return (
    <>
      <StyledContainer>
        <Grid container>
          <StyledProfile item>
            <Profile />
            <Menu />
          </StyledProfile>
          <StyledContents item>
            <Contents />
          </StyledContents>
        </Grid>
      </StyledContainer>
    </>
  );
}

export default Template;

import React from "react";
import styled from "styled-components";
import { useTheme } from "../context/themeProvider";
import ThemeToggle from "./ThemeToggle";
import { Grid } from "@mui/material";
import { GiCat } from "react-icons/gi";

const StyledHeader = styled(Grid)`
  && {
    display: flex;
    width: 100%;
    height: 70px;
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  }
`;

const StyledIcon = styled(Grid)`
  && {
    display: flex;
    margin-left: 15px;
    font-size: 45px;
  }
  .logo {
    color: ${({ theme }) => theme.logoColor};
  }
`;

const StyledBtn = styled(Grid)`
  && {
    display: flex;
    margin-left: auto;
    margin-right: 15px;
  }
`;

function Header() {
  const [ThemeMode, toggleTheme] = useTheme();
  return (
    <>
      <StyledHeader container alignItems="center">
        <StyledIcon item>
          <GiCat className="logo" />
        </StyledIcon>
        <StyledBtn item>
          <ThemeToggle toggle={toggleTheme} mode={ThemeMode}>
            DarkMode
          </ThemeToggle>
        </StyledBtn>
      </StyledHeader>
    </>
  );
}

export default Header;

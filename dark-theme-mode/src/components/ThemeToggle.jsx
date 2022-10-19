import React from "react";
import styled from "styled-components";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const Btn = styled.button`
  background-color: ${(props) => props.theme.backgroundColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  font-size: 20px;
  cursor: pointer;
  border-radius: 10px;
  padding: 7px;
`;

function ThemeToggle({ toggle, mode }) {
  return (
    <Btn onClick={toggle} mode={mode}>
      {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
    </Btn>
  );
}

export default ThemeToggle;

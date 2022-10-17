import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  width: 100%;
  height: 100px;
  background-color: #d0d0d0;
  font-size: 50px;
`;

function Header() {
  return (
    <>
      <StyledHeader>header</StyledHeader>
    </>
  );
}

export default Header;

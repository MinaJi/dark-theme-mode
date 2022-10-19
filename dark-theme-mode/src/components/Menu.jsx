import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin: 0 auto;
  text-align: center;
  padding-top: 20px;
`;

const StyledBtn = styled.button`
  font-size: 15px;
  background-color: inherit;
  border: none;
  cursor: pointer;
`;

function Menu() {
  const toggle = () => {
    alert("hi");
  };

  return (
    <StyledDiv>
      <StyledBtn onClick={toggle}>
        <p>다른 고양이도 볼래요?</p>
      </StyledBtn>
    </StyledDiv>
  );
}

export default Menu;

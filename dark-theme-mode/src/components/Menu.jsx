import { Avatar, Divider, List, ListItem } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import dummy from "../db/data.json";

const StyledDiv = styled.div`
  margin: 0 auto;
  text-align: center;
  padding-top: 20px;
`;

const StyledBtn = styled.button`
  font-size: 18px;
  background-color: inherit;
  border: none;
  cursor: pointer;
  font-family: "Silkscreen", cursive;
  color: ${({ theme }) => theme.textColor};
  padding-bottom: 20px;
`;

const StyledList = styled(List)`
  && {
    border: 1px solid ${({ theme }) => theme.borderColor};
    border-radius: 30px;
    font-family: "Silkscreen", cursive;
    height: 306px;
    margin-bottom: 20px;
    overflow-y: auto;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

function Menu() {
  const [list, setList] = useState(false);
  const open = () => {
    setList((prev) => !prev);
  };

  return (
    <StyledDiv>
      <StyledBtn onClick={open}>
        <p>{list === true ? "Close" : "Open this!"}</p>
      </StyledBtn>
      {list && (
        <>
          <StyledList>
            {dummy.catList.map((item, i) => (
              <ListItem key={i} alignItems="center">
                <Avatar src={item.imgUrl} />
                <ListItem>{item.breeds}</ListItem>
              </ListItem>
            ))}
          </StyledList>
        </>
      )}
    </StyledDiv>
  );
}

export default Menu;

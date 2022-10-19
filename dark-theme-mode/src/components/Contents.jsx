import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";

const StyledGrid = styled(Grid)`
  && {
    height: 700px;
    border: 1px solid ${({ theme }) => theme.borderColor};
    border-radius: 30px;
    padding: 20px;
    overflow-y: auto;
    margin-bottom: 70px;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

function contents() {
  return (
    <>
      <StyledGrid container>
        <Grid item>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          vero totam. Excepturi odio nobis ex temporibus eius eaque numquam
          fugiat cupiditate vero, quibusdam distinctio id quo nisi quos modi
          harum!
        </Grid>
        <Grid item>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          vero totam. Excepturi odio nobis ex temporibus eius eaque numquam
          fugiat cupiditate vero, quibusdam distinctio id quo nisi quos modi
          harum!
        </Grid>
        <Grid item>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          vero totam. Excepturi odio nobis ex temporibus eius eaque numquam
          fugiat cupiditate vero, quibusdam distinctio id quo nisi quos modi
          harum!
        </Grid>
        <Grid item>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          vero totam. Excepturi odio nobis ex temporibus eius eaque numquam
          fugiat cupiditate vero, quibusdam distinctio id quo nisi quos modi
          harum!
        </Grid>
      </StyledGrid>
    </>
  );
}

export default contents;

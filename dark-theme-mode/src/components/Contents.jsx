import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";

const StyledGrid = styled(Grid)`
  && {
    height: 700px;
    border: 1px solid #d8d8d8;
    border-radius: 30px;
    padding: 20px;
    overflow-y: auto;
    margin-bottom: 70px;
  }
`;

function contents() {
  return (
    <>
      <StyledGrid container>
        <Grid item>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
          inventore aut nesciunt facere dolores magnam odit, officiis nisi
          pariatur rerum quo obcaecati, recusandae voluptates modi labore
          deleniti laudantium ullam! Vel. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Culpa nesciunt recusandae consectetur
          explicabo, perferendis eligendi voluptatum sapiente inventore.
          Voluptates voluptatibus accusantium, vero provident dolore magni
          quisquam itaque assumenda sed a. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Iste similique architecto veritatis
          sapiente corrupti aspernatur, impedit necessitatibus maxime quo omnis
          animi! Temporibus, voluptate ratione. Expedita necessitatibus
          provident explicabo tempore facere!
        </Grid>
      </StyledGrid>
    </>
  );
}

export default contents;

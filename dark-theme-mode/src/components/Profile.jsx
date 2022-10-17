import React from "react";
import styled from "styled-components";
import { Container, Grid } from "@mui/material";

const Img = styled.img`
  height: 100%;
  display: inline;
  width: auto;
  margin: 0 auto;
  margin-left: -25%; // 이미지 위치 조정 (중앙)
`;

const StyledDiv = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
`;

const StyledGrid = styled(Grid)`
  border: 1px solid #d8d8d8;
  border-radius: 30px;
  padding: 20px;
`;

// const StyledDiv = styled.div`
//   background-image: url("https://cdn-prd.content.metamorphosis.com/wp-content/uploads/sites/2/2022/08/shutterstock_792034306-1.jpg");
//   width: 150px;
//   height: 150px;
//   background-size: cover;
//   background-position: top center;
//   border-radius: 50%;
// `;

function Profile() {
  return (
    <>
      <StyledGrid
        width="350px"
        container
        direction="column"
        alignItems="center"
      >
        <Grid item xs={12}>
          <StyledDiv>
            <Img src="https://cdn-prd.content.metamorphosis.com/wp-content/uploads/sites/2/2022/08/shutterstock_792034306-1.jpg" />
          </StyledDiv>
        </Grid>
        <Grid item xs={12}>
          <p>Hi, I'm british shorthair</p>
        </Grid>
      </StyledGrid>
    </>
  );
}

export default Profile;

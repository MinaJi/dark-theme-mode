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
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 30px;
  padding: 20px;
`;

const StyledText = styled.p`
  font-size: 25px;
  padding-top: 20px;
  font-family: "Silkscreen", cursive;
  text-align: center;
  color: ${({ theme }) => theme.textColor};
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
      <StyledGrid container direction="column" alignItems="center">
        <Grid item>
          <StyledDiv>
            <Img src="https://cdn-prd.content.metamorphosis.com/wp-content/uploads/sites/2/2022/08/shutterstock_792034306-1.jpg" />
          </StyledDiv>
        </Grid>
        <Grid item>
          <StyledText>Hi, I'm british shorthair cat💕</StyledText>
        </Grid>
      </StyledGrid>
    </>
  );
}

export default Profile;

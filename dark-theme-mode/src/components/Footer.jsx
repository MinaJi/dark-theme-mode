import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  height: 100px;
  border-top: 1px solid ${({ theme }) => theme.borderColor};
`;

const StyledText = styled.p`
  font-size: 15px;
  text-align: center;
  padding-top: 18px;
`;

function Footer() {
  return (
    <StyledFooter>
      <StyledText>© 2021. MinaJi. All right reserved</StyledText>
    </StyledFooter>
  );
}

export default Footer;

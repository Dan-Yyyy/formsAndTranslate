import React from "react";
import styled from "styled-components";

const WrapperContainer = styled.div`
  max-width: 600px;
  margin: 10px auto;
  color: #212121;
`;

const Wrapper = ({children}) => {
  return(
    <WrapperContainer>
      {children}
    </WrapperContainer>
  )
}

export default Wrapper;
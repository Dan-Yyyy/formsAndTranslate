import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Title from "./../../styled/Title";
import Select from "../Select/Select";

import { useTranslation } from "react-i18next";

const HeaderWrapper = styled.div`
  background-color: #73bbf5;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 600px;
  margin: 0 auto;
  padding: 10px 0;
`;

export const Header = () => {
 
  const { t } = useTranslation();

  return(
    <HeaderWrapper>  
      <HeaderContainer>
        <Link to="/" style={{textDecoration: "none"}}>
          <Title>{t("header.title")}</Title>
        </Link>
        <Select/>
      </HeaderContainer>
    </HeaderWrapper>
  )
}
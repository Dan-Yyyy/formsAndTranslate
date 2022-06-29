import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./../utils/i18n";

import Button from "../styled/Button";

const IndexPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 350px;
  margin: 40px auto;
`;

const IndexPage = () => {

  const { t } = useTranslation();
  return(
    <IndexPageContainer>
      <Link to="formicPage" style={{textDecoration: "none"}}>
        <Button style={{minWidth: "120px"}}>{t("formik")}</Button>
      </Link>
      <Link to="hookFormPage" style={{textDecoration: "none"}}>
        <Button style={{minWidth: "120px"}}>{t("hookForm")}</Button>
      </Link>
    </IndexPageContainer>
  )
}

export default IndexPage;
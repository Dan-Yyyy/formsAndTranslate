import React, { useState } from "react";
import styled from "styled-components";

import { useTranslation } from "react-i18next";
import "./../../utils/i18n";

const DropDownContainer = styled.div`
  width: 40px;
`;

const DropDownHeader = styled.div`
  position: relative;
  color: white;
  font-weight: 500;
  font-size: 24px;
  text-alighn: center;
  cursor: pointer;
`;

const DropDownListContainer = styled.div`
  position: absolute;
`;

const DropDownList = styled.ul`
  padding: 0 4px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  font-size: 18px;
  font-weight: 500;
`;

const ListItem = styled.li`
  color: #73bbf5;
  list-style: none;
  margin-bottom: 5px;
  cursor: pointer;
  &:hover {
    color: #37a6ff;
  }
`;

const options = ["ru", "en"];

const Select = () => {

  const langInLocal = window.localStorage.getItem("i18nextLng");
  const { i18n } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(langInLocal);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    if(selectedOption !== value) 
      i18n.changeLanguage(value);
  };

  return (
    
      <DropDownContainer>
        <DropDownHeader onClick={toggling} >  {selectedOption} </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map(option => (
                <ListItem onClick={onOptionClicked(option)} key={option}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
  );
}

export default Select;
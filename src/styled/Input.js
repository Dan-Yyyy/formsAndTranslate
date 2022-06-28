import styled from "styled-components";

const Input = styled.input`
  width: 300px;
  padding: 2px 0;
  font-size: 14px;
  color: #212121;
  border: none;
  border-bottom: 1px solid grey;
  border-radius: none;
  outline: none;
  &:hover {
    border-color: #212121;
  }
  &:focus {
    border-color: #73bbf5;
  }
`;

export default Input;
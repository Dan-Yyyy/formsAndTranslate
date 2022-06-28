import styled from "styled-components";

const Button = styled.button`
  display: block;
  margin: 0 auto;
  padding: 10px;
  color: #73bbf5;
  border: 1px solid #73bbf5;
  border-radius: 20px;
  background: none;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    color: #37a6ff;
    border-color: #37a6ff;
  }
  &:disabled {
    color: #212121;
    border-color: #212121;
    cursor: none;
  }
`;

export default Button;
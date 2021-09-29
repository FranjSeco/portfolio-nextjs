import styled from "styled-components";

export const Button = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 5px;
  background-color: transparent;
  border: 1px solid #fff;
  color: #fff;
  cursor: pointer;
  margin: 0;

  &:hover {
    color: #fff;
    border: 1px solid #fff;
    box-shadow: 2px 2px 15px 2px #000000;
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

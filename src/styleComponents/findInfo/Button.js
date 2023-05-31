import styled from "styled-components";

export const Button = styled.button`
  padding: 5px 10px;
  background-color: ${(props) => props.bgColor || "#ccc"};
  border: 2px solid ${(props) => props.borderColor || "#ccc"};
  color: ${(props) => props.color || "#FFFFFF"};
  cursor: pointer;
  width: 110px;
  height: 35px;
  margin-right: 10px;
  margin-left: 10px;
  border-radius: 10px;
  @media (min-width: 600px) {
    flex-direction: row;
    gap: 10px;
  }
`;

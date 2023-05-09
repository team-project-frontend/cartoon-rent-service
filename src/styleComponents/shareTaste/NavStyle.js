import styled from "styled-components";

export const Nav = styled.nav`
  margin-bottom: 30px;
`;
export const List = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  font-family: "Noto Sans";
  cursor: pointer;
  font-size: 13px;
  text-align: center;
  color: #bebebe;
  margin-bottom: 5px;
  ${({ active }) =>
    active &&
    `
    font-weight: bold;
    text-decoration: underline;
  `};
`;
export const Circle = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #bebebe;
  margin-top: 10px;
  margin: auto;
`;
export const ItemWrapper = styled.div`
  display: block;
  margin-right: 40px;

  &:hover ${Item} {
    color: #169ef9;
  }

  &:hover ${Circle} {
    background-color: #169ef9;
  }
`;

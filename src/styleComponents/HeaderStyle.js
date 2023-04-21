import styled from "styled-components";

export const HeaderContainer = styled.section`
  background: #ffffff;
  border-bottom: 1px solid;
  width: 100%;
  font-family: "Cafe24Ssurround";
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  & > .logoArea {
    width: 170px;
    height: 80px;
    background: ${(props) => `url(${props.props}) center no-repeat`};
    text-align: center;
    line-height: 80px;
    font-size: 24px;
  }
  & > .buttonArea {
    position: relative;
    margin-right: 10px;
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
  & > .buttonArea > span {
    margin: 2.5px;
    position: absolute;
    border: 3px solid #555555;
    border-radius: 5px;
    width: 20px;
    display: block;
    height: 20px;
    transition: 0.2s all ease-in;
    text-indent: -9999px;
  }
  & > .buttonArea > span:nth-child(1) {
    top: 0;
    left: 0;
  }
  & > .buttonArea > span:nth-child(2) {
    top: 0;
    right: 0;
  }
  & > .buttonArea > span:nth-child(3) {
    top: 25px;
    left: 0;
  }
  & > .buttonArea > span:nth-child(4) {
    top: 25px;
    left: 25px;
    border-radius: 50px;
    border: 3px solid #ff8f50 !important;
  }
  & > .buttonArea:hover > span:nth-child(1) {
    left: 25px;
  }
  & > .buttonArea:hover > span:nth-child(2) {
    top: 25px;
  }
  & > .buttonArea:hover > span:nth-child(3) {
    top: 0px;
  }
  & > .buttonArea:hover > span:nth-child(4) {
    left: 0px;
  }
`;

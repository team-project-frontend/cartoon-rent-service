import React, { useCallback, useState } from "react";
import { HeaderContainer } from "../styleComponents/HeaderStyle"; //헤더스타일
import Nav from "./Nav";
import dummyImg from "../assets/images/dummy.png";

const Header = ({ onClick }) => {
  return (
    <>
      <HeaderContainer props={dummyImg}>
        <div className="logoArea">Rentoon</div>
        <div className="buttonArea" onClick={onClick}>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
        </div>
      </HeaderContainer>
    </>
  );
};

export default Header;

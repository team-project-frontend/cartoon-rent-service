import React, { useCallback, useState } from "react";
import { HeaderContainer } from "../styleComponents/HeaderStyle"; //헤더스타일
import Nav from "./Nav";
import logo from "../assets/images/logo.png";
import { useSetRecoilState } from "recoil";
import userState from "../store/userState";
import { useCookies } from "react-cookie";
import API from "../utiles/api";
const Header = ({ onClick }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["name"]);

  return (
    <>
      <HeaderContainer props={logo}>
        <div className="logoArea"></div>
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

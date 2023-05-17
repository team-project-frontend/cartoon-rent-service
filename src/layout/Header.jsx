import React, { useCallback, useState } from "react";
import { HeaderContainer } from "../styleComponents/HeaderStyle"; //헤더스타일
import Nav from "./Nav";
import dummyImg from "../assets/images/dummy.png";
import { useSetRecoilState } from "recoil";
import userState from "../store/userState";
import { useCookies } from "react-cookie";
const Header = ({ onClick }) => {
  const logOutState = useSetRecoilState(userState);
  const [cookies, setCookie, removeCookie] = useCookies(["name"]);
  const handleKakaoLogout = () => {
    if (window.Kakao) {
      console.log(window.Kakao.Auth);
      window.Kakao.Auth.logout(() => {
        console.log("로그아웃");
        logOutState((state) => ({
          ...state,
          isLogin: false,
          name: "",
          access_token: "",
        }));
        removeCookie("refresh_token");
      });
    }
  };
  return (
    <>
      <HeaderContainer props={dummyImg}>
        <div className="logoArea">Rentoon</div>
        <button onClick={handleKakaoLogout}>로그아웃</button>
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

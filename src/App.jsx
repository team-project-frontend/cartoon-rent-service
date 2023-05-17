import React, { useCallback, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Client from "./Client";
import "./index.css";
import Error from "./components/Error";
import Login from "./pages/Login";
import Join from "./pages/Join";
import SignUp from "./pages/SignUp";
import { Toast } from "./utiles/toast";
import { useRecoilValue, useSetRecoilState } from "recoil";
import userState from "./store/userState";
import { useCookies } from "react-cookie";
function App() {
  const [cookie] = useCookies(["refresh_token"]);
  const globalValue = useRecoilValue(userState);
  const loginState = useSetRecoilState(userState); // 값만 변경 시키기

  useEffect(() => {
    console.log(globalValue, "globalValue");
  }, [globalValue]);

  useEffect(() => {
    if (window.Kakao) {
      window.Kakao.init("b49e4e1e3fb0885c87c93cdfa9f309c3");
      console.log(window.Kakao, "카카오 sdk 확인");
      getKakaoToken();
    } else console.error("Kakao SDK가 로드되지 않았습니다.");
  }, []);

  const getKakaoToken = () => {
    console.log(
      window.Kakao.Auth.login({
        success: (res) => console.log("성공"),
      }),
      "dd"
    );
    window.Kakao.Auth.login({
      success: (res) => console.log("성공"),
    });
    Kakao.Auth.login({
      success: (res) => {
        console.log(res, "res");
        loginState((state) => ({
          ...state,
          isLogin: true,
          access_token: res.access_token,
        }));
      },
      fail: (error) => {
        console.error(error, "에러");
      },
    });

    // if (cookie.refresh_token) {

    // }
  };

  return (
    <>
      {!globalValue.isLogin ? (
        <>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/*" element={<Error />} />
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<Join />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
          <Toast />
        </>
      ) : (
        // <Client />
        <Routes>
          <Route path="/*" element={<Client />} />
        </Routes>
      )}
    </>
  );
}

export default App;

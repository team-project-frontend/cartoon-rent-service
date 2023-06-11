import React, { useCallback, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Client from "./Client";
import "./index.css";
import Error from "./components/Error";
import Login from "./pages/Login";
import Join from "./pages/Join";
import SignUp from "./pages/SignUp";
import FindInfo from "./pages/FindInfo";
import { Toast } from "./utiles/toast";
import { useRecoilValue, useSetRecoilState } from "recoil";
import userState from "./store/userState";
import { useCookies } from "react-cookie";
import Header from "./layout/Header";
import Nav from "./layout/Nav";
function App() {
  const [cookie] = useCookies();
  const globalValue = useRecoilValue(userState);
  const loginState = useSetRecoilState(userState); // 값만 변경 시키기

  const [menuToggle, setMenuToggle] = useState(false);

  const onClick = useCallback(() => {
    setMenuToggle((state) => !state);
    console.log(menuToggle);
  }, [menuToggle]);

  useEffect(() => {
    console.log(globalValue, "globalValue");

    if (cookie.access_token !== undefined) {
      loginState((state) => ({
        ...state,
        isLogin: true,
        name: "",
        access_token: "",
      }));
    }
  }, []);

  useEffect(() => {
    if (window.Kakao) {
      window.Kakao.init("b49e4e1e3fb0885c87c93cdfa9f309c3");
      console.log(window.Kakao, "카카오 sdk 확인");
    } else console.error("Kakao SDK가 로드되지 않았습니다.");
  }, []);

  return (
    <>
      {!globalValue.isLogin ? (
        <>
          {menuToggle ? (
            <Nav onClick={onClick} />
          ) : (
            <>
              <Header onClick={onClick} />
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/*" element={<Error />} />
                <Route path="/login" element={<Login />} />
                <Route path="/join" element={<Join />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/findInfo" element={<FindInfo />} />
              </Routes>
            </>
          )}

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

import React from "react";
import { useNavigate } from "react-router-dom";
import API from "../utiles/api";
import useInput from "../hooks/useInput";
import { error } from "../utiles/toast";
import userState from "../store/userState";

import {
  useSetRecoilState, // 렌더링 불필요시 : getter & setter 방식 오브젝트 프로퍼티 get , set 후 값만 수정 (인풋같은거 사용)
  useResetRecoilState,
} from "recoil";
import axios from "axios";
import { useCookies } from "react-cookie";
const Login = () => {
  const loginState = useSetRecoilState(userState); // 값만 변경 시키기
  const resetState = useResetRecoilState(userState); // 디폴트값으로 값 변경
  const [value, changehandler] = useInput({
    email: "",
    password: "",
  });
  const [cookie, setCookie] = useCookies(["name"]);
  const navigate = useNavigate();
  const isSignUp = () => navigate("/signup");
  const expirationDate = new Date();
  expirationDate.setMinutes(expirationDate.getMinutes() + 1);

  const handleKakaoLogin = () => {
    if (window.Kakao) {
      Kakao.Auth.login({
        success: (res) => {
          console.log(res, "res");
          console.log(res.access_token, "카카오 엑세스 토큰");
          console.log(res.refresh_token, "카카오 리프레쉬 토큰");

          loginState((state) => ({
            ...state,
            isLogin: true,
            access_token: res.access_token,
          })); //전역변수에 엑세스 토큰 저장 로그인 상태 true 로 변경

          setCookie("refresh_token", res.refresh_token, {
            maxAge: res.refresh_token_expires_in,
          }); // 리프레쉬 쿠키 설정

          navigate("/");
        },
        fail: (error) => {
          console.error(error, "에러");
        },
      });
    }
  };
  const isLogin = async () => {
    const res = await API.get("/users");
    try {
      loginState((state) => ({ ...state, isLogin: true, name: "ddd" }));
      navigate("/");
    } catch (err) {
      console.log(err.response.data);
    } finally {
      console.log(res);
    }
  };

  return (
    <>
      <div>로그인 페이지</div>
      <input
        type="email"
        onChange={(e) => {
          changehandler(e, "email");
        }}
      />
      <br />
      <input
        type="password"
        onChange={(e) => {
          changehandler(e, "password");
        }}
      />
      <br />

      <button onClick={isLogin}>로그인</button>
      <button onClick={handleKakaoLogin}>카카오 간편로그인</button>
      <p style={{ fontSize: "10px", cursor: "pointer" }} onClick={isSignUp}>
        가입 페이지
      </p>
    </>
  );
};

export default Login;

import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>로그인 페이지</div>
      <button
        onClick={() => {
          navigate("/join");
        }}
      >
        가입
      </button>
      <br />
      <br />
      App.jsx setIsLogin(true) 로 변경시 임시 로그인입니다
    </>
  );
};

export default Login;

import React from "react";
import { useNavigate } from "react-router-dom";
import Counter from "./Counter";

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
      <Counter />
    </>
  );
};

export default Login;

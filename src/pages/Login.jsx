import React from "react";
import { useNavigate } from "react-router-dom";
import Counter from "./Counter";
import API from "../utiles/api";

const Login = () => {
  const navigate = useNavigate();

  const isLogin = async () => {
    const res = await API.get("/users");
    console.log(res.data, "ddd");
  };
  const isJoin = () => navigate("/join");

  return (
    <>
      <div>로그인 페이지</div>
      <button onClick={isLogin}>로그인</button>
      <button onClick={isJoin}>가입</button>
      <Counter />
    </>
  );
};

export default Login;

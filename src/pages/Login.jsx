import React from "react";
import { useNavigate } from "react-router-dom";
import Counter from "./Counter";
import API from "../utiles/api";
import useInput from "../hooks/useInput";
import { error } from "../utiles/toast";

const Login = () => {
  const [value, changehandler, setValue] = useInput({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const isJoin = () => navigate("/join");
  const isLogin = async () => {
    const res = await API.get("/users");
    try {
      const emailTest = res.data.filter(
        (current) => current.email === value.email
      );
      const pwTest = res.data.filter(
        (current) => current.password === value.password
      );
      if (emailTest.length === 0) return error("아이디 틀려서 로그인못함");
      if (pwTest.length === 0) return error("비번 틀려서 로그인못함");
      //더비양식입니다
    } catch (err) {
      console.log(err.response.data);
    } finally {
      console.log(res.data);
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
      <p style={{ fontSize: "10px", cursor: "pointer" }} onClick={isJoin}>
        가입 페이지
      </p>
    </>
  );
};

export default Login;

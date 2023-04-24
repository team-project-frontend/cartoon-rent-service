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

const Login = () => {
  const loginHandler = useSetRecoilState(userState); // 값만 변경 시키기
  const resetState = useResetRecoilState(userState); // 디폴트값으로 값 변경
  const [value, changehandler] = useInput({
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
      loginHandler((state) => ({ ...state, isLogin: true, name: "ddd" }));
      navigate("/");
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

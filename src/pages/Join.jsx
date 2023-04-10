import React, { useCallback } from "react";
import useInput from "../hooks/useInput";
import { error, success } from "../utiles/toast";
import API from "../utiles/api";
import Navigate from "../hooks/Navigate";

const Join = () => {
  const [value, changehandler, setValue] = useInput({
    email: "",
    password: "",
  });

  const isJoin = async () => {
    const res = await API.post("/users", value);
    console.log(res);
  };
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (value.email === "") return error("이베일을 입력해주세요");
      if (value.password === "") return error("비밀번호 입력해주세요");
      isJoin();
    },
    [value]
  );
  const navigate = Navigate();
  return (
    <div>
      <p>가입 페이지</p>
      <form>
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
        <button type="submit" onClick={onSubmit}>
          회원가입
        </button>
        <p
          style={{ fontSize: "10px", cursor: "pointer" }}
          onClick={() => {
            navigate("/login");
          }}
        >
          로그인 페이지
        </p>
      </form>
    </div>
  );
};

export default Join;

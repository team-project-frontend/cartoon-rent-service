import React from "react";

import { useResetRecoilState } from "recoil";
import userState from "../store/userState";
import Navigate from "../hooks/Navigate";

const Main = () => {
  const logoutHandler = useResetRecoilState(userState);
  const navigate = Navigate();
  return (
    <>
      <div>메인페이지</div>
      <div
        onClick={() => {
          navigate("/test");
        }}
      >
        로그인상태에서 test페이지 이동
      </div>
      <button onClick={logoutHandler}>로그아웃</button>
    </>
  );
};

export default Main;

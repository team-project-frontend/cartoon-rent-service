import React from "react";
import Navigate from "../hooks/Navigate";

const Error = () => {
  const navigate = Navigate();
  return (
    <div>
      에러페이지
      <br />
      존재하지 않는 페이지 입니다.
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        back
      </button>
    </div>
  );
};

export default Error;

import React from "react";
import { Outlet } from "react-router-dom";

const Contents = () => {
  // 리액트 17 인가 ({children}) 을 Outlet 으로 Contents로 감싼 props들이 아울렛에 표시됩니다
  return (
    <>
      <Outlet />
    </>
  );
};

export default Contents;

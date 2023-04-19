import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Contents = () => {
  // 이전 리액트 17 ({children}) 과 동작원리 비슷합니다 라우터로 감싸다는 차이가있습니다
  return (
    <>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default Contents;

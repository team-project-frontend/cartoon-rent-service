import React from "react";
import { Routes, Route } from "react-router-dom";
import Reservation from "../components/mainComponent/Reservation";
import ShareTaste from "../components/mainComponent/shareTaste/ShareTaste";
import FavoriteContents from "../components/mainComponent/favorite/FavoriteContents";
import FavoriteContent from "../components/mainComponent/favorite/FavoriteContent";
const Main = () => {
  return (
    <>
      <div className="mainWrap">
        <div
          style={{
            width: "100%",
            height: "500px",
            background: " #ddd",
            textAlign: "center",
            lineHeight: "250px",
            fontSize: "36px",
            borderRadius: "0px 0px 150px 0px",
          }}
        >
          배너영역
        </div>
        {/* 영역분리 */}
        <Reservation />
        {/* 작업하실 컴포넌트 여기에 추가해주세여ㅕ */}
        {/* <Routes>
          <Route path="/" element={<FavoriteContents />}>
            <Route path="/" element={<FavoriteContent />} />
            <Route path="/bybookstore" element={<FavoriteContent />} />
            <Route path="/byauthor" element={<FavoriteContent />} />
          </Route>
        </Routes> */}

        <ShareTaste />
      </div>
    </>
  );
};

export default Main;

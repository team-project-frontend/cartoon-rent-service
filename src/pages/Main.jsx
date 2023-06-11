import React from "react";
import { Routes, Route } from "react-router-dom";
import Reservation from "../components/mainComponent/Reservation";

import ShareTaste from "../components/mainComponent/shareTaste/ShareTaste";
import MyFavoriteComics from "../components/mainComponent/myFavoriteComics/MyFavoriteComics";
import Banner from "../components/mainComponent/Banner";
import FavoriteContents from "../components/mainComponent/favorite/FavoriteContents";
import FavoriteContent from "../components/mainComponent/favorite/FavoriteContent";
import Favorite from "./Favorite";
const Main = () => {
  return (
    <>
      <div className="mainWrap">
        <Banner />
        {/* 영역분리 */}
        <Reservation />
        <Favorite />
        {/* 작업하실 컴포넌트 여기에 추가해주세여ㅕ */}
        {/* <Routes>
          <Route path="/" element={<FavoriteContents />}>
            <Route path="/" element={<FavoriteContent />} />
            <Route path="/bybookstore" element={<FavoriteContent />} />
            <Route path="/byauthor" element={<FavoriteContent />} />
          </Route>
        </Routes> */}
        <ShareTaste />
        <MyFavoriteComics />
      </div>
    </>
  );
};

export default Main;

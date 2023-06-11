import React from "react";
import { BannerContainer } from "../../styleComponents/MainStyle";
import { Media768 } from "../../utiles/media";

const Banner = () => {
  return (
    <BannerContainer props={Media768}>
      <div className="slideCon">
        <h1>오픈 이벤트 🎉</h1>
        <h3 className="sub">이용권 50% 할인</h3>
      </div>
      <div className="searchBar">
        <div className="searchCon">
          <input type="text" placeholder="검색어를 입력하세요." />
          <button>버튼</button>
        </div>
        <div className="categoryCon">
          <button className="category_btn"># 로맨스</button>
          <button className="category_btn"># 액션</button>
          <button className="category_btn"># 로맨스</button>
          <button className="category_btn"># 액션</button>
        </div>
      </div>
    </BannerContainer>
  );
};

export default Banner;

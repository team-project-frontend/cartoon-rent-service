import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import {
  FavoriteWrapper,
  FavoriteTopArea,
  FavoriteList,
  FavoriteContentWrapper,
  FavoriteContentSideArea,
  FavoriteContentSideTitle,
  FavoriteContentSideButtonList,
  FavoriteBottomArea,
  FavoriteBottomContent,
  FavoriteBottomKeywordArea,
} from "../../../styleComponents/MainStyle";

export default function FavoriteContents(props) {
  const navigate = useNavigate();
  function navigateToCategory(category) {
    navigate(`${category}`);
  }

  return (
    <FavoriteWrapper>
      <FavoriteTopArea id="top-area">
        <div style={{ fontSize: "40px", flexBasis: "60px" }}>
          당신의 취향은?
        </div>
        <div style={{ fontSize: "18px", flexBasis: "30px" }}>
          취향별로 골라보는 만화책! 최고 👏👏😀😀👏
        </div>
        <FavoriteList id="list">
          <div id="icon">판타지</div>
          <div id="icon">액션</div>
          <div id="icon">로맨스</div>
          <div id="icon">미스터리</div>
          <div id="icon">코미디</div>
        </FavoriteList>
      </FavoriteTopArea>
      <FavoriteContentWrapper id="wrapper">
        <FavoriteContentSideArea id="side-area">
          <FavoriteContentSideTitle id="sideTitle">
            <p>카테고리별</p>
            <p>인기 순위</p>
          </FavoriteContentSideTitle>
          <FavoriteContentSideButtonList id="sideButtonList">
            <button
              style={{
                backgroundColor: "#169EF9",
                color: "white",
                border: "none",
              }}
              onClick={() => navigateToCategory("/")}
            >
              #작품별 🎨
            </button>
            <button
              style={{
                backgroundColor: "white",
                border: "2px solid #169EF9",
              }}
              onClick={() => navigateToCategory("/bybookstore")}
            >
              #책방별 🏰
            </button>
            <button
              style={{
                backgroundColor: "white",
                border: "2px solid #169EF9",
              }}
              onClick={() => navigateToCategory("/byauthor")}
            >
              #작가별 🖊️
            </button>
          </FavoriteContentSideButtonList>
        </FavoriteContentSideArea>
        {/* <Outlet /> */}
      </FavoriteContentWrapper>
      <FavoriteBottomArea id="bottom-area">
        <FavoriteBottomContent id="bottom-content">
          <h1>
            <select>
              <option value="박진감 넘치는">박진감 넘치는</option>
              <option value="시간 가는줄 모르는">시간 가는줄 모르는</option>
            </select>
            분위기의
          </h1>
          <h1 style={{ marginTop: "20px" }}>
            <select>
              <option value="판타지">판타지</option>
              <option value="액션">액션</option>
              <option value="로맨스">로맨스</option>
              <option value="미스터리">미스터리</option>
              <option value="코미디">코미디</option>
            </select>
            만화책이 읽고싶어요.
          </h1>
          <FavoriteBottomKeywordArea>
            <button style={{ backgroundColor: "white", margin: "0 18px" }}>
              <h3 style={{ color: "#169EF9" }}>키워드별 랭킹 보기</h3>
            </button>
            <button style={{ backgroundColor: "#169EF9" }}>
              <h3 style={{ color: "#C6E8FF" }}>키워드로 검색하기</h3>
            </button>
          </FavoriteBottomKeywordArea>
        </FavoriteBottomContent>
        <div
          id="slider"
          style={{ height: "400px", backgroundColor: "pink", fontSize: "60px" }}
        >
          slider 영역
        </div>
      </FavoriteBottomArea>
      <div className="paperBg"></div>
    </FavoriteWrapper>
  );
}

import React from "react";
import icon_1 from "../assets/images/nav_icon-01.svg";
import icon_2 from "../assets/images/nav_icon-02.svg";
import icon_3 from "../assets/images/nav_icon-03.svg";
import { useRecoilValue } from "recoil";
import userState from "../store/userState";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Media768 } from "../utiles/media";

const Nav = () => {
  const globalValue = useRecoilValue(userState); //리코일 전역변수 로그인 여부 조회용도
  const [activeButton, setActiveButton] = useState(null); //nav버튼 토글 (수정필요)

  const onclick = () => alert("준비중입니다");
  const bubbling = (e) => e.stopPropagation();
  const onClickDrop = (e) => {
    const { classList } = e.currentTarget;
    if (activeButton) activeButton.classList.remove("active");
    if (activeButton !== e.currentTarget) {
      classList.add("active");
      setActiveButton(e.currentTarget);
    } else setActiveButton(null);
  };
  return (
    <>
      <section className="main-section-container">
        <div
          className="pt-50 flex"
          style={{
            justifyContent: "space-between",
          }}
        >
          {!globalValue.isLogin ? (
            <div
              className="main-banner-container"
              style={
                Media768() ? { width: "100%" } : { width: " calc(50% - 10px)" }
              }
            >
              <p>
                로그인 후 <br /> 더 많은 혜택을 누리세요.
              </p>
            </div>
          ) : (
            <div
              className="main-banner-container penalty"
              style={
                Media768() ? { width: "100%" } : { width: " calc(50% - 10px)" }
              }
            >
              <p>로그인 후 패널티 있을경우</p>
            </div>
          )}
          <div
            className="main-button-container"
            style={
              Media768()
                ? { width: "100%", marginTop: "20px" }
                : { width: " calc(50% - 10px)" }
            }
          >
            <button className="main-btn-style" onClick={onclick}>
              <img src={icon_1} alt="" width="50px" height="50px" />
              <p style={{ flexGrow: "1" }}>충전소</p>
            </button>
            <button className="main-btn-style" data-id="free" onClick={onclick}>
              <img src={icon_2} alt="" width="50px" height="50px" />
              <p style={{ flexGrow: "1" }}>무료충전</p>
            </button>
            <button className="main-btn-style" onClick={onclick}>
              <img src={icon_3} alt="" width="50px" height="50px" />
              <p style={{ flexGrow: "1" }}>친구 초대하고 무료 티켓 받기</p>
            </button>
          </div>
        </div>
        <div className="dropDown-container" data-id="mybook">
          <div
            className="dropDown-div"
            onClick={(e) => {
              onClickDrop(e);
            }}
          >
            <p className="title">내 책방</p>
            <ul
              onClick={(e) => {
                bubbling(e);
              }}
            >
              <li>
                <Link to="/">근처 책방 찾기</Link>
              </li>
              <li>
                <Link to="/">취향 리스트</Link>
              </li>
              <li>
                <Link to="/"> 대여 리스트</Link>
              </li>
              <li>
                <Link to="/">취향 공유하기</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="dropDown-container">
          <div
            className="dropDown-div"
            onClick={(e) => {
              onClickDrop(e);
            }}
          >
            <p className="title">내 정보</p>
            <ul
              onClick={(e) => {
                bubbling(e);
              }}
            >
              <li>
                <Link to="/"> 개인 정보 수정</Link>
              </li>
              <li>
                <Link to="/"> 티켓 내역</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="dropDown-container">
          <div
            className="dropDown-div"
            onClick={(e) => {
              onClickDrop(e);
            }}
          >
            <p className="title">고객 센터</p>
            <ul
              onClick={(e) => {
                bubbling(e);
              }}
            >
              <li>
                <Link to="/"> 진행중인 이벤트</Link>
              </li>
              <li>
                <Link to="/"> 자주 묻는 질문</Link>
              </li>
              <li>
                <Link to="/"> 공지 사항</Link>
              </li>
              <li>
                <Link to="/"> 1:1 문의</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Nav;

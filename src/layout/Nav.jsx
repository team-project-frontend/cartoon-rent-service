import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import userState from "../store/userState";
import { Link } from "react-router-dom";
import { Media768 } from "../utiles/media";
import { NavContainer } from "../styleComponents/NavStyle"; //스타일
import closeIcon from "../assets/images/close.png";
import profileImg from "../assets/images/도토리.png";
import penaltyImg from "../assets/images/penalty.png";
import btnIcon from "../assets/images/btn.png";
import icon_1 from "../assets/images/nav_icon-01.svg";
import icon_2 from "../assets/images/nav_icon-02.svg";
import icon_3 from "../assets/images/nav_icon-03.svg";
import logout from "../assets/images/logout.png";
import { useCookies } from "react-cookie";

const Nav = ({ onClick }) => {
  const globalValue = useRecoilValue(userState); //리코일 전역변수 로그인 여부 조회용도
  const logOutState = useSetRecoilState(userState);

  const [activeButton, setActiveButton] = useState(null); //nav버튼 토글 (수정필요)
  const [cookies, setCookie, removeCookie] = useCookies(["access_token"]);

  const logoutHandle = () => {
    console.log(cookies.access_token);
    // if (window.Kakao) {
    //   window.Kakao.Auth.logout(() => {
    //     console.log("로그아웃");
    //     logOutState((state) => ({
    //       ...state,
    //       isLogin: false,
    //       name: "",
    //       access_token: "",
    //     }));
    //   });
    // }
    removeCookie("access_token");
    removeCookie("refresh_token");
  };

  const propsState = {
    profileImg,
    penaltyImg,
    btnIcon,
    logout,
  };
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
      <NavContainer
        props={propsState}
        className="fade-in"
        style={{ zIndex: 2 }}
      >
        <div className="headerArea">
          {!globalValue.isLogin ? (
            <div className="buttonArea">
              <p className="pc-logo">로고</p>
              <div className="buttonItem loginButton">
                <Link to="/login">로그인</Link>
              </div>
              <div className="buttonItem joinButton">
                <Link to="/signup">회원가입</Link>
              </div>
            </div>
          ) : (
            <>
              <div className="loginStatus">
                {!Media768() && <p className="pc-logo">로고</p>}
                <div
                  className="profileArea"
                  style={
                    !Media768()
                      ? { width: "calc(100% - 115px)" }
                      : { width: "calc(100% - 10px)" }
                  }
                >
                  <span className="profile"></span>
                  <p className="nickname">
                    오이짱아찌 <span style={{ color: "#755B52" }}>님</span>
                  </p>
                  {Media768() ? (
                    <p className="logoutButton" onClick={logoutHandle}>
                      로그아웃
                    </p>
                  ) : (
                    <p
                      className="
           ticket"
                    >
                      <b>
                        보유한 이용권{" "}
                        <span style={{ color: "#ff8f50" }}>3</span>장
                      </b>
                      <b>
                        대여 중인 책 총
                        <span style={{ color: "#ff8f50" }}>3</span>권
                      </b>
                    </p>
                  )}
                </div>
              </div>
            </>
          )}

          <div className="activeArea">
            {globalValue.isLogin ? (
              <p
                className={
                  !Media768()
                    ? "logoutButton left-visivile"
                    : "logoutButton left-hidden"
                }
                onClick={logoutHandle}
              >
                로그아웃
              </p>
            ) : null}

            <div className="closeButton " onClick={onClick}>
              <img src={closeIcon} alt="닫기 버튼" />
            </div>
          </div>
        </div>

        <div className="wrap">
          <div className="flexArea">
            {!globalValue.isLogin ? (
              <div
                className="statusArea"
                style={
                  Media768()
                    ? { width: "100%" }
                    : { width: " calc(50% - 10px)" }
                }
              >
                <p>
                  로그인 후 <br /> 더 많은 혜택을 누리세요.
                </p>
              </div>
            ) : (
              <div
                className="statusArea penalty"
                style={
                  Media768()
                    ? { width: "100%" }
                    : { width: " calc(50% - 10px)" }
                }
              >
                <p>로그인 후 패널티 있을경우</p>
              </div>
            )}
            <div
              className="buttonArea"
              style={
                Media768()
                  ? { width: "100%", marginTop: "20px" }
                  : { width: "calc(50% - 10px)" }
              }
            >
              <button className="btnStyle" onClick={onclick}>
                <img src={icon_1} alt="" width="50px" height="50px" />
                <p style={{ flexGrow: "1" }}>충전소</p>
              </button>
              <button className="btnStyle" onClick={onclick}>
                <img src={icon_2} alt="" width="50px" height="50px" />
                <p style={{ flexGrow: "1" }}>무료충전</p>
              </button>
              <button className="btnStyle" onClick={onclick}>
                <img src={icon_3} alt="" width="50px" height="50px" />
                <p style={{ flexGrow: "1" }}>친구 초대하고 무료 티켓 받기</p>
              </button>
            </div>
          </div>
          <div className="dropDownArea">
            <div
              className="dropDownItem"
              onClick={(e) => {
                onClickDrop(e);
              }}
            >
              <p className="btnIcon">내 책방</p>
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
          <div className="dropDownArea">
            <div
              className="dropDownItem"
              onClick={(e) => {
                onClickDrop(e);
              }}
            >
              <p className="btnIcon">내 정보</p>
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
          <div className="dropDownArea">
            <div
              className="dropDownItem"
              onClick={(e) => {
                onClickDrop(e);
              }}
            >
              <p className="btnIcon">고객 센터</p>
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
        </div>
      </NavContainer>
    </>
  );
};

export default Nav;

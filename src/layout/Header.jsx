import React from "react";
import { Link } from "react-router-dom";
import close from "../assets/images/close.png";
import { useRecoilValue } from "recoil";
import userState from "../store/userState";
import { Media768 } from "../utiles/media";

const Header = () => {
  const globalValue = useRecoilValue(userState);

  return (
    <div className="header-container">
      {!globalValue.isLogin ? (
        <div className="button-div">
          <div className="loginButton">
            <Link to="/login">로그인</Link>
          </div>
          <div className="joinButton">
            <Link to="/join">회원가입</Link>
          </div>
        </div>
      ) : (
        <>
          {!Media768() && <p className="pc-logo">로고</p>}
          <div className="islogin-button-div">
            <div className="profile-box">
              <span className="profile"></span>
              <p className="nickname">
                오이짱아찌 <span style={{ color: "#C6E8FF" }}>님</span>
              </p>
              <p
                className="
               ticket"
              >
                <b>
                  보유한 이용권 <span style={{ color: "#169EF9" }}>3</span>장
                </b>
                <b>
                  대여 중인 책 총 <span style={{ color: "#169EF9" }}>3</span>권
                </b>
              </p>
            </div>
          </div>
        </>
      )}

      <div className="active-div">
        <div className="close-div">
          <img src={close} alt="닫기 버튼" />
        </div>
      </div>
    </div>
  );
};

export default Header;

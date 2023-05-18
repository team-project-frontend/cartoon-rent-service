import React from "react";
import { useNavigate } from "react-router-dom";
import API from "../utiles/api";
import useInput from "../hooks/useInput";
import { error } from "../utiles/toast";
import userState from "../store/userState";
import { Media768 } from "../utiles/media";
import emailIcon from "../assets/images/email_icon.png";
import passwordIcon from "../assets/images/password_icon.png";
import {
  useSetRecoilState, // 렌더링 불필요시 : getter & setter 방식 오브젝트 프로퍼티 get , set 후 값만 수정 (인풋같은거 사용)
} from "recoil";

import { useCookies } from "react-cookie";
import { LoginContainer } from "../styleComponents/loginStyle";
const Login = () => {
  const loginState = useSetRecoilState(userState); // 값만 변경 시키기
  const [value, changehandler] = useInput({
    email: "",
    password: "",
  });
  const [cookie, setCookie] = useCookies(["name"]);
  const navigate = useNavigate();
  const isSignUp = () => navigate("/signup");
  const expirationDate = new Date();
  expirationDate.setMinutes(expirationDate.getMinutes() + 1);

  const handleKakaoLogin = () => {
    if (window.Kakao) {
      Kakao.Auth.login({
        success: (res) => {
          console.log(res, "res");
          console.log(res.access_token, "카카오 엑세스 토큰");
          console.log(res.refresh_token, "카카오 리프레쉬 토큰");

          loginState((state) => ({
            ...state,
            isLogin: true,
            access_token: res.access_token,
          })); //전역변수에 엑세스 토큰 저장 로그인 상태 true 로 변경

          setCookie("refresh_token", res.refresh_token, {
            maxAge: res.refresh_token_expires_in,
          }); // 리프레쉬 쿠키 설정

          navigate("/");
        },
        fail: (error) => {
          console.error(error, "에러");
        },
      });
    }
  };
  const isLogin = async () => {
    const res = await API.get("/users");
    try {
      loginState((state) => ({ ...state, isLogin: true, name: "ddd" }));
      navigate("/");
    } catch (err) {
      console.log(err.response.data);
    } finally {
      console.log(res);
    }
  };

  const propsState = {
    emailIcon,
    passwordIcon,
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "calc(100vh - 80px)",
          background: "#FFF5EB",
        }}
      >
        <div
          style={
            Media768()
              ? {
                  position: "relative",
                  top: "50px",
                  left: "50%",
                  transform: "translate(-50%, 0px)",
                }
              : {
                  position: "relative",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }
          }
        >
          <LoginContainer props={propsState}>
            <div
              style={
                Media768()
                  ? {
                      padding: "50px 20px",
                    }
                  : { padding: "40px 50px" }
              }
            >
              <h1>LOGIN</h1>
              <div className="loginform">
                <input
                  type="email"
                  className="emailValue"
                  placeholder="아이디"
                  onChange={(e) => {
                    changehandler(e, "email");
                  }}
                />
                <br />
                <input
                  style={{ margin: "10px 0 20px" }}
                  placeholder="비밀번호"
                  className="passwordValue"
                  type="password"
                  onChange={(e) => {
                    changehandler(e, "password");
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="storage"
                      className="checkinput"
                    />
                    <label htmlFor="storage" className="storage">
                      로그인 정보 저장
                    </label>
                  </div>

                  <span className="help">도움이 필요신가요?</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    gap: "10px",
                    paddingTop: "60px",
                  }}
                >
                  <button onClick={isSignUp} className="signupBtn">
                    회원가입
                  </button>
                  <button onClick={isLogin} className="loginBtn">
                    로그인
                  </button>
                </div>
                {/* <button onClick={handleKakaoLogin}>카카오 간편로그인</button> */}
              </div>
            </div>
          </LoginContainer>
        </div>
      </div>
    </>
  );
};

export default Login;

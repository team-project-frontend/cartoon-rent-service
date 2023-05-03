import React, { useState } from "react";
import API from "../utiles/api";
import { error, success } from "../utiles/toast";
import axios from "axios";

function SignUp() {
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [passwordSuccess, setPasswordSuccess] = useState(false);
  const [confirmPasswordSuccess, setConfirmPasswordSuccess] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [authInfo, setAuthInfo] = useState({
    useremail: "",
    authNumber: "",
    authValid: false,
  });
  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
    useremail: "",
    password: "",
  });

  //input 입력시 값을 userInfo에 저장
  const handleChange = (event) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
  };

  //인증번호요청
  const certificationNumberRequest = async () => {
    const sendEmail = await API.get(
      // "/auth/send_email",
      "/signupAuthentication"
    );
    //사용자 이메일로 인증번호를 생성해서 가져온다.
    try {
      console.log(sendEmail.data);
      if (sendEmail.data) {
        setAuthInfo({
          ...authInfo,
          useremail: sendEmail.data[0].email,
          authNumber: sendEmail.data[0].authNumber,
        });
      }
    } catch (err) {
      debugger;
      console.log(err.response.data);
      setEmailSuccess(false);
    }
  };
  // 이메일 중복체크
  const emailDuplicateCheck = async () => {
    const duplicateCheck = await API.get(
      // "/auth/check_email",
      "/users"
    );
    try {
      if (
        duplicateCheck.data.find((data) => data.email === userInfo.useremail)
      ) {
        //이메일 중복
        // console.log(duplicateCheck.msg);
        document.getElementById("emailDuplicate").style.display = "block";
      } else {
        //가입가능
        document.getElementById("authFail").style.display = "none";
        document.getElementById("emailFail").style.display = "none";
        document.getElementById("emailDuplicate").style.display = "none";
        certificationNumberRequest();
        setEmailSuccess(true);
      }
    } catch (err) {
      console.log(err.response.data);
      setEmailSuccess(false);
    }
  };
  //인증번호 유효성 체크
  const handleAuthCheck = (event) => {
    let inputValue = event.target.value;
    let authNumber = authInfo.authNumber;
    let i = 0;
    while (i < inputValue.length && i < authNumber.length) {
      if (inputValue[i] !== authNumber[i]) {
        document.getElementById("authFail").style.display = "block";
      } else {
        document.getElementById("authFail").style.display = "none";
        document.getElementById("emailFail").style.display = "none";
        document.getElementById("emailDuplicate").style.display = "none";
      }
      i++;
    }
    if (inputValue === authNumber) {
      setEmailSuccess(true);
      setAuthInfo({
        ...authInfo,
        authValid: true,
      });
      document.getElementById("authSuccess").style.display = "block";
    }
  };

  //이메일 유효성 체크
  const validateEmail = () => {
    //debugger;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    //이메일 형식이 맞으면 _emailSuccess가 true
    let _emailSuccess = emailRegex.test(userInfo.useremail);
    // setEmailSuccess(_emailSuccess);
    if (_emailSuccess === false) {
      document.getElementById("emailFail").style.display = "block";
    } else {
      document.getElementById("emailFail").style.display = "none";
      document.getElementById("authFail").style.display = "none";
      document.getElementById("emailDuplicate").style.display = "none";
      //GET  /auth/check_email 여기로 통신을 보내야 한다. 이메일 중복 체크 하는..
      emailDuplicateCheck();
    }
  };
  //비밀번호 유효성 체크
  const validatePassword = () => {
    // 영어 대문자, 소문자, 숫자중에서 8자 이상 12자 이하의 문자열
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,12}$/;
    setPasswordSuccess(passwordRegex.test(userInfo.password));
  };
  //비밀번호 확인 유효성 체크
  const validateConfirmPassword = () => {
    debugger;
    setConfirmPasswordSuccess(userInfo.password === confirmPassword);
  };

  //회원 가입 버튼
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      debugger;
      if (
        emailSuccess === true &&
        authInfo.authValid === true &&
        passwordSuccess === true &&
        confirmPasswordSuccess === true
      ) {
        console.log("가입성공:", userInfo);
      }
      // const res = await API.post("/users", userInfo);
      // console.log(res.data);
      // success("가입되엇습니다");
    } catch (err) {
      // console.log(err.response.data);
      console.log("err:", err);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid black",
        }}
      >
        <label>
          <h3>이름</h3>
          <input
            type="text"
            name="name"
            value={userInfo.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <h3>휴대전화(선택)</h3>
          <input
            type="tel"
            name="phone"
            value={userInfo.phone}
            onChange={handleChange}
            placeholder="선택 입력"
            required
          />
        </label>
        <label>
          <h3>이메일</h3>
          <input
            type="text"
            name="useremail"
            value={userInfo.useremail}
            onChange={handleChange}
            // onBlur={validateEmail}
            placeholder="이메일 입력"
            required
          />
          <a
            href="#"
            id="btnCheck"
            role="button"
            style={{
              backgroundColor: "#169EF9",
              color: "white",
            }}
            onClick={validateEmail}
          >
            <span>인증메일 받기</span>
          </a>
          <div>
            <input
              type="text"
              placeholder="인증번호를 입력하세요"
              onChange={handleAuthCheck}
              name=""
            ></input>
          </div>
          {/* {!emailSuccess && (
            // <IoIosCloseCircle style={{ color: "red", marginLeft: "10px" }} />
            // <span style={{ color: "red", marginLeft: "10px" }}>✖️</span>
            
          )}
          {emailSuccess && userInfo.useremail && (
            // <IoIosCheckmarkCircle
            //   style={{ color: "green", marginLeft: "10px" }}
            // />
            // <span>✅</span>
            
          )} */}
          <span
            id="emailFail"
            style={{ color: "red", marginLeft: "10px", display: "none" }}
          >
            이메일 주소를 다시 확인해주세요.
          </span>
          <span
            id="emailDuplicate"
            style={{ color: "red", marginLeft: "10px", display: "none" }}
          >
            이미 가입된 이메일 주소입니다.
          </span>
          <span
            id="authFail"
            style={{ color: "red", marginLeft: "10px", display: "none" }}
          >
            인증번호가 일치하지 않습니다.
          </span>
          <span
            id="authSuccess"
            style={{ color: "green", marginLeft: "10px", display: "none" }}
          >
            인증번호가 일치
          </span>
          <span
            id="emailSuccess"
            style={{
              display: "none",
              color: "green",
              fontSize: "10px",
            }}
          >
            인증번호를 발송했습니다.(유효시간 30분)
            <br />
            인증번호가 오지 않으면 입력하신 정보가 정확한지 확인하여 주세요.
            <br />
            이미 가입된 이메일은 인증번호를 받을 수 없습니다.
            <br />
          </span>
        </label>

        <label>
          <h3>비밀번호</h3>
          <input
            type="password"
            name="password"
            value={userInfo.password}
            onChange={handleChange}
            onBlur={validatePassword}
            required
          />
          {!passwordSuccess && <span style={{ color: "red" }}>✖️</span>}
          {passwordSuccess && userInfo.password && <span>✅</span>}
        </label>
        <label>
          <h3>비밀번호 재확인</h3>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onBlur={validateConfirmPassword}
            required
          />
          {!confirmPasswordSuccess && <span style={{ color: "red" }}>✖️</span>}
          {confirmPasswordSuccess && userInfo.password && confirmPassword && (
            <span>✅</span>
          )}
        </label>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default SignUp;

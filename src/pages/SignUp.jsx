import React, { useState } from "react";
import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";
import API from "../utiles/api";
import { error, success } from "../utiles/toast";

function SignUp() {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [userInfo, setUserInfo] = useState({
    useremail: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (event) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
  };

  const validateEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    validateInput(emailRegex, userInfo.useremail, setEmailError);
  };
  const validatePassword = () => {
    // 영어 대문자, 소문자, 숫자중에서 8자 이상 12자 이하의 문자열
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,12}$/;
    validateInput(passwordRegex, userInfo.password, setPasswordError);
  };

  const validateInput = (regex, input, setError) => {
    setError(!regex.test(input));
  };

  const validateConfirmPassword = () => {
    setConfirmPasswordError(userInfo.password !== confirmPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await API.post("/users", userInfo);
      console.log(res.data);
      success("가입되엇습니다");
    } catch (err) {
      console.log(err.response.data);
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
          Useremail:
          <input
            type="text"
            name="useremail"
            value={userInfo.useremail}
            onChange={handleChange}
            onBlur={validateEmail}
            placeholder="Email"
            required
          />
          {emailError && (
            <IoIosCloseCircle style={{ color: "red", marginLeft: "10px" }} />
          )}
          {!emailError && userInfo.useremail && (
            <IoIosCheckmarkCircle
              style={{ color: "green", marginLeft: "10px" }}
            />
          )}
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={userInfo.password}
            onChange={handleChange}
            onBlur={validatePassword}
            placeholder="password"
            required
          />
          {passwordError && (
            <IoIosCloseCircle style={{ color: "red", marginLeft: "10px" }} />
          )}
          {!passwordError && userInfo.password && (
            <IoIosCheckmarkCircle
              style={{ color: "green", marginLeft: "10px" }}
            />
          )}
        </label>
        <label>
          ConfirmPassword:
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onBlur={validateConfirmPassword}
            placeholder="Confirm Password"
            required
          />
          {confirmPasswordError && (
            <IoIosCloseCircle style={{ color: "red", marginLeft: "10px" }} />
          )}
          {!confirmPasswordError && userInfo.password && confirmPassword && (
            <IoIosCheckmarkCircle
              style={{ color: "green", marginLeft: "10px" }}
            />
          )}
        </label>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default SignUp;

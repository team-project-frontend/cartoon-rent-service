import styled from "styled-components";

export const LoginContainer = styled.div`
  font-family: "Cafe24Ssurround";
  width: 100%;
  height: 450px;

  h1 {
    color: #ff8f50;
    font-weight: 700;
    font-size: 40px;
    text-align: center;
    margin-bottom: 50px;
  }
  & > div {
    max-width: 450px;
    height: 450px;
    margin: 0 auto;
    padding: 50px;
    background: #fff;
  }
  & .loginform input.emailValue,
  .loginform input.passwordValue {
    padding: 10px 60px;
    width: 100%;
    height: 50px;
    background: #fff5eb;
    border-radius: 15px;
    border: none;
    border: 2px solid #fff5eb;
    font-size: 18px;
  }
  & .loginform input.emailValue {
    background: ${(props) =>
      `url(${props.props.emailIcon}) center no-repeat #fff5eb`};
    background-position: 20px;
  }
  & .loginform input.passwordValue {
    background: ${(props) =>
      `url(${props.props.passwordIcon}) center no-repeat #fff5eb`};
    background-position: 20px;
  }

  & .storage {
    font-size: 13px;
    color: #555555;
    margin-top: 2px;
  }
  & .help {
    font-size: 13px;
    color: #bebebe;
    margin-top: 2px;
  }
  & .checkinput {
    width: 20px;
    height: 20px;
    padding: 0;
    margin: 0;
    appearance: none;
    border: 2px solid #d9d9d9;
    position: relative;
  }
  & input:focus {
    outline: none;
    border: 2px solid #ff8f50;
  }
  & .signupBtn {
    width: 50%;
    height: 51px;
    background: #ffff;
    border: 2px solid #ff8f50;
    border-radius: 15px;
    font-weight: 700;
    font-size: 18px;
    color: #ff8f50;

    cursor: pointer;
  }
  & .loginBtn {
    width: 50%;
    height: 51px;
    background: #ff8f50;
    border: 2px solid #ff8f50;
    border-radius: 15px;
    font-weight: 700;
    font-size: 18px;
    color: #ffffff;
    cursor: pointer;
  }
`;

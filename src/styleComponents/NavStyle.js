import styled from "styled-components";

export const NavContainer = styled.section`
  font-family: "Cafe24Ssurround";
  background: #f2f9ff;
  height: calc(100vh);

  & .active {
    height: 300px !important;
  }
  & > .headerArea {
    display: flex;
    height: 80px;
    background: #cde3f1;
    padding: 0px 10px;
    justify-content: space-between;
  }
  & > .headerArea > .buttonArea {
    display: flex;
    padding: 19.5px 0;
    gap: 10px;
  }
  & > .headerArea > .buttonArea > .buttonItem {
    min-width: 107px;
  }
  & > .headerArea > .buttonArea > .buttonItem > a {
    display: block;
    padding: 10px 15px;
    text-align: center;
    width: 100%;
    font-size: 16px;
    border-radius: 15px;
  }
  & > .headerArea > .buttonArea > .buttonItem.loginButton > a {
    color: #fff;
    border: 2px solid #169ef9;
    background: #169ef9;
  }
  & > .headerArea > .buttonArea > .buttonItem.joinButton > a {
    color: #169ef9;
    border: 2px solid #169ef9;
    background: #cde3f1;
  }

  & > .headerArea > .loginStatus {
    display: flex;
    padding: 15px 0;
    width: 100%;
    padding-right: 25px;
  }
  & > .headerArea > .loginStatus > .profileArea {
    border: 3px solid #169ef9;
    height: 50px;
    border-radius: 40px;
    width: 100%;
    background: #fff;
    display: flex;
    align-items: center;
    padding: 0 3px;
    gap: 10px;
  }

  & > .headerArea > .loginStatus > .profileArea > .profile {
    width: 50px;
    display: block;
    height: 40px;
    border-radius: 50px;
    background: ${(props) => `url(${props.props.profileImg}) center no-repeat`};
  }

  & > .headerArea > .loginStatus > .profileArea > .nickname {
    font-weight: 700;
    font-size: 18px;
    color: #169ef9;
    flex-grow: 1;
    width: 50%;
  }
  & > .headerArea > .loginStatus > .profileArea > .ticket {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 50%;
    color: #bebebe;
    font-family: "Noto Sans";
    font-weight: 400;
    font-size: 13px;
  }
  & > .headerArea > .activeArea {
    padding: 17px 0;
  }
  & > .headerArea > .activeArea > div {
    border: 3px solid #169ef9;
    width: 46px;
    height: 46px;
    border-radius: 50px;
  }
  & > .headerArea > .activeArea > .closeButton {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  /* 네브바 헤더 끝 */

  & > .wrap {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 20px;
  }
  & > .wrap > .flexArea {
    display: flex;
    flex-wrap: wrap;
    padding-top: 50px;
    justify-content: space-between;
  }
  & > .wrap > .flexArea .penalty {
    background: ${(props) => `url(${props.props.penaltyImg}) center no-repeat`};
    background-size: cover;
  }
  /* 유저상태영역 */
  & > .wrap > .flexArea > .statusArea {
    border: 2px solid #169ef9;
    border-radius: 15px;
    padding: 40px 45px;
    height: 130px;
    transition: 0.2s all ease-in;
  }
  & > .wrap > .flexArea > .statusArea > p {
    font-family: Cafe24Ssurround;
    font-size: 16px;
    font-weight: 700;
    color: #169ef9;
    text-align: center;
    line-height: 21px;
  }

  /* 버튼영역 */
  & > .wrap > .flexArea > .buttonArea {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    transition: 0.2s all ease-out;
  }
  & > .wrap > .flexArea > .buttonArea > .btnStyle {
    font-family: "Noto Sans";
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    color: #ffffff;
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 2px 20px;
    justify-content: space-between;
    cursor: pointer;
  }
  & > .wrap > .flexArea > .buttonArea > .btnStyle:nth-child(1),
  & > .wrap > .flexArea > .buttonArea > .btnStyle:nth-child(2) {
    width: calc(50% - 10px);
    background: #169ef9;
    border: 1px solid #169ef9;
    border-radius: 15px;
  }
  & > .wrap > .flexArea > .buttonArea > .btnStyle:last-child {
    width: 100%;
    background: #169ef9;
    border: 1px solid #169ef9;
    border-radius: 15px;
    margin-top: 20px;
  }
  /* 드롭다운 */
  & > .wrap > .dropDownArea {
    margin-top: 20px;
  }
  & > .wrap > .dropDownArea > .dropDownItem {
    background: #c6e8ff;
    border-radius: 15px;
    overflow: hidden;
    height: 60px;
    transition: 0.2s all ease-in;
  }
  & > .wrap > .dropDownArea > .dropDownItem > p {
    padding: 15px 30px;
    font-weight: 700;
    font-size: 29px;
    line-height: 34px;
    color: #169ef9;
    position: relative;
    height: 60px;
    cursor: pointer;
  }
  & > .wrap > .dropDownArea > .dropDownItem > .btnIcon::after {
    content: "";
    background: ${(props) => `url(${props.props.btnIcon}) center no-repeat`};
    background-size: 100%;
    width: 40px;
    height: 40px;
    display: block;
    position: absolute;
    top: 10px;
    transition: 0.1s ease-in;
    right: 26px;
    transform: rotate(0deg);
  }
  & > .wrap > .dropDownArea > .dropDownItem.active > p::after {
    transform: rotate(180deg);
  }
  & > .wrap > .dropDownArea > .dropDownItem ul {
    padding: 44px 30px;
    border-top: 1px solid;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  & > .wrap > .dropDownArea > .dropDownItem ul li > a {
    width: 100%;
    display: block;
    font-family: "Noto Sans";
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: #169ef9;
  }
`;

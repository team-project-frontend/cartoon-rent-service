import styled from "styled-components";

// 메인컴포넌트 속에 컴포넌트 모아둘곳
export const LayoutContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 100px;
  padding: 50px 20px;
  & .box {
    position: relative;
  }
  & .box::before {
    content: "";
    background: ${(props) => `url(${props.props}) center no-repeat`};
    width: 81px;
    height: 24px;
    display: inline-block;
    position: absolute;
    z-index: 2;
    transform: rotate(-45deg);
    left: -12px;
    top: 12px;
  }
  & .box > img {
    padding: 20px;
    position: relative;
    transform: rotate(4.03deg);
  }
  /* 테이프 기울기 */
  & .box:nth-child(1):before {
    content: "";
    transform: rotate(-45deg);
    left: -12px;
    top: 12px;
  }

  & .box:nth-child(2):before {
    content: "";
    transform: rotate(0deg);
    left: 70px;
    top: 10px;
  }
  & .box:nth-child(3)::after {
    content: "";
    background: ${(props) => `url(${props.props}) center no-repeat`};
    width: 81px;
    height: 24px;
    display: inline-block;
    position: absolute;
    z-index: 2;
    transform: rotate(-45deg);
    right: -12px;
    bottom: 50px;
  }
  & .box:nth-child(4):before {
    content: "";
    transform: rotate(0deg);
    left: 80px;
    top: 10px;
  }
  /* 이미지 기울기 */
  & .box:nth-child(2) > img {
    transform: rotate(0deg);
  }
  /* 이미지 기울기 */
  & .box:nth-child(3) > img {
    transform: rotate(0deg);
  }
  & .box:nth-child(4) > img {
    transform: rotate(0deg);
  }

  /*  */
  & > .navigation {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  & > .slide {
    margin-top: 45px;
    margin-bottom: 25px;
    border: 1px solid;
    height: 525px;
  }

  & .carousel-root .carousel.carousel-slider .control-arrow {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    border: 1px solid#FF8F50;
    background: #fff !important;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`;

// 메인컴포넌트의 favorite영역
export const FavoriteWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 100px;
`;

export const FavoriteTopArea = styled.div`
  background-color: #169ef9;
  width: 100%;
  height: 466px;
  border-radius: 150px 0px;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FavoriteList = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const FavoriteContentWrapper = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  max-width: 1440px;
  padding: 50px 20px;
  height: 860px;
  display: flex;
  justify-content: center;
`;

export const FavoriteContentSideArea = styled.div`
  flex-basis: 360px;
  display: flex;
  flex-direction: column;
`;

export const FavoriteContentSideTitle = styled.div`
  font-size: 40px;
  padding: 20px 0 0 20px;
  height: 262px;
`;

export const FavoriteContentSideButtonList = styled.div`
  display: flex;
  margin: 0 0 20px 20px;
  height: 100%;
  flex-wrap: wrap;
  align-content: space-between;
  & > button {
    width: 176px;
    height: 69px;
    border-radius: 15px;
    font-size: 29px;
  }
`;

export const FavoriteBottomArea = styled.div`
  background-color: #f2f9ff;
  height: 798px;
`;

export const FavoriteBottomContent = styled.div`
  height: 398px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & > h1 {
    font-size: 40px;
    font-weight: 700;
    font-style: normal;
  }
  & > h1 > select {
    color: #169ef9;
    border: none;
    outline: 0;
    background-color: #f2f9ff;
    font-size: 40px;
    font-weight: 700;
    text-align: right;
  }
`;

export const FavoriteBottomKeywordArea = styled.div`
  margin-top: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > button {
    border: 2px solid #169ef9;
    border-radius: 15px;
    width: 213px;
    height: 46px;
  }
  & > button > h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
  }
`;

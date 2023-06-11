import styled from "styled-components";
import sticker_1 from "../assets/images/sticker_1.png";
import sticker_3 from "../assets/images/sticker_3.png";
import sticker_4 from "../assets/images/sticker_4.png";
import sticker_5 from "../assets/images/sticker_5.png";
import tape45 from "../assets/images/tape_45.png";
import tapeBottom45 from "../assets/images/tape_bottom_45.png";
import searchButton from "../assets/images/search.png";
import next from "../assets/images/next.png";
import nextActive from "../assets/images/next_active.png";

export const BannerContainer = styled.div`
  overflow: hidden;
  font-family: "Cafe24Ssurround";
  width: 100%;
  height: 500px;
  position: relative;
  background: #fff;
  text-align: center;
  /* border-radius: 0px 0px 150px 0px; */
  border-radius: ${(props) =>
    `${props.props() ? "10px" : "0px 0px 150px 0px;"}`};
  & h1 {
    font-size: 36px;
  }
  & h3.sub {
    font-size: 18px;
    margin: 10px 0;
  }
  & .slideCon {
    height: 100%;
    background: #fff3e8;
    padding: 40px 0;
  }
  & .searchBar {
    position: absolute;
    bottom: 40px;
    background: #ffe7a9;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 900px;
    padding: 30px 20px;
    border-radius: 20px 0;
    width: calc(100% - 40px);
  }
  & .searchCon {
    display: flex;
    width: 100%;
    border-bottom: 3px solid #ff8f50;
    justify-content: space-between;
    align-items: center;
    max-width: 560px;
    margin: 0 auto;
  }
  & .searchCon input {
    border: none;
    background: #ffe7a9;
    padding: 20px;
    font-size: 30px;
    width: 100%;
    outline: none;
  }
  & .searchCon button {
    background: ${`url(${searchButton}) center no-repeat  !important`};
    width: 40px;
    height: 40px;
    outline: none;
    border: none;
    cursor: pointer;
    text-indent: -9999px;
  }
  & .category_btn {
    background: #ffe7a9;
    border: 2px solid #ff8f50;
    border-radius: 15px;
    padding: 9px 17px;
    font-size: 18px;
    font-weight: 700;
    color: #ff8f50;
  }

  & .categoryCon {
    display: flex;
    padding-top: 20px;
    gap: 20px;
    max-width: 560px;
    margin: 0 auto;
  }
`;
// 메인컴포넌트 속에 컴포넌트 모아둘곳
export const ReservationContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  margin-top: ${(props) => `${props.props() ? "10px" : "100px"}`};
  padding: 50px 20px;
  & .box {
    position: relative;
    width: ${(props) => `${props.props() ? "50%" : "25%"}`};
  }
  & .dim {
    width: 100%;
    height: 100%;
    display: block;
    background: #ddd;
  }
  &
    .slideClass
    .carousel-root
    .carousel.carousel-slider
    .control-arrow.control-prev {
    background: ${`url(${next}) center no-repeat #fff !important`};
    opacity: 1 !important;
    transform: rotate(-180deg);
  }
  & .slideClass .carousel-root .carousel.carousel-slider .control-arrow {
    background: ${`url(${next}) center no-repeat #fff !important`};
    opacity: 1 !important;
  }
  & .slideClass .carousel-root .carousel.carousel-slider .control-arrow:hover {
    background: ${`url(${nextActive}) center no-repeat #fff !important`};
    opacity: 1 !important;
    color: none !important;
  }
  .carousel .control-arrow:before,
  .carousel.carousel-slider .control-arrow:before {
    display: none !important;
  }
  & .box:nth-child(1) .imgBox,
  .box:nth-child(3) .imgBox {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    background: ${`url(${tape45}) center no-repeat`};
    background-size: 35% auto;
    top: 0;
    padding: 10%;
    background-position: 0% -2px;
  }
  & .box:nth-child(3) .imgBox2 {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    background: ${`url(${tapeBottom45}) center no-repeat`};
    background-size: 35% auto;
    top: 0;
    padding: 10%;
    background-position: 100% 100%;
  }
  & .box:nth-child(2) .imgBox {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    background: url(/cartoon-rent-service/src/assets/images/tape.png) center
      no-repeat;
    background-size: 35% auto;
    top: 0;
    padding: 10%;
    background-position: 42% 10%;
  }
  & .box:nth-child(4) .imgBox {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    background: url(/cartoon-rent-service/src/assets/images/tape.png) center
      no-repeat;
    background-size: 35% auto;
    top: 0;
    padding: 20px;
    background-position: 50% 10%;
  }

  & .box:nth-child(1) div img {
    padding: 20px;
    position: relative;
    transform: rotate(4.03deg);
  }
  & .box:nth-child(1)::after {
    content: "";
    display: ${(props) => `${props.props() ? `none` : `block`}`};
    height: 100px;
    background: ${`url(${sticker_1}) center no-repeat`};
    background-size: 25% auto;
    margin-top: 30px;
  }
  & .box:nth-child(1)::before {
    content: "";
    display: ${(props) => `${props.props() ? `block` : `none`}`};
    height: 50px;
    background: ${`url(${sticker_1}) center no-repeat`};
    background-size: 20% auto;
    background-position: 0;
  }
  & .box:nth-child(2)::before {
    content: "";
    display: block;
    height: ${(props) => `${props.props() ? `50px` : `100px`}`};

    background: ${(props) =>
      `${
        props.props()
          ? `url(${sticker_3}) center no-repeat`
          : `url(${sticker_5}) center no-repeat`
      }`};
    background-position: ${(props) => `${props.props() ? `80%` : ``}`};
    background-size: ${(props) => `${props.props() ? `15% auto` : `20% auto`}`};
  }
  & .box:nth-child(3)::after {
    content: "";
    display: ${(props) => `${props.props() ? `none` : `block`}`};
    height: 100px;
    background: ${`url(${sticker_4}) center no-repeat`};
    background-size: 70% auto;
    margin-top: 30px;
  }
  & .box:nth-child(3)::before {
    content: "";
    display: ${(props) => `${props.props() ? `block` : `none`}`};
    height: 50px;
    margin-top: 30px;
  }
  & .box:nth-child(4)::before {
    content: "";
    display: block;
    height: ${(props) => `${props.props() ? `50px` : `100px`}`};
    background: ${(props) =>
      `${
        props.props()
          ? `url(${sticker_4}) center no-repeat`
          : `url(${sticker_3}) center no-repeat`
      }`};
    background-size: 25% auto;
    margin-top: 30px;
    background-position: ${(props) => `${props.props() ? `40%` : ``}`};
    background-size: ${(props) => `${props.props() ? `30%` : ``}`};
  }

  & .box:nth-child(2) div:before {
    content: "";
    transform: rotate(0deg);
    left: 70px;
    top: 10px;
  }

  & .box:nth-child(4) div:before {
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
    height: ${(props) => `${props.props() ? `40px` : ` 60px`}`};
    width: ${(props) => `${props.props() ? `40px` : ` 60px`}`};
    border-radius: 50%;
    border: 1px solid#FF8F50;
    background: #fff !important;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: none !important;
  }
  & .carousel-root .carousel.carousel-slider .control-arrow.control-prev {
    top: ${(props) => `${props.props() ? `0` : ` 50%`}`};
    left: ${(props) => `${props.props() ? `calc(50% - 15%)` : ` 0%`}`};
  }
  & .carousel-root .carousel.carousel-slider .control-arrow.control-next {
    top: ${(props) => `${props.props() ? `0%` : ` 50%`}`}!important;
    right: ${(props) => `${props.props() ? `calc(50% - 15%)` : ` 0%`}`};
    transform: translateY(0);
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

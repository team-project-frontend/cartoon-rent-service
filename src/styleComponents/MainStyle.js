import styled from "styled-components";

// 메인컴포넌트 속에 컴포넌트 모아둘곳
export const ReservationContainer = styled.div`
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

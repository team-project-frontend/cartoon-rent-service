import styled from "styled-components";
import webtoon from "../../assets/images/webtoonImg.png";
export const CardWrapper = styled.div`
  width: 350px;
  height: 465px;
  border: 3px solid #ff8f50;
  border-radius: 15px;
  background: #ffffff;
  position: relative;
`;
export const Header = styled.div``;
// export const Image = styled.div`
//   display: flex;
//   // width: 280px;
//   // height: 186px;
//   //   background: red;
//   justify-content: space-between;
//   padding-top: 75px;
//   //   margin-right:10px;
//   //   margin-left:10px
//   background-image: url(${webtoon});
//   border-radius: 15px;
// `;
export const Image = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 110%;
  height: 217px;
  // object-fit: cover;
  // overflow: hidden;
  // width: 280px;
  // height: 186px;
  //   background: red;
  // justify-content: space-between;
  // padding-top: 75px;
  //   margin-right:10px;
  //   margin-left:10px
  background-image: url(${webtoon});
  background-posistion: center;
  background-size: cover;
  border-radius: 15px;
`;

export const RankingText = styled.span`
  font-family: "Cafe24 Ssurround";
  position: absolute;
  top: 80%;
  left: 10px;
  font-style: normal;
  font-weight: 700;
  font-size: 96px;
  line-height: 113px;
  color: #ff8f50;
  transform: translateY(-50%);
  // margin-left: 10px;
  // font-style: normal;
  // font-weight: 700;
  // font-size: 96px;
  // line-height: 113px;
  // color: #169ef9;
`;

export const LikeBtn = styled.button`
  // width: 100px;
  // height: 100px;
  // position: relative;
  // transform: rotate(45deg);
  // background-color: transparent;
  // border: none;
  // border-top: 3px solid #ff8f50;
  // border-left: 3px solid #ff8f50;
  width: 39px;
  height: 36px;
  background: #ff8f50;
  border: 3px solid #ff8f50;
  position: absolute;
  bottom: 15px;
  right: 10px;
`;
export const LikeText = styled.span`
  font-family: "Cafe24 Ssurround";
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;

  color: #ffffff;
`;
export const ContentInner = styled.div`
  width: 100%;
  //   margin-right: 20px;
  //   margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;
export const Title = styled.span`
  font-family: "Cafe24 Ssurround";
  margin-top: 214px;
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 34px;
  text-align: center;
  color: #555555;
`;

export const Writter = styled.span`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  /* identical to box height */

  color: #ff8f50;
`;
export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
export const Inner = styled.div`
  display: flex;
  justify-content: space-between;

  //   align-items: center;
`;
export const Reviewer = styled.span`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  padding-left: 40px;
  /* identical to box height */

  color: #222222;
`;
export const ReviewCount = styled.span`
  padding-right: 40px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  /* identical to box height */

  color: #000000;
`;

export const Review = styled.span`
  padding-left: 40px;
  padding-right: 40px;
  margin-top: 10px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;

  /* sub txt */

  color: #555555;
`;

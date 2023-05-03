import styled from "styled-components";

// 메인컴포넌트 속에 컴포넌트 모아둘곳
export const ReservationContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 100px;
  padding: 50px 20px;
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
`;

// 메인컴포넌트의 favorite영역
export const FavoriteWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 100px;
`;

export const FavoriteTopArea = styled.div`
  background-color: #169EF9;
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
  background-color: #F2F9FF;
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
    font-style: normal
  }
  & > h1 > select {
    color: #169EF9;
    border: none;
    outline: 0;
    background-color: #F2F9FF;
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
    border: 2px solid #169EF9;
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

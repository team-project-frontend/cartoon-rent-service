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

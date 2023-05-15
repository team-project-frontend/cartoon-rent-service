import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  //   max-width: 1440px;
  margin: 0 auto;
  padding: 50px 20px;
  background-color: #fff3e8;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 20px;
`;
export const InnerContainer = styled.div`
  /* 내부 컨테이너 스타일을 여기에 적용하세요 */
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding-left: 20rem;
  padding-right: 20rem;
`;
export const LeftInner = styled.div`
  //   float: left;

  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   flex-direction: column;
`;

export const RightInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

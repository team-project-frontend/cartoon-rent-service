import React from "react";
import { ReservationContainer } from "../../styleComponents/MainStyle";
import paper from "../../assets/images/paper.svg";

const Reservation = () => {
  const props = {
    paper,
  };
  return (
    <>
      <ReservationContainer>
        <h1 className="sectionTitle">내 예약 현황</h1>
        <div className="navigation">
          <p className="subTitle">
            <span>한 눈에 보기</span>
          </p>
          <select>
            <option value="1">전체보기</option>
            <option value="2">최근어쩌고</option>
          </select>
        </div>
        <div className="slide"></div>
      </ReservationContainer>
      <div className="paperBg"></div>
    </>
  );
};

export default Reservation;

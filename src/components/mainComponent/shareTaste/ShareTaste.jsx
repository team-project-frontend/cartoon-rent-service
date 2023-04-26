import React from "react";
import { ReservationContainer } from "../../../styleComponents/MainStyle";
import Navigation from "./Nav"
import CardList from "./CardList";
import {Title, SubTitle,Text} from "../../../styleComponents/shareTaste/Typography"
const ShareTaste = () => {
//   const props = {
//     paper,
//   };
  return (
    <>
      <ReservationContainer>
        <h1 className="sectionTitle">취향 공유하기</h1>
        <div className="navigation">
          <p className="subTitle">
            <span>👀한 눈에 보기</span>
          </p>
          
         <Navigation/>
        </div>
      
        <div className="slide">
    <CardList/>
        </div>
      </ReservationContainer>
     
    </>
  );
};

export default ShareTaste;

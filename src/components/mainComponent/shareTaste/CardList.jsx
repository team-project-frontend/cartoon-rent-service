import React from "react";
import { ReservationContainer } from "../../../styleComponents/MainStyle";
import Card from "./Card";
import {Wrapper} from "../../../styleComponents/shareTaste/CardListStyle"; 
const CardList = () => {
//   const props = {
//     paper,
//   };
  return (
    <>
   
   <Wrapper>
    <Card/>
    <Card/>
    <Card/>
   </Wrapper>
     
    </>
  );
};

export default CardList;

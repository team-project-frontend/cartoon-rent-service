import React from "react";
import { Container,Header,InnerContainer,LeftInner,RightInner } from "../../../styleComponents/myFavoriteComics/Layout"
import {Title,SubTitle,Text} from "../../../styleComponents/myFavoriteComics/Typography"
import CardList from "./CardList"
const MyFavoriteComics = () => {
  // const props = {
  //   paper,
  // };
  return (
 
      <Container>
        <Header>
          <Title>내 관심 만화책</Title>
          <SubTitle>👀한 눈에 보기</SubTitle>
        </Header>
        <InnerContainer>
        <LeftInner>
          <CardList/>
        </LeftInner>
        <RightInner>
          
        </RightInner>
        </InnerContainer>
       
      </Container>
  
  );
};

export default MyFavoriteComics;

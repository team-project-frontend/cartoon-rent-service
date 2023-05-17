import React from "react";
import { ReservationContainer } from "../../../styleComponents/MainStyle";
import Navigation from "./Nav"
import {CardWrapper,Header,ContentInner,Image,RankingText,LikeBtn,LikeText,Content,Title,Writter,Footer,Reviewer,ReviewCount,Review, Inner} from "../../../styleComponents/shareTaste/CardStyle"; 
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Card = () => {
//   const props = {
//     paper,
//   };
  return (
    <>
    <CardWrapper>
<Header>
    <Image>
        
        <RankingText>1</RankingText>

            <LikeBtn>
{/* <FavoriteBorderIcon> */}
                <LikeText>110</LikeText>
                {/* </FavoriteBorderIcon> */}
            </LikeBtn>
       
        
    </Image>
</Header>
<ContentInner>
<Content>
    <Title>기다린 것에 비해서...</Title>
    <Writter>[도서관의 주인]</Writter>
</Content>
<Footer>
    <Inner>
    <Reviewer>
        HEeeeeee
    </Reviewer>
    <ReviewCount>댓글(3)</ReviewCount>
    </Inner>
    <Review>내용이 뭔소린지 모르겠음..... 근데 너무너무 재미있음....왜 이렇게 많은지는 잘 모르겠음....</Review>
</Footer>
</ContentInner>
    </CardWrapper>
   
     
    </>
  );
};

export default Card;

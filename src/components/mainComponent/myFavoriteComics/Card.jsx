import React from "react";
import { CardContainer,Header,LeftContent,Genre,Title,LikeBtn,Middle,Score,Review,Footer,More,Arrow} from "../../../styleComponents/myFavoriteComics/Card"
import {SubTitle,Text} from "../../../styleComponents/myFavoriteComics/Typography"
import { orange } from '@mui/material/colors';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import TrendingFlatOutlinedIcon from '@mui/icons-material/TrendingFlatOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';const Card = () => {

    // const props = {
  //   paper,
  // };
  return (
 <CardContainer>
    <Header>
        <LeftContent>
            <Genre>소년 / 액션</Genre>
            <Title>니모를 찾아서</Title>
        </LeftContent>
        {/* <Genre></Genre>
        <Title></Title> */}
        <LikeBtn><FavoriteIcon fontSize='large' sx={{ color: orange[600] }}/></LikeBtn>
    </Header>
    <Middle>
        <Score>
        <EditTwoToneIcon/>
        <EditTwoToneIcon/>
        <EditTwoToneIcon/>
        <EditTwoToneIcon/>
        <EditTwoToneIcon/>
        </Score>
        <Text>아직 읽지 않은 책입니다 :-o</Text>  
          </Middle>
    <Footer>
    <More>더보기</More> 
        <Arrow><TrendingFlatOutlinedIcon  sx={{ color: orange[600] }}/></Arrow>
    </Footer>
 </CardContainer>
      
  );
};

export default Card;

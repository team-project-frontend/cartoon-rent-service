import React from "react";
import { useNavigate } from "react-router-dom";
import Counter from "./Counter";
import API from "../utiles/api";
import useInput from "../hooks/useInput";
import { error } from "../utiles/toast";
import userState from "../store/userState";
import {
  useRecoilState, // 랜더링 필요할시 : atom 안에 state 구독 후 변경시 재랜더 (버튼상호작용시 유용)
  useSetRecoilState, // 렌더링 불필요시 : getter & setter 방식 오브젝트 프로퍼티 get , set 후 값만 수정 (인풋같은거 사용)
  useResetRecoilState,
} from "recoil";
import axios from 'axios'
import PersonIcon from '@mui/icons-material/Person';
import CallIcon from '@mui/icons-material/Call';
import { orange } from '@mui/material/colors';

import {LayoutContainer,Box} from "../styleComponents/findInfo/Layout";
import {Title,InputLabel,BtnText} from "../styleComponents/findInfo/Typography";
import {InputContainer,ButtonContainer} from "../styleComponents/findInfo/Contents";
import {Input} from "../styleComponents/findInfo/Input";
import {Button} from "../styleComponents/findInfo/Button";
const FindInfo = () => {
  const findIDHandler = useSetRecoilState(userState); // 값만 변경 시키기
  const resetState = useResetRecoilState(userState); // 디폴트값으로 값 변경
  //아이디를 알려주기 위한 정보가 부족(핸드폰번호?라도 추가)
  const [value, changehandler] = useInput({
    name: "",
    phone:"",
   
  });

  const navigate = useNavigate();
  const isFindPassword = () => navigate("/findPassword");
  const isFindID = async () => {
    const res = await API.post("https://test1-xtcj6il6hq-du.a.run.app/auth/find_id",value);
    console.log('res.data',res.data)
    const res1 = await axios.post("https://test1-xtcj6il6hq-du.a.run.app/auth/find_id",value);
    console.log('res1.data',res1.data)
    // try {
    //   // const emailTest = res.data.filter(
    //   //   (current) => current.email === value.email
    //   // );
    //   // if (emailTest.length === 0) return error("아이디 틀려서 로그인못함");
    //   findIDHandler((state) => ({ ...state, isLogin: true, name: "ddd" }));
    //   //더비양식입니다
    // } catch (err) {
    //   console.log(err.response.data);
    // } finally {
    //   console.log(res.data);
    // }
  };
// console.log(value)
  return (
    <LayoutContainer>
        <Box>
           
      <Title>아이디 찾기 페이지</Title>
      <InputContainer>
      <PersonIcon sx={{ color: orange[600] }}/>
      <InputLabel>이름</InputLabel>
      <Input
        type="text"
        onChange={(e) => {
          changehandler(e, "name");
        }}
      />
      <br />
      <CallIcon sx={{ color: orange[600] }}/>
      <InputLabel>전화번호</InputLabel>
      <Input
        type="text"
        onChange={(e) => {
          changehandler(e, "phone");
        }}
      />
       <br />
   
<ButtonContainer>
<Button onClick={isFindPassword}><BtnText>비밀번호 찾기</BtnText></Button>

      <Button onClick={isFindID}><BtnText>아이디 찾기</BtnText></Button>
      
      </ButtonContainer>
      </InputContainer>
     </Box>

      </LayoutContainer>
  );
};

export default FindInfo;

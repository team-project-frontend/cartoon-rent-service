import React, { useEffect } from "react";
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
  useRecoilValue
} from "recoil";
import { nameState, phoneState, isMatchState } from "../store/findState";

import axios from 'axios';

const FindID = () => {
  const [name, setName] = useRecoilState(nameState);
  const [phone, setPhone] = useRecoilState(phoneState);
  const [isMatch, setIsMatch] = useRecoilState(isMatchState);

  const findIDHandler = useSetRecoilState(userState); // 값만 변경 시키기
  const resetState = useResetRecoilState(userState); // 디폴트값으로 값 변경
  //아이디를 알려주기 위한 정보가 부족(핸드폰번호?라도 추가)
  // const [value, changehandler] = useInput({
  //   name: "",
  //   phone:"",

  // });
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const navigate = useNavigate();
  const isFindPassword = () => navigate("/findPassword");
  const isFindID = async () => {
    const res = await API.post("https://test1-xtcj6il6hq-du.a.run.app/auth/find_id", value);
    console.log('res.data', res.data)
    const res1 = await axios.post("https://test1-xtcj6il6hq-du.a.run.app/auth/find_id", value);
    console.log('res1.data', res1.data)
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
  // useEffect(() => {
  //   API.post("https://test1-xtcj6il6hq-du.a.run.app/auth/find_id",{name,phone}).then((res) => {
  //     console.log('res',res.data)
  //   });
  // },[])
  console.log('isMatch', isMatch)
  return (
    <>
      <div>아이디 찾기 페이지</div>
      {!isMatch ? (<>
        <span>이름 : </span>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            changehandler(e, "name");
          }}
        />
        <br />
        <span>전화번호 : </span>
        <input
          type="text"
          value={phone}
          onChange={(e) => {
            changehandler(e, "phone");
          }}
        />
        <br />

        <br />
        <button onClick={isFindID}>아이디 찾기</button>
        <p style={{ fontSize: "10px", cursor: "pointer" }} onClick={isFindPassword}>
          비번 찾으러 가기
      </p>
      </>) : (<></>)}

    </>
  );
};

export default FindID;

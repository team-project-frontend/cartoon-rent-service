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

const FindID = () => {
  const loginHandler = useSetRecoilState(userState); // 값만 변경 시키기
  const resetState = useResetRecoilState(userState); // 디폴트값으로 값 변경
  //아이디를 알려주기 위한 정보가 부족(핸드폰번호?라도 추가)
  const [value, changehandler] = useInput({
    name: "",
    // phone:""
  });

  const navigate = useNavigate();
  const isJoin = () => navigate("/join");
  const isLogin = async () => {
    const res = await API.get("/users");
    try {
      const emailTest = res.data.filter(
        (current) => current.email === value.email
      );
      if (emailTest.length === 0) return error("아이디 틀려서 로그인못함");
      loginHandler((state) => ({ ...state, isLogin: true, name: "ddd" }));
      //더비양식입니다
    } catch (err) {
      console.log(err.response.data);
    } finally {
      console.log(res.data);
    }
  };

  return (
    <>
      <div>아이디 찾기 페이지</div>
      <input
        type="text"
        onChange={(e) => {
          changehandler(e, "name");
        }}
      />
      <br />
      {/* <input
        type="password"
        onChange={(e) => {
          changehandler(e, "password");
        }}
      />
      <br /> */}

      <button onClick={isLogin}>정보 확인</button>
      <p style={{ fontSize: "10px", cursor: "pointer" }} onClick={isJoin}>
        가입 페이지
      </p>
    </>
  );
};

export default FindID;

import React from "react";
import {
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
  useResetRecoilState,
} from "recoil";
import countState from "../store/countState";

const Counter = () => {
  const [counter, setCounter] = useRecoilState(countState); // useRecoilState을 사용하여 다른 파일에 있는 아톰을 읽을 수 있다.
  const currentCount = useRecoilValue(countState); // 읽기 전용!
  const counterHandler = useSetRecoilState(countState); // 값만 변경 시키기
  const resetCounter = useResetRecoilState(countState); // 디폴트값으로 값 변경

  const plusCount = () => counterHandler((state) => state + 1); //state 는 이전값 초기값은 initialValue
  const minusCount = () => counterHandler((state) => state - 1);

  return (
    <div>
      {counter}
      {currentCount}
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        + ..
      </button>
      <button onClick={plusCount}>+</button>
      <button onClick={minusCount}>-</button>
      <button onClick={resetCounter}>리셋</button>
    </div>
  );
};

export default Counter;

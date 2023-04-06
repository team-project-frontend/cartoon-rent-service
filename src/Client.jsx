import React, { useState, useCallback, useEffect, useRef } from "react";
import { Container } from "./styleComponents/style";
import { error, success, Toast } from "../utiis/toast";

function Client() {
  const onClick = (type) => {
    if (type === "success") return success("성공메시지");
    error("error");
  };

  return (
    <>
      <Container>
        첫페이지
        <button
          onClick={() => {
            onClick("success");
          }}
        >
          성공
        </button>
        <button onClick={onClick}>실패</button>
        {Toast()}
      </Container>
    </>
  );
}
export default Client;

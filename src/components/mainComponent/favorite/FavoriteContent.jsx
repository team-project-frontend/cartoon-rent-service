import React from "react";
import Card from "./Card";

export default function FavoriteContent() {
  return (
    <div
      id="content-area"
      style={{
        backgroundColor: "yellow",
        flexBasis: "840px",
      }}
    >
      <Card no="1" imgSrc="src/assets/images/귀칼.jpg" />
      <Card no="2" imgSrc="src/assets/images/슬램덩크.jpg" />
      <Card no="3" imgSrc="src/assets/images/원펀맨.jpg" />
      <Card no="4" imgSrc="src/assets/images/원피스.jpg" />
      <Card no="5" imgSrc="src/assets/images/치인트.jpg" />
    </div>
  );
}

import { fontWeight } from "@mui/system";
import React from "react";

export default function Card({ no, imgSrc }) {
  return (
    <div
      style={{
        backgroundColor: "#F2F9FF",
        margin: no == 1 ? "0" : "0 15px",
        width: no == 1 ? "401px" : "189.5px",
        height: no == 1 ? "620px" : "300px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        id="number"
        style={{
          width: "35px",
          height: "35px",
          left: "20px",
          top: "20.22px",
          backgroundColor: "#FFFFFF",
          boxShadow: "inset 3px 4px 4px #EBEBEB",
          borderRadius: "150px",
          color: "#169EF9",
          fontSize: "18px",
          fontWeight: "700",
          lineHeight: "35px",
        }}
      >
        {no}
      </div>
      <img
        src={imgSrc}
        style={{
          width: no == 1 ? "200px" : "100px",
          height: no == 1 ? "300px" : "150px",
        }}
      />
    </div>
  );
}

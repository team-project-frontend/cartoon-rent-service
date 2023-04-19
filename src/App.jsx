import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Client from "./Client";
import "./index.css";
import Error from "./components/Error";
import Login from "./pages/Login";
import Join from "./pages/Join";
import { Toast } from "./utiles/toast";
import { useRecoilValue } from "recoil";
import userState from "./store/userState";

function App() {
  const globalValue = useRecoilValue(userState);
  useEffect(() => {
    console.log(globalValue, "globalValue");
  }, [globalValue]);
  return (
    <>
      {!globalValue.isLogin ? (
        <>
          <Routes>
            {/* <Route path="/" element={<Login />} /> */}
            <Route path="/*" element={<Client />} />
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<Join />} />
          </Routes>
          <Toast />
        </>
      ) : (
        // <Client />
        <Routes>
          <Route path="/*" element={<Client />} />
        </Routes>
      )}
    </>
  );
}

export default App;

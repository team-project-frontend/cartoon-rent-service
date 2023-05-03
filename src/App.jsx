import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Client from "./Client";
import "./index.css";
import Error from "./components/Error";
import Login from "./pages/Login";
import Join from "./pages/Join";
import SignUp from "./pages/SignUp";
import { Toast } from "./utiles/toast";
import { useRecoilValue } from "recoil";
import userState from "./store/userState";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const globalValue = useRecoilValue(userState);
  useEffect(() => {
    console.log(globalValue, "globalValue");
    console.log(globalValue.isLogin);
  }, [globalValue]);
  return (
    <>
      {!globalValue.isLogin ? (
        <>
          <Routes>
            {/* <Route path="/" element={<Login />} /> */}
            <Route path="/" element={<FavoriteContents />}>
              <Route path="/" element={<FavoriteContent />} />
              <Route path="/bybookstore" element={<FavoriteContent />} />
              <Route path="/byauthor" element={<FavoriteContent />} />
            </Route>
            <Route path="/*" element={<Error />} />
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<Join />} />
            <Route path="/signup" element={<SignUp />} />
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

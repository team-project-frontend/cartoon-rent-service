import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Client from "./Client";
import "./index.css";
import Error from "./components/Error";
import Login from "./pages/Login";
import Join from "./pages/Join";
import Test from "./pages/Test";
import Main from "./pages/Main";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      {!isLogin ? (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/*" element={<Error />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
        </Routes>
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

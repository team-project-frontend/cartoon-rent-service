import React, { useCallback, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";

const Contents = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const onClick = useCallback(() => {
    setMenuToggle((state) => !state);
    console.log(menuToggle);
  }, [menuToggle]);

  return (
    <>
      {menuToggle ? (
        <Nav onClick={onClick} />
      ) : (
        <>
          <Header onClick={onClick} />
          <Outlet />
        </>
      )}

      {/* <Footer /> */}
    </>
  );
};

export default Contents;

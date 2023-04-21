import React from "react";
import { Link } from "react-router-dom";

import { useRecoilValue } from "recoil";
import userState from "../store/userState";
import { Media768 } from "../utiles/media";

const Header = () => {
  const globalValue = useRecoilValue(userState);

  return <div className="header"></div>;
};

export default Header;

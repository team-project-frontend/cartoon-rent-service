import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navigate = () => {
  const useNavigation = useNavigate();
  const navigate = (props) => {
    useNavigation(props);
  };
  return navigate;
};
export default Navigate;

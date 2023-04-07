import { useNavigate } from "react-router-dom";
//네비게이트 훅입니다
const Navigate = () => {
  const useNavigation = useNavigate();
  const navigate = (props) => {
    useNavigation(props);
  };
  return navigate;
};
export default Navigate;

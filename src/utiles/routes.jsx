import loadable from "@loadable/component";
import FindInfo from "../pages/FindInfo";
import FindID from '../pages/FindID';
import FindPassword from '../pages/FindPassword';

const Main = loadable(() => import("../pages/Main"), {
  fallback: <div>'로딩중..'</div>,
});
const Test = loadable(() => import("../pages/Test"), {
  fallback: <div>'로딩중.............'</div>, // 여기에 로딩 컴포넌트 넣으시면됩니다
});


const routes = [
  { id: 0, path: "/", title: "MainPage", item: <Main /> },
  { id: 1, path: "/test", title: "MainPage", item: <Test /> },
  { id: 2, path: "/findInfo", title: "FindInfo", item: <FindInfo /> },
  { id: 3, path: "/findId", title: "FindId", item: <FindID /> },
  { id: 4, path: "/findPassword", title: "FindPassword", item: <FindPassword /> },
];

export default routes;

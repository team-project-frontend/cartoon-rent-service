import loadable from "@loadable/component";

const Main = loadable(() => import("../pages/Main"), {
  fallback: <div>'로딩중..'</div>,
});
const Test = loadable(() => import("../pages/Test"), {
  fallback: <div>'로딩중.............'</div>, // 여기에 로딩 컴포넌트 넣으시면됩니다
});
const FIndID = loadable(() => import("../pages/FindID"), {
  fallback: <div>'로딩중.............'</div>, // 여기에 로딩 컴포넌트 넣으시면됩니다
});
const FindPassword = loadable(() => import("../pages/FindPassword"), {
  fallback: <div>'로딩중.............'</div>, // 여기에 로딩 컴포넌트 넣으시면됩니다
});

const routes = [
  { id: 0, path: "/", title: "MainPage", item: <Main /> },
  { id: 1, path: "/test", title: "MainPage", item: <Test /> },
  { id: 2, path: "/findID", title: "FindID", item: <FIndID /> },
  { id: 3, path: "/findPassword", title: "FindID", item: <FIndPaddword /> },


];

export default routes;
